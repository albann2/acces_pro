import React from "react";
import { Link, useNavigate } from "react-router-dom";

//images
import userIcon from "../assets/img/icons8-utilisateur-24.png";
import envelopIcon from "../assets/img/icons8-message-rempli-50.png";
import phoneIcon from "../assets/img/icons8-téléphone-50.png";
import lockIcon from "../assets/img/icons8-verrouiller-2-50.png";

function Reg(props) {
    const navigate = useNavigate();

    const handleSubmit = (/*event*/) =>{
        navigate("/pages/validation");
    };

    return(
        <div className="register">
                <div className="entete">
                    <p>
                        <Link to="/pages/choice">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                        Creating {props.name} Account
                    </p>
                </div>
                <div className="bas">
                    <form onSubmit={handleSubmit}>
                        <h1>Registration</h1>
                        <div className="formcont">
                            <input type="text" 
                            placeholder={props.name=="Learner" ? "Void Name" : props.name=="Company" ? "Full Company's Name" : "Full training structure's name"} 
                            style={{backgroundImage : `url(${userIcon})`}}/>
                            <input type="email" placeholder="Void email" style={{backgroundImage : `url(${envelopIcon})`}}/>
                            <input type="text" placeholder="Phone number" style={{backgroundImage : `url(${phoneIcon})`}}/>
                            <input type="date" placeholder="Date of birth"/>
                            <input type="password" placeholder="Password" style={{backgroundImage : `url(${lockIcon})`}}/>
                            <input type="password" placeholder="Confirm Password" style={{backgroundImage : `url(${lockIcon})`}}/>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
    );
}

export default Reg;