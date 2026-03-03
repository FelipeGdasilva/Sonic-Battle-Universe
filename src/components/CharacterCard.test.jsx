import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterCard } from './CharacterCard';


const mockPersonagem = {
  id: 'sonic',
  nome: 'Sonic The Hedgehog',
  icone: 'sonic-icon.png', 
  som: 'sonic-sound.mp3',   
  corTema: '#0054FF'
};
describe('Testes do Componente CharacterCard', () => {
  
  test('deve renderizar o nome do personagem corretamente', () => {
    render(<CharacterCard personagem={mockPersonagem} onSelect={() => {}} />);
    
    const nomeElemento = screen.getByText(/Sonic The Hedgehog/i);
    expect(nomeElemento).toBeInTheDocument();
  });

  test('deve chamar a função onSelect quando o card for clicado', () => {
    const onSelectSpy = jest.fn(); 
    render(<CharacterCard personagem={mockPersonagem} onSelect={onSelectSpy} />);
    
    const card = screen.getByRole('listitem');
    fireEvent.click(card);
    
    expect(onSelectSpy).toHaveBeenCalledWith(mockPersonagem);
  });

  test('deve ter a classe "selected" quando estiver selecionado', () => {
    render(
      <CharacterCard 
        personagem={mockPersonagem} 
        selecionado={mockPersonagem} 
        onSelect={() => {}} 
      />
    );
    
    const card = screen.getByRole('listitem');
    expect(card).toHaveClass('selected');
  });
});