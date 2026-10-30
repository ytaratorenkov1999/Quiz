const CONFIG = {
    themeSwitcher: true,
    portalUrl: '/'
};

const LANGUAGES = [
    { code: 'ru', name: 'Русский', url: 'index_ru.html' },
    { code: 'en', name: 'English', url: 'index_en.html' },
    { code: 'zh', name: '中文', url: 'index_zh.html' }
];

const UI_STRINGS = {
    ru: {
        pageTitle: 'Quiz',
        mainTitle: 'ВИКТОРИНЫ',
        subtitle: 'Проверьте свои знания в полете!',
        chooseCategory: 'Выберите категорию',
        allThemes: 'Все',
        emptyThemeCategories: 'В этой теме пока нет викторин.',
        questionsLabel: 'Вопросов:',
        ageLabel: 'Возраст:',
        back: 'Назад',
        startQuiz: 'Начать викторину',
        next: 'Далее',
        questionWord: 'Вопрос',
        ofWord: 'из',
        scoreLabel: 'Баллов',
        percentageLabel: 'Точность',
        correctLabel: 'Правильно',
        incorrectLabel: 'Неправильно',
        detailedBreakdownTitle: 'Детальный разбор ответов',
        playAgain: 'Пройти снова',
        chooseAnother: 'Выбрать другую',
        exitConfirmTitle: 'Вы действительно хотите выйти?',
        exitNo: 'Нет',
        exitYes: 'Да',
        notAnswered: 'Не ответил',
        questionNumberLabel: 'Вопрос {number}',
        correctStatus: '✓ Правильно',
        incorrectStatus: '✗ Неправильно',
        yourAnswerLabel: 'Ваш ответ:',
        correctAnswerLabel: 'Правильный ответ:',
        resultExcellentTitle: 'Превосходно!',
        resultExcellentMessage: 'Вы настоящий эксперт! Фантастический результат! Ваши знания впечатляют!',
        resultGreatTitle: 'Отличная работа!',
        resultGreatMessage: 'Вы показали отличные знания! Так держать! Продолжайте в том же духе!',
        resultGoodTitle: 'Хороший результат!',
        resultGoodMessage: 'Отличное начало! У Вас есть потенциал! Еще немного практики — и вы станете настоящим экспертом!',
        resultLowTitle: 'Есть к чему стремиться!',
        resultLowMessage: 'Каждая Ваша попытка — это новый опыт. Не останавливайтесь на достигнутом — впереди еще столько интересных вопросов и открытий!',
        interfaceLanguageLabel: 'Язык интерфейса: {name}. Открыть выбор языка',
        questionImageAlt: 'Изображение вопроса',
        openThemeMenu: 'Открыть меню выбора темы',
        exitQuizAriaLabel: 'Выход из викторины',
        chooseInterfaceLanguage: 'Выбор языка интерфейса',
        availableLanguages: 'Доступные языки',
        closeMenu: 'Закрыть меню',
        themesList: 'Список тем',
        quizProgressAriaLabel: 'Прогресс викторины',
        answerOptionsAriaLabel: 'Варианты ответов',
        selectCategoryAriaLabel: 'Выбрать категорию {title}',
        newBadge: 'Новинка',
        themeDark: 'Включить тёмную тему',
        themeLight: 'Включить светлую тему'
    },
    en: {
        pageTitle: 'Quiz',
        mainTitle: 'QUIZZES',
        subtitle: 'Test your knowledge in flight!',
        chooseCategory: 'Choose a category',
        allThemes: 'All',
        emptyThemeCategories: 'There are no quizzes in this theme yet.',
        questionsLabel: 'Questions:',
        ageLabel: 'Age:',
        back: 'Back',
        startQuiz: 'Start quiz',
        next: 'Next',
        questionWord: 'Question',
        ofWord: 'of',
        scoreLabel: 'Points',
        percentageLabel: 'Accuracy',
        correctLabel: 'Correct',
        incorrectLabel: 'Incorrect',
        detailedBreakdownTitle: 'Detailed answer breakdown',
        playAgain: 'Play again',
        chooseAnother: 'Choose another',
        exitConfirmTitle: 'Are you sure you want to exit?',
        exitNo: 'No',
        exitYes: 'Yes',
        notAnswered: 'Not answered',
        questionNumberLabel: 'Question {number}',
        correctStatus: '✓ Correct',
        incorrectStatus: '✗ Incorrect',
        yourAnswerLabel: 'Your answer:',
        correctAnswerLabel: 'Correct answer:',
        resultExcellentTitle: 'Excellent!',
        resultExcellentMessage: 'You are a true expert! A fantastic result! Your knowledge is impressive!',
        resultGreatTitle: 'Great job!',
        resultGreatMessage: 'You showed great knowledge! Keep it up! Keep going the same way!',
        resultGoodTitle: 'Good result!',
        resultGoodMessage: 'A great start! You have potential! A little more practice and you will become a true expert!',
        resultLowTitle: 'There is room to grow!',
        resultLowMessage: 'Every attempt is a new experience. Don\'t stop here — there are still so many interesting questions and discoveries ahead!',
        interfaceLanguageLabel: 'Interface language: {name}. Open language selection',
        questionImageAlt: 'Question image',
        openThemeMenu: 'Open theme selection menu',
        exitQuizAriaLabel: 'Exit the quiz',
        chooseInterfaceLanguage: 'Choose interface language',
        availableLanguages: 'Available languages',
        closeMenu: 'Close menu',
        themesList: 'Themes list',
        quizProgressAriaLabel: 'Quiz progress',
        answerOptionsAriaLabel: 'Answer options',
        selectCategoryAriaLabel: 'Select category {title}',
        newBadge: 'New',
        themeDark: 'Switch to dark theme',
        themeLight: 'Switch to light theme'
    },
    zh: {
        pageTitle: 'Quiz',
        mainTitle: '知识问答',
        subtitle: '在飞行途中检验你的知识！',
        chooseCategory: '选择分类',
        allThemes: '全部',
        emptyThemeCategories: '该主题下暂时没有问答。',
        questionsLabel: '题目数：',
        ageLabel: '适龄：',
        back: '返回',
        startQuiz: '开始问答',
        next: '下一题',
        questionWord: '题目',
        ofWord: '/',
        scoreLabel: '得分',
        percentageLabel: '正确率',
        correctLabel: '正确',
        incorrectLabel: '错误',
        detailedBreakdownTitle: '答题详情',
        playAgain: '再玩一次',
        chooseAnother: '选择其他分类',
        exitConfirmTitle: '确定要退出吗？',
        exitNo: '否',
        exitYes: '是',
        notAnswered: '未作答',
        questionNumberLabel: '题目 {number}',
        correctStatus: '✓ 正确',
        incorrectStatus: '✗ 错误',
        yourAnswerLabel: '你的答案：',
        correctAnswerLabel: '正确答案：',
        resultExcellentTitle: '太棒了！',
        resultExcellentMessage: '你是真正的专家！成绩非常出色！你的知识令人印象深刻！',
        resultGreatTitle: '表现出色！',
        resultGreatMessage: '你展现了出色的知识！继续保持！',
        resultGoodTitle: '成绩不错！',
        resultGoodMessage: '一个很好的开始！你很有潜力！再多加练习，你就会成为真正的专家！',
        resultLowTitle: '还有进步空间！',
        resultLowMessage: '每一次尝试都是一次新的体验。不要就此止步——前方还有许多有趣的问题和发现等着你！',
        interfaceLanguageLabel: '界面语言：{name}。打开语言选择',
        questionImageAlt: '题目图片',
        openThemeMenu: '打开主题选择菜单',
        exitQuizAriaLabel: '退出问答',
        chooseInterfaceLanguage: '选择界面语言',
        availableLanguages: '可用语言',
        closeMenu: '关闭菜单',
        themesList: '主题列表',
        quizProgressAriaLabel: '问答进度',
        answerOptionsAriaLabel: '答案选项',
        selectCategoryAriaLabel: '选择分类 {title}',
        newBadge: '新',
        themeDark: '切换到深色模式',
        themeLight: '切换到浅色模式'
    }
};

