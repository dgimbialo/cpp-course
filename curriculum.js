window.COURSE = {
  "title": "Інтерактивний курс C++",
  "subtitle": "Книга «Об'єктні технології C++11» Д. Д. Пелешка і В. М. Теслюка надихнула до створення цього курсу.",
  "version": 2,
  "levels": [
    {
      "id": "junior",
      "label": "Junior",
      "desc": "База: синтаксис, ООП, STL. Мета — писати робочий зрозумілий код і пройти співбесіду на Trainee/Junior."
    },
    {
      "id": "middle",
      "label": "Middle",
      "desc": "Механіка: як воно працює насправді — пам'ять, копіювання/переміщення, час життя, складність, багатопотоковість."
    },
    {
      "id": "senior",
      "label": "Senior",
      "desc": "Межі: UB, ABI, модель пам'яті, оптимізації компілятора, проєктування й компроміси."
    }
  ],
  "links": {
    "vsSolution": "D:\\My_project\\_learn_C++\\LearnCpp.sln",
    "projectRoot": "D:\\My_project\\_learn_C++",
    "cppref": "https://en.cppreference.com/w/cpp"
  },
  "origins": {
    "gl": {
      "label": "Основа курсу",
      "desc": "Базовий матеріал курсу"
    },
    "prometheus": {
      "label": "Основа курсу",
      "desc": "Базовий матеріал курсу"
    },
    "book": {
      "label": "Книжка",
      "desc": "«Об'єктні технології C++11», Пелешко/Теслюк — довідковий матеріал"
    },
    "added": {
      "label": "Доповнення",
      "desc": "Тема, яку я вважаю необхідною, з опорою на cppreference"
    }
  },
  "decks": {
    "fund": {
      "file": "0-Fundamentals.pdf",
      "dir": "0-Fundamentals",
      "pages": 45,
      "title": "Fundamentals"
    },
    "vars": {
      "file": "1-Variables.pdf",
      "dir": "1-Variables",
      "pages": 71,
      "title": "Variables"
    },
    "ns": {
      "file": "2-Namespace.pdf",
      "dir": "2-Namespace",
      "pages": 26,
      "title": "Namespace"
    },
    "comp": {
      "file": "lek_2_складені типи.ppt",
      "dir": "lek_2_складені_типи",
      "pages": 33,
      "title": "Складені типи",
      "slidePrefix": "Slide",
      "ext": "PNG"
    },
    "func": {
      "file": "4-Functions.pdf",
      "dir": "4-Functions",
      "pages": 109,
      "title": "Functions"
    },
    "cls": {
      "file": "5-Classes.pdf",
      "dir": "5-Classes",
      "pages": 125,
      "title": "Classes"
    },
    "inh": {
      "file": "6-Inheritance.pdf",
      "dir": "6-Inheritance",
      "pages": 66,
      "title": "Inheritance"
    },
    "poly": {
      "file": "7-Polymorphism.pdf",
      "dir": "7-Polymorphism",
      "pages": 72,
      "title": "Polymorphism"
    },
    "oper": {
      "file": "8-Operators.pdf",
      "dir": "8-Operators",
      "pages": 68,
      "title": "Operators"
    },
    "rtti": {
      "file": "13-RTTI.pdf",
      "dir": "13-RTTI",
      "pages": 28,
      "title": "RTTI"
    },
    "exc": {
      "file": "9-Exceptions.pdf",
      "dir": "9-Exceptions",
      "pages": 86,
      "title": "Exceptions"
    },
    "tmpl": {
      "file": "10-Templates.pdf",
      "dir": "10-Templates",
      "pages": 124,
      "title": "Templates"
    },
    "stl": {
      "file": "12-STL.pdf",
      "dir": "12-STL",
      "pages": 103,
      "title": "STL"
    },
    "io": {
      "file": "11-IO.pdf",
      "dir": "11-IO",
      "pages": 72,
      "title": "IO"
    },
    "thr": {
      "file": "14-Threads.pdf",
      "dir": "14-Threads",
      "pages": 21,
      "title": "Threads"
    },
    "gul": {
      "file": "00-GUL.pdf",
      "dir": "00-GUL",
      "pages": 6,
      "title": "GUL — загальна бібліотека утиліт"
    },
    "cs": {
      "file": "Coding_Standard_Guideline(C_C++).pptx",
      "dir": "Coding_Standard_Guideline_28C_CPlusPlus_29",
      "pages": 29,
      "title": "Coding Standard Guideline",
      "slidePrefix": "Slide",
      "ext": "PNG"
    },
    "win": {
      "file": "lek_14_Windows.ppt",
      "dir": "lek_14_Windows",
      "pages": 21,
      "title": "Windows",
      "slidePrefix": "Slide",
      "ext": "PNG"
    },
    "proc": {
      "file": "lek_15_Процеси.ppt",
      "dir": "lek_15_Процеси",
      "pages": 16,
      "title": "Процеси",
      "slidePrefix": "Slide",
      "ext": "PNG"
    },
    "thros": {
      "file": "lek_16_Потоки.ppt",
      "dir": "lek_16_Потоки",
      "pages": 24,
      "title": "Потоки ОС",
      "slidePrefix": "Slide",
      "ext": "PNG"
    },
    "net": {
      "file": "Network/",
      "dir": null,
      "pages": 0,
      "title": "Network — лекції та клієнт-серверний проєкт"
    }
  },
  "modules": [
    {
      "id": "m01",
      "num": 1,
      "title": "Алгоритмізація і перша програма",
      "from": "prometheus",
      "note": "Вступний модуль: базові алгоритмічні поняття, які потрібні перед рештою курсу.",
      "lessons": [
        {
          "id": "m01-l1",
          "num": "1.1",
          "title": "Алгоритм і його властивості. Величини та ідентифікатори",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l2",
          "num": "1.2",
          "title": "Структура програми на C++. IDE та збірка",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l3",
          "num": "1.3",
          "title": "Ввід/вивід і лінійні алгоритми",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l4",
          "num": "1.4",
          "title": "Логічні операції та розгалуження",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l5",
          "num": "1.5",
          "title": "Цикли: з параметром, з перед- і післяумовою",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l6",
          "num": "1.6",
          "title": "Покрокова деталізація, допоміжні алгоритми, рекурсія",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l7",
          "num": "1.7",
          "title": "Одновимірні масиви та робота зі стрічками",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m01-l8",
          "num": "1.8",
          "title": "Відлагоджувач як інструмент мислення: breakpoints, watch, call stack",
          "level": "junior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m02",
      "num": 2,
      "title": "Від тексту до .exe: трансляція і препроцесор",
      "from": "gl",
      "deck": "fund",
      "lessons": [
        {
          "id": "m02-l1",
          "num": "2.1",
          "title": "Етапи трансляції",
          "level": "junior",
          "from": "gl",
          "deck": "fund",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/translation_phases",
              "t": "Phases of translation — формальний опис усіх дев'яти фаз"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/translation_unit",
              "t": "Translation unit — одиниця трансляції й зв'язування імен"
            }
          ],
          "book": [
            {
              "s": "Д.5",
              "t": "Список директив препроцесора",
              "p": 344
            }
          ],
          "projects": [
            {
              "name": "P201_Phases",
              "level": "junior",
              "title": "Подивитись на вихід препроцесора (-E / P)"
            },
            {
              "name": "P202_TwoUnits",
              "level": "middle",
              "title": "Дві одиниці трансляції: помилка компіляції проти помилки лінкування"
            }
          ]
        },
        {
          "id": "m02-l2",
          "num": "2.2",
          "title": "Зарезервовані слова та ідентифікатори",
          "level": "junior",
          "from": "gl",
          "deck": "fund",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/identifiers",
              "t": "Identifiers — правила імен і зарезервовані за реалізацією шаблони"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/keyword",
              "t": "Keywords — повний список із позначкою стандарту"
            }
          ],
          "book": [
            {
              "s": "Д.1",
              "t": "Перелік зарезервованих слів C++",
              "p": 339
            },
            {
              "s": "Д.3",
              "t": "Підтримка компіляторами можливостей C++11",
              "p": 342
            }
          ],
          "projects": [
            {
              "name": "P203_NameClash",
              "level": "middle",
              "title": "Як макрос ламає стандартну бібліотеку (NOMINMAX)"
            }
          ]
        },
        {
          "id": "m02-l3",
          "num": "2.3",
          "title": "Препроцесор",
          "level": "junior",
          "from": "gl",
          "deck": "fund",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/preprocessor",
              "t": "Preprocessor — огляд усіх директив"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/preprocessor/conditional",
              "t": "Conditional inclusion — чому невідоме ім'я в #if тихо стає 0"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/feature_test",
              "t": "Feature test macros — сучасна заміна перевірки __cplusplus"
            }
          ],
          "book": [
            {
              "s": "Д.5",
              "t": "Список директив препроцесора",
              "p": 344
            }
          ],
          "projects": [
            {
              "name": "P204_Conditional",
              "level": "junior",
              "title": "Умовна компіляція: один код для C і C++, перевірка версії стандарту"
            }
          ]
        },
        {
          "id": "m02-l4",
          "num": "2.4",
          "title": "Макроси",
          "level": "junior",
          "from": "gl",
          "deck": "fund",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/preprocessor/replace",
              "t": "Replacing text macros — оператори # і ##, __VA_OPT__, порядок розгортання"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/utility/source_location",
              "t": "source_location (C++20) — чим замінити частину макросів логування"
            }
          ],
          "book": [
            {
              "s": "Д.5",
              "t": "Список директив препроцесора",
              "p": 344
            }
          ],
          "projects": [
            {
              "name": "P205_Macros",
              "level": "junior",
              "title": "Дужки, подвійне обчислення аргумента, стрінгіфікація"
            },
            {
              "name": "P206_XMacros",
              "level": "senior",
              "title": "X-макроси: enum і toString з одного списку"
            }
          ]
        },
        {
          "id": "m02-l5",
          "num": "2.5",
          "title": "Include guards, pragma once і чому constexpr краще за макрос",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m02-l6",
          "num": "2.6",
          "title": "Що робить лінкер: об'єктні файли, символи, ODR",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m03",
      "num": 3,
      "title": "Змінні, типи, пам'ять",
      "from": "gl",
      "deck": "vars",
      "lessons": [
        {
          "id": "m03-l1",
          "num": "3.1",
          "title": "Поняття змінної. Класи пам'яті",
          "level": "junior",
          "from": "gl",
          "deck": "vars",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/storage_duration",
              "t": "Storage class specifiers — auto/static/extern/thread_local і тривалості зберігання"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/scope",
              "t": "Scope — області видимості й правила перекриття імен"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/types",
              "t": "Fundamental types — гарантії розмірів і діапазонів"
            }
          ],
          "projects": [
            {
              "name": "P101_TypeSizes",
              "level": "junior",
              "title": "Калькулятор розмірів і діапазонів типів"
            },
            {
              "name": "P102_StorageDuration",
              "level": "middle",
              "title": "Час життя: local / static / thread_local / dynamic"
            },
            {
              "name": "P103_LinkageLab",
              "level": "senior",
              "title": "Лабораторія лінкування: extern, internal linkage, ODR"
            }
          ]
        },
        {
          "id": "m03-l2",
          "num": "3.2",
          "title": "Типи змінних",
          "level": "junior",
          "from": "gl",
          "deck": "vars",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/types",
              "t": "Fundamental types — таблиця моделей даних LP32/ILP32/LLP64/LP64"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/types/integer",
              "t": "Fixed width integer types — які з intN_t необов'язкові"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/implicit_conversion",
              "t": "Implicit conversions — розділ Usual arithmetic conversions"
            }
          ],
          "book": [
            {
              "s": "1.2",
              "t": "Типи даних"
            },
            {
              "s": "Д.4",
              "t": "Моделі пам'яті для платформ x86",
              "p": 343
            }
          ],
          "projects": [
            {
              "name": "P302_Conversions",
              "level": "junior",
              "title": "Побачити перетворення типів і пастку знакового/беззнакового"
            }
          ]
        },
        {
          "id": "m03-l3",
          "num": "3.3",
          "title": "Кваліфікатори: const і volatile",
          "level": "junior",
          "from": "gl",
          "deck": "vars",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/cv",
              "t": "cv qualifiers — const/volatile, cv-перетворення"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/constant_expression",
              "t": "Constant expressions — коли значення відоме компілятору"
            }
          ],
          "projects": [
            {
              "name": "P104_ConstRules",
              "level": "junior",
              "title": "const: де стоїть зірочка і що саме незмінне"
            },
            {
              "name": "P105_ConstexprVsConst",
              "level": "middle",
              "title": "const vs constexpr vs consteval на практиці"
            }
          ]
        },
        {
          "id": "m03-l4",
          "num": "3.4",
          "title": "Вирівнювання",
          "level": "middle",
          "from": "gl",
          "deck": "vars",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/object",
              "t": "Object — розділ Alignment, поняття extended alignment"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/alignas",
              "t": "alignas — чому послабити вирівнювання неможливо"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/thread/hardware_destructive_interference_size",
              "t": "hardware_destructive_interference_size — боротьба з false sharing без магічного числа 64"
            }
          ],
          "book": [
            {
              "s": "Д.4",
              "t": "Моделі пам'яті для платформ x86",
              "p": 343
            }
          ],
          "projects": [
            {
              "name": "P304_Alignment",
              "level": "middle",
              "title": "Порахувати розкладку структури й перевірити через offsetof"
            },
            {
              "name": "P307_FalseSharing",
              "level": "senior",
              "title": "Виміряти падіння швидкості через false sharing"
            }
          ]
        },
        {
          "id": "m03-l5",
          "num": "3.5",
          "title": "Категорії значень і виразів: lvalue, prvalue, xvalue",
          "level": "middle",
          "from": "gl",
          "deck": "vars",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/value_category",
              "t": "Value categories — формальні означення через identity та movability"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/reference",
              "t": "References — правила згортання посилань, основа std::forward"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/decltype",
              "t": "decltype — єдиний спосіб побачити категорію виразу в коді"
            }
          ],
          "book": [
            {
              "s": "2.5",
              "t": "Вказівники та посилання (модель C++11, без xvalue)"
            }
          ],
          "projects": [
            {
              "name": "P305_ValueCategories",
              "level": "middle",
              "title": "Визначити категорію кожного виразу через decltype"
            },
            {
              "name": "P306_MoveVsForward",
              "level": "senior",
              "title": "std::move проти std::forward: коли що спрацьовує"
            }
          ]
        },
        {
          "id": "m03-l6",
          "num": "3.6",
          "title": "Ініціалізація: усі форми, звуження, most vexing parse",
          "level": "middle",
          "from": "added",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/initialization",
              "t": "Initialization — зміст теми, порядок статичної ініціалізації"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/list_initialization",
              "t": "List initialization — алгоритм вибору конструктора при {}"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/aggregate_initialization",
              "t": "Aggregate initialization — означення агрегату за стандартами"
            }
          ],
          "book": [
            {
              "s": "1.3",
              "t": "Змінні та ініціалізація (редакція C++11, без CTAD)"
            }
          ],
          "projects": [
            {
              "name": "P306_Initialization",
              "level": "middle",
              "title": "Усі форми ініціалізації поруч: A a{}, B b{}, vector(3,5) проти vector{3,5}"
            }
          ]
        },
        {
          "id": "m03-l7",
          "num": "3.7",
          "title": "Як число лежить у пам'яті: two's complement і IEEE-754",
          "level": "middle",
          "from": "added",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/types/numeric_limits",
              "t": "numeric_limits — різниця min() і lowest(), epsilon, is_iec559"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/numeric/bit_cast",
              "t": "bit_cast (C++20) — легальний перегляд бітів, ще й constexpr"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/numeric/math/isnan",
              "t": "isnan — правильна перевірка замість x != x"
            }
          ],
          "book": [
            {
              "s": "1.2",
              "t": "Типи даних"
            },
            {
              "s": "Д.4",
              "t": "Моделі пам'яті для платформ x86",
              "p": 343
            }
          ],
          "projects": [
            {
              "name": "P307_Numbers",
              "level": "middle",
              "title": "0.1+0.2, NaN, неасоціативність, min() проти lowest()"
            },
            {
              "name": "P308_KahanSum",
              "level": "senior",
              "title": "Наївне підсумовування проти алгоритму Кагана"
            }
          ]
        }
      ]
    },
    {
      "id": "m04",
      "num": 4,
      "title": "Бітова арифметика",
      "from": "prometheus",
      "note": "Окрема тема поза основними модулями.",
      "lessons": [
        {
          "id": "m04-l1",
          "num": "4.1",
          "title": "Бітові операції та маски",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m04-l2",
          "num": "4.2",
          "title": "Бітові поля, std::bitset, популярні bit-tricks",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m04-l3",
          "num": "4.3",
          "title": "Зсуви й UB, порядок байтів, заголовок <bit> у C++20",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m05",
      "num": 5,
      "title": "Простори імен",
      "from": "gl",
      "deck": "ns",
      "lessons": [
        {
          "id": "m05-l1",
          "num": "5.1",
          "title": "Область видимості й область дії",
          "level": "junior",
          "from": "gl",
          "deck": "ns",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/scope",
              "t": "Scope — point of declaration і всі види областей"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/unqualified_lookup",
              "t": "Unqualified lookup — порядок пошуку, complete-class context, двофазний пошук"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/qualified_lookup",
              "t": "Qualified lookup — чому після :: не діє приховування"
            }
          ],
          "book": [
            {
              "s": "1.2.4",
              "t": "Простори імен (правила пошуку при наслідуванні)"
            }
          ],
          "projects": [
            {
              "name": "P501_Scope",
              "level": "junior",
              "title": "Перекриття імен, ::x і приховування перевантажень бази"
            }
          ]
        },
        {
          "id": "m05-l2",
          "num": "5.2",
          "title": "Визначення простору імен",
          "level": "junior",
          "from": "gl",
          "deck": "ns",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/namespace",
              "t": "Namespaces — безіменні та inline простори, заборона доповнювати std"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/namespace_alias",
              "t": "Namespace aliases — локальність і нетранзитивність"
            }
          ],
          "book": [
            {
              "s": "1.2.4",
              "t": "Простори імен (вкладені простори, псевдоніми)"
            }
          ],
          "projects": [
            {
              "name": "P502_Namespaces",
              "level": "junior",
              "title": "Відкритість простору, безіменний простір, inline namespace"
            }
          ]
        },
        {
          "id": "m05-l3",
          "num": "5.3",
          "title": "Використання: using, using-declaration, аліаси",
          "level": "junior",
          "from": "gl",
          "deck": "ns",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/using_declaration",
              "t": "using-declaration — три застосування в класах, успадкування конструкторів"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/type_alias",
              "t": "Type alias — чому шаблонні псевдоніми можливі лише через using"
            }
          ],
          "book": [
            {
              "s": "1.2.4",
              "t": "Простори імен (обидві форми using)"
            }
          ],
          "projects": [
            {
              "name": "P503_Using",
              "level": "junior",
              "title": "Оголошення проти директиви, using у класі, шаблонний псевдонім"
            }
          ]
        },
        {
          "id": "m05-l4",
          "num": "5.4",
          "title": "Вкладені простори",
          "level": "junior",
          "from": "gl",
          "deck": "ns",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/namespace",
              "t": "Nested namespaces — компактний запис C++17, inline у ланцюжку C++20"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/template_specialization",
              "t": "Template specialization — де саме дозволено писати спеціалізацію"
            }
          ],
          "book": [
            {
              "s": "1.2.4",
              "t": "Простори імен (вкладення й псевдоніми)"
            }
          ],
          "projects": [
            {
              "name": "P504_NestedNamespaces",
              "level": "junior",
              "title": "Пошук назовні, зупинка пошуку, псевдоніми"
            }
          ]
        },
        {
          "id": "m05-l5",
          "num": "5.5",
          "title": "ADL: пошук імені, залежний від аргументів",
          "level": "senior",
          "from": "added",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/adl",
              "t": "ADL — правила пов'язаних просторів, чому функція-член глушить ADL"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/friend",
              "t": "friend — прихований friend не видимий звичайним пошуком"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/utility/ranges/swap",
              "t": "ranges::swap — customization point object, сучасна заміна ідіоми"
            }
          ],
          "projects": [
            {
              "name": "P505_ADL",
              "level": "senior",
              "title": "badSwap проти goodSwap: побачити, коли спеціалізований swap не викликається"
            }
          ]
        }
      ]
    },
    {
      "id": "m06",
      "num": 6,
      "title": "Складені типи",
      "from": "gl",
      "deck": "comp",
      "note": "Вказівники, посилання, масиви й динамічна пам'ять розписані докладно.",
      "lessons": [
        {
          "id": "m06-l1",
          "num": "6.1",
          "title": "Що таке складений тип. type_traits як спосіб їх розпізнати",
          "level": "junior",
          "from": "gl",
          "deck": "comp",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/types",
              "t": "Type support — індекс усієї бібліотеки трейтів за категоріями"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/types/is_compound",
              "t": "is_compound — означений просто як !is_fundamental"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/types/decay",
              "t": "decay — що відбувається при передаванні аргумента за значенням"
            }
          ],
          "book": [
            {
              "s": "2",
              "t": "Складені типи"
            },
            {
              "s": "Д.6",
              "t": "Бібліотека Type traits (C++11)",
              "p": 345
            }
          ],
          "projects": [
            {
              "name": "P601_TypeTraits",
              "level": "junior",
              "title": "Класифікувати типи трейтами; перевірити decay і trivially_copyable"
            }
          ]
        },
        {
          "id": "m06-l2",
          "num": "6.2",
          "title": "Переліки. Типобезпечні переліки",
          "level": "junior",
          "from": "gl",
          "deck": "comp",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/enum",
              "t": "Enumerations — діапазон значень, scoped enum, using enum"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/types/underlying_type",
              "t": "underlying_type — коректний спосіб дістати базовий тип"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/utility/to_underlying",
              "t": "to_underlying (C++23) — коротка заміна static_cast"
            }
          ],
          "book": [
            {
              "s": "2.2",
              "t": "Переліки"
            }
          ],
          "projects": [
            {
              "name": "P602_Enums",
              "level": "junior",
              "title": "Три проблеми звичайного enum і бітова маска на enum class"
            }
          ]
        },
        {
          "id": "m06-l3",
          "num": "6.3",
          "title": "Структури. Анонімні структури",
          "level": "junior",
          "from": "gl",
          "deck": "comp",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/class",
              "t": "Class — struct і class відрізняються лише типовим доступом"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/named_req/StandardLayoutType",
              "t": "StandardLayoutType — вимоги до сумісності розкладки з C"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/bit_field",
              "t": "Bit-field — що саме визначається реалізацією"
            }
          ],
          "book": [
            {
              "s": "2.3",
              "t": "Структури"
            }
          ],
          "projects": [
            {
              "name": "P603_Structs",
              "level": "junior",
              "title": "Padding, #pragma pack, бітові поля, offsetof"
            }
          ]
        },
        {
          "id": "m06-l4",
          "num": "6.4",
          "title": "Об'єднання",
          "level": "junior",
          "from": "gl",
          "deck": "comp",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/union",
              "t": "Union — активний член, common initial sequence, нетривіальні типи"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/utility/variant",
              "t": "variant (C++17) — типобезпечна заміна розміченому об'єднанню"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/numeric/bit_cast",
              "t": "bit_cast (C++20) — легальна заміна type punning"
            }
          ],
          "book": [
            {
              "s": "2.4",
              "t": "Об'єднання"
            }
          ],
          "projects": [
            {
              "name": "P604_Unions",
              "level": "junior",
              "title": "Активний член, розмічене об'єднання, variant і visit"
            }
          ]
        },
        {
          "id": "m06-l5",
          "num": "6.5",
          "title": "Вказівники",
          "level": "junior",
          "from": "book",
          "gap": true,
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/pointer",
              "t": "Pointer — усі різновиди, зокрема вказівники на члени"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/operator_arithmetic",
              "t": "Pointer arithmetic — правило «one past the end»"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/types/nullptr_t",
              "t": "nullptr_t — чому nullptr не перетворюється в число"
            }
          ],
          "book": [
            {
              "s": "2.5",
              "t": "Вказівники та посилання"
            }
          ],
          "projects": [
            {
              "name": "P605_Pointers",
              "level": "junior",
              "title": "Арифметика, розпад масиву, вказівник на функцію"
            }
          ]
        },
        {
          "id": "m06-l6",
          "num": "6.6",
          "title": "Властивості вказівника. Посилання",
          "level": "junior",
          "from": "book",
          "gap": true,
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/reference",
              "t": "Reference — обмеження й згортання посилань"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/reference_initialization",
              "t": "Reference initialization — де подовження часу життя НЕ діє"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/utility/functional/reference_wrapper",
              "t": "reference_wrapper — посилання в контейнері"
            }
          ],
          "book": [
            {
              "s": "2.5",
              "t": "Вказівники та посилання"
            }
          ],
          "projects": [
            {
              "name": "P606_References",
              "level": "junior",
              "title": "Прив'язка, const&, range-for, reference_wrapper"
            }
          ]
        },
        {
          "id": "m06-l7",
          "num": "6.7",
          "title": "Статичні масиви",
          "level": "junior",
          "from": "book",
          "gap": true,
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/array",
              "t": "Array — контексти, у яких розпаду не відбувається"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/container/array",
              "t": "std::array — той самий масив без пасток"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/container/span",
              "t": "span (C++20) — заміна парі «вказівник + розмір»"
            }
          ],
          "book": [
            {
              "s": "2.6",
              "t": "Масиви"
            }
          ],
          "projects": [
            {
              "name": "P607_Arrays",
              "level": "junior",
              "title": "Розпад, arr+1 проти &arr+1, std::array"
            }
          ]
        },
        {
          "id": "m06-l8",
          "num": "6.8",
          "title": "Динамічні масиви і купа",
          "level": "junior",
          "from": "book",
          "gap": true,
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/new",
              "t": "new — дві фази: виділення й конструювання, placement new"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/memory/unique_ptr",
              "t": "unique_ptr — зокрема спеціалізація для масивів"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/container/vector",
              "t": "vector — таблиця інвалідації ітераторів"
            }
          ],
          "book": [
            {
              "s": "2.7",
              "t": "Динамічна пам'ять"
            }
          ],
          "projects": [
            {
              "name": "P608_Heap",
              "level": "junior",
              "title": "Витік при виняткові проти unique_ptr; реалокація vector"
            }
          ]
        },
        {
          "id": "m06-l9",
          "num": "6.9",
          "title": "Типові помилки роботи з пам'яттю і як їх ловити",
          "level": "middle",
          "from": "added",
          "note": "Об'єднує теми арифметики вказівників, витоків і висячих вказівників: механіка розібрана в уроках 6.5–6.8, тут — діагностика.",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/ub",
              "t": "UB — різниця undefined / unspecified / implementation-defined"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/memory",
              "t": "Memory — індекс розумних вказівників і алокаторів"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/memory/unique_ptr",
              "t": "unique_ptr із власним deleter — для C-ресурсів"
            }
          ],
          "projects": [
            {
              "name": "P609_MemoryErrors",
              "level": "middle",
              "title": "Сім помилок пам'яті під санітайзером, по одній за раз"
            }
          ]
        }
      ]
    },
    {
      "id": "m07",
      "num": 7,
      "title": "Функції",
      "from": "gl",
      "deck": "func",
      "lessons": [
        {
          "id": "m07-l1",
          "num": "7.1",
          "title": "Поняття функції",
          "level": "junior",
          "from": "gl",
          "deck": "func",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/functions",
              "t": "Functions — declaration, definition, signature"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/default_arguments",
              "t": "Default arguments — накопичення значень у різних оголошеннях"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/inline",
              "t": "inline — сучасний зміст: правило ODR, а не вказівка вбудувати"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/eval_order",
              "t": "Evaluation order — що саме змінив C++17"
            }
          ],
          "book": [
            {
              "s": "3.1",
              "t": "Функції"
            },
            {
              "s": "1.1",
              "t": "Структура програми"
            }
          ],
          "projects": [
            {
              "name": "P701_Functions",
              "level": "junior",
              "title": "Оголошення й означення, перевантаження, способи передавання"
            }
          ]
        },
        {
          "id": "m07-l2",
          "num": "7.2",
          "title": "Стек функції",
          "level": "junior",
          "from": "gl",
          "deck": "func",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/storage_duration",
              "t": "Storage duration — автоматична тривалість і потокобезпечна static"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/lifetime",
              "t": "Lifetime — межі часу життя й що є UB після нього"
            }
          ],
          "book": [
            {
              "s": "3.2",
              "t": "Механізм виклику функції"
            },
            {
              "s": "3.5",
              "t": "Рекурсія"
            }
          ],
          "projects": [
            {
              "name": "P702_CallStack",
              "level": "junior",
              "title": "Порядок руйнування, static, напрямок росту стеку"
            }
          ]
        },
        {
          "id": "m07-l3",
          "num": "7.3",
          "title": "Статичні сутності",
          "level": "junior",
          "from": "gl",
          "deck": "func",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/static",
              "t": "static — три значення ключового слова на одній сторінці"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/storage_duration",
              "t": "Storage duration — потокобезпечна ініціалізація локальної static"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/constinit",
              "t": "constinit (C++20) — гарантія статичної ініціалізації"
            }
          ],
          "book": [
            {
              "s": "3.3",
              "t": "Класи пам'яті"
            },
            {
              "s": "1.4",
              "t": "Область видимості та час життя"
            }
          ],
          "projects": [
            {
              "name": "P703_Static",
              "level": "junior",
              "title": "Три static поруч і ідіома Мейєрса"
            }
          ]
        },
        {
          "id": "m07-l4",
          "num": "7.4",
          "title": "Модифікатори",
          "level": "junior",
          "from": "gl",
          "deck": "func"
        },
        {
          "id": "m07-l5",
          "num": "7.5",
          "title": "Передавання значень у тіло функції",
          "level": "junior",
          "from": "gl",
          "deck": "func"
        },
        {
          "id": "m07-l6",
          "num": "7.6",
          "title": "Види функцій",
          "level": "junior",
          "from": "gl",
          "deck": "func"
        },
        {
          "id": "m07-l7",
          "num": "7.7",
          "title": "Функціональні обгортки й функціональні об'єкти",
          "level": "middle",
          "from": "gl",
          "deck": "func"
        },
        {
          "id": "m07-l8",
          "num": "7.8",
          "title": "Лямбда-функції: захоплення, час життя, mutable",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m07-l9",
          "num": "7.9",
          "title": "Розв'язання перевантажень крок за кроком",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m07-l10",
          "num": "7.10",
          "title": "inline, ODR і як лінкер склеює однакові функції",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m08",
      "num": 8,
      "title": "Класи",
      "from": "gl",
      "deck": "cls",
      "lessons": [
        {
          "id": "m08-l1",
          "num": "8.1",
          "title": "Поняття класу й об'єкта. Інкапсуляція",
          "level": "junior",
          "from": "gl",
          "deck": "cls",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/classes",
              "t": "Classes — оголошення, члени, вкладені типи"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/access",
              "t": "Access specifiers — public/protected/private і що вони справді захищають"
            }
          ],
          "projects": [
            {
              "name": "P141_BankAccount",
              "level": "junior",
              "title": "Клас BankAccount: інваріант і інкапсуляція"
            }
          ]
        },
        {
          "id": "m08-l2",
          "num": "8.2",
          "title": "Види класів",
          "level": "junior",
          "from": "gl",
          "deck": "cls"
        },
        {
          "id": "m08-l3",
          "num": "8.3",
          "title": "Дружність",
          "level": "junior",
          "from": "gl",
          "deck": "cls"
        },
        {
          "id": "m08-l4",
          "num": "8.4",
          "title": "Члени класу. cv-специфікатори. Статичні члени",
          "level": "junior",
          "from": "gl",
          "deck": "cls",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/data_members",
              "t": "Non-static data members — ініціалізація за замовчуванням, mutable"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/member_functions",
              "t": "Member functions — const/ref-кваліфікатори"
            }
          ],
          "projects": [
            {
              "name": "P142_ConstCorrect",
              "level": "middle",
              "title": "const-коректність класу і mutable-кеш"
            }
          ]
        },
        {
          "id": "m08-l5",
          "num": "8.5",
          "title": "Конструктори класу. Види конструкторів",
          "level": "junior",
          "from": "gl",
          "deck": "cls",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/constructor",
              "t": "Constructors — список ініціалізації, делегування"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/copy_constructor",
              "t": "Copy constructor — коли генерується неявно"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/move_constructor",
              "t": "Move constructor — умови неявної генерації"
            }
          ],
          "projects": [
            {
              "name": "P143_Ctors",
              "level": "junior",
              "title": "Усі види конструкторів на одному класі"
            },
            {
              "name": "P144_RuleOfFive",
              "level": "middle",
              "title": "Rule of 0/3/5 на власному контейнері"
            }
          ]
        },
        {
          "id": "m08-l6",
          "num": "8.6",
          "title": "Деструктор класу",
          "level": "junior",
          "from": "gl",
          "deck": "cls",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/language/destructor",
              "t": "Destructor — порядок руйнування, віртуальність"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/language/raii",
              "t": "RAII — ідіома володіння ресурсом"
            }
          ],
          "projects": [
            {
              "name": "P145_RAIIGuard",
              "level": "junior",
              "title": "RAII-обгортка над файлом"
            },
            {
              "name": "P146_ScopeGuard",
              "level": "senior",
              "title": "Узагальнений ScopeGuard на лямбдах"
            }
          ]
        },
        {
          "id": "m08-l7",
          "num": "8.7",
          "title": "Вкладені сутності",
          "level": "middle",
          "from": "gl",
          "deck": "cls"
        },
        {
          "id": "m08-l8",
          "num": "8.8",
          "title": "Вказівники на члени класу та об'єкта",
          "level": "middle",
          "from": "gl",
          "deck": "cls"
        },
        {
          "id": "m08-l9",
          "num": "8.9",
          "title": "Розкладка об'єкта в пам'яті: порядок полів, padding, порожній базовий клас",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m09",
      "num": 9,
      "title": "Наслідування",
      "from": "gl",
      "deck": "inh",
      "lessons": [
        {
          "id": "m09-l1",
          "num": "9.1",
          "title": "Одинарне наслідування",
          "level": "junior",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l2",
          "num": "9.2",
          "title": "Конструктори й деструктори при наслідуванні",
          "level": "junior",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l3",
          "num": "9.3",
          "title": "Множинне наслідування",
          "level": "middle",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l4",
          "num": "9.4",
          "title": "Правило домінування",
          "level": "middle",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l5",
          "num": "9.5",
          "title": "Приведення типів в ієрархії",
          "level": "middle",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l6",
          "num": "9.6",
          "title": "Віртуальні батьківські класи",
          "level": "middle",
          "from": "gl",
          "deck": "inh"
        },
        {
          "id": "m09-l7",
          "num": "9.7",
          "title": "Композиція проти наслідування: коли «is-a» — помилка",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m10",
      "num": 10,
      "title": "Поліморфізм",
      "from": "gl",
      "deck": "poly",
      "lessons": [
        {
          "id": "m10-l1",
          "num": "10.1",
          "title": "Види зв'язування",
          "level": "junior",
          "from": "gl",
          "deck": "poly"
        },
        {
          "id": "m10-l2",
          "num": "10.2",
          "title": "Поліморфна поведінка методів",
          "level": "junior",
          "from": "gl",
          "deck": "poly"
        },
        {
          "id": "m10-l3",
          "num": "10.3",
          "title": "Вказівники vptr та таблиця vtab",
          "level": "middle",
          "from": "gl",
          "deck": "poly"
        },
        {
          "id": "m10-l4",
          "num": "10.4",
          "title": "Абстрактні класи",
          "level": "junior",
          "from": "gl",
          "deck": "poly"
        },
        {
          "id": "m10-l5",
          "num": "10.5",
          "title": "Віртуальність і дружність",
          "level": "middle",
          "from": "gl",
          "deck": "poly"
        },
        {
          "id": "m10-l6",
          "num": "10.6",
          "title": "Ціна віртуальності, девіртуалізація, final, CRTP",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m11",
      "num": 11,
      "title": "Перевантаження операторів",
      "from": "gl",
      "deck": "oper",
      "lessons": [
        {
          "id": "m11-l1",
          "num": "11.1",
          "title": "Користувацький механізм приведення типів",
          "level": "junior",
          "from": "gl",
          "deck": "oper"
        },
        {
          "id": "m11-l2",
          "num": "11.2",
          "title": "Теорія перевантаження операторів",
          "level": "junior",
          "from": "gl",
          "deck": "oper"
        },
        {
          "id": "m11-l3",
          "num": "11.3",
          "title": "Перевантаження специфічних операторів",
          "level": "junior",
          "from": "gl",
          "deck": "oper"
        },
        {
          "id": "m11-l4",
          "num": "11.4",
          "title": "Оператор присвоєння. Copy-and-swap",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m11-l5",
          "num": "11.5",
          "title": "operator<=> і переписані порівняння у C++20",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m12",
      "num": 12,
      "title": "RTTI і приведення типів",
      "from": "gl",
      "deck": "rtti",
      "lessons": [
        {
          "id": "m12-l1",
          "num": "12.1",
          "title": "Оператор typeid",
          "level": "junior",
          "from": "gl",
          "deck": "rtti"
        },
        {
          "id": "m12-l2",
          "num": "12.2",
          "title": "static_cast, const_cast, dynamic_cast, reinterpret_cast",
          "level": "junior",
          "from": "gl",
          "deck": "rtti"
        },
        {
          "id": "m12-l3",
          "num": "12.3",
          "title": "Ціна dynamic_cast, -fno-rtti і альтернативи через std::variant",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m13",
      "num": 13,
      "title": "Обробка помилок і винятки",
      "from": "gl",
      "deck": "exc",
      "lessons": [
        {
          "id": "m13-l1",
          "num": "13.1",
          "title": "Обробка критичних ситуацій",
          "level": "junior",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l2",
          "num": "13.2",
          "title": "Приведення типів при генерації і перехопленні виключень",
          "level": "junior",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l3",
          "num": "13.3",
          "title": "Стандартна бібліотека виключень",
          "level": "junior",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l4",
          "num": "13.4",
          "title": "Непередбачені та неперехоплені виключення",
          "level": "junior",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l5",
          "num": "13.5",
          "title": "Обробка помилок C++ та об'єкт errno",
          "level": "middle",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l6",
          "num": "13.6",
          "title": "Обробка системних помилок",
          "level": "middle",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l7",
          "num": "13.7",
          "title": "Обробка математичних помилок",
          "level": "middle",
          "from": "gl",
          "deck": "exc"
        },
        {
          "id": "m13-l8",
          "num": "13.8",
          "title": "Гарантії безпеки щодо винятків: basic / strong / nothrow",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m13-l9",
          "num": "13.9",
          "title": "Розкрутка стеку, noexcept, ціна винятків",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m14",
      "num": 14,
      "title": "Шаблони",
      "from": "gl",
      "deck": "tmpl",
      "lessons": [
        {
          "id": "m14-l1",
          "num": "14.1",
          "title": "Поняття узагальненого типу",
          "level": "junior",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l2",
          "num": "14.2",
          "title": "Шаблони функцій",
          "level": "junior",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l3",
          "num": "14.3",
          "title": "Шаблони класів",
          "level": "junior",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l4",
          "num": "14.4",
          "title": "Спеціалізації шаблонів",
          "level": "middle",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l5",
          "num": "14.5",
          "title": "Подвійні шаблонні параметри",
          "level": "middle",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l6",
          "num": "14.6",
          "title": "Наслідування в шаблонах класів",
          "level": "middle",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l7",
          "num": "14.7",
          "title": "Аліаси у шаблонах",
          "level": "middle",
          "from": "gl",
          "deck": "tmpl"
        },
        {
          "id": "m14-l8",
          "num": "14.8",
          "title": "Виведення аргументів шаблону і чому шаблони живуть у заголовках",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m14-l9",
          "num": "14.9",
          "title": "SFINAE, if constexpr, концепти C++20, variadic-шаблони",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m15",
      "num": 15,
      "title": "STL",
      "from": "gl",
      "deck": "stl",
      "lessons": [
        {
          "id": "m15-l1",
          "num": "15.1",
          "title": "Визначення й структура STL",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l2",
          "num": "15.2",
          "title": "Ітератори",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l3",
          "num": "15.3",
          "title": "Адаптери ітераторів",
          "level": "middle",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l4",
          "num": "15.4",
          "title": "Контейнери: послідовні та асоціативні",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l5",
          "num": "15.5",
          "title": "Адаптери контейнерів",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l6",
          "num": "15.6",
          "title": "Предикати і компаратори",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l7",
          "num": "15.7",
          "title": "Функтори (функціональні об'єкти)",
          "level": "middle",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l8",
          "num": "15.8",
          "title": "Алгоритми",
          "level": "junior",
          "from": "gl",
          "deck": "stl"
        },
        {
          "id": "m15-l9",
          "num": "15.9",
          "title": "Складність, інвалідація ітераторів, reserve і вибір контейнера",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m15-l10",
          "num": "15.10",
          "title": "Алокатори, ranges і views у C++20",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m16",
      "num": 16,
      "title": "Потоки введення/виведення",
      "from": "gl",
      "deck": "io",
      "lessons": [
        {
          "id": "m16-l1",
          "num": "16.1",
          "title": "Поняття IO streams",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l2",
          "num": "16.2",
          "title": "Структура потокової системи вводу/виводу",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l3",
          "num": "16.3",
          "title": "Форматування",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l4",
          "num": "16.4",
          "title": "Маніпулятори",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l5",
          "num": "16.5",
          "title": "Файловий ввід/вивід",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l6",
          "num": "16.6",
          "title": "Перевантаження операторів вводу/виводу",
          "level": "junior",
          "from": "gl",
          "deck": "io"
        },
        {
          "id": "m16-l7",
          "num": "16.7",
          "title": "Стрінгові потоки",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m16-l8",
          "num": "16.8",
          "title": "Бінарний ввід/вивід, буферизація, std::format і filesystem",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m17",
      "num": 17,
      "title": "Багатопотоковість",
      "from": "gl",
      "deck": "thr",
      "lessons": [
        {
          "id": "m17-l1",
          "num": "17.1",
          "title": "Поняття багатопотоковості. Створення потоків",
          "level": "junior",
          "from": "gl",
          "deck": "thr"
        },
        {
          "id": "m17-l2",
          "num": "17.2",
          "title": "Об'єкти синхронізації: mutex і його різновиди",
          "level": "junior",
          "from": "gl",
          "deck": "thr"
        },
        {
          "id": "m17-l3",
          "num": "17.3",
          "title": "Очікування: condition_variable, notify_one/notify_all",
          "level": "junior",
          "from": "gl",
          "deck": "thr"
        },
        {
          "id": "m17-l4",
          "num": "17.4",
          "title": "future/promise/async, потокобезпечна черга, дедлоки",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m17-l5",
          "num": "17.5",
          "title": "Модель пам'яті C++, atomic, memory_order, false sharing",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m18",
      "num": 18,
      "title": "GUL: бібліотека утиліт і керування пам'яттю",
      "from": "gl",
      "deck": "gul",
      "lessons": [
        {
          "id": "m18-l1",
          "num": "18.1",
          "title": "Що таке GUL. Засоби мовної підтримки",
          "level": "middle",
          "from": "gl",
          "deck": "gul"
        },
        {
          "id": "m18-l2",
          "num": "18.2",
          "title": "Підтримка типів: size_t, nullptr_t, type_info, type_traits",
          "level": "middle",
          "from": "gl",
          "deck": "gul"
        },
        {
          "id": "m18-l3",
          "num": "18.3",
          "title": "Розумні вказівники: unique_ptr, shared_ptr, weak_ptr",
          "level": "junior",
          "from": "gl",
          "deck": "gul",
          "cppref": [
            {
              "u": "https://en.cppreference.com/w/cpp/memory/unique_ptr",
              "t": "unique_ptr — єдиний власник, нульові накладні витрати"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/memory/shared_ptr",
              "t": "shared_ptr — лічильник посилань, control block"
            },
            {
              "u": "https://en.cppreference.com/w/cpp/memory/weak_ptr",
              "t": "weak_ptr — розрив циклічних залежностей"
            }
          ]
        },
        {
          "id": "m18-l4",
          "num": "18.4",
          "title": "Алокатори: allocator, memory_resource, C-засоби",
          "level": "senior",
          "from": "gl",
          "deck": "gul"
        },
        {
          "id": "m18-l5",
          "num": "18.5",
          "title": "initializer_list і спискова ініціалізація",
          "level": "middle",
          "from": "gl",
          "deck": "gul"
        },
        {
          "id": "m18-l6",
          "num": "18.6",
          "title": "Варіадики: va_start/va_arg/va_end і сучасна заміна",
          "level": "middle",
          "from": "gl",
          "deck": "gul"
        }
      ]
    },
    {
      "id": "m19",
      "num": 19,
      "title": "Стандарт кодування",
      "from": "gl",
      "deck": "cs",
      "lessons": [
        {
          "id": "m19-l1",
          "num": "19.1",
          "title": "Іменування, форматування, структура файлів",
          "level": "junior",
          "from": "gl",
          "deck": "cs"
        },
        {
          "id": "m19-l2",
          "num": "19.2",
          "title": "Коментарі, документування, типові заборони",
          "level": "junior",
          "from": "gl",
          "deck": "cs"
        },
        {
          "id": "m19-l3",
          "num": "19.3",
          "title": "Code review: на що дивиться рецензент",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m20",
      "num": 20,
      "title": "Операційна система: процеси й потоки",
      "from": "gl",
      "deck": "proc",
      "lessons": [
        {
          "id": "m20-l1",
          "num": "20.1",
          "title": "Windows API: базові поняття",
          "level": "middle",
          "from": "gl",
          "deck": "win"
        },
        {
          "id": "m20-l2",
          "num": "20.2",
          "title": "Процеси в ОС",
          "level": "middle",
          "from": "gl",
          "deck": "proc"
        },
        {
          "id": "m20-l3",
          "num": "20.3",
          "title": "Потоки ОС і планування",
          "level": "middle",
          "from": "gl",
          "deck": "thros"
        },
        {
          "id": "m20-l4",
          "num": "20.4",
          "title": "Процеси проти потоків: коли що обирати",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m20-l5",
          "num": "20.5",
          "title": "Linux/POSIX для співбесіди: процеси (PID/UID), дескриптори, пайпи, bash",
          "level": "junior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m21",
      "num": 21,
      "title": "Мережа і клієнт-серверний застосунок",
      "from": "gl",
      "deck": "net",
      "note": "Курсовий проєкт: готовий VS-проєкт client/server і лекційні документи в папці Network.",
      "lessons": [
        {
          "id": "m21-l1",
          "num": "21.1",
          "title": "Модель OSI",
          "level": "junior",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l2",
          "num": "21.2",
          "title": "Стек TCP/IP",
          "level": "junior",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l3",
          "num": "21.3",
          "title": "TCP: з'єднання, надійність, потік байтів",
          "level": "junior",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l4",
          "num": "21.4",
          "title": "UDP: коли надійність не потрібна",
          "level": "junior",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l5",
          "num": "21.5",
          "title": "Сокети та WinSock API",
          "level": "junior",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l6",
          "num": "21.6",
          "title": "Розбір навчального сервера",
          "level": "middle",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l7",
          "num": "21.7",
          "title": "Розбір навчального клієнта",
          "level": "middle",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l8",
          "num": "21.8",
          "title": "Курсовий проєкт: власний клієнт-серверний застосунок",
          "level": "middle",
          "from": "gl",
          "deck": "net"
        },
        {
          "id": "m21-l9",
          "num": "21.9",
          "title": "Неблокуючий В/В, select/epoll, багатоклієнтський сервер",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m21-l10",
          "num": "21.10",
          "title": "Протоколи прикладного рівня: HTTP/HTTPS, TLS-рукостискання",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m22",
      "num": 22,
      "title": "Сучасний C++ (11 → 23)",
      "from": "added",
      "note": "Модуль закриває розрив між C++11/14 і тим, що питають на співбесідах сьогодні.",
      "lessons": [
        {
          "id": "m22-l1",
          "num": "22.1",
          "title": "Move-семантика і rvalue-посилання",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m22-l2",
          "num": "22.2",
          "title": "auto, decltype, структуровані прив'язки",
          "level": "junior",
          "from": "added"
        },
        {
          "id": "m22-l3",
          "num": "22.3",
          "title": "optional, variant, any, expected",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m22-l4",
          "num": "22.4",
          "title": "Ідеальне передавання і універсальні посилання",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m22-l5",
          "num": "22.5",
          "title": "Concepts, ranges, модулі, coroutines",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m23",
      "num": 23,
      "title": "Під капотом: пам'ять, компілятор, лінкер",
      "from": "added",
      "lessons": [
        {
          "id": "m23-l1",
          "num": "23.1",
          "title": "Карта пам'яті процесу: код, дані, стек, купа",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m23-l2",
          "num": "23.2",
          "title": "Стек-кадр і угоди виклику в асемблері",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m23-l3",
          "num": "23.3",
          "title": "Купа зсередини: malloc, фрагментація, власні алокатори",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m23-l4",
          "num": "23.4",
          "title": "Name mangling, ABI, сумісність компіляторів",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m23-l5",
          "num": "23.5",
          "title": "Що оптимізує компілятор: inline, RVO/copy elision, LTO",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m23-l6",
          "num": "23.6",
          "title": "Undefined behavior: каталог пасток і як їх ловити",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m28",
      "num": 24,
      "title": "Переносність: платформи, ABI, порядок байтів",
      "from": "added",
      "note": "Чому той самий код не працює між x86/x64, Windows/Linux — і як писати так, щоб працював.",
      "lessons": [
        {
          "id": "m28-l1",
          "num": "24.1",
          "title": "Моделі даних: ILP32, LP64, LLP64 і пастка long",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m28-l2",
          "num": "24.2",
          "title": "Угоди виклику та ABI: чому бінарники несумісні",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m28-l3",
          "num": "24.3",
          "title": "Порядок байтів і вирівнювання при обміні даними",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m28-l4",
          "num": "24.4",
          "title": "Практика переносності: умовна компіляція і типові пастки",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m24",
      "num": 25,
      "title": "Інструментарій і якість коду",
      "from": "prometheus",
      "lessons": [
        {
          "id": "m24-l1",
          "num": "25.1",
          "title": "Система керування версіями Git",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m24-l2",
          "num": "25.2",
          "title": "Git у команді: гілки, rebase, конфлікти",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m24-l3",
          "num": "25.3",
          "title": "CMake з нуля: таргети, залежності, конфігурації",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m24-l4",
          "num": "25.4",
          "title": "Юніт-тести (GoogleTest) і TDD на практиці",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m24-l5",
          "num": "25.5",
          "title": "Санітайзери, valgrind, clang-tidy",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m24-l6",
          "num": "25.6",
          "title": "Профілювання і бенчмарки",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m24-l7",
          "num": "25.7",
          "title": "Контейнеризація (Docker) і CI/CD",
          "level": "middle",
          "from": "added"
        }
      ]
    },
    {
      "id": "m25",
      "num": 26,
      "title": "Алгоритми і структури даних для співбесід",
      "from": "added",
      "lessons": [
        {
          "id": "m25-l1",
          "num": "26.1",
          "title": "Асимптотика: O-нотація на пальцях і на практиці",
          "level": "junior",
          "from": "added"
        },
        {
          "id": "m25-l2",
          "num": "26.2",
          "title": "Масиви й рядки: два вказівники, ковзне вікно",
          "level": "junior",
          "from": "added"
        },
        {
          "id": "m25-l3",
          "num": "26.3",
          "title": "Хеш-таблиці й множини",
          "level": "junior",
          "from": "added"
        },
        {
          "id": "m25-l4",
          "num": "26.4",
          "title": "Списки, стеки, черги, дерева",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m25-l5",
          "num": "26.5",
          "title": "Сортування й пошук",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m25-l6",
          "num": "26.6",
          "title": "Графи, динамічне програмування, жадібні алгоритми",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m26",
      "num": 27,
      "title": "Проєктування",
      "from": "added",
      "lessons": [
        {
          "id": "m26-l1",
          "num": "27.1",
          "title": "RAII як головна ідіома C++",
          "level": "junior",
          "from": "added"
        },
        {
          "id": "m26-l2",
          "num": "27.2",
          "title": "SOLID на реальному коді C++",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m26-l3",
          "num": "27.3",
          "title": "Патерни GoF, які справді використовують у C++",
          "level": "middle",
          "from": "added"
        },
        {
          "id": "m26-l4",
          "num": "27.4",
          "title": "Pimpl, type erasure, policy-based design",
          "level": "senior",
          "from": "added"
        },
        {
          "id": "m26-l5",
          "num": "27.5",
          "title": "Проєктування API: помилки, час життя, сумісність",
          "level": "senior",
          "from": "added"
        }
      ]
    },
    {
      "id": "m27",
      "num": 28,
      "title": "Підготовка до співбесіди",
      "from": "prometheus",
      "lessons": [
        {
          "id": "m27-l1",
          "num": "28.1",
          "title": "Презентувати себе. Міфи і жахи співбесід",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m27-l2",
          "num": "28.2",
          "title": "Негативні патерни поведінки на співбесіді",
          "level": "junior",
          "from": "prometheus"
        },
        {
          "id": "m27-l3",
          "num": "28.3",
          "title": "Типові технічні питання за рівнями",
          "level": "junior",
          "from": "added"
        }
      ]
    }
  ]
};
