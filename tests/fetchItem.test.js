require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function');
    expect.assertions(1);
  });
  
  it('Verifica se ao exwcultar a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalled();
    expect.assertions(1);
  });

  it('Verifica se ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
  const url = 'https://api.mercadolibre.com/items/MLB1615760527';
  await fetchItem('MLB1615760527');
  expect(fetch).toBeCalledWith(url);
  
  });

  it('Verifica se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
    expect.assertions(1);
  });

  it('Verifica se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
    expect.assertions(1);
  })
});
