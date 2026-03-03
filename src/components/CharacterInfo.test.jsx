import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharacterInfo } from './CharacterInfo';


const mockSelecionado = {
  nome: 'Knuckles',
  imagem: 'knuckles.png',
  corTema: '#FF0000',
  stats: [
    { label: 'Strength', value: 100 },
    { label: 'Speed', value: 80 }
  ]
};

describe('CharacterInfo Component', () => {

  test('deve mostrar a mensagem inicial quando nenhum lutador está selecionado', () => {
   
    render(<CharacterInfo selecionado={null} />);
    expect(screen.getByText(/Selecione um lutador/i)).toBeInTheDocument();
  });

  test('deve renderizar os dados do personagem e as barras de status', () => {
    render(<CharacterInfo selecionado={mockSelecionado} />);
    
    
    expect(screen.getByText('Knuckles')).toBeInTheDocument();

  
    const barras = document.querySelectorAll('.status-bar-bg > div');
    

    expect(barras[0]).toHaveStyle('width: 100%');
    
    
    expect(barras[1]).toHaveStyle('width: 80%');
  });
});