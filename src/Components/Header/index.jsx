import { Link } from "react-router-dom"
import '../../utils/styles/header.scss'

import logo_maincolor_desktop from '../../assets/logo_maincolor_desktop.png'

function Header({pageOpened}) {
    return (
        <div className="header">
            <img src={logo_maincolor_desktop} className="header__logo" alt="logo"/>
            <nav>
                <ul className="header__ul">
                    <li>
                        <Link to="/" className= {pageOpened === "Home" ?"header__link underline" : "header__link"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Apropos" className= {pageOpened === "Apropos" ? "header__link underline" : "header__link"}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header