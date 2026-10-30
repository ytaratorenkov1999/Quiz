const LANGUAGES = [
    { code: 'ru', name: 'Русский', url: 'index_ru.html' },
    { code: 'en', name: 'English', url: 'index_en.html' },
    { code: 'zh', name: '中文', url: 'index_zh.html' }
];


const UI_STRINGS = {
    ru: {
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
        newBadge: 'Новинка'
    },
    en: {
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
        newBadge: 'New'
    },
    zh: {
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
        newBadge: '新'
    }
};


const CURRENT_LANGUAGE_CODE = window.CURRENT_LANGUAGE_CODE || 'ru';

function t(key, params) {
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

class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.questionHistory = [];
        this.selectedAnswers = {};
        this.confirmedAnswers = new Set();
        this.portalUrl = '/';

        this.currentLanguage = null;
        this.isLanguageDropdownOpen = false;

        this.selectedThemeId = 'all';
        this.isThemeDrawerOpen = false;

        this.init();
    }

    init() {
        try {
            this.cacheElements();
            this.applyUIStrings();
            this.renderThemeMenu();
            this.renderCategoryButtons();
            this.initLanguageSelector();
            this.attachEventListeners();
            this.updateLanguageSelectorVisibility();
            this.validateQuestionsDatabase();
        } catch (error) {
            this.handleError('Ошибка инициализации приложения', error);
        }
    }

    applyUIStrings() {
        try {
            document.title = t('mainTitle');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = t(key);
            });
            document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
                const key = el.getAttribute('data-i18n-aria-label');
                el.setAttribute('aria-label', t(key));
            });
        } catch (error) {
            this.handleError('Ошибка применения переводов интерфейса', error);
        }
    }

    cacheElements() {
        this.categoriesContainer = this.getElement('categories-container');
        this.burgerBtn = this.getElement('burger-btn');
        this.themeDrawer = this.getElement('theme-drawer');
        this.themeDrawerOverlay = this.getElement('theme-drawer-overlay');
        this.themeDrawerClose = this.getElement('theme-drawer-close');
        this.themeDrawerList = this.getElement('theme-drawer-list');
        this.languageSelectorRoot = this.getElement('language-selector');
        this.languageSelectorToggle = this.getElement('language-selector-toggle');
        this.languageSelectorDropdown = this.getElement('language-selector-dropdown');
        this.welcomeScreen = this.getElement('welcome-screen');
        this.categoryInfoScreen = this.getElement('category-info-screen');
        this.quizScreen = this.getElement('quiz-screen');
        this.resultsScreen = this.getElement('results-screen');
        this.categoryInfoIcon = this.getElement('category-info-icon');
        this.categoryInfoTitle = this.getElement('category-info-title');
        this.categoryInfoDescription = this.getElement('category-info-description');
        this.categoryInfoQuestions = this.getElement('category-info-questions');
        this.categoryInfoAge = this.getElement('category-info-age');
        this.categoryInfoBack = this.getElement('category-info-back');
        this.categoryInfoStart = this.getElement('category-info-start');
        this.questionText = this.getElement('question-text');
        this.questionImageContainer = this.getElement('question-image-container');
        this.answersContainer = this.getElement('answers-container');
        this.currentQuestionSpan = this.getElement('current-question');
        this.totalQuestionsSpan = this.getElement('total-questions');
        this.progressFill = this.getElement('progress-fill');
        this.nextBtn = this.getElement('next-btn');
        this.backBtn = this.getElement('back-btn');
        this.resultsIcon = this.getElement('results-icon');
        this.resultsTitle = this.getElement('results-title');
        this.finalScoreSpan = this.getElement('final-score');
        this.correctCountSpan = this.getElement('correct-count');
        this.incorrectCountSpan = this.getElement('incorrect-count');
        this.resultsMessage = this.getElement('results-message');
        this.percentageSpan = this.getElement('percentage');
        this.resultsQuestionsList = this.getElement('results-questions-list');

        this.exitBtn = this.getElement('exit-btn');

        this.exitModal = this.getElement('exit-modal');
        this.exitConfirm = this.getElement('exit-confirm');
        this.exitCancel = this.getElement('exit-cancel');
    }

    getElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Элемент с ID "${id}" не найден`);
        }
        return element;
    }

    validateQuestionsDatabase() {
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

        this.validateCategoriesSync();
    }

    validateCategoriesSync() {
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

        this.validateThemesSync();
    }


    validateThemesSync() {
        if (typeof CATEGORIES === 'undefined' || typeof THEMES === 'undefined') {
            return;
        }

        const themeIds = new Set(THEMES.map(t => t.id));

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


    renderThemeMenu() {
        if (!this.themeDrawerList) return;

        if (typeof THEMES === 'undefined') {
            console.error('Категория не найдена.');
            return;
        }

        const allItem = `
            <button
                type="button"
                class="theme-drawer__item${this.selectedThemeId === 'all' ? ' theme-drawer__item--active' : ''}"
                data-theme="all"
                role="option"
                aria-selected="${this.selectedThemeId === 'all'}"
            >${t('allThemes')}</button>
        `;

        const themeItems = THEMES.map(theme => `
            <button
                type="button"
                class="theme-drawer__item${this.selectedThemeId === theme.id ? ' theme-drawer__item--active' : ''}"
                data-theme="${theme.id}"
                role="option"
                aria-selected="${this.selectedThemeId === theme.id}"
            >${this.sanitizeText(getThemeLabel(theme))}</button>
        `).join('');

        this.themeDrawerList.innerHTML = allItem + themeItems;
    }

    selectTheme(themeId) {
        if (this.selectedThemeId !== themeId) {
            this.selectedThemeId = themeId;
            this.renderThemeMenu();
            this.renderCategoryButtons();
        }
        this.closeThemeDrawer();
    }

    toggleThemeDrawer() {
        this.isThemeDrawerOpen ? this.closeThemeDrawer() : this.openThemeDrawer();
    }

    openThemeDrawer() {
        if (!this.themeDrawer) return;
        this.isThemeDrawerOpen = true;
        this.themeDrawer.classList.add('theme-drawer--open');
        this.themeDrawerOverlay?.classList.add('theme-drawer-overlay--visible');
        this.burgerBtn?.setAttribute('aria-expanded', 'true');
        this.burgerBtn?.classList.add('burger-btn--active');
    }

    closeThemeDrawer() {
        if (!this.themeDrawer) return;
        this.isThemeDrawerOpen = false;
        this.themeDrawer.classList.remove('theme-drawer--open');
        this.themeDrawerOverlay?.classList.remove('theme-drawer-overlay--visible');
        this.burgerBtn?.setAttribute('aria-expanded', 'false');
        this.burgerBtn?.classList.remove('burger-btn--active');
    }


    renderCategoryButtons() {
        if (!this.categoriesContainer) return;

        if (typeof CATEGORIES === 'undefined') {
            console.error('Категория не найдена');
            return;
        }

        const visibleCategories = this.selectedThemeId === 'all'
            ? CATEGORIES
            : CATEGORIES.filter(category => Array.isArray(category.theme) && category.theme.includes(this.selectedThemeId));

        if (visibleCategories.length === 0) {
            this.categoriesContainer.innerHTML = `
                <p class="categories__empty">${t('emptyThemeCategories')}</p>
            `;
            return;
        }

        const html = visibleCategories.map(category => {
            const color = category.color || (typeof DEFAULT_CATEGORY_COLOR !== 'undefined' ? DEFAULT_CATEGORY_COLOR : '#4682B4');
            const badge = category.isNew ? `<span class="new-badge">${t('newBadge')}</span>` : '';
            const translated = this.getCategoryData(category.key) || category;
            const title = translated.title || '';

            return `
                <button class="category-btn" data-category="${category.key}" style="--category-color: ${color}; border-top-color: ${color};" aria-label="${t('selectCategoryAriaLabel', { title: this.sanitizeText(title) })}">
                    ${badge}
                    <span class="category-btn__icon" aria-hidden="true">${category.icon}</span>
                    <span class="category-btn__title">${this.sanitizeText(title)}</span>
                    <br>
                </button>
            `;
        }).join('');

        this.categoriesContainer.innerHTML = html;
    }


    initLanguageSelector() {
        this.currentLanguage = LANGUAGES.find(lang => lang.code === CURRENT_LANGUAGE_CODE) || LANGUAGES[0];
        this.renderLanguageSelector();
    }

    renderLanguageSelector() {
        if (!this.languageSelectorToggle || !this.languageSelectorDropdown) return;

        this.languageSelectorToggle.innerHTML = `
            <span class="language-selector__code" aria-hidden="true">${this.currentLanguage.code.toUpperCase()}</span>
        `;
        this.languageSelectorToggle.setAttribute('aria-label', t('interfaceLanguageLabel', { name: this.currentLanguage.name }));

        this.languageSelectorDropdown.innerHTML = LANGUAGES.map(lang => `
            <a
                href="${lang.url}"
                class="language-option${lang.code === this.currentLanguage.code ? ' language-option--active' : ''}"
                data-lang="${lang.code}"
                role="option"
                aria-selected="${lang.code === this.currentLanguage.code}"
            >
                <span class="language-option__code" aria-hidden="true">${lang.code.toUpperCase()}</span>
                <span class="language-option__name">${this.sanitizeText(lang.name)}</span>
                ${lang.code === this.currentLanguage.code ? '<span class="language-option__check" aria-hidden="true">✓</span>' : ''}
            </a>
        `).join('');
    }

    toggleLanguageDropdown() {
        this.isLanguageDropdownOpen ? this.closeLanguageDropdown() : this.openLanguageDropdown();
    }

    openLanguageDropdown() {
        if (!this.languageSelectorRoot) return;
        this.isLanguageDropdownOpen = true;
        this.languageSelectorRoot.classList.add('language-selector--open');
        this.languageSelectorToggle?.setAttribute('aria-expanded', 'true');
    }

    closeLanguageDropdown() {
        if (!this.languageSelectorRoot) return;
        this.isLanguageDropdownOpen = false;
        this.languageSelectorRoot.classList.remove('language-selector--open');
        this.languageSelectorToggle?.setAttribute('aria-expanded', 'false');
    }

    attachEventListeners() {
        if (this.exitBtn) {
            this.exitBtn.addEventListener('click', () => this.handleExitClick());
        }

        if (this.categoriesContainer) {

            this.categoriesContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.category-btn');
                if (btn && btn.dataset.category) {
                    this.showCategoryInfo(btn.dataset.category);
                }
            });
        }

        if (this.burgerBtn) {
            this.burgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleThemeDrawer();
            });
        }

        if (this.themeDrawerClose) {
            this.themeDrawerClose.addEventListener('click', () => this.closeThemeDrawer());
        }

        if (this.themeDrawerOverlay) {
            this.themeDrawerOverlay.addEventListener('click', () => this.closeThemeDrawer());
        }

        if (this.themeDrawerList) {
            this.themeDrawerList.addEventListener('click', (e) => {
                const item = e.target.closest('.theme-drawer__item');
                if (item && item.dataset.theme) {
                    this.selectTheme(item.dataset.theme);
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isThemeDrawerOpen) {
                this.closeThemeDrawer();
                this.burgerBtn?.focus();
            }
        });

        if (this.languageSelectorToggle) {
            this.languageSelectorToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLanguageDropdown();
            });
        }

        if (this.languageSelectorDropdown) {
            this.languageSelectorDropdown.addEventListener('click', (e) => {
                const option = e.target.closest('.language-option');
                if (!option) return;

                if (option.getAttribute('href') === '#') {
                    e.preventDefault();
                }
                this.closeLanguageDropdown();
            });
        }

        document.addEventListener('click', (e) => {
            if (this.isLanguageDropdownOpen && this.languageSelectorRoot && !this.languageSelectorRoot.contains(e.target)) {
                this.closeLanguageDropdown();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isLanguageDropdownOpen) {
                this.closeLanguageDropdown();
                this.languageSelectorToggle?.focus();
            }
        });

        if (this.categoryInfoBack) {
            this.categoryInfoBack.addEventListener('click', () => {
                this.showScreen(this.welcomeScreen);
            });
        }

        if (this.categoryInfoStart) {
            this.categoryInfoStart.addEventListener('click', () => {
                if (this.selectedCategory) {
                    this.startQuiz(this.selectedCategory);
                }
            });
        }

        if (this.backBtn) {
            this.backBtn.addEventListener('click', () => this.goBack());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextQuestion());
        }

        const playAgainBtn = this.getElement('play-again-btn');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.startQuiz(this.currentCategory);
            });
        }

        const changeCategoryBtn = this.getElement('change-category-btn');
        if (changeCategoryBtn) {
            changeCategoryBtn.addEventListener('click', () => {
                this.showScreen(this.welcomeScreen);
            });
        }

        if (this.exitConfirm) {
            this.exitConfirm.addEventListener('click', () => {
                this.returnToWelcomeScreen();
            });
        }

        if (this.exitCancel) {
            this.exitCancel.addEventListener('click', () => {
                this.hideExitModal();
            });
        }

        if (this.exitModal) {
            this.exitModal.addEventListener('click', (e) => {
                if (e.target === this.exitModal) {
                    this.hideExitModal();
                }
            });
        }
    }


    getCategoryData(category) {
        if (typeof getCategoryByKey === 'undefined') {
            console.error('Категория викторины не найдена.');
            return null;
        }
        return getCategoryByKey(category);
    }

    getQuestionsForCategory(category) {
        const languages = questionsDatabase[category];
        if (!languages) return null;

        const questionsForLang = languages[CURRENT_LANGUAGE_CODE];
        if (Array.isArray(questionsForLang) && questionsForLang.length > 0) {
            return questionsForLang;
        }

        console.warn(`Данные отсутствуют: вопросы для категории "${category}" на языке "${CURRENT_LANGUAGE_CODE}" не найдены`);
        return null;
    }

    showCategoryInfo(category) {
        try {
            const categoryData = this.getCategoryData(category);

            if (!categoryData) {
                throw new Error(`Категория "${category}" не найдена`);
            }

            this.safeSetText(this.categoryInfoIcon, categoryData.icon);
            this.safeSetText(this.categoryInfoTitle, categoryData.title);
            this.safeSetText(this.categoryInfoDescription, categoryData.description);
            this.safeSetText(this.categoryInfoQuestions, categoryData.questions);
            this.safeSetText(this.categoryInfoAge, categoryData.age);

            this.selectedCategory = category;
            this.showScreen(this.categoryInfoScreen);
        } catch (error) {
            this.handleError('Ошибка отображения информации о категории', error);
        }
    }

    handleExitClick() {
        if (this.welcomeScreen && this.welcomeScreen.classList.contains('active')) {
            this.exitToPortal();
        } else {
            this.showExitModal();
        }
    }

    showExitModal() {
        if (this.exitModal) {
            this.exitModal.classList.add('active');
        }
        this.updateLanguageSelectorVisibility();
    }

    hideExitModal() {
        if (this.exitModal) {
            this.exitModal.classList.remove('active');
        }
        this.updateLanguageSelectorVisibility();
    }

    returnToWelcomeScreen() {
        this.hideExitModal();
        this.showScreen(this.welcomeScreen);
        this.resetQuiz();
        this.resetResultsScroll();
    }

    exitToPortal() {
        window.location.href = this.portalUrl;
    }

    resetQuiz() {
        this.currentCategory = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.questionHistory = [];
        this.selectedAnswers = {};
        this.confirmedAnswers = new Set();
    }

    shuffleArray(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    startQuiz(category) {
        try {
            const questions = this.getQuestionsForCategory(category);

            if (!questions) {
                throw new Error(`Вопросы для категории "${category}" не найдены`);
            }

            this.currentCategory = category;
            this.questions = this.shuffleArray(questions);
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.correctAnswers = 0;
            this.questionHistory = [];
            this.selectedAnswers = {};
            this.confirmedAnswers = new Set();

            this.safeSetText(this.totalQuestionsSpan, this.questions.length);

            this.showScreen(this.quizScreen);
            this.loadQuestion();
        } catch (error) {
            this.handleError('Ошибка запуска викторины', error);
        }
    }

    loadQuestion() {
        try {
            const question = this.questions[this.currentQuestionIndex];

            if (!question) {
                throw new Error('Вопрос не найден');
            }

            this.safeSetText(this.currentQuestionSpan, this.currentQuestionIndex + 1);
            const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
            if (this.progressFill) {
                this.progressFill.style.width = progress + '%';
                this.progressFill.parentElement.setAttribute('aria-valuenow', Math.round(progress));
            }

            this.loadQuestionImage(question.image);
            this.preloadImage(this.questions[this.currentQuestionIndex + 1]?.image);
            this.safeSetText(this.questionText, question.question);
            this.createAnswerButtons(question.answers);

            const savedAnswer = this.selectedAnswers[this.currentQuestionIndex];
            const isConfirmed = this.confirmedAnswers.has(this.currentQuestionIndex);

            if (savedAnswer !== undefined) {
                this.restoreAnswerState(savedAnswer, isConfirmed);
            } else {
                this.disableNextButton();
            }

            this.updateBackButton();
        } catch (error) {
            this.handleError('Ошибка загрузки вопроса', error);
        }
    }

    loadQuestionImage(imagePath) {
        if (!this.questionImageContainer) return;

        this.questionImageContainer.innerHTML = '';

        if (imagePath) {
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'question-image-wrapper';

            const placeholder = document.createElement('div');
            placeholder.className = 'question-image-placeholder';
            placeholder.innerHTML = '<div class="placeholder-spinner"></div>';

            const img = document.createElement('img');
            img.className = 'question-image';
            img.alt = t('questionImageAlt');
            img.style.opacity = '0';

            img.onload = () => {

                setTimeout(() => {
                    img.style.opacity = '1';
                    placeholder.style.opacity = '0';
                    setTimeout(() => {
                        placeholder.remove();
                    }, 300);
                }, 100);
            };

            img.onerror = () => {
                console.warn(`Не удалось загрузить изображение: ${imagePath}`);
                placeholder.innerHTML = '<div class="placeholder-error">📷</div>';
            };

            imageWrapper.appendChild(placeholder);
            imageWrapper.appendChild(img);
            this.questionImageContainer.appendChild(imageWrapper);
            img.src = imagePath;
        }
    }

    // Заранее загружаем картинку следующего вопроса, чтобы не ждать её после "Далее"
    preloadImage(imagePath) {
        if (!imagePath) return;
        const img = new Image();
        img.src = imagePath;
    }

    createAnswerButtons(answers) {
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

            button.textContent = this.sanitizeText(answer);

            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });
    }

    restoreAnswerState(selectedIndex, isConfirmed) {
        try {
            const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');

            answerButtons.forEach(btn => {
                btn.classList.remove('selected');
                if (isConfirmed) {
                    btn.classList.add('disabled');
                } else {
                    btn.classList.remove('disabled');
                }
            });

            if (selectedIndex !== undefined) {
                answerButtons[selectedIndex].classList.add('selected');
            }

            this.enableNextButton();
        } catch (error) {
            this.handleError('Ошибка восстановления состояния ответа', error);
        }
    }

    selectAnswer(selectedIndex) {
        try {
            if (this.confirmedAnswers.has(this.currentQuestionIndex)) {
                return;
            }

            const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');

            this.selectedAnswers[this.currentQuestionIndex] = selectedIndex;

            answerButtons.forEach(btn => {
                btn.classList.remove('selected');
            });

            answerButtons[selectedIndex].classList.add('selected');

            setTimeout(() => {
                this.enableNextButton();
            }, 300);

        } catch (error) {
            this.handleError('Ошибка выбора ответа', error);
        }
    }
    nextQuestion() {
        try {
            this.confirmedAnswers.add(this.currentQuestionIndex);

            this.questionHistory.push(this.currentQuestionIndex);
            this.currentQuestionIndex++;

            if (this.currentQuestionIndex < this.questions.length) {
                this.loadQuestion();
            } else {
                this.showResults();
            }
        } catch (error) {
            this.handleError('Ошибка перехода к следующему вопросу', error);
        }
    }
    goBack() {
        if (this.questionHistory.length > 0) {
            this.currentQuestionIndex = this.questionHistory.pop();
            this.loadQuestion();
        } else {
            this.showExitModal();
        }
    }
    updateBackButton() {
        if (!this.backBtn) return;

        if (this.questionHistory.length === 0) {
            this.backBtn.style.opacity = '0.5';
        } else {
            this.backBtn.style.opacity = '1';
        }
    }

    enableNextButton() {
        if (!this.nextBtn) return;

        this.nextBtn.classList.add('active');
        this.nextBtn.disabled = false;
    }

    disableNextButton() {
        if (!this.nextBtn) return;

        this.nextBtn.classList.remove('active');
        this.nextBtn.disabled = true;
    }

    showResults() {
        try {
            this.correctAnswers = 0;
            this.score = 0;

            this.questions.forEach((question, index) => {
                const userAnswer = this.selectedAnswers[index];
                if (userAnswer === question.correct) {
                    this.correctAnswers++;
                    this.score += 10;
                }
            });
            const percentage = Math.round((this.correctAnswers / this.questions.length) * 100);
            const incorrectAnswers = this.questions.length - this.correctAnswers;
            this.safeSetText(this.finalScoreSpan, this.score);
            this.safeSetText(this.correctCountSpan, this.correctAnswers);
            this.safeSetText(this.incorrectCountSpan, incorrectAnswers);
            this.safeSetText(this.percentageSpan, percentage + '%');
            this.setResultsContent(percentage);
            this.createQuestionsList();
            this.resetResultsScroll();

            this.showScreen(this.resultsScreen);
        } catch (error) {
            this.handleError('Ошибка отображения результатов', error);
        }
    }

    resetResultsScroll() {
        try {
            if (this.resultsQuestionsList) {
                this.resultsQuestionsList.scrollTop = 0;

                requestAnimationFrame(() => {
                    this.resultsQuestionsList.scrollTop = 0;
                });
            }
        } catch (error) {
            console.warn('Ошибка сброса скролла результатов:', error);
        }
    }
    setResultsContent(percentage) {
        let icon, title, message;

        if (percentage >= 90) {
            icon = '🏆';
            title = t('resultExcellentTitle');
            message = t('resultExcellentMessage');
        } else if (percentage >= 70) {
            icon = '🌟';
            title = t('resultGreatTitle');
            message = t('resultGreatMessage');
        } else if (percentage >= 50) {
            icon = '👍';
            title = t('resultGoodTitle');
            message = t('resultGoodMessage');
        } else {
            icon = '💪';
            title = t('resultLowTitle');
            message = t('resultLowMessage');
        }

        this.safeSetText(this.resultsIcon, icon);
        this.safeSetText(this.resultsTitle, title);
        this.safeSetText(this.resultsMessage, message);
    }

    createQuestionsList() {
        if (!this.resultsQuestionsList) return;
        this.resultsQuestionsList.innerHTML = '';
        this.resetResultsScroll();
        this.questions.forEach((question, index) => {
            const userAnswer = this.selectedAnswers[index];
            const isCorrect = userAnswer === question.correct;
            const userAnswerText = userAnswer !== undefined ? question.answers[userAnswer] : t('notAnswered');
            const correctAnswerText = question.answers[question.correct];

            const questionItem = document.createElement('div');
            questionItem.className = `results-question-item ${isCorrect ? 'correct' : 'incorrect'}`;

            const questionHeader = document.createElement('div');
            questionHeader.className = 'question-header';
            questionHeader.innerHTML = `
                <span class="question-number">${t('questionNumberLabel', { number: index + 1 })}</span>
                <span class="question-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? t('correctStatus') : t('incorrectStatus')}
                </span>
            `;

            const questionTextDiv = document.createElement('div');
            questionTextDiv.className = 'question-text';
            questionTextDiv.textContent = this.sanitizeText(question.question);

            const answersContainer = document.createElement('div');
            answersContainer.className = 'answers-container';

            const userAnswerDiv = document.createElement('div');
            userAnswerDiv.className = 'answer-row user-answer';
            userAnswerDiv.innerHTML = `
                <span class="answer-label">${t('yourAnswerLabel')}</span>
                <span class="answer-value">${this.sanitizeText(userAnswerText)}</span>
            `;
            answersContainer.appendChild(userAnswerDiv);

            if (!isCorrect) {
                const correctAnswerDiv = document.createElement('div');
                correctAnswerDiv.className = 'answer-row correct-answer';
                correctAnswerDiv.innerHTML = `
                    <span class="answer-label">${t('correctAnswerLabel')}</span>
                    <span class="answer-value">${this.sanitizeText(correctAnswerText)}</span>
                `;
                answersContainer.appendChild(correctAnswerDiv);
            }

            // Пояснение
            if (question.explanation) {
                const explanationDiv = document.createElement('div');
                explanationDiv.className = 'explanation-row';
                explanationDiv.innerHTML = `
                    <span class="explanation-icon">ⓘ</span>
                    <span class="explanation-text">${this.sanitizeText(question.explanation)}</span>
                `;
                answersContainer.appendChild(explanationDiv);
            }

            questionItem.appendChild(questionHeader);
            questionItem.appendChild(questionTextDiv);
            questionItem.appendChild(answersContainer);

            this.resultsQuestionsList.appendChild(questionItem);
        });
        setTimeout(() => {
            this.resetResultsScroll();
        }, 100);
    }

    showScreen(screen) {
        if (!screen) return;

        try {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            screen.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (screen !== this.resultsScreen) {
                this.resetResultsScroll();
            }

            this.updateLanguageSelectorVisibility();
        } catch (error) {
            this.handleError('Ошибка переключения экрана', error);
        }
    }


    updateLanguageSelectorVisibility() {
        const exitModalOpen = this.exitModal?.classList.contains('active');
        const isWelcomeScreen = this.welcomeScreen?.classList.contains('active');
        const shouldShow = isWelcomeScreen && !exitModalOpen;

        if (this.languageSelectorRoot) {
            this.languageSelectorRoot.classList.toggle('language-selector--hidden', !shouldShow);
            if (!shouldShow) {
                this.closeLanguageDropdown();
            }
        }

        if (this.burgerBtn) {
            this.burgerBtn.classList.toggle('burger-btn--hidden', !shouldShow);
            if (!shouldShow) {
                this.closeThemeDrawer();
            }
        }
    }

    safeSetText(element, text) {
        if (!element) return;
        element.textContent = String(text);
    }

    sanitizeText(text) {
        if (typeof text !== 'string') return '';
        return text.replace(/[<>]/g, '');
    }

    handleError(message, error) {
        console.error(message, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new QuizApp();
    } catch (error) {
        console.error('Критическая ошибка инициализации приложения:', error);
    }
});