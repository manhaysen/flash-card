/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const thems = [
      { title: 'Ранее в сериале...', url: 'ddwqdwqdqwd' },
      { title: 'Кино, вино и домино', url: 'ddwqdwqdqwd' },
      { title: 'Мульти-пульти', url: 'ddwqdwqdqwd' },
    ];

    const question = [
      {
        question: 'Что означает фраза "Валар Моргулис" из "Игры Престолов"?',
        theme_id: 1,
        answer_id: 1,
      },
      {
        question:
          'В отечественном сериале  «Интерны», в отличии от многих ситкомов, нет одного элемента. Основатели решили, что не смеют указывать зрителям. Что там отсутствует?',
        theme_id: 1,
        answer_id: 2,
      },
      {
        question:
          'В каком сериале главный герой Дьявол является владельцем роскошного ночного клуба Lux?',
        theme_id: 1,
        answer_id: 3,
      },
      {
        question:
          'Что бросает на крышу Уолтер Уайт, разочарованный тем, что ему не удалось попасть в дом своей семьи с мирным подношением?',
        theme_id: 1,
        answer_id: 4,
      },
      {
        question: 'Сколько лет зрители ждали продолжения сериала "Твин Пикс"?',
        theme_id: 1,
        answer_id: 5,
      },
      {
        question:
          'Вспомните «Секретные материалы» с Фоксом Малдером и Даной Скалли и продолжите фразу: «Истина...»?',
        theme_id: 1,
        answer_id: 6,
      },

      {
        question: 'Из какого фильма цитата: "Что в коробке?"',
        theme_id: 2,
        answer_id: 7,
      },
      {
        question:
          'Какие персонажи из "Звездных войн" появляются в "Индиане Джонсе"?',
        theme_id: 2,
        answer_id: 8,
      },
      {
        question:
          'Звуки спаривания каких животных были звуком общения велоцерапторов в «Парке Юрского периода»?',
        theme_id: 2,
        answer_id: 9,
      },
      {
        question: 'В каком фильме был впервые показан смыв унитаза?',
        theme_id: 2,
        answer_id: 10,
      },
      {
        question:
          'Какой комик появился в качестве зомби в фильме «Добро пожаловать в Zомбилэнд»?',
        theme_id: 2,
        answer_id: 11,
      },
      {
        question: 'Кто предал Семью в восьмом "Форсаже"?',
        theme_id: 2,
        answer_id: 12,
      },
      {
        question: 'Как зовут тигра принцессы Жасмин из мультфильма «Аладдин»?',
        theme_id: 3,
        answer_id: 13,
      },
      {
        question:
          'Как называется успешная современная российская студия анимации, которая делает полнометражные мультфильмы?',
        theme_id: 3,
        answer_id: 14,
      },
      {
        question: 'Каким животным является Тимон из мультфильма "Король-Лев"?',
        theme_id: 3,
        answer_id: 15,
      },
      {
        question:
          'Что Осел из "Шрека" захотел приготовить на завтрак, когда Шрек разрешил ему переночевать у себя?',
        theme_id: 3,
        answer_id: 16,
      },
      {
        question: 'Какой был любимый соус Рика из "Рика и Морти"?',
        theme_id: 3,
        answer_id: 17,
      },
      {
        question:
          'Кто исполнил опенинги к рускоязычным версиям диснеевских мультфильмов "Утиные истории" и "Чёрный плащ"?',
        theme_id: 3,
        answer_id: 18,
      },
    ];

    const answer = [
      { answer: 'Все люди смертны' },
      { answer: 'Закадровый смех' },
      { answer: 'Люцифер' },
      { answer: 'Пиццу' },
      { answer: '26' },
      { answer: 'Где-то рядом' },

      { answer: 'Семь' },
      { answer: 'R2-D2 и C-3PO' },
      { answer: 'Черепах' },
      { answer: 'Психо' },
      { answer: 'Билл Мюррей' },
      { answer: 'Доминик Торетто' },

      { answer: 'Раджа' },
      { answer: 'Мельница' },
      { answer: 'Сурикат' },
      { answer: 'Вафли' },
      { answer: 'Сычуаньский' },
      { answer: 'Мурат Насыров' },
    ];

    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert('Themes', thems.map(addTimeStamps));
    await queryInterface.bulkInsert('Answers', answer.map(addTimeStamps));
    await queryInterface.bulkInsert('Questions', question.map(addTimeStamps));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
    await queryInterface.bulkDelete('Questions');
    await queryInterface.bulkDelete('Answers');
  },
};
