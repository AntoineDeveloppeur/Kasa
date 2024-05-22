



function Banner({pic}) {

    return (
        <div className="banner">
            <h1 className="banner__h1">
                Chez vous, partout et ailleurs
            </h1>
            <img src={pic} className="banner__img" alt="paysage de montagne"></img>
        </div>
    )
}

export default Banner