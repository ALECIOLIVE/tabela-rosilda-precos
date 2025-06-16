
import React, { useEffect, useState } from 'react';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('/src/assets/tabelas_precos.json')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div>
      <h1>Tabela de Preços</h1>
      <ul>
        {dados.map((item, index) => (
          <li key={index}>{item.tipo} - {item.servico} - R${item.preco}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
