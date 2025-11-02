import React from "react";

import coedLogo from "../images/coed-logo.svg";
import iconOv1Img from "../images/icon-ov-1.svg";
import iconOv3Img from "../images/icon-ov-3.svg";

import "../style/header.css";

function Header() {
    return (
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
                <a href="#" className="student-link">
                    Espaço do aluno
                </a>

                <img src={iconOv1Img} className="iconOvTop1" />
            </div>

        </div>
    )
}

export default Header;