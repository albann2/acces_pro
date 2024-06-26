import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav";

//image
import Me from "../../assets/img/me.jpg";


function ProfilLearner() {
    return(
        <div className="Prolfill principal">
            <Nav image={Me} onProfil></Nav>

            <div className="outer-div">
                <div className="inner-div">
                    <div className="front__bkg-photo">

                    </div>
                    <div className="corps">
                        <div className="gauche">
                            <div className="front__face-photo">
                                <img src={Me} alt="" />
                            </div>
                            <div className="front__text">
                                <h1 className="front__text-header">Lynsha Petengue</h1>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Yaounde, Cameroun</p>
                                <Link>Edit profil</Link>
                                <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio non exercitationem. Delectus vero distinctio veritatis nulla pariatur nisi, quod tenetur voluptas quisquam doloremque, praesentium culpa quos debitis commodi nemo?</p>
                            </div>
                        </div>
                        <div className="droite">
                            <div className="cont" id="cont">
                                <h4>History</h4>
                                <hr />
                                <div className="list">
                                    <Link>Text</Link>
                                    <Link>Text</Link>
                                    <Link>Text</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilLearner;