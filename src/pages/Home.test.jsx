import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

 window.HTMLMediaElement.prototype.play = () => { return Promise.resolve(); };


describe('Home / Character List', () => {
  
  test('deve renderizar o título e pelo menos um personagem', () => {
    render(<App />);
    
    
    expect(screen.getByText(/Sonic Battle Universe/i)).toBeInTheDocument();

    const sonicElements = screen.getAllByText(/Sonic/i);
    expect(sonicElements.length).toBeGreaterThanOrEqual(1);
  });
   test('deve alterar o personagem exibido ao clicar no card', () => {
    render(<App />);

    
    const sonicCards = screen.getAllByText(/Sonic/i);
    
  
    fireEvent.click(sonicCards[0]);

    expect(screen.getByText(/Sonic The Hedgehog/i)).toBeInTheDocument();
  });
  
  test('deve trocar o sonic pelo shadow', () => {
  render(<App />);

  const shadowCards = screen.getAllByText(/shadow/i);
  

  fireEvent.click(shadowCards[0]); 

 
    const shadowApareceu = screen.getAllByText(/shadow/i);
    expect(shadowApareceu.length).toBeGreaterThanOrEqual(1);
});

test ('deve trocar o shadow pelo supersonic', () => {
  render(<App />);
  const superSonicCards = screen.getAllByText(/super sonic/i);
  fireEvent.click(superSonicCards[0]);
  const superSonicApareceu = screen.getAllByText(/super sonic/i);
  expect(superSonicApareceu.length).toBeGreaterThanOrEqual(1);
}); 

});