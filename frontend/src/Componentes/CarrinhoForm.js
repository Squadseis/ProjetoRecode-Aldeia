import React, { useState } from 'react';

const CarrinhoForm = () => {
    
    const [contador, setContador] = useState(0);
    
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    
    const adicionarProduto = () => {
        setContador(contador + 1);
    };

    
    const finalizarCompra = () => {
        
        alert('Parabéns pela compra!');
        
        setCompraFinalizada(true);
    };

    return (
        <div style={{ display: compraFinalizada ? 'none' : 'block', position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60%", maxWidth: "400px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "15px", boxShadow: "0 0 10px rgba(0,0,0,0.2)", zIndex: "9999" }}>
            <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Carrinho</h2>
            <form>
                <div className="mb-3 text-center">
                    <label>Produtos no Carrinho:</label>
                    <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>{contador}</p>
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-success" onClick={adicionarProduto}>Adicionar Produto</button>
                    <button type="button" className="btn btn-primary" onClick={finalizarCompra}>Finalizar Compra</button>
                </div>
            </form>
        </div>
    );
}

export default CarrinhoForm;
