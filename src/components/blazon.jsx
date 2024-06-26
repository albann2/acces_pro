import React from "react";

//image
import Logo1 from "../assets/img/1.png"
import Logo2 from "../assets/img/2.png"

function Blazon(props) {
    return(
        <div className="blazon">
            <h1>Acces Professionnel</h1>
            <div className="img">
                <p>
                    <img src={props.type=="log" ? Logo2 : Logo1} alt="" />
                </p>
            </div>
        </div>
    );
}

export default Blazon;