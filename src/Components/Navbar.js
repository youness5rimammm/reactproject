import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../images/logo_les_villas_dAnfa_marrakech_vf.png";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <img src={logo} alt="Logo" />
            <nav ref={navRef}>
                <a href="/#">Projet</a>
                <a href="/#">Commodités</a>
                <a href="/#">Emplacement</a>
                <a href="/#">Equipements</a>
                <a href="/#">Plan de masse</a>
                <a href="/#">Plan</a>
                <a href="/#">Vidéo</a>
                <a href="/#">Galerie</a>
                <a href="/#">Brochure</a>
                <a href="/#">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
