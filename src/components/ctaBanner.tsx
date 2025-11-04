import React from "react";

import coedLogo from "../images/coed-logo.svg";
import kidsReading from "../images/kids-reading.svg";

import "../style/ctaBanner.css";

function CtaBanner() {
    return (
        <div className="cta-banner">
            <div className="separator text-wrapper">
                <b className="title">Invista no futuro do seu filho com uma <span className="dest">educação que faz a diferença!</span></b>

                <span className="text">
                    No Colégio Educativo, unimos métodos de ensino modernos à educação tradicional, promovendo o desenvolvimento de habilidades essenciais como criatividade e responsabilidade. <br /><br />
                    Nossa equipe de educadores dedica-se a criar um ambiente estimulante onde cada aluno é incentivado a explorar seu potencial. <br /><br />
                    Com uma formação que valoriza tanto a inovação quanto os princípios tradicionais, garantimos que seu filho esteja preparado para enfrentar os desafios do futuro.
                </span>

                <img src={coedLogo} className="bottom-logo desk" alt="coed-logo" />
            </div>
            <div className="separator">
                <img src={kidsReading} className="kids-reading" alt="kids-reading" />
                <img src={coedLogo} className="bottom-logo mob" alt="coed-logo" />
            </div>
        </div>
    )
}

export default CtaBanner;