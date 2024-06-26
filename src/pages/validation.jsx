import React, {useState} from "react";
import Blazon from "../components/blazon";
import { Link } from "react-router-dom";

function Validation() {
    
    let inputs = document.querySelectorAll("input");
    let button = document.querySelector("button");
    
    const [valueInput1, setValueInput1] = useState('');
    const [valueInput2, setValueInput2] = useState('');
    const [valueInput3, setValueInput3] = useState('');
    const [valueInput4, setValueInput4] = useState('');
    const [valueInput5, setValueInput5] = useState('');

    return(
        <div className="validation principal">
            <Blazon></Blazon>
            <div class="droite">
                <div class="entete">
                    <p>
                        <Link to="/pages/choice">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                        Creating Account
                    </p>
                </div>
                <div class="bas">
                    <div class="wrapper">
                        <h1>Validation</h1>
                        <p>Please enter the 6-digit code sent to your email <span>address@gmail.com</span> for verification.</p>
                
                        <form >
                            <div class="group">
                                <input type="number" maxLength={1} value={valueInput1} onChange={(event)=>{setValueInput1(event.target.value);}}/>
                                <input type="number" maxLength={1} disabled value={valueInput2} onChange={(event)=>{setValueInput2(event.target.value);}}/>
                                <input type="number" maxLength={1} disabled value={valueInput3} onChange={(event)=>{setValueInput2(event.target.value);}}/>
                                <input type="number" maxLength={1} disabled value={valueInput4} onChange={(event)=>{setValueInput2(event.target.value);}}/>
                                <input type="number" maxLength={1} disabled value={valueInput5}/>
                            </div>
                            <button type="submit">Verify</button>
                        </form>
                        <p class="bol">Didn’t receive any code? <span>Resend Again</span></p>
                        <p>Request new code in 00:30s</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Validation;