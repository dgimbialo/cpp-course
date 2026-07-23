/* ============================================================
   Клієнт ліцензійного API (онлайн-режим).
   Використовується index.html, коли задано window.API_BASE.
   ============================================================ */
window.CourseAPI = (function () {
  const base = () => (window.API_BASE || '').replace(/\/+$/, '');
  let token = null;

  async function sha256hex(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  // легкий fingerprint браузера (canvas + параметри середовища)
  function fingerprint() {
    let canvas = '';
    try {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = "14px 'Arial'";
      ctx.fillStyle = '#f60'; ctx.fillRect(0, 0, 100, 20);
      ctx.fillStyle = '#069'; ctx.fillText('cpp-course-fp', 2, 2);
      canvas = c.toDataURL();
    } catch (e) {}
    return [
      navigator.userAgent, navigator.language,
      (navigator.languages || []).join(','),
      screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency || 0,
      navigator.deviceMemory || 0,
      navigator.platform || '', canvas
    ].join('|');
  }

  // персистентний токен пристрою (щоб fingerprint був стабільніший)
  function deviceToken() {
    let t = null;
    try { t = localStorage.getItem('cppDeviceToken'); } catch (e) {}
    if (!t) {
      t = [...crypto.getRandomValues(new Uint8Array(16))]
        .map(x => x.toString(16).padStart(2, '0')).join('');
      try { localStorage.setItem('cppDeviceToken', t); } catch (e) {}
    }
    return t;
  }

  async function deviceId() {
    return (await sha256hex(fingerprint() + '|' + deviceToken())).slice(0, 32);
  }

  async function req(path, opts) {
    opts = opts || {};
    const headers = Object.assign({}, opts.headers || {});
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const r = await fetch(base() + path, Object.assign({}, opts, { headers }));
    const text = await r.text();
    let data; try { data = JSON.parse(text); } catch (e) { data = { raw: text }; }
    if (!r.ok) {
      const err = new Error(data.error || ('http_' + r.status));
      err.status = r.status; err.data = data; throw err;
    }
    return data;
  }

  return {
    setToken: t => { token = t; },
    hasToken: () => !!token,
    deviceId,
    async activate(key, email) {
      const did = await deviceId();
      const j = await req('/activate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: key.trim(), email: email.trim(), deviceId: did })
      });
      token = j.token;
      return j; // {token, level, email}
    },
    curriculum: () => req('/curriculum'),
    lesson: id => req('/lesson/' + encodeURIComponent(id)),
    glossary: () => req('/glossary'),
    heartbeat: () => req('/heartbeat', { method: 'POST' }),
    release: () => req('/release', { method: 'POST' })
  };
})();
