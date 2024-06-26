import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";

//image
import Me from "../../assets/img/me.jpg";

function HomeLearner() {
    return(
        <div className="Homel principal">
            <Nav image={Me} onHome></Nav>
            <div className="corps">
                <h3>Bienvenue sur</h3>
                <h1>Acces Professionnel</h1>
                <div className="link">
                    <div className="linkValue">
                        <Link>
                            <div className="gauche">
                                <h4>Explorer les métiers</h4>
                                <p>Découvrez quels métiers et formations correspondent à vos différentes compétences</p>
                            </div>
                            <div className="droite">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="linkValue">
                        <Link>
                            <div className="gauche">
                                <h4>Orientation personnalisée</h4>
                                <p>Les métiers et formations adaptés pour votre profil</p>
                            </div>
                            <div className="droite">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="linkValue">
                        <Link>
                            <div className="gauche">
                                <h4>Emplois & Formations</h4>
                                <p>Découvrez les offres d’emplois et stages disponibles prêts de chez vous</p>
                            </div>
                            <div className="droite">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLearner;