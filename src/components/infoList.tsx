import React from "react";

import professora from "../images/profe.svg";

import ov1Image from "../images/info-list-ov-1.svg"
import ov2Image from "../images/info-list-ov-2.svg"
import ov3Image from "../images/info-list-ov-3.svg"

import lineTopImage from "../images/line-top.svg";

import "../style/infoList.css";

function InfoList() {
    return (
        <div className="info-list-container">
            <img src={professora} className="profe-img" />

            <div className="cards-list">
                <img src={ov1Image} className="ov-1" alt="ov-1" />
                <div className="card c1">
                    <span className="number">01</span>
                    <span className="text">ACOMPANHAMENTO INDIVIDUALIZADO <br />Professores e equipe pedagógica monitoram de perto o desenvolvimento de cada criança, adaptando as atividades conforme as necessidades de aprendizado.</span>
                    <img src={ov2Image} className="ov-2" alt="ov-2" />
                </div>

                <div className="card c2">
                    <span className="number">02</span>
                    <span className="text">ATENDIMENTO NO RITMO DA CRIANÇA <br />Ajustes nas atividades diárias para garantir que cada criança evolua de acordo com suas capacidades e interesses.</span>
                </div>

                <img src={lineTopImage} className="line-info" alt="line-info" />

                <div className="card c3">
                    <span className="number">03</span>
                    <span className="text">COMUNICAÇÃO ABERTA <br />Canal direto entre pais, professores e equipe para troca constante de informações sobre o progresso e bem-estar da criança.</span>
                </div>

                <img src={ov3Image} className="ov-3" alt="ov-3" />
            </div>
        </div>
    )
}

export default InfoList;