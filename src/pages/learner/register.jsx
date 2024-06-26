import React from "react";
import Blazon from "../../components/blazon";
import Reg from "../../components/reg";

function RegisterLearner(props) {
    return(
        <div className="registerl principal">
            <Blazon></Blazon>
            <Reg name="Learner" chemin="/"></Reg>
        </div>
    );
}

export default RegisterLearner;