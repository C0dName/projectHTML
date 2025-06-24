///////Сортировка
document.addEventListener('DOMContentLoaded', function() {
  const sortButtons = document.querySelectorAll('.sortButton');
  const productsContainer = document.querySelector('.products-container');
  const products = Array.from(document.querySelectorAll('.product'));

  // Функция сортировки
  function sortProducts(criteria) {
    // Добавляем класс для анимации
    products.forEach(product => {
      product.classList.add('sorting');
    });

    // Сортируем массив продуктов
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      const ratingA = parseFloat(a.dataset.rating);
      const ratingB = parseFloat(b.dataset.rating);

      switch(criteria) {
        case 'pricePlus':
          return priceA - priceB;
        case 'priceMinus':
          return priceB - priceA;
        case 'rating':
          return ratingB - ratingA;
        default:
          return 0;
      }
    });

    // Очищаем контейнер
    productsContainer.innerHTML = '';

    // Добавляем отсортированные продукты с задержкой для анимации
    setTimeout(() => {
      sortedProducts.forEach((product, index) => {
        setTimeout(() => {
          product.classList.remove('sorting');
          productsContainer.appendChild(product);
        }, index * 50);
      });
    }, 300);
  }

  // Назначаем обработчики событий на кнопки
  sortButtons.forEach(button => {
    button.addEventListener('click', function() {
      const sortCriteria = this.dataset.sort;
      sortProducts(sortCriteria);

      // Обновляем активную кнопку
      sortButtons.forEach(btn => btn.style.backgroundColor = '#4285f4');
      this.style.backgroundColor = '#0d904f';
    });
  });

  // Изначальная сортировка по возрастанию цены
  sortProducts('pricePlus');
});
