import React from "react";

import logoCoed from "../images/coed-logo.svg";

import "../style/footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="column">
                <img src={logoCoed} className="logo-coed" alt="logo-coed" />
                <b>Fale conosco</b>
                <a href="tel:+557933441897">(79) 3344-1897</a>
                <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer">(79) 9 9944-2292 (WhatsApp)</a>
                <a href="mailto:colegioeducativo_@hotmail.com">colegioeducativo_@hotmail.com</a>
            </div>
            <div className="column">
                <a href="#">Home</a>
                <a href="#">Quem somos</a>
                <a href="#">Nossa história</a>
                <a href="#">Nosso time</a>
                <a href="#">Nossa unidade</a>
            </div>
            <div className="column">
                <a href="#">Educação infantil</a>
                <a href="#">Ensino fundamental (anos iniciais)</a>
                <a href="#">Ensino fundamental (anos finais)</a>
                <a href="#">Outros serviços</a>
                <a href="#">Política de privacidade</a>
            </div>
        </div>
    )
}

export default Footer;