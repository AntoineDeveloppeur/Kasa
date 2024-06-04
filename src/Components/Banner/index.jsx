import '../../utils/styles/banner.scss'

function Banner({pic, alt}) {

    return (
        <div className="banner">
            <h1 className="banner__h1">
                Chez vous, partout et ailleurs
            </h1>
            <img src={pic} className="banner__img" alt={alt}></img>
        </div>
    )
}

export default Banner