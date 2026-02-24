import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste de Som no App', () => {
  
  test('deve tentar tocar o som do personagem quando ele for clicado', () => {
    // 1. Criamos um espião para a função 'play' do HTML5 Audio
    const playSpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve());

    render(<App />);

    // 2. Encontra o card do Sonic (ou outro que você tenha) e clica
    // Se o seu App já carrega os personagens, pegamos pelo nome
    const cardSonic = screen.getByText(/Sonic The Hedgehog/i);
    fireEvent.click(cardSonic);

    // 3. O "Expect" (A grande prova!):
    // Verificamos se a função play foi chamada pelo menos uma vez
    expect(playSpy).toHaveBeenCalled();

    // Limpa o espião depois do teste
    playSpy.mockRestore();
  });
});