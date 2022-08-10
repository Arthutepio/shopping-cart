const fetchProducts = async (item) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    
    const response = await fetch(url);
    const data = await response.json();
    // console.log('test', data);
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
