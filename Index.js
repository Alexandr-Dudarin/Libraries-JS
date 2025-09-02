const fullNameInput = document.getElementById('fullName');
const nameErrorSpan = document.getElementById('nameError');

fullNameInput.addEventListener('blur', function() {
  const fullNameRegex = /^[а-яё\s-]*$/i;

  if (!fullNameRegex.test(this.value.trim())) {
    nameErrorSpan.textContent = 'Данное поле может содержать только кириллицу, пробелы и дефис.';
  } else if (this.value.trim().length === 0) {
    nameErrorSpan.textContent = 'Поле не может быть пустым.';
  }
  else {
    nameErrorSpan.style.display = 'none';
  }
});

const emailInput = document.getElementById("enterYourEmail");
const emailErrorSpan = document.getElementById("emailError");

emailInput.addEventListener('blur', function(){
    const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(this.value.trim())) {
    emailErrorSpan.textContent = 'Данное поле может содержать только латинские буквы, цифры, точку, нижнее подчёркивание, обязателен символ @ и .';
  } else if (this.value.trim().length === 0) {
    emailErrorSpan.textContent = 'Поле не может быть пустым.';
  }
  else {
    emailErrorSpan.style.display = 'none';
  }
});

/*
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(isValidEmail("stitel23@mail.ru"));
console.log(isValidEmail("stitel23ggga1f2h45523@mail.ru.com"));
console.log(isValidEmail("stitel23*@mail.ru"));
console.log(isValidEmail("stitel23@mail.r"));
console.log(isValidEmail("stitel23@mail"));
*/