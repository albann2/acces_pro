import React from "react";
import { Link } from "react-router-dom";

//image
import Logo from "../assets/img/Frame 2 (1).png"
import Bak from "../assets/img/Group 1892.png"


function Begin() {
    return(
        <div className="begin principal">
            <div className="gauche">
                <div className="haut">
                    <p>
                        <img src={Logo} alt="" />
                    </p>
                    <h1>ACCES PROFESSIONNEL</h1>
                </div>
                <div className="mil">
                    <h1>Login & Registration</h1>
                </div>
                <div className="bas">
                    <Link to="/pages/login">Login <i className="fas fa-lock"></i></Link>
                    <Link to="/pages/choice">Registration <i className="fas fa-file-lines"></i></Link>
                </div>
            </div>
            <div className="droite">
                <img src={Bak} alt="" />
            </div>
        </div> 
    );
}

export default Begin;