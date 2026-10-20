const questionsDatabase = {
    orkestr_without_secret: {
        ru: [{
            question: "Как называют первого скрипача оркестра, который помогает настраивать ансамбль?",
            answers: ["Арфа", "Гобой", "Концертмейстер", "Медные духовые"],
            correct: 2,
            image: "images/orkestr_without_secret/01_01.jpeg",
            explanation: "Концертмейстер возглавляет группу первых скрипок и взаимодействует с дирижером."
        }, {
            question: "Кто управляет общим темпом, вступлениями и характером исполнения оркестра?",
            answers: ["Партитура", "Дирижерская палочка", "Струнная группа", "Дирижер"],
            correct: 3,
            image: "images/orkestr_without_secret/01_02.jpeg",
            explanation: "Дирижер координирует музыкантов жестами и заранее работает с партитурой."
        }, {
            question: "Какая группа обычно самая многочисленная в симфоническом оркестре?",
            answers: ["Струнная группа", "Концертмейстер", "Деревянные духовые", "Ударные"],
            correct: 0,
            image: "images/orkestr_without_secret/01_03.jpeg",
            explanation: "Скрипки, альты, виолончели и контрабасы образуют основу оркестрового звучания."
        }, {
            question: "К какой группе оркестра относится флейта?",
            answers: ["Гобой", "Деревянные духовые", "Медные духовые", "Арфа"],
            correct: 1,
            image: "images/orkestr_without_secret/01_04.jpeg",
            explanation: "Несмотря на металлический корпус современной флейты, ее относят к деревянным духовым."
        }, {
            question: "К какой группе оркестра относится труба?",
            answers: ["Дирижерская палочка", "Дирижер", "Медные духовые", "Партитура"],
            correct: 2,
            image: "images/orkestr_without_secret/01_05.jpeg",
            explanation: "Звук возникает от вибрации губ музыканта в мундштуке."
        }, {
            question: "К какой группе относятся литавры, тарелки и большой барабан?",
            answers: ["Концертмейстер", "Струнная группа", "Медные духовые", "Ударные"],
            correct: 3,
            image: "images/orkestr_without_secret/01_06.jpeg",
            explanation: "На ударных играют ударами, встряхиванием или трением."
        }, {
            question: "Как называется инструмент с вертикальной рамой и множеством струн, которые защипывают пальцами?",
            answers: ["Арфа", "Деревянные духовые", "Ударные", "Гобой"],
            correct: 0,
            image: "images/orkestr_without_secret/01_07.jpeg",
            explanation: "Педали концертной арфы позволяют менять высоту отдельных групп струн."
        }, {
            question: "Как называется нотная запись, где одновременно показаны партии всех инструментов?",
            answers: ["Дирижер", "Партитура", "Арфа", "Дирижерская палочка"],
            correct: 1,
            image: "images/orkestr_without_secret/01_08.jpeg",
            explanation: "Дирижер читает партитуру, чтобы видеть полную структуру произведения."
        }, {
            question: "Какой инструмент часто дает оркестру ноту ля перед репетицией или концертом?",
            answers: ["Струнная группа", "Медные духовые", "Гобой", "Концертмейстер"],
            correct: 2,
            image: "images/orkestr_without_secret/01_09.jpeg",
            explanation: "Ясный и устойчивый тембр гобоя удобно слышен среди других инструментов."
        }, {
            question: "Как называется короткая палочка, которой часто пользуется дирижер?",
            answers: ["Деревянные духовые", "Ударные", "Партитура", "Дирижерская палочка"],
            correct: 3,
            image: "images/orkestr_without_secret/01_10.jpeg",
            explanation: "Палочка делает движения руки заметнее для большого ансамбля."
        }],
        en: [{
            question: "Who is the first violinist in an orchestra who helps tune an ensemble?",
            answers: ["Harp", "Oboe", "Concertmaster", "Brass"],
            correct: 2,
            image: "images/orkestr_without_secret/01_01.jpeg",
            explanation: "A concertmaster leads the first violin section and works with a conductor."
        }, {
            question: "Who controls the overall tempo, entrances, and character of an orchestra’s performance?",
            answers: ["Score", "Conductor’s baton", "String", "Conductor"],
            correct: 3,
            image: "images/orkestr_without_secret/01_02.jpeg",
            explanation: "A conductor coordinates musicians with gestures and works with a score in advance."
        }, {
            question: "Which section is usually the largest in a symphony orchestra?",
            answers: ["String", "Concertmaster", "Woodwinds", "Percussion"],
            correct: 0,
            image: "images/orkestr_without_secret/01_03.jpeg",
            explanation: "Violins, violas, cellos, and double basses form the foundation of the orchestral sound."
        }, {
            question: "Which section of an orchestra does the flute belong to?",
            answers: ["Oboe", "Woodwinds", "Brass", "Harp"],
            correct: 1,
            image: "images/orkestr_without_secret/01_04.jpeg",
            explanation: "Even though the body of a modern flute is made of metal, it is classified as a woodwind."
        }, {
            question: "Which section of an orchestra does the trumpet belong to?",
            answers: ["Conductor’s baton", "Conductor", "Brass", "Score"],
            correct: 2,
            image: "images/orkestr_without_secret/01_05.jpeg",
            explanation: "Sound comes from the vibration of musician’s lips in a mouthpiece."
        }, {
            question: "Which section do timpani, cymbals, and the bass drum belong to?",
            answers: ["Concertmaster", "String", "Brass", "Percussion"],
            correct: 3,
            image: "images/orkestr_without_secret/01_06.jpeg",
            explanation: "Percussion instruments are played by striking, shaking, or rubbing."
        }, {
            question: "What is the instrument with a vertical frame and many strings that are plucked with fingers?",
            answers: ["Harp", "Woodwinds", "Percussion", "Oboe"],
            correct: 0,
            image: "images/orkestr_without_secret/01_07.jpeg",
            explanation: "The pedals of a concert harp allow to change the pitch of individual groups of strings."
        }, {
            question: "What is the sheet music that shows all instrument parts at the same time?",
            answers: ["Conductor", "Score", "Harp", "Conductor’s baton"],
            correct: 1,
            image: "images/orkestr_without_secret/01_08.jpeg",
            explanation: "A conductor reads a score to see the full structure of a piece."
        }, {
            question: "Which instrument often gives an orchestra the note A before a rehearsal or concert?",
            answers: ["String", "Brass", "Oboe", "Concertmaster"],
            correct: 2,
            image: "images/orkestr_without_secret/01_09.jpeg",
            explanation: "The clear and steady tone of the oboe is easy to hear among other instruments."
        }, {
            question: "What is the short stick that a conductor often uses called?",
            answers: ["Woodwinds", "Percussion", "Score", "Conductor’s baton"],
            correct: 3,
            image: "images/orkestr_without_secret/01_10.jpeg",
            explanation: "The baton makes hand movements more visible for a large ensemble."
        }],
        zh: [{
            question: "在乐团中，负责带领第一小提琴组并协助乐团调音的首席小提琴手叫什么？",
            answers: ["竖琴", "双簧管", "乐团首席", "铜管乐器组"],
            correct: 2,
            image: "images/orkestr_without_secret/01_01.jpeg",
            explanation: "乐团首席负责带领第一小提琴组，并与指挥密切配合。"
        }, {
            question: "谁负责控制乐团演奏的整体速度、各声部的进入时机和演奏风格？",
            answers: ["总谱", "指挥棒", "弦乐器组", "指挥"],
            correct: 3,
            image: "images/orkestr_without_secret/01_02.jpeg",
            explanation: "指挥通过手势协调乐团演奏，并提前研究总谱。"
        }, {
            question: "在交响乐团中，通常人数最多的是哪个乐器组？",
            answers: ["弦乐器组", "乐团首席", "木管乐器组", "打击乐器组"],
            correct: 0,
            image: "images/orkestr_without_secret/01_03.jpeg",
            explanation: "小提琴、中提琴、大提琴和低音提琴共同构成乐团音响的基础。"
        }, {
            question: "长笛属于乐团中的哪个乐器组？",
            answers: ["双簧管", "木管乐器组", "铜管乐器组", "竖琴"],
            correct: 1,
            image: "images/orkestr_without_secret/01_04.jpeg",
            explanation: "虽然现代长笛的管身通常由金属制成，但它仍属于木管乐器组。"
        }, {
            question: "小号属于乐团中的哪个乐器组？",
            answers: ["指挥棒", "指挥", "铜管乐器组", "总谱"],
            correct: 2,
            image: "images/orkestr_without_secret/01_05.jpeg",
            explanation: "演奏者通过嘴唇在号嘴处振动，使乐器发出声音。"
        }, {
            question: "定音鼓、钹和大鼓属于哪个乐器组？",
            answers: ["乐团首席", "弦乐器组", "铜管乐器组", "打击乐器组"],
            correct: 3,
            image: "images/orkestr_without_secret/01_06.jpeg",
            explanation: "打击乐器通常通过敲击、摇动或摩擦来发声。"
        }, {
            question: "哪种乐器有一个竖立的框架和许多琴弦，演奏者用手指拨弦发声？",
            answers: ["竖琴", "木管乐器组", "打击乐器组", "双簧管"],
            correct: 0,
            image: "images/orkestr_without_secret/01_07.jpeg",
            explanation: "音乐会竖琴的踏板可以改变某些琴弦的音高。"
        }, {
            question: "哪种乐谱会同时展示乐团中所有乐器声部的演奏内容？",
            answers: ["指挥", "总谱", "竖琴", "指挥棒"],
            correct: 1,
            image: "images/orkestr_without_secret/01_08.jpeg",
            explanation: "指挥通过阅读总谱，了解整部音乐作品的整体结构。"
        }, {
            question: "在排练或演出前，乐团通常会用哪种乐器演奏标准音A（la）？",
            answers: ["弦乐器组", "铜管乐器组", "双簧管", "乐团首席"],
            correct: 2,
            image: "images/orkestr_without_secret/01_09.jpeg",
            explanation: "双簧管的音色清晰、稳定，在其他乐器的声音中也容易被听见。"
        }, {
            question: "指挥经常使用的那种短棒叫什么？",
            answers: ["木管乐器组", "打击乐器组", "总谱", "指挥棒"],
            correct: 3,
            image: "images/orkestr_without_secret/01_10.jpeg",
            explanation: "指挥棒能让指挥的手势更加醒目，方便整个乐团看清指挥动作。"
        }]
    },
    films_on_emodji: {
        ru: [{
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Русалочка", "H2O: Просто добавь воды", "Титаник", "Пираты Карибского моря: На краю света"],
            correct: 2,
            image: "images/films_on_emodji/02_01.jpeg",
            explanation: "Лайнер, айсберг и драгоценность отсылают к сюжету «Титаника»."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Зверополис", "Король Лев", "Парк Юрского периода", "Мадагаскар"],
            correct: 1,
            image: "images/films_on_emodji/02_02.jpeg",
            explanation: "Лев, корона и рассвет напоминают историю Симбы и Круга жизни."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Гарри Поттер и философский камень", "Артур и минипуты", "Волшебник Изумрудного города. Дорога из жёлтого кирпича", "Властелин колец"],
            correct: 3,
            image: "images/films_on_emodji/02_03.jpeg",
            explanation: "Волшебник, Кольцо Всевластья и Роковая гора — ключевые образы саги."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Охотники за привидениями", "Каспер", "Семейка Аддамс", "Привидение"],
            correct: 0,
            image: "images/films_on_emodji/02_04.jpeg",
            explanation: "Герои ловят призраков, в том числе в зданиях Нью-Йорка."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["В поисках Немо", "Подводная братва", "Челюсти", "В поисках Дори"],
            correct: 2,
            image: "images/films_on_emodji/02_05.jpeg",
            explanation: "Акула, море и лодка — главные элементы знаменитого триллера."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Гринч – похититель Рождества", "Кошмар перед Рождеством", "Золушка", "Один дома"],
            correct: 3,
            image: "images/films_on_emodji/02_06.jpeg",
            explanation: "Мальчик остается один в доме во время рождественских каникул."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Робокоп", "ВАЛЛ-И", "Живая сталь", "Трансформеры"],
            correct: 1,
            image: "images/films_on_emodji/02_07.jpeg",
            explanation: "Робот, космос и найденное растение определяют сюжет мультфильма."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Парк юрского периода", "Назад к динозаврам", "Мой домашний динозавр", "Путешествие к центру Земли"],
            correct: 0,
            image: "images/films_on_emodji/02_08.jpeg",
            explanation: "Динозавры на острове и экскурсионные автомобили — узнаваемые детали фильма."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Спящая красавица", "Красавица и Чудовище", "Белоснежка и семь гномов", "Золушка"],
            correct: 3,
            image: "images/films_on_emodji/02_09.jpeg",
            explanation: "Туфелька, тыква и дворец связаны с историей Золушки."
        }, {
            question: "Какой фильм зашифрован эмодзи?",
            answers: ["Барашек Шон", "Тайная жизнь домашних животных", "Кунг-фу Панда", "Зверополис"],
            correct: 2,
            image: "images/films_on_emodji/02_10.jpeg",
            explanation: "Панда По становится мастером кунг-фу."
        }],
        en: [{
            question: "What movie is hidden in the emojis?",
            answers: ["The Little Mermaid", "H2O: Just Add Water", "Titanic", "Pirates of the Caribbean: At World’s End"],
            correct: 2,
            image: "images/films_on_emodji/02_01.jpeg",
            explanation: "A liner, an iceberg, and a jewel point to the plot of «Titanic»."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Zootopia", "The Lion King", "Jurassic Park", "Madagascar"],
            correct: 1,
            image: "images/films_on_emodji/02_02.jpeg",
            explanation: "A lion, a crown, and sunrise bring to mind the story of Simba and «Circle of Life»."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Harry Potter and the Philosopher’s Stone", "Arthur and the Minimoys", "The Wizard of the Emerald City Road of Yellow Bricks", "The Lord of the Rings"],
            correct: 3,
            image: "images/films_on_emodji/02_03.jpeg",
            explanation: "A wizard, the One Ring, and Mount Doom are key images of the saga."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Ghostbusters", "Casper", "The Addams Family", "Ghost"],
            correct: 0,
            image: "images/films_on_emodji/02_04.jpeg",
            explanation: "The main characters catch ghosts, including in New York buildings."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Finding Nemo", "Shark Tale", "Jaws", "Finding Dory"],
            correct: 2,
            image: "images/films_on_emodji/02_05.jpeg",
            explanation: "A shark, the sea, and a boat are the main elements of the famous thriller."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["How the Grinch Stole Christmas!", "The Nightmare Before Christmas", "Cinderella", "Home Alone"],
            correct: 3,
            image: "images/films_on_emodji/02_06.jpeg",
            explanation: "A boy is left alone in a house during Christmas vacation."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["RoboCop", "WALL-E", "Real Steel", "Transformers"],
            correct: 1,
            image: "images/films_on_emodji/02_07.jpeg",
            explanation: "A robot, space, and a found plant define the plot of the animated movie."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Jurassic Park", "Back to Dinosaurs", "My Pet Dinosaur", "Journey to the Centre of the Earth"],
            correct: 0,
            image: "images/films_on_emodji/02_08.jpeg",
            explanation: "Dinosaurs on an island and tour cars are recognizable details of the film."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Sleeping Beauty", "Beauty and the Beast", "Snow White and the Seven Dwarfs", "Cinderella"],
            correct: 3,
            image: "images/films_on_emodji/02_09.jpeg",
            explanation: "A shoe, a pumpkin, and a palace are connected to the story of Cinderella."
        }, {
            question: "What movie is hidden in the emojis?",
            answers: ["Shaun the Sheep", "The Secret Life of Pets", "Kung Fu Panda", "Zootopia"],
            correct: 2,
            image: "images/films_on_emodji/02_10.jpeg",
            explanation: "Po the Panda becomes a kung fu master."
        }],
        zh: [{
            question: "这组表情符号代表哪部电影？",
            answers: ["小美人鱼", "H2O：人鱼的水滴", "泰坦尼克号", "加勒比海盗：世界的尽头"],
            correct: 2,
            image: "images/films_on_emodji/02_01.jpeg",
            explanation: "邮轮、冰山和珠宝都让人联想到《泰坦尼克号》的故事。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["疯狂动物城", "狮子王", "侏罗纪公园", "马达加斯加"],
            correct: 1,
            image: "images/films_on_emodji/02_02.jpeg",
            explanation: "狮子、王冠和日出让人想起辛巴的故事以及 «生命的循环»。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["哈利·波特与魔法石", "亚瑟和他的迷你王国", "绿野仙踪。黄砖路", "指环王"],
            correct: 3,
            image: "images/films_on_emodji/02_03.jpeg",
            explanation: "巫师、至尊魔戒和末日火山都是这部史诗奇幻系列的标志性元素。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["捉鬼敢死队", "卡斯珀", "亚当斯一家", "人鬼情未了"],
            correct: 0,
            image: "images/films_on_emodji/02_04.jpeg",
            explanation: "主人公们专门捕捉鬼魂，其中包括纽约市建筑物里的鬼魂。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["海底总动员", "鲨鱼黑帮", "大白鲨", "多莉去哪儿"],
            correct: 2,
            image: "images/films_on_emodji/02_05.jpeg",
            explanation: "鲨鱼、大海和小船都是这部经典惊悚片中的重要元素。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["圣诞怪杰", "圣诞夜惊魂", "灰姑娘", "小鬼当家"],
            correct: 3,
            image: "images/films_on_emodji/02_06.jpeg",
            explanation: "一个男孩在圣诞假期独自留在家里。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["机械战警", "机器人总动员", "铁甲钢拳", "变形金刚"],
            correct: 1,
            image: "images/films_on_emodji/02_07.jpeg",
            explanation: "机器人、太空和发现的植物共同构成了这部动画电影的核心故事。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["侏罗纪公园", "回到恐龙时代", "我家也有恐龙", "地心历险记"],
            correct: 0,
            image: "images/films_on_emodji/02_08.jpeg",
            explanation: "岛上的恐龙和供游客乘坐的观光车都是这部电影中令人印象深刻的场景。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["睡美人", "美女与野兽", "白雪公主和七个小矮人", "灰姑娘"],
            correct: 3,
            image: "images/films_on_emodji/02_09.jpeg",
            explanation: "水晶鞋、南瓜和宫殿都与灰姑娘的故事有关。"
        }, {
            question: "这组表情符号代表哪部电影？",
            answers: ["小羊肖恩", "宠物的秘密生活", "功夫熊猫", "疯狂动物城"],
            correct: 2,
            image: "images/films_on_emodji/02_10.jpeg",
            explanation: "阿宝熊猫最终成为了一名功夫高手。"
        }]
    },
    heroes_russian_animation: {
        ru: [{
            question: "Какого героя нашли в ящике с апельсинами?",
            answers: ["Карлсон", "Чебурашка", "Винни Пух", "Крокодил Гена"],
            correct: 1,
            image: "images/heroes_russian_animation/03_01.jpeg",
            explanation: "Чебурашка приехал в город в ящике с апельсинами и подружился с Геной."
        }, {
            question: "Какой герой работает в зоопарке крокодилом?",
            answers: ["Умка", "Заяц", "Крокодил Гена", "Кот Матроскин"],
            correct: 2,
            image: "images/heroes_russian_animation/03_02.jpeg",
            explanation: "Гена приходит на работу в зоопарк, а свободное время проводит с друзьями."
        }, {
            question: "Какой герой из Простоквашино любит хозяйство и завел корову Мурку?",
            answers: ["Кот Леопольд", "Кеша", "Печкин", "Кот Матроскин"],
            correct: 3,
            image: "images/heroes_russian_animation/03_03.jpeg",
            explanation: "Матроскин практичен, бережлив и заботится о домашнем хозяйстве."
        }, {
            question: "Какой герой летает с помощью пропеллера на спине и живет на крыше?",
            answers: ["Карлсон", "Винни Пух", "Чебурашка", "Кот Матроскин"],
            correct: 0,
            image: "images/heroes_russian_animation/03_04.jpeg",
            explanation: "Карлсон называет себя мужчиной в самом расцвете сил и дружит с Малышом."
        }, {
            question: "Как зовут белого медвежонка, который впервые видит Новый год?",
            answers: ["Заяц", "Умка", "Крокодил Гена", "Карлсон"],
            correct: 1,
            image: "images/heroes_russian_animation/03_05.jpeg",
            explanation: "Умка — любознательный медвежонок из одноименного мультфильма."
        }, {
            question: "Какой кот постоянно призывает мышей жить дружно?",
            answers: ["Кеша", "Печкин", "Кот Леопольд", "Умка"],
            correct: 2,
            image: "images/heroes_russian_animation/03_06.jpeg",
            explanation: "Леопольд старается решать конфликты мирно и повторяет призыв к дружбе."
        }, {
            question: "Кто убегает от Волка в мультсериале «Ну, погоди!»?",
            answers: ["Винни Пух", "Чебурашка", "Кот Матроскин", "Заяц"],
            correct: 3,
            image: "images/heroes_russian_animation/03_07.jpeg",
            explanation: "Заяц обычно оказывается находчивее Волка и избегает его ловушек."
        }, {
            question: "Какого попугая разыскивают по объявлению после очередного побега?",
            answers: ["Кеша", "Гена", "Карлсон", "Леопольд"],
            correct: 0,
            image: "images/heroes_russian_animation/03_08.jpeg",
            explanation: "Попугай Кеша живет у мальчика Вовки, но любит самостоятельные приключения."
        }, {
            question: "Какой герой отправляется за медом с воздушным шариком?",
            answers: ["Печкин", "Винни Пух", "Умка", "Заяц"],
            correct: 1,
            image: "images/heroes_russian_animation/03_09.jpeg",
            explanation: "В советском мультфильме Винни Пух использует шарик, чтобы подняться к пчелиному улью."
        }, {
            question: "Как зовут почтальона, который приносит письма и посылки в Простоквашино?",
            answers: ["Чебурашка", "Кот Матроскин", "Печкин", "Кеша"],
            correct: 2,
            image: "images/heroes_russian_animation/03_10.jpeg",
            explanation: "Почтальон Печкин следит за порядком и доставляет корреспонденцию."
        }],
        en: [{
            question: "What character was found in a box of oranges?",
            answers: ["Karlsson", "Cheburashka", "Winnie-the-Pooh", "Gena the Crocodile"],
            correct: 1,
            image: "images/heroes_russian_animation/03_01.jpeg",
            explanation: "Cheburashka comes to the city in a box of oranges and becomes friends with Gena."
        }, {
            question: "What character works at the zoo as a crocodile?",
            answers: ["Umka", "Hare", "Gena the Crocodile", "Matroskin the Cat"],
            correct: 2,
            image: "images/heroes_russian_animation/03_02.jpeg",
            explanation: "Gena goes to work at the zoo and spends his free time with friends."
        }, {
            question: "Which character from Prostokvashino loves farming and got a cow named Murka?",
            answers: ["Leopold the Cat", "Kesha", "Pechkin", "Matroskin the Cat"],
            correct: 3,
            image: "images/heroes_russian_animation/03_03.jpeg",
            explanation: "Matroskin is practical, thrifty, and takes care of the household."
        }, {
            question: "What character flies with a propeller on their back and lives on a roof?",
            answers: ["Karlsson", "Winnie-the-Pooh", "Cheburashka", "Matroskin the Cat"],
            correct: 0,
            image: "images/heroes_russian_animation/03_04.jpeg",
            explanation: "Karlsson calls himself a man in his prime and is friends with the Kid."
        }, {
            question: "What is the name of the white bear cub who sees New Year for the first time?",
            answers: ["Hare", "Umka", "Gena the Crocodile", "Karlsson"],
            correct: 1,
            image: "images/heroes_russian_animation/03_05.jpeg",
            explanation: "Umka is a curious little bear cub from the cartoon of the same name."
        }, {
            question: "What cat always tells the mice to live together in peace?",
            answers: ["Kesha", "Pechkin", "Leopold the Cat", "Umka"],
            correct: 2,
            image: "images/heroes_russian_animation/03_06.jpeg",
            explanation: "Leopold tries to solve conflicts peacefully and repeats his call for friendship."
        }, {
            question: "Who runs away from the Wolf in the cartoon «Well, Just You Wait!»?",
            answers: ["Winnie-the-Pooh", "Cheburashka", "Matroskin the Cat", "Hare"],
            correct: 3,
            image: "images/heroes_russian_animation/03_07.jpeg",
            explanation: "The Hare usually turns out to be more clever than the Wolf and avoids his traps."
        }, {
            question: "What parrot is searched for with a missing poster after another escape?",
            answers: ["Kesha", "Gena the Crocodile", "Karlsson", "Leopold the Cat"],
            correct: 0,
            image: "images/heroes_russian_animation/03_08.jpeg",
            explanation: "Kesha the Parrot lives with a boy named Vovka but loves his own adventures."
        }, {
            question: "What character goes to get honey with a balloon?",
            answers: ["Pechkin", "Winnie-the-Pooh", "Umka", "Hare"],
            correct: 1,
            image: "images/heroes_russian_animation/03_09.jpeg",
            explanation: "In the Soviet cartoon, Winnie the Pooh uses a balloon to get up to the beehive."
        }, {
            question: "What is the name of the postman who brings letters and packages to Prostokvashino?",
            answers: ["Cheburashka", "Matroskin the Cat", "Pechkin", "Kesha"],
            correct: 2,
            image: "images/heroes_russian_animation/03_10.jpeg",
            explanation: "Postman Pechkin keeps order and delivers the mail."
        }],
        zh: [{
            question: "哪个角色是从装满橙子的箱子里被发现的？",
            answers: ["卡尔森", "切布拉什卡", "维尼小熊", "根纳鳄鱼"],
            correct: 1,
            image: "images/heroes_russian_animation/03_01.jpeg",
            explanation: "切布拉什卡装在一箱橙子里来到了城市，并与鳄鱼根纳成了好朋友。"
        }, {
            question: "哪个角色在动物园里当鳄鱼？",
            answers: ["乌姆卡", "兔子", "根纳鳄鱼", "马特罗斯金猫"],
            correct: 2,
            image: "images/heroes_russian_animation/03_02.jpeg",
            explanation: "根纳在动物园上班，空闲时则和朋友们一起度过。"
        }, {
            question: "《普罗斯托克瓦希诺》中的哪个角色热爱打理家务，还养了一头名叫穆尔卡的奶牛？",
            answers: ["列奥波德猫", "凯莎", "佩奇金", "马特罗斯金猫"],
            correct: 3,
            image: "images/heroes_russian_animation/03_03.jpeg",
            explanation: "马特罗斯金精打细算、勤俭节约，还很会操持家务。"
        }, {
            question: "哪个角色背上装有螺旋桨，靠它飞行，而且住在屋顶上？",
            answers: ["卡尔森", "维尼小熊", "切布拉什卡", "马特罗斯金猫"],
            correct: 0,
            image: "images/heroes_russian_animation/03_04.jpeg",
            explanation: "卡尔森自称是正值人生巅峰的男子，并且是小男孩 «小家伙» 的好朋友。"
        }, {
            question: "那只第一次迎接新年的白色小熊叫什么名字？",
            answers: ["兔子", "乌姆卡", "根纳鳄鱼", "卡尔森"],
            correct: 1,
            image: "images/heroes_russian_animation/03_05.jpeg",
            explanation: "乌姆卡是同名动画片中一只充满好奇心的小北极熊。"
        }, {
            question: "哪只猫总是劝老鼠们要和睦相处？",
            answers: ["凯莎", "佩奇金", "列奥波德猫", "乌姆卡"],
            correct: 2,
            image: "images/heroes_russian_animation/03_06.jpeg",
            explanation: "列奥波德总是努力和平解决冲突，并反复劝大家友好相处。"
        }, {
            question: "在动画系列《等等，你瞧！》中，谁总是躲避狼的追捕？",
            answers: ["维尼小熊", "切布拉什卡", "马特罗斯金猫", "兔子"],
            correct: 3,
            image: "images/heroes_russian_animation/03_07.jpeg",
            explanation: "兔子通常比狼更机灵，总能躲开狼设下的陷阱。"
        }, {
            question: "哪只鹦鹉总是在逃跑后，需要通过寻鸟启事寻找？",
            answers: ["凯莎", "根纳鳄鱼", "卡尔森", "列奥波德猫"],
            correct: 0,
            image: "images/heroes_russian_animation/03_08.jpeg",
            explanation: "凯沙住在男孩沃夫卡家里，但总喜欢独自外出冒险。"
        }, {
            question: "哪个角色会带着气球去找蜂蜜？",
            answers: ["佩奇金", "维尼小熊", "乌姆卡", "兔子"],
            correct: 1,
            image: "images/heroes_russian_animation/03_09.jpeg",
            explanation: "在苏联动画片中，小熊维尼利用气球升到蜂巢附近，想要弄到蜂蜜。"
        }, {
            question: "在普罗斯托克瓦希诺送信和包裹的邮递员叫什么名字？",
            answers: ["切布拉什卡", "马特罗斯金猫", "佩奇金", "凯莎"],
            correct: 2,
            image: "images/heroes_russian_animation/03_10.jpeg",
            explanation: "佩奇金邮递员负责送信和包裹，也很注重规矩。"
        }]
    },
    football_rules_field: {
        ru: [{
            question: "Сколько игроков одной команды обычно выходит на поле в начале футбольного матча, включая вратаря?",
            answers: ["11", "9", "10", "12"],
            correct: 0,
            image: "images/football_rules_field/04_01.jpeg",
            explanation: "В стартовом составе на поле находятся десять полевых игроков и один вратарь."
        }, {
            question: "Сколько длится основное время взрослого футбольного матча без учета перерыва и добавленных минут?",
            answers: ["60 минут", "90 минут", "80 минут", "100 минут"],
            correct: 1,
            image: "images/football_rules_field/04_02.jpeg",
            explanation: "Основное время состоит из двух таймов по 45 минут."
        }, {
            question: "Что обычно означает желтая карточка в футболе?",
            answers: ["Автоматический гол сопернику", "Замена игрока", "Официальное предупреждение игроку", "Окончание матча"],
            correct: 2,
            image: "images/football_rules_field/04_03.jpeg",
            explanation: "Желтая карточка фиксирует предупреждение за нарушение правил или неспортивное поведение."
        }, {
            question: "С какого расстояния от линии ворот выполняют пенальти?",
            answers: ["С 7-метровой отметки", "С 9-метровой отметки", "С центра поля", "С 11-метровой отметки"],
            correct: 3,
            image: "images/football_rules_field/04_04.jpeg",
            explanation: "Точка пенальти расположена в 11 метрах от линии ворот."
        }, {
            question: "Как возвращают мяч в игру, если он полностью пересек боковую линию?",
            answers: ["Вбрасыванием руками из-за боковой линии", "Ударом от ворот", "Угловым ударом", "Спорным мячом в центре"],
            correct: 0,
            image: "images/football_rules_field/04_05.jpeg",
            explanation: "Вбрасывание выполняют двумя руками из-за головы с места выхода мяча."
        }, {
            question: "Когда назначают угловой удар?",
            answers: ["После любого фола в центре поля", "Когда мяч ушел за линию ворот от игрока защищающейся команды и гола не было", "Когда мяч коснулся судьи", "После каждого удара в створ"],
            correct: 1,
            image: "images/football_rules_field/04_06.jpeg",
            explanation: "Последнее касание защитника перед выходом мяча за свою линию ворот приводит к угловому, если гол не забит."
        }, {
            question: "Что называют хет-триком в футболе?",
            answers: ["Три подряд угловых", "Три замены одной команды", "Три гола одного игрока в одном матче", "Три желтые карточки"],
            correct: 2,
            image: "images/football_rules_field/04_07.jpeg",
            explanation: "Хет-трик — это три мяча, забитые одним футболистом в одной игре."
        }, {
            question: "Кто может играть руками в своей штрафной площади во время обычной игры?",
            answers: ["Любой защитник", "Капитан команды", "Игрок, выполняющий угловой", "Вратарь своей команды"],
            correct: 3,
            image: "images/football_rules_field/04_08.jpeg",
            explanation: "Вратарю разрешено использовать руки в пределах собственной штрафной с учетом правил передачи назад."
        }, {
            question: "С какого действия начинается каждый тайм футбольного матча?",
            answers: ["С начального удара в центре поля", "С углового удара", "С вбрасывания из аута", "С удара от ворот"],
            correct: 0,
            image: "images/football_rules_field/04_09.jpeg",
            explanation: "Начальный удар выполняется с центра поля после сигнала судьи."
        }, {
            question: "Зачем судья добавляет время в конце тайма?",
            answers: ["Чтобы команды обязательно забили гол", "Чтобы компенсировать остановки игры", "Чтобы увеличить перерыв", "Чтобы провести дополнительную жеребьевку"],
            correct: 1,
            image: "images/football_rules_field/04_10.jpeg",
            explanation: "Добавленные минуты компенсируют замены, травмы, задержки и другие паузы."
        }],
        en: [{
            question: "How many players from one team usually start a soccer match on a field, including a goalkeeper?",
            answers: ["11", "9", "10", "12"],
            correct: 0,
            image: "images/football_rules_field/04_01.jpeg",
            explanation: "The starting lineup on a field has ten outfield players and one goalkeeper."
        }, {
            question: "How long is the main time of an adult soccer match, not counting halftime and added minutes?",
            answers: ["60 minutes", "90 minutes", "80 minutes", "100 minutes"],
            correct: 1,
            image: "images/football_rules_field/04_02.jpeg",
            explanation: "Regular time consists of two halves of 45 minutes each."
        }, {
            question: "What does a yellow card usually mean in soccer?",
            answers: ["An own goal", "Player substitution", "An official warning to a player", "The end of a match"],
            correct: 2,
            image: "images/football_rules_field/04_03.jpeg",
            explanation: "A yellow card records a warning for a rule violation or unsportsmanlike behavior."
        }, {
            question: "From what distance from the goal line is a penalty kick taken?",
            answers: ["From the 7-meter mark", "From the 9-meter mark", "From the center of a field", "From the 11-meter mark"],
            correct: 3,
            image: "images/football_rules_field/04_04.jpeg",
            explanation: "The penalty spot is located 11 meters from the goal line."
        }, {
            question: "How do you return a ball to play if it fully crosses the sideline?",
            answers: ["With a throw-in with hands from behind the sideline", "With a goal kick", "With a corner kick", "With a dropped ball in the center"],
            correct: 0,
            image: "images/football_rules_field/04_05.jpeg",
            explanation: "A throw-in is taken with both hands from behind the head at the spot where a ball left a field."
        }, {
            question: "When is a corner kick given?",
            answers: ["After any foul in the center of a field", "When a ball goes over the goal line off a player of a defending team and no goal is scored", "When a ball touches a referee", "After every shot on target"],
            correct: 1,
            image: "images/football_rules_field/04_06.jpeg",
            explanation: "The last touch by a defender before a ball goes over their own goal line leads to a corner kick if no goal is scored."
        }, {
            question: "What is a hat-trick in soccer?",
            answers: ["Three corners in a row", "Three substitutions by one team", "Three goals by one player in one match", "Three yellow cards"],
            correct: 2,
            image: "images/football_rules_field/04_07.jpeg",
            explanation: "A hat-trick is three goals scored by one player in one game."
        }, {
            question: "Who can play a ball with their hands inside their own penalty area during normal play?",
            answers: ["Any defender", "Team captain", "A player taking a corner kick", "A goalkeeper of one’s own team"],
            correct: 3,
            image: "images/football_rules_field/04_08.jpeg",
            explanation: "A goalkeeper is allowed to use their hands inside their own penalty area, taking into account the rules on back passes."
        }, {
            question: "What action starts each half of a soccer match?",
            answers: ["A kickoff from the center of a field", "A corner kick", "A throw-in from the sideline", "A goal kick"],
            correct: 0,
            image: "images/football_rules_field/04_09.jpeg",
            explanation: "A kickoff is taken from the center of a field after the referee’s signal."
        }, {
            question: "Why does a referee add time at the end of a half?",
            answers: ["So that teams are sure to score a goal", "To make up for stoppages in play", "To make the halftime break longer", "To hold an extra draw"],
            correct: 1,
            image: "images/football_rules_field/04_10.jpeg",
            explanation: "Added minutes make up for substitutions, injuries, delays, and other stoppages."
        }],
        zh: [{
            question: "一场足球比赛开始时，一支球队通常有多少名球员在场上，包括守门员？",
            answers: ["11", "9", "10", "12"],
            correct: 0,
            image: "images/football_rules_field/04_01.jpeg",
            explanation: "首发阵容包括10名场上球员和1名守门员。"
        }, {
            question: "一场成年足球比赛的常规比赛时间是多久？不包括中场休息和补时。",
            answers: ["60分钟", "90分钟", "80分钟", "100分钟"],
            correct: 1,
            image: "images/football_rules_field/04_02.jpeg",
            explanation: "常规比赛时间分为上下半场，每半场45分钟。"
        }, {
            question: "在足球比赛中，黄牌通常意味着什么？",
            answers: ["判给对方球队一个进球", "更换一名球员", "对球员提出正式警告", "比赛结束"],
            correct: 2,
            image: "images/football_rules_field/04_03.jpeg",
            explanation: "黄牌表示球员因违反规则或有不体育道德的行为而受到警告。"
        }, {
            question: "点球应在距离球门线多远的位置踢出？",
            answers: ["7米处", "9米处", "中圈", "11米处"],
            correct: 3,
            image: "images/football_rules_field/04_04.jpeg",
            explanation: "点球点距离球门线11米。"
        }, {
            question: "当球完全越过边线后，应如何重新开始比赛？",
            answers: ["从边线外用手掷界外球", "踢球门球", "踢角球", "在中圈坠球"],
            correct: 0,
            image: "images/football_rules_field/04_05.jpeg",
            explanation: "掷界外球时，球员应在球出界的位置，用双手从头后方将球掷入场内。"
        }, {
            question: "什么情况下判罚角球？",
            answers: ["中场发生任何犯规后", "防守方球员最后触球，球随后完全越过本方球门线，且未进球", "球碰到裁判后", "每次射门射正后"],
            correct: 1,
            image: "images/football_rules_field/04_06.jpeg",
            explanation: "如果防守方球员最后触球，球随后完全越过本方球门线，且未进球，则判给进攻方角球。"
        }, {
            question: "足球比赛中的 «帽子戏法» 是什么意思？",
            answers: ["连续获得三个角球", "一支球队进行三次换人", "一名球员在同一场比赛中打进三球", "出示三张黄牌"],
            correct: 2,
            image: "images/football_rules_field/04_07.jpeg",
            explanation: "«帽子戏法» 指一名球员在同一场比赛中打进三球。"
        }, {
            question: "在正常比赛过程中，谁可以在本方罚球区内用手触球？",
            answers: ["任何一名后卫", "球队队长", "主罚角球的球员", "本队守门员"],
            correct: 3,
            image: "images/football_rules_field/04_08.jpeg",
            explanation: "守门员可以在本方罚球区内用手触球，但必须遵守有关队友回传球等情况的规则。"
        }, {
            question: "足球比赛的每个半场都从什么动作开始？",
            answers: ["在中圈开球", "踢角球", "掷界外球", "踢球门球"],
            correct: 0,
            image: "images/football_rules_field/04_09.jpeg",
            explanation: "裁判鸣哨后，由球员在中圈开球。"
        }, {
            question: "为什么裁判会在半场结束时增加比赛时间？",
            answers: ["为了确保两队都能进球", "为了补偿比赛中断的时间", "为了延长中场休息", "为了再次抽签"],
            correct: 1,
            image: "images/football_rules_field/04_10.jpeg",
            explanation: "补时时间用于补偿换人、球员受伤、拖延比赛及其他造成比赛中断的情况。"
        }]
    },
    films_true_or_false: {
        ru: [{
            question: "Первый публичный платный кинопоказ братьев Люмьер в Париже состоялся в 1895 году.",
            answers: ["Правда", "Миф"],
            correct: 0,
            image: "images/films_true_or_false/05_01.jpeg",
            explanation: "28 декабря 1895 года братья Люмьер провели платный показ в парижском «Гран-кафе»."
        }, {
            question: "Немые фильмы всегда показывали зрителям в полной тишине.",
            answers: ["Правда", "Миф"],
            correct: 1,
            image: "images/films_true_or_false/05_02.jpeg",
            explanation: "Показы часто сопровождались игрой пианиста, оркестра или работой звуковых исполнителей."
        }, {
            question: "Статуэтка премии «Оскар» изготовлена из чистого золота.",
            answers: ["Правда", "Миф"],
            correct: 1,
            image: "images/films_true_or_false/05_03.jpeg",
            explanation: "Статуэтку покрывают золотом, но внутри находится другой металл, а не цельное золото."
        }, {
            question: "Фильмы всегда снимают в той же последовательности, в какой сцены идут в сюжете.",
            answers: ["Правда", "Миф"],
            correct: 1,
            image: "images/films_true_or_false/05_04.jpeg",
            explanation: "Порядок съемок зависит от локаций, графика актеров, погоды и производственного плана."
        }, {
            question: "Раскадровка — это последовательность рисунков, помогающая заранее спланировать будущие кадры.",
            answers: ["Правда", "Миф"],
            correct: 0,
            image: "images/films_true_or_false/05_05.jpeg",
            explanation: "Раскадровка показывает композицию, действия персонажей и предполагаемую смену планов."
        }, {
            question: "Фоли-артисты создают и записывают бытовые звуки для фильма.",
            answers: ["Правда", "Миф"],
            correct: 0,
            image: "images/films_true_or_false/05_06.jpeg",
            explanation: "Они воспроизводят шаги, шорох одежды, удары предметов и другие синхронные шумы."
        }, {
            question: "Для замены фона в кино можно использовать только зеленый экран, а синий экран для этого не подходит.",
            answers: ["Правда", "Миф"],
            correct: 1,
            image: "images/films_true_or_false/05_07.jpeg",
            explanation: "В зависимости от костюмов, освещения и задачи применяют как зеленый, так и синий фон."
        }, {
            question: "Оператор-постановщик отвечает за визуальное решение съемки, работу камеры и света.",
            answers: ["Правда", "Миф"],
            correct: 0,
            image: "images/films_true_or_false/05_08.jpeg",
            explanation: "Он вместе с режиссером формирует изображение и руководит операторской и осветительной работой."
        }, {
            question: "Все анимационные фильмы создаются только рисунками на бумаге.",
            answers: ["Правда", "Миф"],
            correct: 1,
            image: "images/films_true_or_false/05_09.jpeg",
            explanation: "Анимация бывает рисованной, компьютерной, кукольной, пластилиновой и выполненной другими способами."
        }, {
            question: "24 кадра в секунду — распространенная частота показа кино.",
            answers: ["Правда", "Миф"],
            correct: 0,
            image: "images/films_true_or_false/05_10.jpeg",
            explanation: "Эта частота стала одним из основных кинематографических стандартов, хотя существуют и другие."
        }],
        en: [{
            question: "The Lumière brothers’ first public paid film screening in Paris took place in 1895.",
            answers: ["Truth", "Myth"],
            correct: 0,
            image: "images/films_true_or_false/05_01.jpeg",
            explanation: "On December 28, 1895, the Lumière brothers held a paid screening at the Grand Café in Paris."
        }, {
            question: "Silent films were always shown to audiences in complete silence.",
            answers: ["Truth", "Myth"],
            correct: 1,
            image: "images/films_true_or_false/05_02.jpeg",
            explanation: "Screenings were often accompanied by a pianist, an orchestra, or sound performers."
        }, {
            question: "The Oscar statuette is made of pure gold.",
            answers: ["Truth", "Myth"],
            correct: 1,
            image: "images/films_true_or_false/05_03.jpeg",
            explanation: "The statuette is covered with gold, but inside there is another metal, not solid gold."
        }, {
            question: "Films are always shot in the same order as scenes appear in a story.",
            answers: ["Truth", "Myth"],
            correct: 1,
            image: "images/films_true_or_false/05_04.jpeg",
            explanation: "The order of filming depends on locations, actors’ schedules, weather, and production plans."
        }, {
            question: "A storyboard is a sequence of drawings that helps plan future frames in advance.",
            answers: ["Truth", "Myth"],
            correct: 0,
            image: "images/films_true_or_false/05_05.jpeg",
            explanation: "A storyboard shows composition, the characters’ actions, and planned changes of frames."
        }, {
            question: "Foley artists create and record everyday sounds for films.",
            answers: ["Truth", "Myth"],
            correct: 0,
            image: "images/films_true_or_false/05_06.jpeg",
            explanation: "They reproduce footsteps, rustle of clothes, sounds of objects hitting things, and other synchronized noises."
        }, {
            question: "To replace a background, you can only use a green screen; a blue screen does not work for this.",
            answers: ["Truth", "Myth"],
            correct: 1,
            image: "images/films_true_or_false/05_07.jpeg",
            explanation: "Depending on costumes, lighting, and tasks, both a green and a blue screen are used."
        }, {
            question: "A cinematographer is responsible for the visual look, camera work, and lighting.",
            answers: ["Truth", "Myth"],
            correct: 0,
            image: "images/films_true_or_false/05_08.jpeg",
            explanation: "Together with a director, this person shapes the image and manages the camera and lighting work."
        }, {
            question: "All animated films are created only with drawings on paper.",
            answers: ["Truth", "Myth"],
            correct: 1,
            image: "images/films_true_or_false/05_09.jpeg",
            explanation: "Animation can be drawn, computer-generated, puppet-based, clay-based, or made in other ways."
        }, {
            question: "24 frames per second is a common film projection rate.",
            answers: ["Truth", "Myth"],
            correct: 0,
            image: "images/films_true_or_false/05_10.jpeg",
            explanation: "This rate became one of the main film standards, although other rates also exist."
        }],
        zh: [{
            question: "1895年，卢米埃尔兄弟在巴黎举行了首次公开售票电影放映。",
            answers: ["正确", "错误"],
            correct: 0,
            image: "images/films_true_or_false/05_01.jpeg",
            explanation: "1895年12月28日，卢米埃尔兄弟在巴黎的大咖啡馆举行了一场售票电影放映。"
        }, {
            question: "无声电影放映时，观众听到的始终是一片寂静。",
            answers: ["正确", "错误"],
            correct: 1,
            image: "images/films_true_or_false/05_02.jpeg",
            explanation: "无声电影放映通常会配有钢琴演奏、管弦乐队伴奏或现场音效表演。"
        }, {
            question: "奥斯卡奖的小金人是用纯金制成的。",
            answers: ["正确", "错误"],
            correct: 1,
            image: "images/films_true_or_false/05_03.jpeg",
            explanation: "奥斯卡小金人表面镀有金层，但内部使用的是其他金属，并非整座由纯金打造。"
        }, {
            question: "电影拍摄总是按照故事中场景出现的顺序进行的。",
            answers: ["正确", "错误"],
            correct: 1,
            image: "images/films_true_or_false/05_04.jpeg",
            explanation: "实际拍摄顺序取决于拍摄地点、演员档期、天气以及整体制作计划等因素。"
        }, {
            question: "分镜图是由一系列图画组成的，用来提前规划电影中将要呈现的画面。",
            answers: ["正确", "错误"],
            correct: 0,
            image: "images/films_true_or_false/05_05.jpeg",
            explanation: "分镜图展示画面构图、角色动作以及预定的镜头切换。"
        }, {
            question: "拟音师负责为电影制作和录制日常生活中的各种声音。",
            answers: ["正确", "错误"],
            correct: 0,
            image: "images/films_true_or_false/05_06.jpeg",
            explanation: "拟音师会模拟脚步声、衣服摩擦声、物体碰撞声以及其他与画面同步的声音。"
        }, {
            question: "电影只能使用绿幕替换背景，蓝幕无法实现这一效果。",
            answers: ["正确", "错误"],
            correct: 1,
            image: "images/films_true_or_false/05_07.jpeg",
            explanation: "根据服装颜色、灯光条件和拍摄需求，可以使用绿幕，也可以使用蓝幕。"
        }, {
            question: "摄影指导负责影片的视觉呈现、摄影机运用和灯光设计。",
            answers: ["正确", "错误"],
            correct: 0,
            image: "images/films_true_or_false/05_08.jpeg",
            explanation: "摄影指导与导演共同塑造影片的视觉效果，并负责指导摄影和灯光工作。"
        }, {
            question: "所有动画电影都只能通过在纸上绘画来制作。",
            answers: ["正确", "错误"],
            correct: 1,
            image: "images/films_true_or_false/05_09.jpeg",
            explanation: "动画有手绘动画、计算机动画、木偶动画、黏土动画等多种形式。"
        }, {
            question: "每秒24帧是电影中一种常见的放映帧率。",
            answers: ["正确", "错误"],
            correct: 0,
            image: "images/films_true_or_false/05_10.jpeg",
            explanation: "每秒24帧已成为电影制作和放映的重要标准之一，但也存在其他帧率。"
        }]
    },
    what_happened_allow: {
        ru: [{
            question: "Какой из этих памятников был создан раньше остальных?",
            answers: ["Пирамида Хеопса", "Колизей", "Эйфелева башня", "Бурдж-Халифа"],
            correct: 0,
            image: "images/what_happened_allow/06_01.jpeg",
            explanation: "Великая пирамида построена примерно в XXVI веке до нашей эры."
        }, {
            question: "Какое изобретение появилось раньше остальных?",
            answers: ["Персональный компьютер", "Бумага", "Печатный станок", "Пишущая машинка"],
            correct: 1,
            image: "images/what_happened_allow/06_02.jpeg",
            explanation: "Производство бумаги было развито в Древнем Китае задолго до европейской книгопечати."
        }, {
            question: "Какой навигационный или наблюдательный инструмент появился раньше остальных?",
            answers: ["Секстант", "Радар", "Магнитный компас", "Телескоп"],
            correct: 2,
            image: "images/what_happened_allow/06_03.jpeg",
            explanation: "Магнитный компас применяли в Китае и затем в морской навигации за века до телескопа."
        }, {
            question: "Какое литературное произведение было создано раньше остальных?",
            answers: ["«Божественная комедия»", "«Гамлет»", "«Война и мир»", "«Илиада»"],
            correct: 3,
            image: "images/what_happened_allow/06_04.jpeg",
            explanation: "«Илиада» была написана в Древней Греции примерно в VIII веке до нашей эры."
        }, {
            question: "Какое изобретение появилось раньше остальных?",
            answers: ["Колесо", "Механические часы", "Паровоз", "Самолет"],
            correct: 0,
            image: "images/what_happened_allow/06_05.jpeg",
            explanation: "Колесо известно с IV тысячелетия до нашей эры."
        }, {
            question: "Какой университет был основан раньше остальных?",
            answers: ["Токийский университет", "Болонский университет", "Московский университет", "Берлинский университет"],
            correct: 1,
            image: "images/what_happened_allow/06_06.jpeg",
            explanation: "Болонский университет традиционно датирует основание 1088 годом."
        }, {
            question: "Какое произведение живописи появилось раньше остальных?",
            answers: ["«Черный квадрат»", "«Композиция VIII»", "«Мона Лиза»", "«Впечатление. Восходящее солнце»"],
            correct: 2,
            image: "images/what_happened_allow/06_07.jpeg",
            explanation: "Леонардо создавал «Мону Лизу» в начале XVI века."
        }, {
            question: "Какой метрополитен открылся раньше остальных?",
            answers: ["Парижский метрополитен", "Московский метрополитен", "Пекинский метрополитен", "Лондонский метрополитен"],
            correct: 3,
            image: "images/what_happened_allow/06_08.jpeg",
            explanation: "Первая линия лондонского метро начала работу в 1863 году."
        }, {
            question: "Какое устройство для записи или передачи звука появилось раньше остальных?",
            answers: ["Фонограф", "Радиоприемник", "Магнитофон", "MP3-плеер"],
            correct: 0,
            image: "images/what_happened_allow/06_09.jpeg",
            explanation: "Фонограф Эдисона был представлен в 1877 году."
        }, {
            question: "Какой летательный аппарат совершил пилотируемый полет раньше остальных?",
            answers: ["Реактивный пассажирский самолет", "Воздушный шар Монгольфье", "Дирижабль Цеппелина", "Самолет братьев Райт"],
            correct: 1,
            image: "images/what_happened_allow/06_10.jpeg",
            explanation: "Первый свободный пилотируемый полет шара Монгольфье состоялся в 1783 году."
        }],
        en: [{
            question: "Which of these monuments was built first?",
            answers: ["The Great Pyramid of Giza", "Colosseum", "The Eiffel Tower", "Burj Khalifa"],
            correct: 0,
            image: "images/what_happened_allow/06_01.jpeg",
            explanation: "The Great Pyramid was built around the 26th century BC."
        }, {
            question: "Which invention appeared first?",
            answers: ["Personal computer", "Paper", "Printing press", "Typewriter"],
            correct: 1,
            image: "images/what_happened_allow/06_02.jpeg",
            explanation: "Paper production was developed in ancient China long before European book printing."
        }, {
            question: "Which navigation or observation tool appeared first?",
            answers: ["Sextant", "Radar", "Magnetic compass", "Telescope"],
            correct: 2,
            image: "images/what_happened_allow/06_03.jpeg",
            explanation: "The magnetic compass was used in China and then in sea navigation centuries before the telescope."
        }, {
            question: "Which literary work was written first?",
            answers: ["«The Divine Comedy»", "«Hamlet»", "«War and Peace»", "«The Iliad»"],
            correct: 3,
            image: "images/what_happened_allow/06_04.jpeg",
            explanation: "«The Iliad» was written in ancient Greece around the 8th century BC."
        }, {
            question: "Which invention appeared first?",
            answers: ["Wheel", "Mechanical clock", "Steam locomotive", "Airplane"],
            correct: 0,
            image: "images/what_happened_allow/06_05.jpeg",
            explanation: "The wheel has been known since the 4th millennium BC."
        }, {
            question: "Which university was founded first?",
            answers: ["University of Tokyo", "University of Bologna", "Moscow University", "University of Berlin"],
            correct: 1,
            image: "images/what_happened_allow/06_06.jpeg",
            explanation: "The University of Bologna traditionally dates its founding to 1088."
        }, {
            question: "Which painting was created first?",
            answers: ["«Black Square»", "«Composition VIII»", "«Mona Lisa»", "«Impression, Sunrise»"],
            correct: 2,
            image: "images/what_happened_allow/06_07.jpeg",
            explanation: "Leonardo painted «Mona Lisa» in the early 16th century."
        }, {
            question: "Which subway system opened first?",
            answers: ["Paris Metro", "Moscow Metro", "Beijing Subway", "London Underground / Tube"],
            correct: 3,
            image: "images/what_happened_allow/06_08.jpeg",
            explanation: "The first line of the London Underground (Tube) began operating in 1863."
        }, {
            question: "Which device for recording or transmitting sound appeared first?",
            answers: ["Phonograph", "Radio", "Tape recorder", "MP3 Player"],
            correct: 0,
            image: "images/what_happened_allow/06_09.jpeg",
            explanation: "Edison’s phonograph was introduced in 1877."
        }, {
            question: "Which flying machine made a crewed flight first?",
            answers: ["Passenger jet", "Montgolfier hot air baloon", "Zeppelin airship", "The Wright Flyer / Kitty Hawk"],
            correct: 1,
            image: "images/what_happened_allow/06_10.jpeg",
            explanation: "The first free crewed flight of the Montgolfier hot air balloon took place in 1783."
        }],
        zh: [{
            question: "以下哪座建筑最早建成？",
            answers: ["胡夫金字塔", "罗马斗兽场", "埃菲尔铁塔", "哈利法塔"],
            correct: 0,
            image: "images/what_happened_allow/06_01.jpeg",
            explanation: "胡夫金字塔大约建于公元前26世纪。"
        }, {
            question: "以下哪项发明最早出现？",
            answers: ["个人电脑", "纸", "印刷机", "打字机"],
            correct: 1,
            image: "images/what_happened_allow/06_02.jpeg",
            explanation: "造纸术在古代中国得到发展，远早于欧洲印刷术的普及。"
        }, {
            question: "以下哪种导航或观测仪器最早出现？",
            answers: ["六分仪", "雷达", "磁罗盘", "望远镜"],
            correct: 2,
            image: "images/what_happened_allow/06_03.jpeg",
            explanation: "磁罗盘最早在中国得到应用，后来用于航海导航，比望远镜的出现早了几个世纪。"
        }, {
            question: "以下哪部文学作品创作时间最早？",
            answers: ["《神曲》", "《哈姆雷特》", "《战争与和平》", "《伊利亚特》"],
            correct: 3,
            image: "images/what_happened_allow/06_04.jpeg",
            explanation: "《伊利亚特》创作于古希腊，大约在公元前8世纪。"
        }, {
            question: "以下哪项发明最早出现？",
            answers: ["车轮", "机械钟", "蒸汽机车", "飞机"],
            correct: 0,
            image: "images/what_happened_allow/06_05.jpeg",
            explanation: "车轮的使用可以追溯到公元前4000年左右。"
        }, {
            question: "以下哪所大学创办时间最早？",
            answers: ["东京大学", "博洛尼亚大学", "莫斯科大学", "柏林大学"],
            correct: 1,
            image: "images/what_happened_allow/06_06.jpeg",
            explanation: "博洛尼亚大学通常将1088年作为其创办年份。"
        }, {
            question: "以下哪幅绘画作品创作时间最早？",
            answers: ["《黑色方块》", "《第八号构图》", "《蒙娜丽莎》", "《印象。日出》"],
            correct: 2,
            image: "images/what_happened_allow/06_07.jpeg",
            explanation: "达·芬奇在16世纪初完成了《蒙娜丽莎》。"
        }, {
            question: "以下哪座城市的地铁最早开通？",
            answers: ["巴黎地铁", "莫斯科地铁", "北京地铁", "伦敦地铁"],
            correct: 3,
            image: "images/what_happened_allow/06_08.jpeg",
            explanation: "伦敦地铁的第一条线路于1863年开始运营。"
        }, {
            question: "以下哪种录音或声音传播设备最早出现？",
            answers: ["留声机", "无线电接收机", "磁带录音机", "MP3播放器"],
            correct: 0,
            image: "images/what_happened_allow/06_09.jpeg",
            explanation: "爱迪生于1877年展示了留声机。"
        }, {
            question: "以下哪种飞行器最早实现载人飞行？",
            answers: ["喷气式客机", "蒙哥尔费兄弟的热气球", "齐柏林飞艇", "莱特兄弟的飞机"],
            correct: 1,
            image: "images/what_happened_allow/06_10.jpeg",
            explanation: "1783年，蒙哥尔费兄弟的热气球首次实现了自由载人飞行。"
        }],
    },
    cosmos_for_runner: {
        ru: [{
            question: "Как называется звезда в центре Солнечной системы?",
            answers: ["Сатурн", "Нептун", "Солнце", "Марс"],
            correct: 2,
            image: "images/cosmos_for_runner/07_01.jpeg",
            explanation: "Солнце содержит почти всю массу Солнечной системы и дает Земле свет и тепло."
        }, {
            question: "Какая планета находится ближе всего к Солнцу?",
            answers: ["Уран", "Луна", "Венера", "Меркурий"],
            correct: 3,
            image: "images/cosmos_for_runner/07_02.jpeg",
            explanation: "Орбита Меркурия расположена внутри орбит всех остальных планет."
        }, {
            question: "Какая планета покрыта плотными облаками и похожа по размеру на Землю?",
            answers: ["Венера", "Солнце", "Земля", "Юпитер"],
            correct: 0,
            image: "images/cosmos_for_runner/07_03.jpeg",
            explanation: "Плотная атмосфера Венеры создает очень сильный парниковый эффект."
        }, {
            question: "На какой планете существует жидкая вода на поверхности и известна жизнь?",
            answers: ["Нептун", "Земля", "Марс", "Сатурн"],
            correct: 1,
            image: "images/cosmos_for_runner/07_04.jpeg",
            explanation: "Земля находится в области, где вода может долго сохраняться в жидком состоянии."
        }, {
            question: "Какую планету называют Красной?",
            answers: ["Луна", "Меркурий", "Марс", "Уран"],
            correct: 2,
            image: "images/cosmos_for_runner/07_05.jpeg",
            explanation: "Красный оттенок поверхности Марса связан с оксидами железа."
        }, {
            question: "Какая планета является крупнейшей в Солнечной системе?",
            answers: ["Солнце", "Венера", "Марс", "Юпитер"],
            correct: 3,
            image: "images/cosmos_for_runner/07_06.jpeg",
            explanation: "Юпитер — газовый гигант, масса которого превышает массу всех остальных планет вместе."
        }, {
            question: "Какая планета особенно известна яркой системой колец?",
            answers: ["Сатурн", "Земля", "Юпитер", "Нептун"],
            correct: 0,
            image: "images/cosmos_for_runner/07_07.jpeg",
            explanation: "Кольца Сатурна состоят главным образом из частиц льда и камня."
        }, {
            question: "Какая планета вращается почти «лежа на боку»?",
            answers: ["Меркурий", "Уран", "Сатурн", "Луна"],
            correct: 1,
            image: "images/cosmos_for_runner/07_08.jpeg",
            explanation: "Ось вращения Урана наклонена примерно на 98 градусов."
        }, {
            question: "Какая планета находится дальше всего от Солнца среди восьми планет?",
            answers: ["Венера", "Марс", "Нептун", "Солнце"],
            correct: 2,
            image: "images/cosmos_for_runner/07_09.jpeg",
            explanation: "После изменения статуса Плутона Нептун считается восьмой и самой дальней планетой."
        }, {
            question: "Как называется естественный спутник Земли?",
            answers: ["Земля", "Юпитер", "Уран", "Луна"],
            correct: 3,
            image: "images/cosmos_for_runner/07_10.jpeg",
            explanation: "Луна обращается вокруг Земли и влияет на океанские приливы."
        }],
        en: [{
            question: "What is the star at the center of the Solar System called?",
            answers: ["Saturn", "Neptune", "The Sun", "Mars"],
            correct: 2,
            image: "images/cosmos_for_runner/07_01.jpeg",
            explanation: "The Sun contains almost all the mass of the Solar System and gives Earth light and heat."
        }, {
            question: "Which planet is closest to the Sun?",
            answers: ["Uranus", "The Moon", "Venus", "Mercury"],
            correct: 3,
            image: "images/cosmos_for_runner/07_02.jpeg",
            explanation: "Mercury’s orbit is inside the orbits of all the other planets."
        }, {
            question: "Which planet is covered in thick clouds and is similar in size to Earth?",
            answers: ["Venus", "The Sun", "Earth", "Jupiter"],
            correct: 0,
            image: "images/cosmos_for_runner/07_03.jpeg",
            explanation: "Venus’ thick atmosphere creates a very strong greenhouse effect."
        }, {
            question: "On which planet is there liquid water on the surface, and where is life known to exist?",
            answers: ["Neptune", "Earth", "Mars", "Saturn"],
            correct: 1,
            image: "images/cosmos_for_runner/07_04.jpeg",
            explanation: "Earth is in a zone where water can stay liquid for a long time."
        }, {
            question: "Which planet is called the Red Planet?",
            answers: ["The Moon", "Mercury", "Mars", "Uranus"],
            correct: 2,
            image: "images/cosmos_for_runner/07_05.jpeg",
            explanation: "The red color of Mars’ surface is linked to iron oxides."
        }, {
            question: "Which planet is the largest in the Solar System?",
            answers: ["The Sun", "Venus", "Mars", "Jupiter"],
            correct: 3,
            image: "images/cosmos_for_runner/07_06.jpeg",
            explanation: "Jupiter is a gas giant whose mass is greater than the mass of all the other planets combined."
        }, {
            question: "Which planet is especially famous for its bright system of rings?",
            answers: ["Saturn", "Earth", "Jupiter", "Neptune"],
            correct: 0,
            image: "images/cosmos_for_runner/07_07.jpeg",
            explanation: "Saturn’s rings are made up mainly of particles of ice and rock."
        }, {
            question: "Which planet rotates almost «lying on its side»?",
            answers: ["Mercury", "Uranus", "Saturn", "The Moon"],
            correct: 1,
            image: "images/cosmos_for_runner/07_08.jpeg",
            explanation: "Uranus’ axis of rotation is tilted by about 98 degrees."
        }, {
            question: "Which planet is farthest from the Sun among the eight planets?",
            answers: ["Venus", "Mars", "Neptune", "The Sun"],
            correct: 2,
            image: "images/cosmos_for_runner/07_09.jpeg",
            explanation: "After Pluto’s status changed, Neptune is considered the eighth and farthest planet."
        }, {
            question: "What is Earth’s natural satellite called?",
            answers: ["Earth", "Jupiter", "Uranus", "The Moon"],
            correct: 3,
            image: "images/cosmos_for_runner/07_10.jpeg",
            explanation: "The Moon orbits Earth and affects ocean tides."
        }],
        zh: [{
            question: "太阳系中心的恒星叫什么？",
            answers: ["土星", "海王星", "太阳", "火星"],
            correct: 2,
            image: "images/cosmos_for_runner/07_01.jpeg",
            explanation: "太阳占太阳系总质量的绝大部分，并为地球提供光和热。"
        }, {
            question: "哪颗行星距离太阳最近？",
            answers: ["天王星", "月球", "金星", "水星"],
            correct: 3,
            image: "images/cosmos_for_runner/07_02.jpeg",
            explanation: "水星的轨道位于其他所有行星轨道的内侧。"
        }, {
            question: "哪颗行星被厚厚的云层包围，大小与地球相近？",
            answers: ["金星", "太阳", "地球", "木星"],
            correct: 0,
            image: "images/cosmos_for_runner/07_03.jpeg",
            explanation: "金星浓厚的大气层造成了极强的温室效应。"
        }, {
            question: "哪颗行星的表面存在液态水，并且已知有生命存在？",
            answers: ["海王星", "地球", "火星", "土星"],
            correct: 1,
            image: "images/cosmos_for_runner/07_04.jpeg",
            explanation: "地球位于适宜液态水长期存在的区域。"
        }, {
            question: "哪颗行星被称为 «红色星球» ？",
            answers: ["月球", "水星", "火星", "天王星"],
            correct: 2,
            image: "images/cosmos_for_runner/07_05.jpeg",
            explanation: "火星表面的红色与氧化铁有关。"
        }, {
            question: "太阳系中体积最大的行星是哪一颗？",
            answers: ["太阳", "金星", "火星", "木星"],
            correct: 3,
            image: "images/cosmos_for_runner/07_06.jpeg",
            explanation: "木星是一颗气态巨行星，其质量超过太阳系中其他所有行星的总质量。"
        }, {
            question: "哪颗行星以明亮而显著的行星环系统闻名？",
            answers: ["土星", "地球", "木星", "海王星"],
            correct: 0,
            image: "images/cosmos_for_runner/07_07.jpeg",
            explanation: "土星的光环主要由冰粒和岩石碎片组成。"
        }, {
            question: "哪颗行星的自转轴几乎是 «横躺着» 的？",
            answers: ["水星", "天王星", "土星", "月球"],
            correct: 1,
            image: "images/cosmos_for_runner/07_08.jpeg",
            explanation: "天王星的自转轴倾斜角约为98度。"
        }, {
            question: "在太阳系的八大行星中，哪颗距离太阳最远？",
            answers: ["金星", "火星", "海王星", "太阳"],
            correct: 2,
            image: "images/cosmos_for_runner/07_09.jpeg",
            explanation: "冥王星被重新归类为矮行星后，海王星成为太阳系中第八颗、也是距离太阳最远的行星。"
        }, {
            question: "地球的天然卫星叫什么？",
            answers: ["地球", "木星", "天王星", "月球"],
            correct: 3,
            image: "images/cosmos_for_runner/07_10.jpeg",
            explanation: "月球围绕地球运行，并对海洋潮汐产生影响。"
        }]
    },
    shedevr_author: {
        ru: [{
            question: "Кто написал портрет «Мона Лиза»?",
            answers: ["Леонардо да Винчи", "Эдвард Мунк", "Сандро Боттичелли", "Казимир Малевич"],
            correct: 0,
            image: "images/shedevr_author/08_01.jpeg",
            explanation: "Портрет хранится в Лувре и известен тонкими переходами света и тени."
        }, {
            question: "Кто создал картину «Звездная ночь»?",
            answers: ["Леонардо да Винчи", "Винсент ван Гог", "Клод Моне", "Диего Веласкес"],
            correct: 1,
            image: "images/shedevr_author/08_02.jpeg",
            explanation: "Ван Гог написал картину в 1889 году во время пребывания в Сен-Реми."
        }, {
            question: "Кто написал «Девушку с жемчужной сережкой»?",
            answers: ["Винсент ван Гог", "Сальвадор Дали", "Ян Вермеер", "Валентин Серов"],
            correct: 2,
            image: "images/shedevr_author/08_03.jpeg",
            explanation: "Картина нидерландского мастера создана примерно в 1665 году."
        }, {
            question: "Кто является автором картины «Крик»?",
            answers: ["Ян Вермеер", "Сандро Боттичелли", "Казимир Малевич", "Эдвард Мунк"],
            correct: 3,
            image: "images/shedevr_author/08_04.jpeg",
            explanation: "Норвежский художник создал несколько версий этого образа."
        }, {
            question: "Кто написал «Постоянство памяти» с мягкими часами?",
            answers: ["Сальвадор Дали", "Клод Моне", "Диего Веласкес", "Леонардо да Винчи"],
            correct: 0,
            image: "images/shedevr_author/08_05.jpeg",
            explanation: "Небольшая картина 1931 года стала символом сюрреализма."
        }, {
            question: "Кто создал «Рождение Венеры»?",
            answers: ["Эдвард Мунк", "Сандро Боттичелли", "Валентин Серов", "Винсент ван Гог"],
            correct: 1,
            image: "images/shedevr_author/08_06.jpeg",
            explanation: "Картина эпохи Возрождения изображает богиню, прибывающую к берегу."
        }, {
            question: "Кто написал знаменитую серию «Кувшинки»?",
            answers: ["Сальвадор Дали", "Казимир Малевич", "Клод Моне", "Ян Вермеер"],
            correct: 2,
            image: "images/shedevr_author/08_07.jpeg",
            explanation: "Моне многократно изображал пруд в собственном саду в Живерни."
        }, {
            question: "Кто является автором «Черного квадрата»?",
            answers: ["Сандро Боттичелли", "Диего Веласкес", "Леонардо да Винчи", "Казимир Малевич"],
            correct: 3,
            image: "images/shedevr_author/08_08.jpeg",
            explanation: "Картина стала одним из ключевых произведений супрематизма."
        }, {
            question: "Кто написал «Менины»?",
            answers: ["Диего Веласкес", "Валентин Серов", "Винсент ван Гог", "Эдвард Мунк"],
            correct: 0,
            image: "images/shedevr_author/08_09.jpeg",
            explanation: "Сложная композиция показывает инфанту Маргариту, придворных и самого художника."
        }, {
            question: "Кто написал портрет «Девочка с персиками»?",
            answers: ["Клод Моне", "Валентин Серов", "Ян Вермеер", "Сальвадор Дали"],
            correct: 1,
            image: "images/shedevr_author/08_10.jpeg",
            explanation: "Серов изобразил Веру Мамонтову в усадьбе Абрамцево."
        }],
        en: [{
            question: "Who painted «Mona Lisa»?",
            answers: ["Leonardo da Vinci", "Edvard Munch", "Sandro Botticelli", "Kazimir Malevich"],
            correct: 0,
            image: "images/shedevr_author/08_01.jpeg",
            explanation: "The portrait is kept in the Louvre and is famous for its soft transitions of light and shadow."
        }, {
            question: "Who painted «The Starry Night»?",
            answers: ["Leonardo da Vinci", "Vincent van Gogh", "Claude Monet", "Diego Velázquez"],
            correct: 1,
            image: "images/shedevr_author/08_02.jpeg",
            explanation: "Van Gogh painted the work in 1889 during his stay in Saint-Rémy."
        }, {
            question: "Who painted «Girl with a Pearl Earring»?",
            answers: ["Vincent van Gogh", "Salvador Dalí", "Johannes Vermeer", "Valentin Serov"],
            correct: 2,
            image: "images/shedevr_author/08_03.jpeg",
            explanation: "The painting by the Dutch master was created around 1665."
        }, {
            question: "Who painted «The Scream»?",
            answers: ["Johannes Vermeer", "Sandro Botticelli", "Kazimir Malevich", "Edvard Munch"],
            correct: 3,
            image: "images/shedevr_author/08_04.jpeg",
            explanation: "The Norwegian artist made several versions of this image."
        }, {
            question: "Who painted «The Persistence of Memory» with the soft clocks?",
            answers: ["Salvador Dalí", "Claude Monet", "Diego Velázquez", "Leonardo da Vinci"],
            correct: 0,
            image: "images/shedevr_author/08_05.jpeg",
            explanation: "This small painting from 1931 became a symbol of Surrealism."
        }, {
            question: "Who painted «The Birth of Venus»?",
            answers: ["Edvard Munch", "Sandro Botticelli", "Valentin Serov", "Vincent van Gogh"],
            correct: 1,
            image: "images/shedevr_author/08_06.jpeg",
            explanation: "This Renaissance painting shows a goddess arriving at the shore."
        }, {
            question: "Who painted the famous series «Water Lilies»?",
            answers: ["Salvador Dalí", "Kazimir Malevich", "Claude Monet", "Johannes Vermeer"],
            correct: 2,
            image: "images/shedevr_author/08_07.jpeg",
            explanation: "Monet painted the pond in his own garden in Giverny many times."
        }, {
            question: "Who is the author of «Black Square»?",
            answers: ["Sandro Botticelli", "Diego Velázquez", "Leonardo da Vinci", "Kazimir Malevich"],
            correct: 3,
            image: "images/shedevr_author/08_08.jpeg",
            explanation: "This painting became one of the key works of Suprematism."
        }, {
            question: "Who painted «Las Meninas»?",
            answers: ["Diego Velázquez", "Valentin Serov", "Vincent van Gogh", "Edvard Munch"],
            correct: 0,
            image: "images/shedevr_author/08_09.jpeg",
            explanation: "This complex composition shows Infanta Margarita, the courtiers, and the artist himself."
        }, {
            question: "Who painted «Girl with Peaches»?",
            answers: ["Claude Monet", "Valentin Serov", "Johannes Vermeer", "Salvador Dalí"],
            correct: 1,
            image: "images/shedevr_author/08_10.jpeg",
            explanation: "Serov painted Vera Mamontova at the Abramtsevo estate."
        }],
        zh: [{
            question: "《蒙娜丽莎》的作者是谁？",
            answers: ["列奥纳多·达·芬奇", "爱德华·蒙克", "桑德罗·波提切利", "卡济米尔·马列维奇"],
            correct: 0,
            image: "images/shedevr_author/08_01.jpeg",
            explanation: "这幅肖像画收藏于卢浮宫，以细腻的明暗过渡而闻名。"
        }, {
            question: "《星月夜》是谁创作的？",
            answers: ["列奥纳多·达·芬奇", "文森特·梵高", "克洛德·莫奈", "迭戈·委拉斯开兹"],
            correct: 1,
            image: "images/shedevr_author/08_02.jpeg",
            explanation: "梵高于1889年在圣雷米疗养期间创作了这幅画。"
        }, {
            question: "《戴珍珠耳环的少女》是谁画的？",
            answers: ["文森特·梵高", "萨尔瓦多·达利", "扬·维米尔", "瓦连京·谢罗夫"],
            correct: 2,
            image: "images/shedevr_author/08_03.jpeg",
            explanation: "这幅画由一位荷兰画家创作于约1665年。"
        }, {
            question: "《呐喊》的作者是谁？",
            answers: ["扬·维米尔", "桑德罗·波提切利", "卡济米尔·马列维奇", "爱德华·蒙克"],
            correct: 3,
            image: "images/shedevr_author/08_04.jpeg",
            explanation: "这位挪威画家曾创作过这一形象的多个版本。"
        }, {
            question: "画中有几只软塌塌的钟表的《记忆的永恒》是谁创作的？",
            answers: ["萨尔瓦多·达利", "克洛德·莫奈", "迭戈·委拉斯开兹", "列奥纳多·达·芬奇"],
            correct: 0,
            image: "images/shedevr_author/08_05.jpeg",
            explanation: "这幅创作于1931年的小型画作成为超现实主义的标志性作品之一。"
        }, {
            question: "《维纳斯的诞生》是谁创作的？",
            answers: ["爱德华·蒙克", "桑德罗·波提切利", "瓦连京·谢罗夫", "文森特·梵高"],
            correct: 1,
            image: "images/shedevr_author/08_06.jpeg",
            explanation: "这幅文艺复兴时期的画作描绘了女神抵达海岸的场景。"
        }, {
            question: "著名的《睡莲》系列是谁创作的？",
            answers: ["萨尔瓦多·达利", "卡济米尔·马列维奇", "克洛德·莫奈", "扬·维米尔"],
            correct: 2,
            image: "images/shedevr_author/08_07.jpeg",
            explanation: "莫奈曾多次描绘自己在吉维尼的花园池塘。"
        }, {
            question: "《黑色方块》的作者是谁？",
            answers: ["桑德罗·波提切利", "迭戈·委拉斯开兹", "列奥纳多·达·芬奇", "卡济米尔·马列维奇"],
            correct: 3,
            image: "images/shedevr_author/08_08.jpeg",
            explanation: "这幅画是至上主义的代表性作品之一。"
        }, {
            question: "《宫娥》是谁创作的？",
            answers: ["迭戈·委拉斯开兹", "瓦连京·谢罗夫", "文森特·梵高", "爱德华·蒙克"],
            correct: 0,
            image: "images/shedevr_author/08_09.jpeg",
            explanation: "这幅构图复杂的画作描绘了玛格丽特公主、宫廷侍从以及画家本人。"
        }, {
            question: "《少女与桃子》的作者是谁？",
            answers: ["克洛德·莫奈", "瓦连京·谢罗夫", "扬·维米尔", "萨尔瓦多·达利"],
            correct: 1,
            image: "images/shedevr_author/08_10.jpeg",
            explanation: "谢罗夫在阿布拉姆采沃庄园描绘了维拉·马蒙托娃。"
        }]
    },
    country_contur: {
        ru: [{
            question: "Контур какой европейской страны напоминает сапог?",
            answers: ["Исландия", "Норвегия", "Италия", "Чили"],
            correct: 2,
            image: "images/country_contur/09_01.jpeg",
            explanation: "Апеннинский полуостров образует узнаваемый «сапог» в Средиземном море."
        }, {
            question: "Какая страна тянется длинной узкой полосой вдоль западного берега Южной Америки?",
            answers: ["Индия", "Португалия", "Новая Зеландия", "Чили"],
            correct: 3,
            image: "images/country_contur/09_02.jpeg",
            explanation: "Чили протянулась между Андами и Тихим океаном более чем на 4 000 километров."
        }, {
            question: "Какая страна состоит из длинной дуги островов к востоку от Корейского полуострова?",
            answers: ["Япония", "Южно-Африканская Республика", "Мадагаскар", "Чили"],
            correct: 0,
            image: "images/country_contur/09_03.jpeg",
            explanation: "Главные острова архипелага вытянуты вдоль окраины Тихого океана."
        }, {
            question: "Какое островное государство лежит в Северной Атлантике между Гренландией и Норвегией?",
            answers: ["Норвегия", "Исландия", "Италия", "Япония"],
            correct: 1,
            image: "images/country_contur/09_04.jpeg",
            explanation: "Исландия расположена у Срединно-Атлантического хребта."
        }, {
            question: "Контур какой страны образует крупный треугольный полуостров, выступающий в Индийский океан?",
            answers: ["Португалия", "Новая Зеландия", "Индия", "Исландия"],
            correct: 2,
            image: "images/country_contur/09_05.jpeg",
            explanation: "Полуостров Индостан омывают Аравийское море и Бенгальский залив."
        }, {
            question: "Какая страна имеет длинное изрезанное побережье с фьордами на западе Скандинавского полуострова?",
            answers: ["Южно-Африканская Республика", "Мадагаскар", "Чили", "Норвегия"],
            correct: 3,
            image: "images/country_contur/09_06.jpeg",
            explanation: "Фьорды образовались в долинах, углубленных ледниками."
        }, {
            question: "Какая страна занимает западную часть Пиренейского полуострова и граничит только с Испанией?",
            answers: ["Португалия", "Италия", "Япония", "Индия"],
            correct: 0,
            image: "images/country_contur/09_07.jpeg",
            explanation: "Португалия вытянута вдоль Атлантического океана."
        }, {
            question: "Какая страна занимает южную оконечность Африки?",
            answers: ["Новая Зеландия", "Южно-Африканская Республика", "Исландия", "Норвегия"],
            correct: 1,
            image: "images/country_contur/09_08.jpeg",
            explanation: "Ее побережье выходит к Атлантическому и Индийскому океанам."
        }, {
            question: "Какая страна состоит главным образом из двух крупных островов к юго-востоку от Австралии?",
            answers: ["Мадагаскар", "Чили", "Новая Зеландия", "Португалия"],
            correct: 2,
            image: "images/country_contur/09_09.jpeg",
            explanation: "Северный и Южный острова разделены проливом Кука."
        }, {
            question: "Какой большой остров-государство расположен у восточного побережья Африки?",
            answers: ["Италия", "Япония", "Индия", "Мадагаскар"],
            correct: 3,
            image: "images/country_contur/09_10.jpeg",
            explanation: "Мадагаскар отделен от материка Мозамбикским проливом."
        }],
        en: [{
            question: "Which European country’s outline looks like a boot?",
            answers: ["Iceland", "Norway", "Italy", "Chile"],
            correct: 2,
            image: "images/country_contur/09_01.jpeg",
            explanation: "The Apennine Peninsula forms a recognizable «boot» in the Mediterranean Sea."
        }, {
            question: "Which country stretches as a long, narrow strip along the western coast of South America?",
            answers: ["India", "Portugal", "New Zealand", "Chile"],
            correct: 3,
            image: "images/country_contur/09_02.jpeg",
            explanation: "Chile stretches between the Andes and the Pacific Ocean for more than 4,000 kilometers."
        }, {
            question: "Which country is made up of a long arc of islands east of the Korean Peninsula?",
            answers: ["Japan", "Republic of South Africa", "Madagascar", "Chile"],
            correct: 0,
            image: "images/country_contur/09_03.jpeg",
            explanation: "The main islands of the archipelago stretch along the edge of the Pacific Ocean."
        }, {
            question: "Which island country lies in the North Atlantic between Greenland and Norway?",
            answers: ["Norway", "Iceland", "Italy", "Japan"],
            correct: 1,
            image: "images/country_contur/09_04.jpeg",
            explanation: "Iceland is located near the Mid-Atlantic Ridge."
        }, {
            question: "Which country’s outline forms a large triangular peninsula sticking into the Indian Ocean?",
            answers: ["Portugal", "New Zealand", "India", "Iceland"],
            correct: 2,
            image: "images/country_contur/09_05.jpeg",
            explanation: "The Indian subcontinent (Hindustan) is washed by the Arabian Sea and the Bay of Bengal."
        }, {
            question: "Which country has a long, jagged coastline with fjords on the west of the Scandinavian Peninsula?",
            answers: ["Republic of South Africa", "Madagascar", "Chile", "Norway"],
            correct: 3,
            image: "images/country_contur/09_06.jpeg",
            explanation: "Fjords formed in valleys deepened by glaciers."
        }, {
            question: "Which country occupies the western part of the Iberian Peninsula and borders only Spain?",
            answers: ["Portugal", "Italy", "Japan", "India"],
            correct: 0,
            image: "images/country_contur/09_07.jpeg",
            explanation: "Portugal stretches along the Atlantic Ocean."
        }, {
            question: "Which country occupies the southern tip of Africa?",
            answers: ["New Zealand", "Republic of South Africa", "Iceland", "Norway"],
            correct: 1,
            image: "images/country_contur/09_08.jpeg",
            explanation: "Its coast faces the Atlantic and Indian Oceans."
        }, {
            question: "Which country is made up mainly of two large islands to the southeast of Australia?",
            answers: ["Madagascar", "Chile", "New Zealand", "Portugal"],
            correct: 2,
            image: "images/country_contur/09_09.jpeg",
            explanation: "The North and South Islands are separated by Cook Strait."
        }, {
            question: "Which large island country is located off the eastern coast of Africa?",
            answers: ["Italy", "Japan", "India", "Madagascar"],
            correct: 3,
            image: "images/country_contur/09_10.jpeg",
            explanation: "Madagascar is separated from the mainland by the Mozambique Channel."
        }],
        zh: [{
            question: "哪个欧洲国家的轮廓像一只靴子？",
            answers: ["冰岛", "挪威", "意大利", "智利"],
            correct: 2,
            image: "images/country_contur/09_01.jpeg",
            explanation: "亚平宁半岛伸入地中海，形成了辨识度很高的 «靴子» 形状。"
        }, {
            question: "哪个国家沿南美洲西海岸呈狭长条状延伸？",
            answers: ["印度", "葡萄牙", "新西兰", "智利"],
            correct: 3,
            image: "images/country_contur/09_02.jpeg",
            explanation: "智利位于安第斯山脉与太平洋之间，南北绵延超过4000公里。"
        }, {
            question: "哪个国家由位于朝鲜半岛以东、呈长弧形排列的岛屿组成？",
            answers: ["日本", "南非共和国", "马达加斯加", "智利"],
            correct: 0,
            image: "images/country_contur/09_03.jpeg",
            explanation: "日本的主要岛屿沿太平洋边缘呈弧形分布。"
        }, {
            question: "哪个位于北大西洋的岛国处于格陵兰岛与挪威之间？",
            answers: ["挪威", "冰岛", "意大利", "日本"],
            correct: 1,
            image: "images/country_contur/09_04.jpeg",
            explanation: "冰岛位于大西洋中脊附近。"
        }, {
            question: "哪个国家的轮廓呈一个向印度洋伸出的大型三角形半岛？",
            answers: ["葡萄牙", "新西兰", "印度", "冰岛"],
            correct: 2,
            image: "images/country_contur/09_05.jpeg",
            explanation: "印度半岛濒临阿拉伯海和孟加拉湾。"
        }, {
            question: "哪个国家在斯堪的纳维亚半岛西部拥有漫长曲折、遍布峡湾的海岸线？",
            answers: ["南非共和国", "马达加斯加", "智利", "挪威"],
            correct: 3,
            image: "images/country_contur/09_06.jpeg",
            explanation: "峡湾是冰川侵蚀形成的深谷被海水淹没后形成的。"
        }, {
            question: "哪个国家位于伊比利亚半岛西部，并且只与西班牙接壤？",
            answers: ["葡萄牙", "意大利", "日本", "印度"],
            correct: 0,
            image: "images/country_contur/09_07.jpeg",
            explanation: "葡萄牙沿大西洋海岸呈南北狭长分布。"
        }, {
            question: "哪个国家位于非洲大陆的最南端？",
            answers: ["新西兰", "南非共和国", "冰岛", "挪威"],
            correct: 1,
            image: "images/country_contur/09_08.jpeg",
            explanation: "南非的海岸线濒临大西洋和印度洋。"
        }, {
            question: "哪个国家主要由澳大利亚东南方向的两座大岛组成？",
            answers: ["马达加斯加", "智利", "新西兰", "葡萄牙"],
            correct: 2,
            image: "images/country_contur/09_09.jpeg",
            explanation: "新西兰的北岛和南岛由库克海峡分隔。"
        }, {
            question: "哪个大型岛国位于非洲东海岸附近？",
            answers: ["意大利", "日本", "印度", "马达加斯加"],
            correct: 3,
            image: "images/country_contur/09_10.jpeg",
            explanation: "马达加斯加岛与非洲大陆之间隔着莫桑比克海峡。"
        }]
    },
    what_live_in_garden: {
        ru: [{
            question: "Какой фрукт растет на яблоне?",
            answers: ["Морковь", "Подсолнечник", "Яблоко", "Огурец"],
            correct: 2,
            image: "images/what_live_in_garden/10_01.jpeg",
            explanation: "Яблоки появляются на ветвях яблони после цветения."
        }, {
            question: "Какой овощ растет под землей и имеет оранжевый корнеплод?",
            answers: ["Подсолнечник", "Огурец", "Клубника", "Морковь"],
            correct: 3,
            image: "images/what_live_in_garden/10_02.jpeg",
            explanation: "Мы едим утолщенный корень моркови."
        }, {
            question: "Какое высокое растение похоже на большое желтое солнце?",
            answers: ["Подсолнечник", "Огурец", "Клубника", "Яблоко"],
            correct: 0,
            image: "images/what_live_in_garden/10_03.jpeg",
            explanation: "У подсолнечника крупная желтая цветочная корзинка."
        }, {
            question: "Какой зеленый продолговатый овощ растет на плетях?",
            answers: ["Клубника", "Огурец", "Яблоко", "Морковь"],
            correct: 1,
            image: "images/what_live_in_garden/10_04.jpeg",
            explanation: "Огурцы формируются на длинных побегах растения."
        }, {
            question: "Какая сладкая красная ягода растет на невысоких кустиках у земли?",
            answers: ["Яблоко", "Морковь", "Клубника", "Подсолнечник"],
            correct: 2,
            image: "images/what_live_in_garden/10_05.jpeg",
            explanation: "Ягоды клубники созревают близко к поверхности земли."
        }],
        en: [{
            question: "What fruit grows on an apple tree?",
            answers: ["Carrot", "Sunflower", "Apple", "Cucumber"],
            correct: 2,
            image: "images/what_live_in_garden/10_01.jpeg",
            explanation: "Apples appear on apple tree branches after flowering."
        }, {
            question: "What vegetable grows underground and has an orange root?",
            answers: ["Sunflower", "Cucumber", "Strawberry", "Carrot"],
            correct: 3,
            image: "images/what_live_in_garden/10_02.jpeg",
            explanation: "We eat the thickened root of the carrot."
        }, {
            question: "What tall plant looks like a big yellow sun?",
            answers: ["Sunflower", "Cucumber", "Strawberry", "Apple"],
            correct: 0,
            image: "images/what_live_in_garden/10_03.jpeg",
            explanation: "A sunflower has a large yellow flower basket."
        }, {
            question: "What green, long vegetable grows on vines?",
            answers: ["Strawberry", "Cucumber", "Apple", "Carrot"],
            correct: 1,
            image: "images/what_live_in_garden/10_04.jpeg",
            explanation: "Cucumbers form on long shoots of the plant."
        }, {
            question: "What sweet red berry grows on low bushes near the ground?",
            answers: ["Apple", "Carrot", "Strawberry", "Sunflower"],
            correct: 2,
            image: "images/what_live_in_garden/10_05.jpeg",
            explanation: "Strawberries ripen close to the ground."
        }],
        zh: [{
            question: "苹果树上长什么水果？",
            answers: ["胡萝卜", "向日葵", "苹果", "黄瓜"],
            correct: 2,
            image: "images/what_live_in_garden/10_01.jpeg",
            explanation: "苹果树开花后，枝头会结出苹果。"
        }, {
            question: "哪种蔬菜生长在地下，长着橙色的根？",
            answers: ["向日葵", "黄瓜", "草莓", "胡萝卜"],
            correct: 3,
            image: "images/what_live_in_garden/10_02.jpeg",
            explanation: "我们吃的是胡萝卜膨大的根。"
        }, {
            question: "哪种高大的植物看起来像一个大大的黄色太阳？",
            answers: ["向日葵", "黄瓜", "草莓", "苹果"],
            correct: 0,
            image: "images/what_live_in_garden/10_03.jpeg",
            explanation: "向日葵有一个硕大的黄色头状花序。"
        }, {
            question: "哪种绿色、细长的蔬菜长在蔓上？",
            answers: ["草莓", "黄瓜", "苹果", "胡萝卜"],
            correct: 1,
            image: "images/what_live_in_garden/10_04.jpeg",
            explanation: "黄瓜长在植株伸展出的长藤上。"
        }, {
            question: "哪种红色、香甜的浆果长在贴近地面的矮小植株上？",
            answers: ["苹果", "胡萝卜", "草莓", "向日葵"],
            correct: 2,
            image: "images/what_live_in_garden/10_05.jpeg",
            explanation: "草莓的果实通常在靠近地面的位置成熟。"
        }]
    }
};