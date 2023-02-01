const form = document.querySelector('#form');
const send = document.querySelector('#send');
const p = document.querySelector('#result');

const frequentCharacter = (str) => {
  let tempObject = {};
  let count = 0;
  let maxValue = 1;
  let result = 'no frequent characters'; 
  let x = ''; 

  for (let i = 0; i < str.length; i++) {
    if (!tempObject[str[i]]) {
      tempObject[str[i]] = count;
    } 
    tempObject[str[i]]++;
  }

  for (let key in tempObject) {
    if (tempObject[key] > maxValue) {
      maxValue = tempObject[key];
      result = key;
    }

    if (maxValue > 1 && maxValue === tempObject[key] && key !== result) {
      result = result.concat(' / ', key);
    }
  }

  return result;
};

send.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const text = formData.get('value');
    
    if (!text.length) {
      p.textContent = 'The field is empty';    
    } else {
      p.textContent = `result = ${frequentCharacter(text)}`;
    }
});