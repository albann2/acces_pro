import React from "react";
import { Route, Routes } from "react-router-dom";

//style
import "./assets/css/style.css"
import "./assets/plugins/fontawesome-free/css/all.min.css"

//pages
import Begin from "./pages/begin.jsx";

import Login from "./pages/login.jsx";
import Choice from "./pages/choice.jsx";
import NotFound from "./pages/notFound.jsx";
import Validation from "./pages/validation.jsx";

import RegisterLearner from "./pages/learner/register.jsx";
import ProfilLearner from "./pages/learner/profil.jsx";
import HomeLearner from "./pages/learner/home.jsx";

import RegisterCompany from "./pages/company/register.jsx";
import ProfilCompany from "./pages/company/profil.jsx";

import RegisterSchool from "./pages/school/register.jsx";
import ProfilSchool from "./pages/school/profil.jsx";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Begin />} />

        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/choice" element={<Choice />} />
        <Route path="/pages/notfound" element={<NotFound />} />
        <Route path="/pages/validation" element={<Validation />} />

        <Route path="/pages/learner/register" element={<RegisterLearner />} />
        <Route path="/pages/learner/profil" element={<ProfilLearner />} />
        <Route path="/pages/learner/home" element={<HomeLearner />} />

        <Route path="/pages/company/register" element={<RegisterCompany />} />
        <Route path="/pages/company/profil" element={<ProfilCompany />} />

        <Route path="/pages/school/register" element={<RegisterSchool />} />
        <Route path="/pages/school/profil" element={<ProfilSchool />} />
    </Routes>
  );
};

export default App;
