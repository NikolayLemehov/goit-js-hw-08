import throttle from 'lodash.throttle'

const FORM_LOCAL_KEY = 'feedback-form-state';
const THROTTLE_TIME = 1000;

const formRef = document.querySelector('.feedback-form');
const formData = getSavedFormData();

fillForm(formRef, formData);

formRef.addEventListener('input', throttle(onInputForm, THROTTLE_TIME));
formRef.addEventListener('submit', e => e.preventDefault());


function onInputForm(e) {
  formData[e.target.name] = e.target.value;
  saveFormData(formData);
}

function saveFormData(formData) {
  localStorage.setItem(FORM_LOCAL_KEY, JSON.stringify(formData))
}

function getSavedFormData() {
  const defaultFormData = getDefaultFormData(formRef);
  try {
    return JSON.parse(localStorage.getItem(FORM_LOCAL_KEY)) || defaultFormData;
  } catch (e) {
    return defaultFormData;
  }
}

function fillForm(formRef, formData) {
  [...formRef.elements].forEach(el => el.value = formData[el.name])
}

function getDefaultFormData(formRef) {
  return [...formRef.elements]
    .filter(it => it.hasAttribute('name'))
    .reduce((acc, it) => ({
      ...acc,
      [it.getAttribute('name')]: '',
    }), {})
}
