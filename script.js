const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// ==============requisito 3=====================//

const getProduct = async () => {
  const itens = document.querySelector('.items');
  const result = await fetchProducts('computador');
  result.results.forEach((e) => {
    const createProduct = createProductItemElement({
      sku: e.id, 
      name: e.title, 
      image: e.thumbnail,
    });
    itens.appendChild(createProduct);
  });
};

// ==============requisito 4=====================//

const btnAddCartShopping = document.querySelector('.items');
const cartShoppingArea = document.querySelector('.cart__items');

const addToCart = async (id) => {
  const result = await fetchItem(id);
  // console.log(result);
  const createObjectProduct = { 
    sku: result.id, 
    name: result.title, 
    salePrice: result.price,
  };
  // console.log(createObjectProduct); // retorna o obj
  cartShoppingArea.appendChild(createCartItemElement(createObjectProduct));
};

btnAddCartShopping.addEventListener('click', (event) => {
  const btnClick = event.target;
  // console.log(btnClick.className); // item__add
  if (btnClick.className === 'item__add') {
    // console.log(event.target.parentNode);
    const id = getSkuFromProductItem(event.target.parentNode);
    // console.log(id); // retorna o id
    addToCart(id);
  }
});

window.onload = () => {
   getProduct();
  //  fetchProducts('computador');
  // await fetchItem('MLB1615760527');
};
