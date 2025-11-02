import React from 'react';

import teensImg from "../images/teens-reading.svg";
import trofeuImg from "../images/trofeu.svg";

import "../style/education.css";

function Education() {
    return (
        <div className="education-container">
            <div className="cards-wrapper">
                <div className="card-item blue">
                    <span>Educação Infantil</span>
                </div>

                <div className="card-item red">
                    <span>Anos Iniciais</span>
                    <span className="sub">Ensino Fundamental I</span>
                </div>

                <div className="card-item orange">
                    <span>Anos Finais</span>
                    <span className="sub">Ensino Fundamental II</span>
                </div>
                <img src={trofeuImg} alt="trofeu" className="trofeu" />
            </div>
            <div>
                <img src={teensImg} alt="teens" className="teens" />
            </div>
        </div>
    )
}

export default Education;