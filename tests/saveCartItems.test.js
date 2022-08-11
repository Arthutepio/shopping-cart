const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
    expect.assertions(1);
  });

  it('', async () => {
    const response = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled('cartItems', response);
    expect.assertions(1);
  });
});
