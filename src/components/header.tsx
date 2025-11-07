import React, {useState} from "react";

import coedLogo from "../images/coed-logo.svg";
import iconOv1Img from "../images/icon-ov-1.svg";
import iconOv3Img from "../images/icon-ov-3.svg";

import "../style/header.css";

function Header() {
    const [mobMenuOpened, setMobMenuOpened] = useState(false);

    function toggleMobMenu() {
        setMobMenuOpened(!mobMenuOpened);
    }

    return (
        <React.Fragment>
            <div className="header-container">
                <div className="separator">
                    <img src={coedLogo} className="coed-logo" />
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">Início</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about">Sobre</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://www.instagram.com/colegioeducativo/" target="_blank" rel="noreferrer">Social</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer">Contato</a>
                        </li>
                    </ul>
                    <img src={iconOv3Img} className="iconOvTop3" />
                </div>
                <div className="separator">
                    <a href="https://meu.olaisaac.io/auth" target="_blank" rel="noreferrer" className="student-link">
                        Financeiro
                    </a>
                    <button className="menu-opener" onClick={toggleMobMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 15 12" fill="none">
                            <path d="M0 10.5201C0 11.0461 0.3375 11.4764 0.75 11.4764H14.25C14.6625 11.4764 15 11.0461 15 10.5201C15 9.99405 14.6625 9.56368 14.25 9.56368H0.75C0.3375 9.56368 0 9.99405 0 10.5201ZM0 5.73821C0 6.26421 0.3375 6.69458 0.75 6.69458H14.25C14.6625 6.69458 15 6.26421 15 5.73821C15 5.21221 14.6625 4.78184 14.25 4.78184H0.75C0.3375 4.78184 0 5.21221 0 5.73821ZM0 0.956368C0 1.48237 0.3375 1.91274 0.75 1.91274H14.25C14.6625 1.91274 15 1.48237 15 0.956368C15 0.430366 14.6625 0 14.25 0H0.75C0.3375 0 0 0.430366 0 0.956368Z" fill="white"/>
                        </svg>
                    </button>
                    <img src={iconOv1Img} className="iconOvTop1" />
                </div>
            </div>
            <div className={!mobMenuOpened ? "menu-mobile closed" : "menu-mobile"}>
                <ul className="menu-list-mob">
                    <li className="menu-item">
                            <a href="#">Início</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about">Sobre</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://www.instagram.com/colegioeducativo/" target="_blank" rel="noreferrer">Social</a>
                        </li>
                        <li className="menu-item">
                            <a href="https://wa.me/+557999442292" target="_blank" rel="noreferrer">Contato</a>
                        </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;