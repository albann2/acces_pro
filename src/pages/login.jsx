import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blazon from "../components/blazon";

import envelopIcon from "../assets/img/icons8-message-rempli-50.png";
import lockIcon from "../assets/img/icons8-verrouiller-2-50.png";

function Login() {

    const [valueInput, setValueInput] = useState('');
    const [valueSelect, setValueSelect] = useState('');
    const [valueInputd, setValueInputd] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) =>{
        setValueInput(event.target.value);
    }
    const handleChange2 = (event) =>{
        setValueInputd(event.target.value);
    }
    const handleChange3 = (event) =>{
        setValueSelect(event.target.value);
    }

    const handleSubmit = (/*event*/) =>{
        // event.preventDefault();
        // alert(valueInput.length)
        if (valueSelect == "learner") {
            navigate("/pages/learner/profil");
        }else if (valueSelect == "company") {
            navigate("/pages/company/profil");
        }else if (valueSelect == "school") {
            navigate("/pages/school/profil");
        }
    }

    return(
        <div className="login principal">
            <Blazon type="log"></Blazon>
            <div className="droite">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="formcont">
                        <div className="select">
                            <select name="" id="" value={valueSelect} onChange={handleChange3}>
                                <option value=""></option>
                                <option value="learner">Learner</option>
                                <option value="school">School</option>
                                <option value="company">Company</option>
                            </select>
                            <div></div>
                        </div>
                        <input type="email" value={valueInput} onChange={handleChange} name="Enter your mail" id="" style={{backgroundImage : `url(${envelopIcon})`}}/>
                        <input type="password" value={valueInputd} onChange={handleChange2} name="Password" style={{backgroundImage : `url(${lockIcon})`}} id="" />
                    </div>
                    <div className="other">
                        <div className="one">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor=""> Remember me</label>
                        </div>
                        <div className="two">
                            <Link to="">Forget password ?</Link>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                    <p>New member ? <Link to="/pages/choice">Register now</Link></p>
                </form>
            </div>
        </div> 
    );
}

export default Login;