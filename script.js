const cartShoppingArea = document.querySelector('.cart__items');
const btnAddCartShopping = document.querySelector('.items');
const empytCart = document.querySelector('.empty-cart');

const renderPrice = (num) => {
  const total = document.querySelector('.total-price');
  total.innerText = num;
};

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

const sumProducts = () => {
  const productList = document.querySelectorAll('.cart__items li');
  if (productList.length === 0) {
    renderPrice(0);
  }
  let total = 0;
  productList.forEach((product) => {
  total += Number(product.innerText.split('$')[1]);
    renderPrice(total);
  });
};

const cartItemClickListener = (event) => {
  total -= Number(event.target.innerText.split('$')[1]);
  event.target.remove();
  sumProducts();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

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

empytCart.addEventListener('click', () => {
  // console.log('ok');
  cartShoppingArea.innerText = '';
  localStorage.clear();
});

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
  saveCartItems('cartItems', cartShoppingArea.innerHTML);
  sumProducts();
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

const addEvent = () => {
  cartShoppingArea.innerHTML = getSavedCartItems('cartItems');
  const array = document.querySelectorAll('.cart__item');
  array.forEach((e) => {
    e.addEventListener('click', cartItemClickListener);
  });
};

const loading = () => {
  const container = document.querySelector('.items');
  const paragraph = document.createElement('p');
  paragraph.className = 'loading';
  paragraph.innerText = 'carregando...';
  container.appendChild(paragraph);
};

window.onload = async () => {
  loading();
  await getProduct();
  addEvent();
  const removeLoad = document.querySelector('.loading');
  removeLoad.remove();
};
