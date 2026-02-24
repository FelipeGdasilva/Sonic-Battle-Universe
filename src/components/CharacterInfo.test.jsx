import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharacterInfo } from './CharacterInfo';

// 1. Criamos um personagem de teste com stats específicos
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
    // Testamos o estado "vazio" (selecionado={null})
    render(<CharacterInfo selecionado={null} />);
    expect(screen.getByText(/Selecione um lutador/i)).toBeInTheDocument();
  });

  test('deve renderizar os dados do personagem e as barras de status', () => {
    render(<CharacterInfo selecionado={mockSelecionado} />);
    
    // Verifica se o nome aparece na tela
    expect(screen.getByText('Knuckles')).toBeInTheDocument();

    // Verifica se as barras de status têm a largura (width) baseada no valor do stat
    const barras = document.querySelectorAll('.status-bar-bg > div');
    
    // O primeiro stat (Strength) é 100%
    expect(barras[0]).toHaveStyle('width: 100%');
    
    // O segundo stat (Speed) é 80%
    expect(barras[1]).toHaveStyle('width: 80%');
  });
});