import React from "react";
import Blazon from "../../components/blazon";
import Reg from "../../components/reg";

function RegisterCompany() {
    return(
        <div className="registerl principal">
            <Blazon></Blazon>
            <Reg name="Company" chemin="/"></Reg>
        </div>
    );
}

export default RegisterCompany;