const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toBeCalled();
    expect.assertions(1);
  });

  it('Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toBe('cartItems');
    expect.assertions(1);
  });
});
