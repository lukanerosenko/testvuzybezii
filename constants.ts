
import { Question, Direction, CategoryMapping, CategoryType } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Какой тип деятельности приносит вам больше всего удовольствия?",
    choices: [
      { id: CategoryType.A, text: "Работа с числами, анализ данных, логика" },
      { id: CategoryType.B, text: "Создание чего-то нового: дизайн, визуальные концепции" },
      { id: CategoryType.C, text: "Работа с людьми: помощь, общение, управление" },
      { id: CategoryType.D, text: "Естественные науки, исследования, эксперименты" },
      { id: CategoryType.E, text: "Технологии, программирование, техника" },
      { id: CategoryType.F, text: "Биология человека, здоровье, медицина" }
    ]
  },
  {
    id: 2,
    text: "Какие навыки вы считаете у себя сильными?",
    choices: [
      { id: CategoryType.A, text: "Математические и аналитические навыки" },
      { id: CategoryType.B, text: "Креативность, визуальное мышление" },
      { id: CategoryType.C, text: "Коммуникация и работа с людьми" },
      { id: CategoryType.D, text: "Лабораторные / научные навыки" },
      { id: CategoryType.E, text: "Технические навыки и работа с технологиями" },
      { id: CategoryType.F, text: "Биология, анатомия, понимание процессов в организме" }
    ]
  },
  {
    id: 3,
    text: "Какую задачу вы выберете, если нужно сделать проект?",
    choices: [
      { id: CategoryType.A, text: "Построить финансовую модель или сделать анализ данных" },
      { id: CategoryType.B, text: "Разработать дизайн или визуальную концепцию" },
      { id: CategoryType.C, text: "Провести интервью, исследование аудитории, организовать команду" },
      { id: CategoryType.D, text: "Поставить эксперимент, исследовать природный процесс" },
      { id: CategoryType.E, text: "Сделать техническое устройство или написать программу" },
      { id: CategoryType.F, text: "Создать проект, связанный со здоровьем / ЗОЖ / анализом данных" }
    ]
  },
  {
    id: 4,
    text: "В какой среде вы чувствуете себя максимально комфортно?",
    choices: [
      { id: CategoryType.A, text: "Корпоративная среда, бизнес-команды" },
      { id: CategoryType.B, text: "Творческие студии, проектные пространства" },
      { id: CategoryType.C, text: "Командная работа, общение, эмоциональная среда" },
      { id: CategoryType.D, text: "Научная лаборатория, исследования" },
      { id: CategoryType.E, text: "Техническая команда, инженерная среда" },
      { id: CategoryType.F, text: "Медицинская или околомедицинская среда" }
    ]
  },
  {
    id: 5,
    text: "Какой школьный предмет вам больше всего нравился?",
    choices: [
      { id: CategoryType.A, text: "Математика / экономика" },
      { id: CategoryType.B, text: "Искусство / литература / черчение" },
      { id: CategoryType.C, text: "Обществознание / психология" },
      { id: CategoryType.D, text: "Химия / физика / биология (наука)" },
      { id: CategoryType.E, text: "Информатика / технология / физика (инженерия)" },
      { id: CategoryType.F, text: "Биология / анатомия / ОБЖ" }
    ]
  },
  {
    id: 6,
    text: "Что вам кажется более привлекательным?",
    choices: [
      { id: CategoryType.A, text: "Высокие доходы и работа с бизнес-процессами" },
      { id: CategoryType.B, text: "Самореализация через творчество и дизайн" },
      { id: CategoryType.C, text: "Понимание людей и влияние на них" },
      { id: CategoryType.D, text: "Научные исследования, эксперименты" },
      { id: CategoryType.E, text: "Создание технологий будущего" },
      { id: CategoryType.F, text: "Помощь людям, улучшение здоровья, медицина" }
    ]
  }
];

