const DEFAULT_CATEGORY_COLOR = '#4682B4';


const THEMES = [
    {
        id: 'music',
        ru: { label: 'Музыка' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'sport',
        ru: { label: 'Спорт' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'travel_geography',
        ru: { label: 'Путешествия и география' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'cinema',
        ru: { label: 'Фильмы' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'true_or_false',
        ru: { label: 'Правда и миф' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'science_technology_travel',
        ru: { label: 'Наука, природа и технологии' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'animation_kids',
        ru: { label: 'Анимация и детский канал' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'art',
        ru: { label: 'Искусство и культура' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'history_literature_language',
        ru: { label: 'История, литература и язык' },
        en: { label: '' },
        zh: { label: '' }
    },
    {
        id: 'kids',
        ru: { label: 'Для малышей 6+' },
        en: { label: '' },
        zh: { label: '' }
    }
];

function getThemeLabel(theme, langCode) {
    const lang = langCode || (typeof CURRENT_LANGUAGE_CODE !== 'undefined' ? CURRENT_LANGUAGE_CODE : 'ru');
    const translation = theme[lang];

    if (!translation || !translation.label) {
        console.warn(`Перевод не найден: тема "${theme.id}" не переведена на язык "${lang}"`);
    }

    return (translation && translation.label) || '';
}

const CATEGORIES = [
    {
        key: 'orkestr_without_secret',
        icon: '🎼',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['music'],
        ru: {
            title: 'Оркестр без секретов',
            description: 'Струнные, духовые, ударные инструменты и роль дирижера объясняются через простые задания.'
        },
        en: {
            title: 'Orchestra Without Secrets',
            description: 'String, wind, and percussion instruments, and the conductor’s role, are explained through simple tasks.'
        },
        zh: {
            title: '乐团揭秘',
            description: '通过简单的互动题目，了解弦乐器、木管乐器、铜管乐器、打击乐器以及指挥的作用。'
        }
    },
    {
        key: 'films_on_emodji',
        icon: '🎥',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['cinema'],
        ru: {
            title: 'Кино по эмодзи',
            description: 'Расшифруйте название фильма по эмодзи.'
        },
        en: {
            title: 'Movies by Emoji',
            description: 'Decode the movie titles from the emojis.'
        },
        zh: {
            title: '表情猜电影',
            description: '根据表情符号，猜出对应的电影名称。'
        }
    },
    {
        key: 'heroes_russian_animation',
        icon: '🐻',
        age: '6+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['animation_kids'],
        ru: {
            title: 'Герои российской анимации',
            description: 'Угадайте героя по силуэту, характерному предмету, дому или другу.'
        },
        en: {
            title: 'Heroes of Russian Animation',
            description: 'Guess the characters by their silhouette, special item, house, or friend.'
        },
        zh: {
            title: '俄罗斯动画经典角色',
            description: '根据角色的剪影、标志性物品、居住的地方或朋友，猜猜他是谁。'
        }
    },
    {
        key: 'football_rules_field',
        icon: '⚽️',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['sport'],
        ru: {
            title: 'Футбол: правила и поле',
            description: 'Короткая и понятная проверка базовых правил футбола: состав команды, карточки, пенальти, угловые и добавленное время.'
        },
        en: {
            title: 'Soccer: Rules and Field',
            description: 'A short and clear check of basic soccer rules: team lineup, cards, penalties, corner kicks, and added time.'
        },
        zh: {
            title: '足球：规则与球场',
            description: '通过简短易懂的题目，检验你对足球基本规则的了解，包括球队人数、红黄牌、点球、角球和补时时间。'
        }
    },
    {
        key: 'films_true_or_false',
        icon: '🎞️',
        age: '16+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['true_or_false'],
        ru: {
            title: 'Кино: правда или миф',
            description: 'Необычные факты о съемках, звуке, монтаже и кинотехнологиях.'
        },
        en: {
            title: 'Cinema: Truth or Myth',
            description: 'Unusual facts about filming, sound, editing, and movie technology.'
        },
        zh: {
            title: '电影：真相还是误区？',
            description: '了解有关电影拍摄、声音、剪辑和电影技术的有趣知识，看看哪些说法是真的，哪些是误区。'
        }
    },
    {
        key: 'what_happened_allow',
        icon: '⏳',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['history_literature_language'],
        ru: {
            title: 'Что было раньше?',
            description: 'Два открытия, произведения, события или предмета нужно расположить в правильном порядке. Простая механика с высокой повторяемостью.'
        },
        en: {
            title: 'What Came First?',
            description: 'Put two discoveries, works, events, or objects in the right order. Simple mechanics with high repeatability.'
        },
        zh: {
            title: '谁先出现？',
            description: '从两项发明、作品、历史事件或物品中找出更早出现的一项，并按照正确的时间顺序作答。玩法简单，适合反复挑战。'
        }
    },
    {
        key: 'cosmos_for_runner',
        icon: '👽',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['science_technology_travel'],
        ru: {
            title: 'Космос для начинающих',
            description: 'Планеты, спутники, звезды и космические аппараты объясняются через короткие вопросы и крупные иллюстрации.'
        },
        en: {
            title: 'Space for Beginners',
            description: 'Planets, satellites, stars, and spacecraft are explained through short questions and large illustrations.'
        },
        zh: {
            title: '太空入门',
            description: '通过简短的问题和大型插图，认识太阳系中的行星、卫星、恒星和航天器。'
        }
    },
    {
        key: 'shedevr_author',
        icon: '🖌️',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['art'],
        ru: {
            title: 'Шедевр и автор',
            description: 'Нужно соединить известное произведение с художником, эпохой или направлением. Для каждой репродукции заранее проверяются права использования.'
        },
        en: {
            title: 'Masterpiece and Author',
            description: 'Connect a famous work with an artist, era, or movement. For each reproduction, the rights of use are checked in advance.'
        },
        zh: {
            title: '名画与作者',
            description: '将著名艺术作品与其作者、所属时代或艺术流派进行匹配。每幅作品的复制图像均会提前核实使用授权。'
        }
    },
    {
        key: 'country_contur',
        icon: '🗺️',
        age: '12+',
        questions: 10,
        color: '#4682B4',
        isNew: false,
        theme: ['travel_geography'],
        ru: {
            title: 'Страна по контуру',
            description: 'Узнайте страну по силуэту.'
        },
        en: {
            title: 'Country by Outline',
            description: 'Identify the countries by their silhouettes.'
        },
        zh: {
            title: '看轮廓猜国家',
            description: '根据国家的轮廓辨认国家。'
        }
    },
    {
        key: 'what_live_in_garden',
        icon: '🏡',
        age: '6+',
        questions: 5,
        color: '#4682B4',
        isNew: false,
        theme: ['kids'],
        ru: {
            title: 'Что растет в саду?',
            description: 'Викторина о знакомых фруктах, овощах и садовых растениях.'
        },
        en: {
            title: 'What Grows in Garden?',
            description: 'A quiz about familiar fruits, vegetables, and garden plants.'
        },
        zh: {
            title: '花园里种着什么？',
            description: '一起来参加关于常见水果、蔬菜和园艺植物的趣味问答吧。'
        }
    }
];


function getCategoryByKey(key, langCode) {
    const category = CATEGORIES.find(c => c.key === key);
    if (!category) return null;

    const lang = langCode || (typeof CURRENT_LANGUAGE_CODE !== 'undefined' ? CURRENT_LANGUAGE_CODE : 'ru');
    const translation = category[lang];

    if (!translation || !translation.title) {
        console.warn(`Перевод не найден: категория "${key}" не переведена на язык "${lang}"`);
    }

    return {
        ...category,
        title: (translation && translation.title) || '',
        description: (translation && translation.description) || '',
        color: category.color || DEFAULT_CATEGORY_COLOR
    };
}