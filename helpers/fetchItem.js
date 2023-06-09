const fetchItem = async (item) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log('item', data);
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
