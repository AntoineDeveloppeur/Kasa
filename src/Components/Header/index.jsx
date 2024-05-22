import { Link } from "react-router-dom"
import '../../utils/styles/GlobalStyle.scss'
import logo_maincolor_desktop from '../../assets/logo_maincolor_desktop.png'

function Header() {
    return (
        <div className="header">
            <img src={logo_maincolor_desktop} alt="logo"/>
            <nav>
                <ul className="header__ul">
                    <li>
                        <Link to="/" className="header__link">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Apropos" className="header__link">A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header