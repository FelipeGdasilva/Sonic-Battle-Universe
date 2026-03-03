import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste de Som no App', () => {
  
  test('deve tentar tocar o som do personagem quando ele for clicado', () => {
    
    const playSpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve());

    render(<App />);

   
    const cardSonic = screen.getByText(/Sonic The Hedgehog/i);
    fireEvent.click(cardSonic);

    
    expect(playSpy).toHaveBeenCalled();

    playSpy.mockRestore();
  });
});