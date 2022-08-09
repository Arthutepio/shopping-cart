const fetchProducts = () => {
  // seu código aqui
  // try {
  //   const url = `api.mercadolibre.com/sites/MLB/search?q=${item}`;
  //   const promiseFetch = await fetch(url);
  //   const results = await promiseFetch.json();
  //   return results;
  // } catch (error) {
  //   return error;
  // }
};
fetchProducts('computador');
// console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
