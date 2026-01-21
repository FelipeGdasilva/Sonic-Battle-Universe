// src/components/CharacterInfo.jsx
export function CharacterInfo({ selecionado }) {
  return (
    <section className="info" style={{ '--cor-tema': selecionado?.corTema || 'transparent', flex: 1 }}>
      {selecionado ? (
        <div className="preview">
          <img src={selecionado.imagem} alt={selecionado.nome} className="big-image" />
          <h2 className="character-name">{selecionado.nome}</h2>
          
          <div className="stats-area" style={{ width: '100%', marginTop: '10px' }}>
            {selecionado.stats.map((stat, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <p style={{ marginBottom: '5px', fontSize: '0.9rem' }}>
                  {stat.label}: {stat.value}%
                </p>
                <div className="status-bar-bg">
                  <div style={{ 
                    width: `${stat.value}%`, 
                    backgroundColor: 'var(--cor-tema)', 
                    height: '100%', 
                    borderRadius: '5px',
                    transition: 'width 0.8s ease-out' 
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="preview">
          <p>Selecione um lutador</p>
        </div>
      )}
    </section>
  );
}