import React from "react";
import { Link } from "react-router-dom";

//image
import not from "../assets/img/3.jpeg";

function NotFound() {
    return(
        <div className="notfound principal">
            <div className="corps">
                <div className="gauche">
                    <p>
                        <img src={not} alt="" />
                    </p>
                </div>
                <div className="droite">
                    <h1>404</h1>
                    <h2>Not found</h2>
                    <p>Hummm... Page innacessible veillez retourner en arriere</p>
                    <br />
                    <Link to="/">Retourner en arriere</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;