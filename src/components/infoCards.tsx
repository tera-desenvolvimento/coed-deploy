import React from "react";

import title from "../images/sobre-title.svg";
import corredorImg from "../images/corredor.svg";
import fachadaImg from "../images/fachada.svg";

import "../style/infoCards.css";

function InfoCards() {
    return (
        <React.Fragment>
            <img src={title} className="info-cards-title" id="about" />
            <div className="info-cards-grid">
                <div className="info-text-wrapper">
                    <span>
                        Há décadas, o COED vem formando gerações em Neópolis, sendo referência em educação infantil e juvenil. Mais do que ensinar, cultivamos valores, descobrimos talentos e incentivamos sonhos. <br />
                        Com uma equipe pedagógica dedicada e uma estrutura acolhedora, oferecemos um ambiente onde cada aluno é incentivado a aprender com alegria, curiosidade e propósito. Nossa missão é preparar crianças e jovens para o futuro — com conhecimento, empatia e responsabilidade. <br /><br />
                        Aqui, tradição e inovação caminham juntas. Mantemos o compromisso de oferecer um ensino de qualidade, aliado a projetos que estimulam a criatividade, o pensamento crítico e o amor pelo aprendizado.
                    </span>
                </div>
                <img src={fachadaImg} className="info-card-img 1" />
                <img src={corredorImg} className="info-card-img 2" />
            </div>
        </React.Fragment>
    )
}

export default InfoCards;