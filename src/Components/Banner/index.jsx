import '../../utils/styles/banner.scss'

function Banner({ pic, alt, message }) {
    return (
        <div className="banner">
            <h1 className="banner__h1">{message}</h1>
            <img src={pic} className="banner__img" alt={alt}></img>
        </div>
    )
}

export default Banner