const CURRENT_LANGUAGE_CODE = window.CURRENT_LANGUAGE_CODE || 'ru';

class Translations {

    static get(key, params) {
        const dict = UI_STRINGS[CURRENT_LANGUAGE_CODE] || {};
        let str;

        if (dict[key] !== undefined && dict[key] !== '') {
            str = dict[key];
        } else {
            console.warn(`Перевод не найден: ключ "${key}" отсутствует для языка "${CURRENT_LANGUAGE_CODE}"`);
            str = '';
        }

        if (params) {
            Object.keys(params).forEach(paramKey => {
                str = str.replace(`{${paramKey}}`, params[paramKey]);
            });
        }

        return str;
    }

    static applyToPage() {
        document.title = Translations.get('pageTitle');
        document.querySelectorAll('[data-text]').forEach(el => {
            el.textContent = Translations.get(el.dataset.text);
        });
        document.querySelectorAll('[data-label]').forEach(el => {
            el.setAttribute('aria-label', Translations.get(el.dataset.label));
        });
    }
}

class Dom {
    static get(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Элемент с ID "${id}" не найден`);
        }
        return element;
    }

    static setText(element, text) {
        if (!element) return;
        element.textContent = String(text);
    }

    static sanitize(text) {
        if (typeof text !== 'string') return '';
        return text.replace(/[<>]/g, '');
    }
}

const THEME_KEY = 'quiz-theme';

const THEME_ICONS = '<span class="theme-toggle__icon theme-toggle__moon" aria-hidden="true"></span>' +
    '<span class="theme-toggle__icon theme-toggle__sun" aria-hidden="true"></span>';

class Theme {
    static current() {
        if (!CONFIG.themeSwitcher) return 'dark';
        try {
            return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
        } catch (e) {
            return 'dark';
        }
    }

    static apply(theme) {
        const root = document.documentElement;

        root.classList.add('theme-switching');
        if (theme === 'light') root.setAttribute('data-theme', 'light');
        else root.removeAttribute('data-theme');
        Theme.updateButton();
        void root.offsetWidth;
        setTimeout(() => root.classList.remove('theme-switching'), 50);
    }

    static toggle() {
        const theme = Theme.current() === 'light' ? 'dark' : 'light';
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {}
        Theme.apply(theme);
    }

    static renderButton() {
        if (!CONFIG.themeSwitcher) return;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'theme-toggle';
        button.id = 'theme-toggle';
        button.innerHTML = THEME_ICONS;
        button.addEventListener('click', Theme.toggle);
        document.body.prepend(button);
        Theme.updateButton();
    }

    static updateButton() {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        const light = Theme.current() === 'light';
        button.setAttribute('aria-pressed', String(light));
        button.setAttribute('aria-label', Translations.get(light ? 'themeDark' : 'themeLight'));
    }

    static init() {
        Theme.apply(Theme.current());
        window.addEventListener('pageshow', () => Theme.apply(Theme.current()));
        window.addEventListener('storage', (e) => {
            if (e.key === THEME_KEY) Theme.apply(Theme.current());
        });
    }
}

class QuizData {
    static getCategory(key) {
        if (typeof getCategoryByKey === 'undefined') {
            console.error('Категория викторины не найдена.');
            return null;
        }
        return getCategoryByKey(key);
    }

    static getQuestions(key) {
        const languages = questionsDatabase[key];
        if (!languages) return null;

        const questions = languages[CURRENT_LANGUAGE_CODE];
        if (Array.isArray(questions) && questions.length > 0) {
            return questions;
        }

        console.warn(`Данные отсутствуют: вопросы для категории "${key}" на языке "${CURRENT_LANGUAGE_CODE}" не найдены`);
        return null;
    }

    static shuffle(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
}

class DataValidator {
    static run() {
        DataValidator.checkQuestions();
        DataValidator.checkCategories();
        DataValidator.checkThemes();
    }

    static checkQuestions() {
        if (typeof questionsDatabase === 'undefined') {
            throw new Error('База данных вопросов не загружена');
        }

        Object.keys(questionsDatabase).forEach(category => {
            const languages = questionsDatabase[category];
            if (typeof languages !== 'object' || languages === null || Array.isArray(languages)) {
                console.warn(`Категория "${category}" имеет некорректный формат — ожидается объект с языками`);
                return;
            }

            Object.keys(languages).forEach(langCode => {
                const questions = languages[langCode];
                if (!Array.isArray(questions)) {
                    console.warn(`Категория "${category}", язык "${langCode}" имеет некорректный формат`);
                    return;
                }

                questions.forEach((q, index) => {
                    if (!q.question || !Array.isArray(q.answers) || typeof q.correct !== 'number') {
                        console.warn(`Вопрос ${index + 1} в категории "${category}" (${langCode}) имеет некорректный формат`);
                    }
                });
            });
        });
    }

    static checkCategories() {
        if (typeof CATEGORIES === 'undefined' || typeof questionsDatabase === 'undefined') {
            return;
        }

        const categoryKeys = new Set(CATEGORIES.map(c => c.key));
        const questionKeys = new Set(Object.keys(questionsDatabase));

        categoryKeys.forEach(key => {
            if (!questionKeys.has(key)) {
                console.warn(`Категория "${key}" описана в categories.js, но для неё нет вопросов в questions.js`);
            }
        });

        questionKeys.forEach(key => {
            if (!categoryKeys.has(key)) {
                console.warn(`Категория "${key}" есть в questions.js, но не описана в categories.js — кнопка не появится на экране`);
            }
        });
    }

    static checkThemes() {
        if (typeof CATEGORIES === 'undefined' || typeof THEMES === 'undefined') {
            return;
        }

        const themeIds = new Set(THEMES.map(theme => theme.id));

        CATEGORIES.forEach(category => {
            if (!Array.isArray(category.theme) || category.theme.length === 0) {
                console.warn(`Категория "${category.key}" не имеет theme (или это не массив/он пуст) — она не попадёт ни в одну тему меню`);
                return;
            }
            category.theme.forEach(themeId => {
                if (!themeIds.has(themeId)) {
                    console.warn(`Категория "${category.key}" ссылается на несуществующий theme id "${themeId}"`);
                }
            });
        });
    }
}

class TopicMenu {
    constructor(onCategorySelect) {
        this.onCategorySelect = onCategorySelect;
        this.selectedTopicId = 'all';
        this.isOpen = false;

        this.burgerBtn = Dom.get('burger-btn');
        this.drawer = Dom.get('theme-drawer');
        this.overlay = Dom.get('theme-drawer-overlay');
        this.closeBtn = Dom.get('theme-drawer-close');
        this.list = Dom.get('theme-drawer-list');
        this.categoriesContainer = Dom.get('categories-container');

        this.renderMenu();
        this.renderCategories();
        this.bindEvents();
    }

    renderMenu() {
        if (!this.list) return;

        if (typeof THEMES === 'undefined') {
            console.error('Категория не найдена.');
            return;
        }

        const allItem = this.menuItemHTML('all', Translations.get('allThemes'));
        const topicItems = THEMES.map(theme => this.menuItemHTML(theme.id, Dom.sanitize(getThemeLabel(theme)))).join('');

        this.list.innerHTML = allItem + topicItems;
    }

    menuItemHTML(id, label) {
        const active = this.selectedTopicId === id;
        return `
            <button
                type="button"
                class="theme-drawer__item${active ? ' theme-drawer__item--active' : ''}"
                data-theme="${id}"
                role="option"
                aria-selected="${active}"
            >${label}</button>
        `;
    }

    renderCategories() {
        if (!this.categoriesContainer) return;

        if (typeof CATEGORIES === 'undefined') {
            console.error('Категория не найдена');
            return;
        }

        const visibleCategories = this.selectedTopicId === 'all'
            ? CATEGORIES
            : CATEGORIES.filter(category => Array.isArray(category.theme) && category.theme.includes(this.selectedTopicId));

        if (visibleCategories.length === 0) {
            this.categoriesContainer.innerHTML = `
                <p class="categories__empty">${Translations.get('emptyThemeCategories')}</p>
            `;
            return;
        }

        this.categoriesContainer.innerHTML = visibleCategories.map(category => this.categoryHTML(category)).join('');
    }

    categoryHTML(category) {
        const color = category.color || (typeof DEFAULT_CATEGORY_COLOR !== 'undefined' ? DEFAULT_CATEGORY_COLOR : '#4682B4');
        const badge = category.isNew ? `<span class="new-badge">${Translations.get('newBadge')}</span>` : '';
        const translated = QuizData.getCategory(category.key) || category;
        const title = Dom.sanitize(translated.title || '');

        return `
            <button class="category-btn" data-category="${category.key}" style="--category-color: ${color}; border-top-color: ${color};" aria-label="${Translations.get('selectCategoryAriaLabel', { title })}">
                ${badge}
                <span class="category-btn__icon" aria-hidden="true">${category.icon}</span>
                <span class="category-btn__title">${title}</span>
                <br>
            </button>
        `;
    }

    selectTopic(topicId) {
        if (this.selectedTopicId !== topicId) {
            this.selectedTopicId = topicId;
            this.renderMenu();
            this.renderCategories();
        }
        this.close();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        if (!this.drawer) return;
        this.isOpen = true;
        this.drawer.classList.add('theme-drawer--open');
        this.overlay?.classList.add('theme-drawer-overlay--visible');
        this.burgerBtn?.setAttribute('aria-expanded', 'true');
        this.burgerBtn?.classList.add('burger-btn--active');
    }

    close() {
        if (!this.drawer) return;
        this.isOpen = false;
        this.drawer.classList.remove('theme-drawer--open');
        this.overlay?.classList.remove('theme-drawer-overlay--visible');
        this.burgerBtn?.setAttribute('aria-expanded', 'false');
        this.burgerBtn?.classList.remove('burger-btn--active');
    }

    setVisible(visible) {
        if (!this.burgerBtn) return;
        this.burgerBtn.classList.toggle('burger-btn--hidden', !visible);
        if (!visible) this.close();
    }

    bindEvents() {
        this.categoriesContainer?.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn && btn.dataset.category) {
                this.onCategorySelect(btn.dataset.category);
            }
        });

        this.burgerBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        this.closeBtn?.addEventListener('click', () => this.close());
        this.overlay?.addEventListener('click', () => this.close());

        this.list?.addEventListener('click', (e) => {
            const item = e.target.closest('.theme-drawer__item');
            if (item && item.dataset.theme) {
                this.selectTopic(item.dataset.theme);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
                this.burgerBtn?.focus();
            }
        });
    }
}

class LanguageSelector {
    constructor() {
        this.isOpen = false;
        this.current = LANGUAGES.find(lang => lang.code === CURRENT_LANGUAGE_CODE) || LANGUAGES[0];

        this.root = Dom.get('language-selector');
        this.toggleBtn = Dom.get('language-selector-toggle');
        this.dropdown = Dom.get('language-selector-dropdown');

        this.render();
        this.bindEvents();
    }

    render() {
        if (!this.toggleBtn || !this.dropdown) return;

        this.toggleBtn.innerHTML = `
            <span class="language-selector__code" aria-hidden="true">${this.current.code.toUpperCase()}</span>
        `;
        this.toggleBtn.setAttribute('aria-label', Translations.get('interfaceLanguageLabel', { name: this.current.name }));

        this.dropdown.innerHTML = LANGUAGES.map(lang => {
            const active = lang.code === this.current.code;
            return `
                <a
                    href="${lang.url}"
                    class="language-option${active ? ' language-option--active' : ''}"
                    data-lang="${lang.code}"
                    role="option"
                    aria-selected="${active}"
                >
                    <span class="language-option__code" aria-hidden="true">${lang.code.toUpperCase()}</span>
                    <span class="language-option__name">${Dom.sanitize(lang.name)}</span>
                    ${active ? '<span class="language-option__check" aria-hidden="true">✓</span>' : ''}
                </a>
            `;
        }).join('');
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        if (!this.root) return;
        this.isOpen = true;
        this.root.classList.add('language-selector--open');
        this.toggleBtn?.setAttribute('aria-expanded', 'true');
    }

    close() {
        if (!this.root) return;
        this.isOpen = false;
        this.root.classList.remove('language-selector--open');
        this.toggleBtn?.setAttribute('aria-expanded', 'false');
    }

    setVisible(visible) {
        if (!this.root) return;
        this.root.classList.toggle('language-selector--hidden', !visible);
        if (!visible) this.close();
    }

    bindEvents() {
        this.toggleBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        this.dropdown?.addEventListener('click', (e) => {
            const option = e.target.closest('.language-option');
            if (!option) return;

            if (option.getAttribute('href') === '#') {
                e.preventDefault();
            }
            this.close();
        });

        document.addEventListener('click', (e) => {
            if (this.isOpen && this.root && !this.root.contains(e.target)) {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
                this.toggleBtn?.focus();
            }
        });
    }
}

class ExitModal {
    constructor({ onConfirm, onToggle }) {
        this.onConfirm = onConfirm;
        this.onToggle = onToggle;

        this.modal = Dom.get('exit-modal');
        this.confirmBtn = Dom.get('exit-confirm');
        this.cancelBtn = Dom.get('exit-cancel');

        this.bindEvents();
    }

    isOpen() {
        return Boolean(this.modal?.classList.contains('active'));
    }

    show() {
        this.modal?.classList.add('active');
        this.onToggle();
    }

    hide() {
        this.modal?.classList.remove('active');
        this.onToggle();
    }

    bindEvents() {
        this.confirmBtn?.addEventListener('click', () => this.onConfirm());
        this.cancelBtn?.addEventListener('click', () => this.hide());

        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });
    }
}

class CategoryInfoScreen {
    constructor({ onBack, onStart }) {
        this.element = Dom.get('category-info-screen');
        this.selectedCategory = null;

        this.icon = Dom.get('category-info-icon');
        this.title = Dom.get('category-info-title');
        this.description = Dom.get('category-info-description');
        this.questionsCount = Dom.get('category-info-questions');
        this.age = Dom.get('category-info-age');

        Dom.get('category-info-back')?.addEventListener('click', () => onBack());
        Dom.get('category-info-start')?.addEventListener('click', () => {
            if (this.selectedCategory) onStart(this.selectedCategory);
        });
    }

    fill(categoryKey) {
        const category = QuizData.getCategory(categoryKey);
        if (!category) {
            throw new Error(`Категория "${categoryKey}" не найдена`);
        }

        Dom.setText(this.icon, category.icon);
        Dom.setText(this.title, category.title);
        Dom.setText(this.description, category.description);
        Dom.setText(this.questionsCount, category.questions);
        Dom.setText(this.age, category.age);

        this.selectedCategory = categoryKey;
    }
}

class QuizScreen {
    constructor({ onFinish, onExitRequest }) {
        this.onFinish = onFinish;
        this.onExitRequest = onExitRequest;

        this.element = Dom.get('quiz-screen');
        this.questionText = Dom.get('question-text');
        this.imageContainer = Dom.get('question-image-container');
        this.answersContainer = Dom.get('answers-container');
        this.currentQuestionSpan = Dom.get('current-question');
        this.totalQuestionsSpan = Dom.get('total-questions');
        this.progressFill = Dom.get('progress-fill');
        this.nextBtn = Dom.get('next-btn');
        this.backBtn = Dom.get('back-btn');

        this.reset();

        this.backBtn?.addEventListener('click', () => this.goBack());
        this.nextBtn?.addEventListener('click', () => this.nextQuestion());
    }

    reset() {
        this.category = null;
        this.questions = [];
        this.currentIndex = 0;
        this.history = [];
        this.selectedAnswers = {};
        this.confirmedAnswers = new Set();
    }

    start(category, questions) {
        this.reset();
        this.category = category;
        this.questions = QuizData.shuffle(questions);
        Dom.setText(this.totalQuestionsSpan, this.questions.length);
    }

    loadQuestion() {
        try {
            const question = this.questions[this.currentIndex];
            if (!question) {
                throw new Error('Вопрос не найден');
            }

            this.updateProgress();
            this.loadImage(question.image);
            this.preloadImage(this.questions[this.currentIndex + 1]?.image);
            Dom.setText(this.questionText, question.question);
            this.renderAnswers(question.answers);

            const savedAnswer = this.selectedAnswers[this.currentIndex];
            if (savedAnswer !== undefined) {
                this.restoreAnswerState(savedAnswer, this.confirmedAnswers.has(this.currentIndex));
            } else {
                this.setNextEnabled(false);
            }

            this.updateBackButton();
        } catch (error) {
            console.error('Ошибка загрузки вопроса', error);
        }
    }

    updateProgress() {
        Dom.setText(this.currentQuestionSpan, this.currentIndex + 1);
        const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
        if (this.progressFill) {
            this.progressFill.style.width = progress + '%';
            this.progressFill.parentElement.setAttribute('aria-valuenow', Math.round(progress));
        }
    }

    loadImage(imagePath) {
        if (!this.imageContainer) return;

        this.imageContainer.innerHTML = '';
        if (!imagePath) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'question-image-wrapper';

        const placeholder = document.createElement('div');
        placeholder.className = 'question-image-placeholder';
        placeholder.innerHTML = '<div class="placeholder-spinner"></div>';

        const img = document.createElement('img');
        img.className = 'question-image';
        img.alt = Translations.get('questionImageAlt');
        img.style.opacity = '0';

        img.onload = () => {
            setTimeout(() => {
                img.style.opacity = '1';
                placeholder.style.opacity = '0';
                setTimeout(() => placeholder.remove(), 300);
            }, 100);
        };

        img.onerror = () => {
            console.warn(`Не удалось загрузить изображение: ${imagePath}`);
            placeholder.innerHTML = '<div class="placeholder-error">📷</div>';
        };

        wrapper.appendChild(placeholder);
        wrapper.appendChild(img);
        this.imageContainer.appendChild(wrapper);
        img.src = imagePath;
    }

    preloadImage(imagePath) {
        if (!imagePath) return;
        const img = new Image();
        img.src = imagePath;
    }

    renderAnswers(answers) {
        if (!this.answersContainer) return;

        this.answersContainer.innerHTML = '';

        if (!Array.isArray(answers)) {
            console.warn('Ответы должны быть массивом');
            return;
        }

        answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.dataset.index = index;
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', `Ответ ${index + 1}`);
            button.textContent = Dom.sanitize(answer);
            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });
    }

    answerButtons() {
        return this.answersContainer.querySelectorAll('.answer-btn');
    }

    restoreAnswerState(selectedIndex, isConfirmed) {
        const buttons = this.answerButtons();

        buttons.forEach(btn => {
            btn.classList.remove('selected');
            btn.classList.toggle('disabled', isConfirmed);
        });

        buttons[selectedIndex]?.classList.add('selected');
        this.setNextEnabled(true);
    }

    selectAnswer(selectedIndex) {
        if (this.confirmedAnswers.has(this.currentIndex)) return;

        this.selectedAnswers[this.currentIndex] = selectedIndex;

        const buttons = this.answerButtons();
        buttons.forEach(btn => btn.classList.remove('selected'));
        buttons[selectedIndex].classList.add('selected');

        setTimeout(() => this.setNextEnabled(true), 300);
    }

    nextQuestion() {
        this.confirmedAnswers.add(this.currentIndex);
        this.history.push(this.currentIndex);
        this.currentIndex++;

        if (this.currentIndex < this.questions.length) {
            this.loadQuestion();
        } else {
            this.onFinish();
        }
    }

    goBack() {
        if (this.history.length > 0) {
            this.currentIndex = this.history.pop();
            this.loadQuestion();
        } else {
            this.onExitRequest();
        }
    }

    updateBackButton() {
        if (!this.backBtn) return;
        this.backBtn.style.opacity = this.history.length === 0 ? '0.5' : '1';
    }

    setNextEnabled(enabled) {
        if (!this.nextBtn) return;
        this.nextBtn.classList.toggle('active', enabled);
        this.nextBtn.disabled = !enabled;
    }
}

class ResultsScreen {
    constructor({ onPlayAgain, onChooseAnother }) {
        this.element = Dom.get('results-screen');
        this.icon = Dom.get('results-icon');
        this.title = Dom.get('results-title');
        this.message = Dom.get('results-message');
        this.scoreSpan = Dom.get('final-score');
        this.correctSpan = Dom.get('correct-count');
        this.incorrectSpan = Dom.get('incorrect-count');
        this.percentageSpan = Dom.get('percentage');
        this.questionsList = Dom.get('results-questions-list');

        Dom.get('play-again-btn')?.addEventListener('click', () => onPlayAgain());
        Dom.get('change-category-btn')?.addEventListener('click', () => onChooseAnother());
    }

    render(questions, selectedAnswers) {
        const correctCount = questions.filter((question, index) => selectedAnswers[index] === question.correct).length;
        const percentage = Math.round((correctCount / questions.length) * 100);

        Dom.setText(this.scoreSpan, correctCount * 10);
        Dom.setText(this.correctSpan, correctCount);
        Dom.setText(this.incorrectSpan, questions.length - correctCount);
        Dom.setText(this.percentageSpan, percentage + '%');

        this.renderSummary(percentage);
        this.renderQuestionsList(questions, selectedAnswers);
        this.resetScroll();
    }

    renderSummary(percentage) {
        let level;
        if (percentage >= 90) level = { icon: '🏆', key: 'Excellent' };
        else if (percentage >= 70) level = { icon: '🌟', key: 'Great' };
        else if (percentage >= 50) level = { icon: '👍', key: 'Good' };
        else level = { icon: '💪', key: 'Low' };

        Dom.setText(this.icon, level.icon);
        Dom.setText(this.title, Translations.get(`result${level.key}Title`));
        Dom.setText(this.message, Translations.get(`result${level.key}Message`));
    }

    renderQuestionsList(questions, selectedAnswers) {
        if (!this.questionsList) return;

        this.questionsList.innerHTML = '';
        this.resetScroll();

        questions.forEach((question, index) => {
            this.questionsList.appendChild(this.questionItem(question, index, selectedAnswers[index]));
        });

        setTimeout(() => this.resetScroll(), 100);
    }

    questionItem(question, index, userAnswer) {
        const isCorrect = userAnswer === question.correct;
        const userAnswerText = userAnswer !== undefined ? question.answers[userAnswer] : Translations.get('notAnswered');
        const correctAnswerText = question.answers[question.correct];

        const item = document.createElement('div');
        item.className = `results-question-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const header = document.createElement('div');
        header.className = 'question-header';
        header.innerHTML = `
            <span class="question-number">${Translations.get('questionNumberLabel', { number: index + 1 })}</span>
            <span class="question-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? Translations.get('correctStatus') : Translations.get('incorrectStatus')}
            </span>
        `;

        const text = document.createElement('div');
        text.className = 'question-text';
        text.textContent = Dom.sanitize(question.question);

        const answers = document.createElement('div');
        answers.className = 'answers-container';
        answers.appendChild(this.answerRow('user-answer', Translations.get('yourAnswerLabel'), userAnswerText));

        if (!isCorrect) {
            answers.appendChild(this.answerRow('correct-answer', Translations.get('correctAnswerLabel'), correctAnswerText));
        }

        if (question.explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'explanation-row';
            explanation.innerHTML = `
                <span class="explanation-icon">ⓘ</span>
                <span class="explanation-text">${Dom.sanitize(question.explanation)}</span>
            `;
            answers.appendChild(explanation);
        }

        item.appendChild(header);
        item.appendChild(text);
        item.appendChild(answers);
        return item;
    }

