import React, { useState } from 'react';
import CadastroForm from './CadastroForm';
import LoginForm from './LoginForm';
import CarrinhoForm from './CarrinhoForm';

const Menu = () => {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

    const handleMostrarCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    const handleMostrarLogin = () => {
        setMostrarLogin(!mostrarLogin);
    };

    const handleMostrarCarrinho = () => {
        setMostrarCarrinho(!mostrarCarrinho);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#7a260f" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ marginLeft: "5cm" }}>
                    <img src="/Imagem/logo.png" alt="Logo" style={{ width: "100px", height: "auto" }} />
                </a>
                <form className="d-flex ms-auto">
                    <input className="form-control me-2" type="search" placeholder="Pesquisar" style={{ maxWidth: "5cm" }} aria-label="Search" />
                    <button className="btn btn-outline-success me-2 text-white" type="submit">Pesquisar</button>
                </form>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={handleMostrarCadastro}>Cadastro</button>
                            {mostrarCadastro && <CadastroForm />}
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={handleMostrarLogin}>Login</button>
                            {mostrarLogin && <LoginForm />}
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={handleMostrarCarrinho}>Carrinho</button>
                            {mostrarCarrinho && <CarrinhoForm />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
