import '@/Layouts/Header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '@/Assets/Images/Components/header/LogoKasaHeader.png';

function Header () {
    return (
        <header>
            <div className="Header_Container">
            <a href="/"><img src={logo} alt="logo"  /></a>
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid" } : { borderBottom: "unset" }}>Accueil</NavLink>
                <NavLink to="/a-propos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid" } : { borderBottom: "unset" }}>À propos</NavLink>
            </nav>
            </div>
        </header>
    );
}

export default Header;