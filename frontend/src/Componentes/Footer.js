import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Sobre Nós</h5>
             <p>Valorizamos a beleza da arte indígena e a natureza. Nosso compromisso é cuidar do meio ambiente, protegendo nossas florestas e preservando nossa cultura. Nossas peças são feitas por talentosas artesãs das aldeias, que têm um vínculo especial com a proteção ambiental e que representam a força e a sabedoria das mulheres da nossa comunidade.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="ms-lg-5">Contato</h5>
            <p className="ms-lg-5">Endereço: Rua da Viagem, 123<br />Telefone: (38) 456-7890<br />Email: arteindigena@gmail.com</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Métodos de Pagamento</h5>
            <div className="row" id="payment-icons">
              <img src="/Imagem/Icons/visa.png" alt="Visa" className="col-3" />
              <img src="/Imagem/Icons/mastercard.png" alt="Mastercard" className="col-3" />
              <img src="/Imagem/Icons/diners.png" alt="Diners" className="col-3" />
              <img src="/Imagem/Icons/elo.png" alt="Elo" className="col-3" />
              <img src="/Imagem/Icons/boleto.png" alt="Boleto" className="col-3" />
              <img src="/Imagem/Icons/discover.png" alt="Discover" className="col-3" />
              <img src="/Imagem/Icons/amex.png" alt="Amex" className="col-3" />
            </div>
            <hr />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Métodos de Envio</h5>
            <div className="row" id="shipping-icons">
              <img src="/Imagem/Icons/correios.png" alt="Correios" className="col-4" />
              <img src="/Imagem/Icons/sedex.png" alt="Sedex" className="col-4" />
              <img src="/Imagem/Icons/pac.png" alt="PAC" className="col-4" />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
