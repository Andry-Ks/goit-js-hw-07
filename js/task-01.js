//1
// Отримуємо елемент <ul> за його ідентифікатором
const categoriesList = document.getElementById("categories");

// Отримуємо всі елементи <li> з класом 'item' всередині <ul>
const itemElements = categoriesList.querySelectorAll("li.item");

// Підраховуємо кількість знайдених елементів
const itemCount = itemElements.length;

// Виводимо кількість категорій в консоль
console.log(`Кількість категорій: ${itemCount}`);

//2
// Проходимось по кожному елементу <li> з класом 'item'
itemElements.forEach((item) => {
  // Знаходимо елемент <h2> всередині поточного <li>
  const titleElement = item.querySelector("h2");

  // Знаходимо всі дочірні елементи <li> всередині поточного <li>
  const subItemElements = item.querySelectorAll("ul > li");

  // Підраховуємо кількість знайдених підкатегорій
  const subItemCount = subItemElements.length;

  // Виводимо текст заголовка і кількість підкатегорій в консоль
  console.log(
    `Категорія: ${titleElement.textContent}, Елементи: ${subItemCount}`
  );
});