require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toBe('function');
    expect.assertions(1);
  });
  
  it('Verifica se ao execultar a função fetchProducts com o argumento `computador` e teste se fetch foi chamada;;', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
    expect.assertions(1);
  });
  
  it('se, ao chamar a função fetchProducts com o argumento `computador`, a função fetch utiliza o endpoint `https://api.mercadolibre.com/sites/MLB/search?q=computador`;', async () => {  
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(url);
    expect.assertions(1);
  });
  
  it('Verifica se o retorno da função fetchProducts com o argumento `computador` é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
    expect.assertions(1);
  });
  
  it('se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: `You must provide an url`.', async () => {
    const response = await fetchProducts();
    expect(response).toEqual( new Error('You must provide an url'));
    expect.assertions(1);
  })
});
