document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.querySelector('.email-signup');
    const accordionItems = document.querySelectorAll('.accordion li');
  
   
    emailForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const emailInput = document.querySelector('input[type="email"]');
      const emailValue = emailInput.value;
      alert(`Thank you for signing up with email: ${emailValue}`);
    });
  
  
    accordionItems.forEach(function (item) {
      const input = item.querySelector('input[type="radio"]');
      const content = item.querySelector('.content');
  
      input.addEventListener('change', function () {
        if (input.checked) {
          closeAllAccordions();
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  
    function closeAllAccordions() {
      accordionItems.forEach(function (item) {
        const content = item.querySelector('.content');
        content.style.maxHeight = null;
      });
    }
  });
  