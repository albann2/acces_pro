import React from "react";
import { Link, redirect } from "react-router-dom";

//image
import Logo from "../assets/img/Frame 2.png";

function Nav(props) {
    const menuSlide = () => {
        const menuIcon = document.querySelector(".menu-icon");
        const navLinks = document.querySelector(".nav-links");
        const navLinksInner = document.querySelectorAll(".nav-links li");

        //toggle active class
        navLinks.classList.toggle("menu-active");
      
        //animate navLinks
        navLinksInner.forEach((li, index) => {
            if (li.style.animation) {
              li.style.animation = "";
            } else {
                li.style.animation = `navLinkAnime 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`;
            }
        });
      
        //toggle for menu-icon animation
        menuIcon.classList.toggle("span-anime");
    };

    const redirectionHome = () =>{
        if (props.type == "learner") {
            return "/pages/learner/home";
        }else if (props.type == "company") {
            return "/pages/company/home";
        }else if (props.type == "school") {
            return "/pages/school/home";
        }
        return "/pages/notfound";
    };

    return(
        <div className="nav">
            <div className="d1">
                <h1>Acces Professionel</h1>
                <img src={Logo} alt="" />
            </div>
            <ul className="d2 nav-links">
                <div>
                    <li>
                        <Link to={redirectionHome} id={props.onHome ? "ouvert" : "ferme"}><i className="fas fa-home"></i> Home</Link>
                    </li>
                    <li>
                        <Link id={props.onChat ? "ouvert" : "ferme"}><i className="fas fa-comments"></i> Chat assistance</Link>
                    </li>
                    <li>
                        <Link id={props.onSetting ? "ouvert" : "ferme"}><i className="fas fa-pen-to-square"></i> Settings</Link>
                    </li>
                    <li>
                        <Link id={props.onProfil ? "ouvert" : "ferme"}><i className="fas fa-user"></i> Profile</Link>
                    </li>
                    <hr />
                    <li className="drop">
                        <Link>Dropdown Link</Link>
                    </li>
                    <li className="drop">
                        <Link>Dropdown Link</Link>
                    </li>
                    <li className="drop">
                        <Link>Dropdown Link</Link>
                    </li>
                    <hr />
                    <li className="drop">
                        <div>
                            <p>Dropdown Sub</p>
                            <Link>Dropdown Link</Link>                               
                            <Link>Dropdown Link</Link>
                        </div>
                    </li>
                </div>
            </ul>

            <div className="d3">
                <input type="checkbox" className="dropdown" name="dropdown" id="dropdown" />
                <label htmlFor="dropdown" className="for-dropdown">
                    <img src={props.image} alt="" />
                </label>
                <div className="section-dropdown">
                    <Link>Dropdown Link</Link>
                    <input type="checkbox" name="dropdown-sub" className="dropdown-sub" id="dropdown-sub" />
                    <label htmlFor="dropdown-sub" className="for-dropdown-sub">Dropdown Sub <i className="fas fa-plus"></i></label>
                    <div className="section-dropdown-sub">
                        <Link>Dropdown Link</Link>
                        <Link>Dropdown Link</Link>
                    </div>
                    <Link>Dropdown Link</Link>
                    <hr />
                    <Link>Dropdown Link</Link>
                </div>
            </div>

            <div className="menu-icon" onClick={menuSlide}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Nav;