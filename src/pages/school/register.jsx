import React from "react";
import Blazon from "../../components/blazon";
import Reg from "../../components/reg";

function RegisterSchool() {
    return(
        <div className="registerl principal">
            <Blazon></Blazon>
            <Reg name="School" chemin="/"></Reg>
        </div>
    );
}

export default RegisterSchool;