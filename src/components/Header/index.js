import React from 'react';
import cmreactApp from "../../assets/cmreactApp.png";


const Header = () => (
    <header>
        <p><img src={cmreactApp} alt="Logo cmreactApp" /></p>
        <h2><p>Olá! Seja bem-vindo(a)</p></h2>
    </header>
);

export default Header;