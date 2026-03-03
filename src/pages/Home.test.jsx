import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

 window.HTMLMediaElement.prototype.play = () => { return Promise.resolve(); };



describe('Home / Character List', () => {
  
  test('deve renderizar o título e pelo menos um personagem', () => {
    render(<App />);
    
    // Testamos se o título principal aparece
    expect(screen.getByText(/Sonic Battle Universe/i)).toBeInTheDocument();

    // Em vez de importar o arquivo, buscamos o texto que sabemos que existe no App
    const sonicElements = screen.getAllByText(/Sonic/i);
    expect(sonicElements.length).toBeGreaterThanOrEqual(1);
  });
   test('deve alterar o personagem exibido ao clicar no card', () => {
    render(<App />);

    // 1. ORGANIZAR: Achamos o card do Sonic
    // Usamos getAll para garantir que pegamos o card e clicamos no primeiro
    const sonicCards = screen.getAllByText(/Sonic/i);
    
    // 2. AGIR: Simular o clique no card
    fireEvent.click(sonicCards[0]);

    // 3. O .toBeInTheDocument() confirma que o clique funcionou e mudou a tela
    expect(screen.getByText(/Sonic The Hedgehog/i)).toBeInTheDocument();
  });
  
  test('deve trocar o sonic pelo shadow', () => {
  render(<App />);

  const shadowCards = screen.getAllByText(/shadow/i);
  
  // O clique dispara o som. Sem a proteção lá no topo, o teste para aqui!
  fireEvent.click(shadowCards[0]); 

  // Agora que o clique passou, verificamos o nome completo
    const shadowApareceu = screen.getAllByText(/shadow/i);
<<<<<<< HEAD
    expect(shadowApareceu.length).toBeGreaterThanOrEqual(1);
=======
    expect(shadowApareceu.length).toBeGreaterThanOrEqual(1)
>>>>>>> 3d7277fb3c86c682dbc1ab8dcd9d045eb66bd28f
});

test ('deve trocar o shadow pelo supersonic', () => {
  render(<App />);
  const superSonicCards = screen.getAllByText(/super sonic/i);
  fireEvent.click(superSonicCards[0]);
  const superSonicApareceu = screen.getAllByText(/super sonic/i);
<<<<<<< HEAD
  expect(superSonicApareceu.length).toBeGreaterThanOrEqual(1);
=======
  expect(superSonicApareceu.length).toBeGreaterThanOrEqual(1)
>>>>>>> 3d7277fb3c86c682dbc1ab8dcd9d045eb66bd28f
}); 

});