const form = document.querySelector('#form');
const formAction = 'https://formspree.io/xeqlaplr';
const formButton = document.querySelector('#form-submit');
const formSuccess = document.querySelector('.form-success');
const formFailure = document.querySelector('.form-failure');

const success = () => {
  form.reset();
  formSuccess.classList.remove('d-none');
  formFailure.classList.add('d-none');
  formButton.disabled = true;
};

const error = () => {
  formSuccess.classList.add('d-none');
  formFailure.classList.remove('d-none');
};

const honeyPottingCheck = () => {
  const hiddenInputs = document.querySelectorAll('.h-input');
  return Array.from(hiddenInputs).every(({ value }) => !!value === false);
};

const ajax = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function handleReadyState() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const { status } = xhr;
      if (status >= 200 && status < 400) {
        success();
      } else {
        error();
      }
    }
  };
  xhr.send(data);
};

const handleSubmit = event => {
  event.preventDefault();
  const data = new FormData(form);
  if (honeyPottingCheck()) {
    ajax('POST', formAction, data);
  } else {
    error();
  }
};

const handleFormSubmit = () => form.addEventListener('submit', handleSubmit);

export default handleFormSubmit;
