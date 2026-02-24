import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterCard } from './CharacterCard';

// Criamos um personagem de teste (Mock)
const mockPersonagem = {
  id: 'sonic',
  nome: 'Sonic The Hedgehog',
  icone: 'sonic-icon.png', // Pode ser qualquer texto
  som: 'sonic-sound.mp3',   // Adicionei aqui para ficar igual ao seu characters.js
  corTema: '#0054FF'
};
describe('Testes do Componente CharacterCard', () => {
  
  test('deve renderizar o nome do personagem corretamente', () => {
    render(<CharacterCard personagem={mockPersonagem} onSelect={() => {}} />);
    
    const nomeElemento = screen.getByText(/Sonic The Hedgehog/i);
    expect(nomeElemento).toBeInTheDocument();
  });

  test('deve chamar a função onSelect quando o card for clicado', () => {
    const onSelectSpy = jest.fn(); // "Espião" para saber se a função foi chamada
    render(<CharacterCard personagem={mockPersonagem} onSelect={onSelectSpy} />);
    
    const card = screen.getByRole('listitem');
    fireEvent.click(card);
    
    expect(onSelectSpy).toHaveBeenCalledWith(mockPersonagem);
  });

  test('deve ter a classe "selected" quando estiver selecionado', () => {
    render(
      <CharacterCard 
        personagem={mockPersonagem} 
        selecionado={mockPersonagem} // Passamos o mesmo personagem como selecionado
        onSelect={() => {}} 
      />
    );
    
    const card = screen.getByRole('listitem');
    expect(card).toHaveClass('selected');
  });
});