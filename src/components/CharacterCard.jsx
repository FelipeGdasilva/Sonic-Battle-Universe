export function CharacterCard({ personagem, selecionado, onSelect }) {
  const isSelected = selecionado?.id === personagem.id;

  return (
    <li 
      onClick={() => onSelect(personagem)}
      className={`character ${isSelected ? 'selected' : ''}`}
      style={{ '--cor-tema': personagem.corTema }}
    >
<<<<<<< HEAD
      <img 
        src={personagem.icone} 
        alt={personagem.nome} 
        style={{ width: '80px' }} 
      />
=======
      const iconeTamanhoReduzido = personagem.icone;
      <img src={iconeTamanhoReduzido} alt={personagem.nome} style={{ width: '80px' }} />
>>>>>>> 56e1c39d3641d5ee40066daf16285ad1e6a794a1
      <p>{personagem.nome}</p>
    </li>
  );
}
