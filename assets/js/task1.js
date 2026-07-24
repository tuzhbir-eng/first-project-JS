// ✅ 1.1. Вартість замовлення
// Користувач вводить ціну товару та його кількість.
// Розрахувати загальну вартість замовлення та вивести результат.

// ✅ 1.2. Знижка
// Доповнити попередню програму.
// Якщо загальна вартість замовлення:
// - 500 грн і більше — застосувати знижку 3%;
// - 800 грн і більше — застосувати знижку 5%.
// Вивести: суму без знижки; суму знижки; суму до сплати.
// 💡 Перевірити роботу програми для граничних значень.

// ⭐ Challenge: 1.3. Доставка (за бажанням)
// Додати вибір способу доставки:
// - 1 — Самовивіз (0 грн);
// - 2 — Нова пошта (100 грн);
// - 3 — Кур'єр (150 грн).
// Якщо сума замовлення перевищує 1000 грн — доставка безкоштовна.
// Розрахувати остаточну суму до сплати з урахуванням вартості доставки.

let totalPrice = 0;
const productPrice = Number(prompt("Type price of product: "));
const productCount = Number(prompt("Type count of product: "));
let priceWithDiscount = 0;

if (productPrice && productCount !== 0) {
  totalPrice = productPrice * productCount;
}

if (totalPrice >= 500 && totalPrice <= 800) {
  priceWithDiscount = totalPrice * 0.97;
  console.group("Your Total Price");
  console.log("Your price with discount: ", priceWithDiscount);
  console.groupEnd();
} else if (totalPrice >= 800) {
  priceWithDiscount = totalPrice * 0.95;
  console.group("Your Total Price");
  console.log("Your price with discount: ", priceWithDiscount);
  console.groupEnd();
} else {
  priceWithDiscount = totalPrice;
  console.log("Your Total Price: ", totalPrice);
}