    answerRow(modifier, label, value) {
        const row = document.createElement('div');
        row.className = `answer-row ${modifier}`;
        row.innerHTML = `
            <span class="answer-label">${label}</span>
            <span class="answer-value">${Dom.sanitize(value)}</span>
        `;
        return row;
    }

    resetScroll() {
        if (!this.questionsList) return;
        this.questionsList.scrollTop = 0;
        requestAnimationFrame(() => {
            this.questionsList.scrollTop = 0;
        });
    }
}

class QuizApp {
    constructor() {
        try {
            Translations.applyToPage();

            this.welcomeScreen = Dom.get('welcome-screen');
            this.exitBtn = Dom.get('exit-btn');

            this.themeToggle = document.getElementById('theme-toggle');

            this.topicMenu = new TopicMenu(category => this.openCategory(category));
            this.languageSelector = new LanguageSelector();
            this.exitModal = new ExitModal({
                onConfirm: () => this.returnToWelcome(),
                onToggle: () => this.updateHeaderControls()
            });
            this.categoryInfo = new CategoryInfoScreen({
                onBack: () => this.showScreen(this.welcomeScreen),
                onStart: category => this.startQuiz(category)
            });
            this.quiz = new QuizScreen({
                onFinish: () => this.showResults(),
                onExitRequest: () => this.exitModal.show()
            });
            this.results = new ResultsScreen({
                onPlayAgain: () => this.startQuiz(this.quiz.category),
                onChooseAnother: () => this.showScreen(this.welcomeScreen)
            });

            this.exitBtn?.addEventListener('click', () => this.handleExitClick());

            this.updateHeaderControls();
            DataValidator.run();
        } catch (error) {
            console.error('Ошибка инициализации приложения', error);
        }
    }

