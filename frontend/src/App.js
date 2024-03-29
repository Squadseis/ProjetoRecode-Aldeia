import React, { useState } from 'react';
import Menu from './Componentes/Menu.js';
import Carousel from './Componentes/Carousel.js';
import Produto from './Componentes/Produto.js';
import Footer from './Componentes/Footer.js';
import CadastroForm from './Componentes/CadastroForm.js';

function App() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  return (
    <div className="App">
      <Menu setMostrarCadastro={setMostrarCadastro} />
      {mostrarCadastro && <div className="overlay"><CadastroForm /></div>}
      <Carousel />
      <Produto /> 
      <Footer />
    </div>
  );
}

export default App;
