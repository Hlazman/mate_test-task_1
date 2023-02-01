
const pre = document.querySelector('#result');
const objectResult = {};
const loc = document.location;
const params = loc.search.split('?').join('').split('&').join('=').split('=');

const getResult = () => {
  for (let i = 0; i <= params.length; i++) {
    if (i % 2 !== 0) {
      objectResult[params[i - 1]] = params[i];
    }
  }
  const result = JSON.stringify(objectResult, null, 1);

  pre.innerText = (loc.search.length) ? result : '';
};

getResult();
