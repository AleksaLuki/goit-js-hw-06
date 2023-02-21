const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit)

 function onFormSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return alert('Заповніть всі поля будь ласка');
  } 

      console.log(`Login: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);
 }









