const form = document.querySelector('#form');
const field = document.querySelector('#field');
const send = document.querySelector('#send');
const clear = document.querySelector('#clear');
const p = document.querySelector('#result');

field.value = localStorage.getItem('num23');

if (!field.value.length) {
  send.disabled = true;
}

field.addEventListener('input', () => {
 return (field.value.length < 1) ? send.disabled = true : send.disabled = false
});

send.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const value = formData.get('value');
  
  p.textContent = `result = ${value}`;
  localStorage.setItem('num23', value);

  if (+value % 2 !== 0) {
    p.classList.add('isRed');
    p.classList.remove('isGreen');
  } else {
    p.classList.add('isGreen');
    p.classList.remove('isRed');
  }
});

clear.addEventListener('click', () => {
  localStorage.removeItem('num23');
  p.textContent = ``;
  send.disabled = true;
});