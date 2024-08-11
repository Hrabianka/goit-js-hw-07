'use strict';
const listOfCategories = document.getElementById('categories');

const items = listOfCategories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const titleOfCategory = item.querySelector('h2').textContent;
  const countCategoryItems = item.querySelectorAll('ul li').length;
  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${countCategoryItems}`);
});
