import throttle from 'lodash.throttle';

const formSet = document.querySelector('.feedback-form');
const emailData = formSet.elements.email;
const messageData = formSet.elements.message;
let formData = {};
dataFromLocalStorage();
formSet.addEventListener('input', throttle(onFormInput, 500));
formSet.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
  formData = {};
}

function dataFromLocalStorage() {
  const gatheredInf = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData = { ...gatheredInf };
  if (gatheredInf) {
    const { email = '', message = '' } = gatheredInf;
    emailData.value = email;
    messageData.value = message;
  }
}
