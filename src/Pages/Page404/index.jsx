import { Link } from 'react-router-dom'

function Page404() {
    return (

        <div className="page404">
            <h1 className="page404__h1">404</h1>
            <p className="page404__p">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/404' className="page404__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Page404