/* =====================================================================
   store.js — сховище користувацьких даних курсу
   localStorage['cppCourseV1']
   Нове проти книги: s.level — обраний рівень (junior|middle|senior)
   ===================================================================== */
const CourseStore = (function(){
  const KEY = 'cppCourseV1';
  const LEVELS = ['junior','middle','senior'];
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KEY)); } catch(e) { s = null; }
  if (!s || s.v !== 1) {
    s = { v:1, level:null, doneLessons:[], doneProjects:[], notes:[],
          quiz:{}, lastLesson:null, readLog:{}, settings:{} };
  }
  const save  = () => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch(e){} };
  const today = () => new Date().toISOString().slice(0,10);

  return {
    get state(){ return s; },
    save: save,
    LEVELS: LEVELS,

    /* ---- рівень користувача ---- */
    getLevel(){ return s.level; },
    setLevel(l){ if(LEVELS.indexOf(l)>=0){ s.level = l; save(); } },
    levelIndex(l){ return LEVELS.indexOf(l||'junior'); },
    /* чи видимий елемент рівня `need` при обраному рівні */
    visible(need){
      if(!need) return true;
      return this.levelIndex(need) <= this.levelIndex(s.level||'junior');
    },

    /* ---- пройдені уроки ---- */
    isDone: id => s.doneLessons.indexOf(id) >= 0,
    setDone(id, val){
      const i = s.doneLessons.indexOf(id);
      if (val && i < 0){ s.doneLessons.push(id); s.readLog[today()] = (s.readLog[today()]||0)+1; }
      if (!val && i >= 0) s.doneLessons.splice(i,1);
      save();
    },
    toggleDone(id){ this.setDone(id, !this.isDone(id)); return this.isDone(id); },

    /* ---- проєкти ---- */
    isProjDone: name => s.doneProjects.indexOf(name) >= 0,
    toggleProj(name){
      const i = s.doneProjects.indexOf(name);
      if(i<0) s.doneProjects.push(name); else s.doneProjects.splice(i,1);
      save(); return this.isProjDone(name);
    },

    /* ---- статистика ---- */
    statToday(){ return s.readLog[today()] || 0; },
    statWeek(){
      let n = 0;
      for (let i = 0; i < 7; i++){
        const d = new Date(Date.now() - i*864e5).toISOString().slice(0,10);
        n += s.readLog[d] || 0;
      }
      return n;
    },
    /* серія днів навчання поспіль (враховує сьогодні або вчора як старт) */
    streak(){
      const log = s.readLog || {};
      let n = 0;
      const start = (log[today()] ? 0 : 1);      // якщо сьогодні ще не вчився — рахуємо від учора
      for (let i = start; ; i++){
        const d = new Date(Date.now() - i*864e5).toISOString().slice(0,10);
        if (log[d]) n++; else break;
      }
      return n;
    },

    /* ---- тести ---- */
    recordQuiz(id, correct, total){
      const q = s.quiz[id] || { best:0, total:total, attempts:0 };
      q.attempts++; q.total = total;
      if (correct > q.best) q.best = correct;
      q.last = new Date().toISOString();
      s.quiz[id] = q; save();
    },
    getQuiz(id){ return s.quiz[id] || null; },

    /* ---- нотатки (kind: 'note' | 'mark' | 'bm') ---- */
    addNote(n){
      n.id = 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
      n.created = new Date().toISOString();
      s.notes.push(n); save(); return n;
    },
    updateNote(id, text){ const n = s.notes.find(x=>x.id===id); if(n){ n.text = text; save(); } },
    delNote(id){ s.notes = s.notes.filter(x=>x.id!==id); save(); },
    notesFor(secId){ return s.notes.filter(n=>n.secId===secId); },
    allNotes(){ return s.notes.slice(); },

    /* ---- експорт/імпорт ---- */
    exportJSON(){ return JSON.stringify(s, null, 1); },
    importJSON(json){
      const d = JSON.parse(json);
      if (!d || d.v !== 1) throw new Error('невірний формат course-userdata');
      s = d; save(); return true;
    },

    /* ---- замітки для редагування тексту ---- */
    editNotes(){ return (s.edits || (s.edits = [])).slice(); },
    editNotesFor(lessonId){ return (s.edits || []).filter(n => n.lessonId === lessonId); },
    addEdit(n){
      if(!s.edits) s.edits = [];
      n.id   = 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2,5);
      n.date = new Date().toISOString();
      n.status = 'open';
      s.edits.push(n); save(); return n;
    },
    updateEdit(id, fields){
      const n = (s.edits || []).find(x => x.id === id);
      if(n){ Object.assign(n, fields); save(); }
      return n;
    },
    delEdit(id){ s.edits = (s.edits || []).filter(x => x.id !== id); save(); },
    /* злиття з edit-notes.md: беремо ті, яких ще немає локально */
    mergeEdits(list){
      if(!s.edits) s.edits = [];
      const known = new Set(s.edits.map(x => x.id));
      let added = 0;
      (list || []).forEach(n => { if(!known.has(n.id)){ s.edits.push(n); added++; } });
      if(added) save();
      return added;
    },

    setLastLesson(id){ s.lastLesson = id; save(); },
    getLastLesson(){ return s.lastLesson; }
  };
})();
window.CourseStore = CourseStore;
