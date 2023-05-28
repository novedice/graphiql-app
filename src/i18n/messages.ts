import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    to_welcome_page: `Home`,
    to_graphi: 'GraphiQL page',
    to_auth: 'Login/signup',
    page_not_found: 'Something went wrong and page not found... ',
    do_not_worry: `Don't worry!`,
    go_to_home: 'back to home',
    back_to_journey: `Let's get you back on your journey.`,
    welcome_page: 'WELCOME PAGE',
    graphi_ql_page: 'GRAPHI-QL PAGE',
    auth_page: 'AUTHENTIFICATION PAGE',
    login: 'Login',
    register: 'register',
    welcome: 'welcome',
    welcomePage: 'welcome page',
    about: 'about',
    contact: 'contact',
    log_out: 'log out',
    sign_up: 'sign up',
    sign_in: 'sign in',
    or: 'or',
    have_an_account: 'Already have an account?',
    email: 'email',
    password: 'password',
    name: 'name',
    madeBy: 'Made by',
    project: 'Project',
    nameRequiredMessage: 'Please enter the name',
    emailRequiredMessage: 'Please enter the email',
    passwordRequiredMessage: 'Please enter the password',
    nameMessage:
      'Please enter the name correctly (with a capital letter, no numbers, no special characters)',
    emailMessage: 'Please enter the correct email address',
    passwordMessage: 'Minimum 8 symbols, at least one letter, one digit, one special character',
    variables_title: 'QUERY VARIABLES',
    headers_title: 'headers',
    getStarted: 'get started',
    notAMember: 'Not a member?',
    startUsing: 'To start using the system, you need to be authorized',
    haveAccount: 'You have an account:',
    dontHaveAccount: `Don't have an account?`,
    playground: 'playground',
    makeRequest: 'Ask for what you want',
    getResponse: 'Get predictable results',
    queryLanguageTitle: 'A query language for your API',
    queryLanguageDesc: `GraphQL is a query language for APIs and a runtime for fulfilling those queries with
    your existing data. GraphQL provides a complete and understandable description of the
    data in your API, gives clients the power to ask for exactly what they need and nothing
    more, makes it easier to evolve APIs over time, and enables powerful developer tools.`,
    error_message: 'Something went wrong... Please try again later. ',
    home: 'home',
    natalia: 'Natalia Ushakova',
    maxim: 'Maksim Abdulkhalikov',
    kirill: 'Kirill Kolchanov',
    discord: 'Discord',
    github: 'Github',
    telegram: 'Telegram',
    ourTeam: 'Our team',
    projectDescription: 'Project description',
    projectNotes: 'Theoretical Notes',
    projectTeam: 'Building a team',
    projectGraphText: 'GraphiQL is a playground/IDE for graphQL requests.',
    projectTheorText1: 'GraphiQL is an open-source tool which you can use as an ',
    projectTheorLink: 'example',
    projectTheorText2:
      '. However, the app should also include authorization/authentication capabilities, to give access to the tool to only to authorized users.',
    projectTeamText: 'The project should be done in a team of 3 members. Teamwork guidelines ',
    projectDocs: 'RSSchool Docs',
    projectBackendText:
      "Application doesn't require a backend. It can be any open GraphQL api which supports CORS, or create a proxy service as part of the app and use it to make requests to any GraphQL api (even those which do not support CORS)",
    courseTitle: 'About the course',
    courseDesc:
      'This course is aimed to the students of the RS School which passed RS School stage #2 and for the new students, which have experience with:',
    here: 'here',
    projectFullDesc: 'A full project description is ',
    courseListItem:
      'Understanding of how to interact with apis (general understanding of REST andGraphQL)',
  },
  [LOCALES.RUSSIAN]: {
    to_welcome_page: 'Домой',
    to_graphi: 'GraphiQL',
    to_auth: 'Вход/регистрация',
    page_not_found: 'Что-то пошло не так и страница не найдена... ',
    do_not_worry: 'Не волнуйтесь!',
    go_to_home: 'back to home',
    back_to_journey: ' Давайте вернмся к вашему путешествию.',
    welcome_page: 'СТРАНИЦА ПРИВЕТСТВИЯ',
    graphi_ql_page: 'Самая сложная страница',
    auth_page: 'Страница логин/регистрация',
    login: 'Вход в систему',
    register: 'регистрация',
    welcome: 'приветствую',
    welcomePage: 'домашняя страница',
    about: 'о нас',
    contact: 'контакты',
    log_out: 'выход',
    sign_up: 'регистрация',
    sign_in: 'вход',
    or: 'или',
    have_an_account: 'У вас уже есть аккаунт?',
    email: 'почта',
    password: 'пароль',
    name: 'имя',
    madeBy: 'Создано',
    project: 'Проект',
    nameRequiredMessage: 'Пожалуйста, введите имя',
    emailRequiredMessage: 'Пожалуйста, введите электронную почту',
    passwordRequiredMessage: 'Пожалуйста, введите пароль',
    nameMessage:
      'Пожалуйста, введите имя правильно (с большой буквы, без цифр и специальных символов)',
    emailMessage: 'Пожалуйста, введите правильный адрес электронной почты',
    passwordMessage:
      'Минимум 8 символов, как минимум одна буква, одна цифра, один специальный символ',
    variables_title: 'переменные',
    headers_title: 'заголовки',
    getStarted: 'начать',
    notAMember: 'Не являетесь участником?',
    startUsing: 'Чтобы начать пользоваться системой, вам необходимо пройти авторизацию',
    haveAccount: 'У вас есть аккаунт:',
    dontHaveAccount: `У вас нет аккаунта?`,
    playground: 'песочница',
    makeRequest: 'Осуществляйте запросы',
    getResponse: 'Получайте предсказуемые результаты',
    queryLanguageTitle: 'Язык запросов для вашего API',
    queryLanguageDesc: `GraphQL - это язык запросов для API и среда выполнения для выполнения этих запросов с использованием существующими данными. GraphQL предоставляет полное и понятное описание данных в вашем API, дает клиентам возможность запрашивать именно то, что им нужно, и ничего больше. больше, облегчает развитие API со временем и позволяет использовать мощные инструменты разработчика.`,
    error_message: 'Что-то пошло не так... Попробуйте повторить попытку через некоторое время  ',
    home: 'Домашняя',
    natalia: 'Наталья Ушакова',
    maxim: 'Максим Абдулхаликов',
    kirill: 'Кирилл Колчанов',
    discord: 'Диксорд',
    github: 'Гитхаб',
    telegram: 'Телеграм',
    ourTeam: 'Наша команда',
    projectDescription: 'Описание проекта',
    projectTeam: 'Команда',
    projectNotes: 'Теоретические замечания',
    projectGraphText: 'GraphiQL - это игровая площадка/IDE для запросов graphQL.',
    projectTheorText1:
      'GraphiQL - это инструмент с открытым исходным кодом, который можно использовать в качестве ',
    projectTheorLink: 'примера',
    projectTheorText2:
      '. Однако приложение также должно включать возможность авторизации/аутентификации, чтобы предоставить доступ к инструменту только авторизованным пользователям.',
    projectTeamText:
      'Проект должен быть выполнен в команде из 3 человек. Руководство по командной работе ',
    projectDocs: 'RSSchool Docs',
    projectBackendText:
      'Приложению не требуется бэкендной составляющей. Это может быть любой открытый GraphQL api, который поддерживает CORS, или создайте прокси-сервис как часть приложения и используйте его для выполнения запросов к любому GraphQL api (даже к тем, которые не поддерживают CORS).',
    courseTitle: 'О курсе',
    courseDesc:
      'Данный курс предназначен для студентов школы RS, прошедших этап №2, а также для новых студентов, имеющих опыт работы с:',
    here: 'тут',
    projectFullDesc: 'Полное описание проекта ',
    courseListItem: 'Понимание того, как взаимодействовать с API (общее понимание REST и GraphQL)',
  },
};
