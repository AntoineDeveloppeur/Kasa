import { Link } from "react-router-dom"
import '../../utils/styles/GlobalStyle.css'

function Header() {
    return (
        <div>
            <img src="#" alt="logo"/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Apropos">A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header