import React from 'react';

const storePhoneNumber = "(22) 99241-0112";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Telefone: {storePhoneNumber}</p>
        <p>Guardião do Sono REN — Desenvolvido por Thalles Taranto</p>
        <a href="https://wa.me/5522992410112">WhatsApp</a>
      </div>
    </footer>
  );
};

export default Footer;