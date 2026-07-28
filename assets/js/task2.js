// ✅ 2.1. Реєстрація студента
// Користувач вводить: ім'я; прізвище; спеціальність; курс; середній бал.
// Вивести інформацію про студента у зрозумілому форматі, наприклад:
// ===== Профіль студента =====
// ПІБ: Петро Петренко
// Спеціальність: Комп'ютерні науки
// Курс: 2
// Середній бал: 91
// Визначити тип кожного введеного значення.
// 💡 Звернути увагу на те, який тип повертає prompt().
// 🌟 Bonus (за бажанням): вивести ці самі дані та фотографію студента на сторінку. Детальніше — у розділі Bonus нижче.

// ✅ 2.2. Доступ до курсу
// Доповнити програму.
// Дано три логічні змінні: isStudent; hasPaid; isMentor.
// Доступ до курсу надається, якщо користувач є ментором або є студентом, який оплатив навчання.
// Вивести повідомлення, чи має користувач доступ до курсу.

// ⭐ Challenge: 2.3. Сертифікат (за бажанням)
// Доповнити програму.
// Є змінна, яка містить відсоток виконання курсу.
// Студент отримує сертифікат тільки при повному проходженні курсу.
// Повідомити студента про можливість отримати сертифікат або вказати, скільки відсотків залишилося до завершення. Звертатися на ім'я.

const Name = prompt("Type student`s name");
const surname = prompt("Type student`s surname");
const specialisation = prompt("Type student`s Specialisation");
const year = Number(prompt("Type student`s year"));
const averageScore = Number(prompt("Type student`s Average score"));

console.group("===== Student`s profile =====");
console.log(typeof Name, typeof surname, "Name, Surname: ", Name, surname);
console.log(typeof specialisation, "specialisation: ", specialisation);
console.log(typeof year, "Year: ", year);
console.log(typeof averageScore, "averageScore: ", averageScore);
console.groupEnd();

const isMentor =  Number(prompt("Are you mentor?(Yes - 1, No - 0)" ));
const isStudent = Number(prompt("Are you Student?(Yes - 1, No - 0)"));
const hasPaid =   Number(prompt("Did you paid?(Yes - 1, No - 0)"   ));

if ((isMentor === 0 && isStudent === 1 && hasPaid === 1) || isMentor === 1) {
  console.log("Congratulation! You have accesed to course!");
} else if (isMentor === 0 && isStudent === 1 && hasPaid === 0) {
  console.log("You must pay to be accesed to course");
} else if (isMentor === 0 && isStudent === 0 && hasPaid === 1) {
  console.log("You are not a student");
} else if (isMentor === 0 && isStudent === 0 && hasPaid === 0) {
  console.log("Access denied");
} else {
  console.log("Access denied");
}
