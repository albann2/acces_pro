import React from "react";
import { Link } from "react-router-dom";
import Blazon from "../components/blazon";

function Choice() {
    return(
        <div className="choice principal">
            <Blazon></Blazon>
            <div className="droite">
                <div className="entete">
                    <p>
                        <Link to="/">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                        Creating Account
                    </p>
                </div>
                <div className="bas">
                    <h1>Choosing account type</h1>
                    <div className="link">
                        <Link to="/pages/learner/register">Learner</Link>
                        <Link to="/pages/school/register">School</Link>
                        <Link to="/pages/company/register">Company</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choice;