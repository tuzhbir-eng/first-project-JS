// ✅ 3.1. Замовлення напою
// Користувач обирає напій із меню:
// - 1 — Чай (50 грн);
// - 2 — Кава (70 грн);
// - 3 — Сік (60 грн);
// - 4 — Вода (30 грн).
// Вивести інформацію про замовлення у зрозумілому форматі, наприклад:
// ===== Замовлення =====
// Напій: Кава
// Вартість: 70 грн
// Якщо користувач ввів некоректне значення — повідомити про це.
// Використати оператор switch...case.

// ⭐ Challenge: 3.2. Повне замовлення (за бажанням)
// Користувач обирає:
// - розмір напою (S, M, L);
// - кількість напоїв.
// Розмір напою впливає на вартість: M — +15 грн; L — +30 грн.
// Розрахувати загальну вартість замовлення та вивести інформацію про нього у зрозумілому форматі.
// Наприклад:
// ===== Замовлення =====
// Напій: Кава
// Розмір: L
// Кількість: 2
// Ціна за одиницю: 100 грн
// До сплати: 200 грн

let order = 0;
let price = 0;

const menu = alert(
  "MENU: 1 - tea(50 грн), 2 - coffee(70 грн), 3 - juice(60 грн), 4 - water(30 грн)",
);
const drink = +prompt("Choose your drink(tea, coffee, juice, water)");

switch (drink) {
  case 1:
    order = "Tea";
    price = 50;
    console.group("===== Order =====");
    console.log("Drink: ", order);
    console.log("Price: ", price, "грн");
    console.groupEnd();
    break;

  case 2:
    order = "Coffee";
    price = 70;
    console.group("===== Order =====");
    console.log("Drink: ", order);
    console.log("Price: ", price, "грн");
    console.groupEnd();
    break;
  case 3:
    order = "Juice";
    price = 60;
    console.group("===== Order =====");
    console.log("Drink: ", order);
    console.log("Price: ", price, "грн");
    console.groupEnd();
    break;
  case 4:
    order = "Water";
    price = 30;
    console.group("===== Order =====");
    console.log("Drink: ", order);
    console.log("Price: ", price, "грн");
    console.groupEnd(); 
    break;
  default:
    console.log("Please, choose one of the following");
}
