const p = document.querySelector('#error');
const main = document.querySelector('#main');

const getProducts = () => {
  return fetch('https://mate-academy.github.io/react_phone-catalog/api/products.json')
  .then(response => response.json())
  .catch(err => p.textContent = `Something went wrong: ${err}`);
};

const fetchProducts = async () => {
  const allProducts = await getProducts();

  await allProducts.forEach(product => {
    const discountSum = Math.ceil((product.price / 100) * product.discount);
    const price = product.discount > 0
      ? `$${product.price - discountSum}`
      : `$${product.price}`;
  
    const discount = product.discount === 0
      ? ''
      : `$${product.price}`;


    main.insertAdjacentHTML('afterbegin', 
    `
      <div class = "products__card">
        <img class="products__card__img" alt = "${product.name}" src = "${product.imageUrl}">
        <p class = "products__card__title"> ${product.name} </p>
        <p class = "products__card__price"> ${price} 
          <span class = "products__card__price-old"> ${discount} </span>
        </p>
        
        <div class = "products__card__description">
          <div class ="products__card__description-items">
            <p> Screen </p>
            <p class ="products__card__description__params"> ${product.screen} </p>
          </div>
        
          <div class ="products__card__description-items">
            <p> Capacity </p>
            <p class ="products__card__description__params"> ${product.capacity} </p>
          </div>

          <div class ="products__card__description-items">
            <p> Ram </p>
            <p class ="products__card__description__params"> ${product.ram} </p>
          </div>
      
        </div>

        <div class = "products__card__buttons"> 
          <button type="button" class="products__card__buttons-cart"> Add to cart </button>
          <button type="button" class="products__card__buttons-favorites"> </button>
        </div>

      </div>
    `
    )
  });

  const handlerButtons = () => {
    const cart = document.querySelectorAll('.products__card__buttons-cart');
    const favs = document.querySelectorAll('.products__card__buttons-favorites');
  
    cart.forEach(button => {
      button.addEventListener('click', () => {
        button.innerText = 'Product added to card'
        setTimeout(() => button.innerText = 'Add to cart', 3000)
      });
    })

    favs.forEach(button => {
      button.addEventListener('click', () => {
        button.style.background = `url("../../img/favs/FavsAdd.png") no-repeat center`
        setTimeout(() => button.style.background = `url("../../img/favs/favs.png") no-repeat center`, 3000)
      });
    })
  }
  
  handlerButtons();
};

fetchProducts();