export const DIRECTIONS: Record<number, Direction> = {
  1: {
    id: 1,
    name: "Экономика и финансы",
    universities: [
      { name: "НИУ ВШЭ", faculty: "Факультет экономических наук" },
      { name: "РЭУ им. Плеханова", faculty: "Экономический факультет" },
      { name: "Финансовый университет", faculty: "Экономика" }
    ]
  },
  2: {
    id: 2,
    name: "Дизайн и визуальные искусства",
    universities: [
      { name: "ВШЭ", faculty: "Школа дизайна" },
      { name: "Строгановка", faculty: "Дизайн" },
      { name: "МГИК", faculty: "Дизайн" }
    ]
  },
  3: {
    id: 3,
    name: "Психология и гуманитарные науки",
    universities: [
      { name: "МГУ", faculty: "Факультет психологии" },
      { name: "РГГУ", faculty: "Институт психологии" },
      { name: "ВШЭ", faculty: "Психология" }
    ]
  },
  4: {
    id: 4,
    name: "Биология и науки о жизни (Life Sciences)",
    universities: [
      { name: "МГУ", faculty: "Биофак" },
      { name: "РУДН", faculty: "Биология / биотехнологии" },
      { name: "МИФИ", faculty: "Биофизика" }
    ]
  },
  5: {
    id: 5,
    name: "Химия / химические технологии",
    universities: [
      { name: "МГУ", faculty: "Химфак" },
      { name: "РХТУ им. Менделеева" },
      { name: "МИФИ", faculty: "Нанотехнологии" }
    ]
  },
  6: {
    id: 6,
    name: "IT, программирование, ИБ",
    universities: [
      { name: "ВШЭ", faculty: "ФКН" },
      { name: "МГТУ им. Баумана", faculty: "Информатика" },
      { name: "МИФИ", faculty: "Информатика и ИБ" }
    ]
  },
  7: {
    id: 7,
    name: "Инженерия, робототехника",
    universities: [
      { name: "МГТУ им. Баумана", faculty: "Машиностроение" },
      { name: "МИФИ", faculty: "Инженерия" },
      { name: "МГТУ СТАНКИН" }
    ]
  },
  8: {
    id: 8,
    name: "Журналистика, медиа, коммуникации",
    universities: [
      { name: "МГУ", faculty: "Журналистика" },
      { name: "ВШЭ", faculty: "Медиа и коммуникации" },
      { name: "РУДН", faculty: "Журналистика" }
    ]
  },
  9: {
    id: 9,
    name: "Управление, менеджмент, бизнес",
    universities: [
      { name: "РАНХиГС", faculty: "Менеджмент" },
      { name: "НИУ ВШЭ", faculty: "Менеджмент" },
      { name: "Плехановский университет", faculty: "Менеджмент" }
    ]
  },
  10: {
    id: 10,
    name: "Физика и высокие технологии",
    universities: [
      { name: "МФТИ", faculty: "Физтех-школы" },
      { name: "МИФИ", faculty: "Физтех направления" },
      { name: "МГУ", faculty: "Физический факультет" }
    ]
  },
  11: {
    id: 11,
    name: "Медицина",
    universities: [
      { name: "Первый МГМУ им. Сеченова" },
      { name: "РНИМУ им. Пирогова" },
      { name: "РУДН", faculty: "Медицинский институт" }
    ]
  }
};

export const CATEGORY_MAPPINGS: CategoryMapping[] = [
  { letter: CategoryType.A, label: "Экономика и анализ", directions: [1, 9] },
  { letter: CategoryType.B, label: "Творчество и дизайн", directions: [2, 8] },
  { letter: CategoryType.C, label: "Люди и коммуникация", directions: [3, 8] },
  { letter: CategoryType.D, label: "Науки и исследования", directions: [4, 5, 10] },
  { letter: CategoryType.E, label: "Технологии", directions: [6, 7] },
  { letter: CategoryType.F, label: "Медицина и здоровье", directions: [11] }
];
