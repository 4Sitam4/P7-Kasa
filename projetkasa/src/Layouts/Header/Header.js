import '@/Layouts/Header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '@/Assets/Images/Components/header/LogoKasaHeader.png';

function Header () {
    return (
        <header>
            <img src={logo} alt="logo" className="header__logo" />
            <nav>
                <NavLink 
                    to="/Home" 
                    isActive={(match, location) => location.pathname === "/Home"}
                    style={(isActive) => isActive ? {borderBottom: "1px solid color"} : {borderBottom: "unset"}}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/Apropos" 
                    isActive={(match, location) => location.pathname === "/Apropos"}
                    style={(isActive) => isActive ? {borderBottom: "1px solid color"} : {borderBottom: "unset"}}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;