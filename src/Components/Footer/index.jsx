import logo_white from '../../assets/logo_white.png'

function Footer() {
    return (
        <div className="footer">
            <img className="footer__img" src={logo_white} alt="logo"/>
            <p className="footer__p">
            &copy;2020 Kasa. All rights reserved
            </p>
        </div>
    )
}

export default Footer