    openCategory(category) {
        try {
            this.categoryInfo.fill(category);
            this.showScreen(this.categoryInfo.element);
        } catch (error) {
            console.error('Ошибка отображения информации о категории', error);
        }
    }

    startQuiz(category) {
        try {
            const questions = QuizData.getQuestions(category);
            if (!questions) {
                throw new Error(`Вопросы для категории "${category}" не найдены`);
            }

            this.quiz.start(category, questions);
            this.showScreen(this.quiz.element);
            this.quiz.loadQuestion();
        } catch (error) {
            console.error('Ошибка запуска викторины', error);
        }
    }

    showResults() {
        try {
            this.results.render(this.quiz.questions, this.quiz.selectedAnswers);
            this.showScreen(this.results.element);
        } catch (error) {
            console.error('Ошибка отображения результатов', error);
        }
    }

    handleExitClick() {
        if (this.welcomeScreen?.classList.contains('active')) {
            window.location.href = CONFIG.portalUrl;
        } else {
            this.exitModal.show();
        }
    }

    returnToWelcome() {
        this.exitModal.hide();
        this.showScreen(this.welcomeScreen);
        this.quiz.reset();
        this.results.resetScroll();
    }

    showScreen(screen) {
        if (!screen) return;

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        screen.classList.add('active');

        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (screen !== this.results.element) {
            this.results.resetScroll();
        }

        this.updateHeaderControls();
    }

    updateHeaderControls() {
        const visible = Boolean(this.welcomeScreen?.classList.contains('active')) && !this.exitModal.isOpen();

        this.languageSelector.setVisible(visible);
        this.topicMenu.setVisible(visible);
        this.themeToggle?.classList.toggle('theme-toggle--hidden', !visible);
    }
}

Theme.init();
document.addEventListener('DOMContentLoaded', () => {
    try {
        Theme.renderButton();
        new QuizApp();
    } catch (error) {
        console.error('Критическая ошибка инициализации приложения:', error);
    }
});