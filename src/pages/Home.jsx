// src/pages/Home.jsx
import { CharacterCard } from '../components/CharacterCard';
import { CharacterInfo } from '../components/CharacterInfo';

export default function Home({ personagens, selecionado, handleSelect, mute, setMute }) {
  return (
    <div className="container" style={{ 
      backgroundColor: selecionado ? `${selecionado.corTema}15` : '#0b0e14', 
      minHeight: '100vh' 
    }}>
      <header className="top-bar">
        <h1>Sonic Battle React</h1>
        <button className="sound-toggle" onClick={() => setMute(!mute)}>
          {mute ? '🔈' : '🔊'}
        </button>
      </header>

      <main style={{ display: 'flex', gap: '40px', padding: '20px' }}>
        <ul className="list">
          {personagens.map((p) => (
            <CharacterCard 
              key={p.id} 
              personagem={p} 
              selecionado={selecionado} 
              onSelect={handleSelect} 
            />
          ))}
        </ul>
        <CharacterInfo selecionado={selecionado} />
      </main>
    </div>
  );
}