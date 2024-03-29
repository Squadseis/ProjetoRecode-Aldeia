import React, { useState } from 'react';

const CadastroForm = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [enviado, setEnviado] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Simula um envio dos dados para o servidor e o banco de dados
        // Aqui  adicionar a lógica real de envio, substituindo este trecho


        
        console.log('Dados enviados:', { nome, email, senha });

   
        alert(' Seja bem vindo');

        
        setEnviado(true);
    };

    return (
        <div style={{ display: enviado ? 'none' : 'block', position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "8cm", padding: "20px", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "10px", zIndex: "9999" }}>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default CadastroForm;
