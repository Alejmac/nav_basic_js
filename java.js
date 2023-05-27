document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    var menuItems = document.querySelectorAll('.menu li a');
  
    function toggleMenu() {
      menu.classList.toggle('active');
    }
  
    toggleButton.addEventListener('click', toggleMenu);
  
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        if (menu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  });