import React, { useState } from 'react';
import CarrinhoForm from './CarrinhoForm';

const Produto = () => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const handleMostrarCarrinho = () => {
    setMostrarCarrinho(true);
  };

  const handleFinalizarCompra = () => {
    setMostrarCarrinho(true); // Reseta o estado para ocultar o formulário do carrinho
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* Card de Produto 1 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto1.jpg" className="card-img-top" alt="Produto 1" />
            <div className="card-body">
              <h5 className="card-title">Produto 1</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
        {/* Card de Produto 2 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto2.jpg" className="card-img-top" alt="Produto 2" />
            <div className="card-body">
              <h5 className="card-title">Produto 2</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
        {/* Card de Produto 3 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto3.jpg" className="card-img-top" alt="Produto 3" />
            <div className="card-body">
              <h5 className="card-title">Produto 3</h5>
              <p className="card-text">Kit Completo de Acessórios Indígenas.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
        {/* Card de Produto 4 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto4.jpg" className="card-img-top" alt="Produto 4" />
            <div className="card-body">
              <h5 className="card-title">Produto 4</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
         {/* Card de Produto 1 */}
         <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto1.jpg" className="card-img-top" alt="Produto 1" />
            <div className="card-body">
              <h5 className="card-title">Produto 5</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
        {/* Card de Produto 2 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto4.jpg" className="card-img-top" alt="Produto 4" />
            <div className="card-body">
              <h5 className="card-title">Produto 6</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
        {/* Card de Produto 3 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto1.jpg" className="card-img-top" alt="Produto 1" />
            <div className="card-body">
              <h5 className="card-title">Produto 7</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>

        {/* Card de Produto 4 */}
        <div className="col">
          <div className="card h-100">
            <img src="/Imagem/Produtos/produto2.jpg" className="card-img-top" alt="Produto 2" />
            <div className="card-body">
              <h5 className="card-title">Produto 8</h5>
              <p className="card-text">Pulseira de Miçangas Artesanal.</p>
              <button className="btn btn-primary" onClick={handleMostrarCarrinho}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
      {mostrarCarrinho && <CarrinhoForm onFinalizarCompra={handleFinalizarCompra} />}
    </div>
  );
}

export default Produto;
