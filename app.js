// Обработчик для кнопки меню
document.getElementById('menuToggle').addEventListener('click', function(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
  if (!e.target.closest('#menuItem')) {
    document.getElementById('dropdownMenu').style.display = 'none';
  }
});

// Обработчики для пунктов меню
['menuOption1', 'menuOption2', 'menuOption3'].forEach(id => {
  document.getElementById(id).addEventListener('click', function() {
    alert(this.textContent.trim() + ' выбран');
    document.getElementById('dropdownMenu').style.display = 'none';
  });
});


