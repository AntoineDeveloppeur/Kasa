import logement from '../../data/logement.json'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className="cards">
            {logement.map((card, index) => (
                <Link to={`/Fichelogement/${index}`} id={card.id} className="cards__card" key={card.id}>
                    <p className="cards__card__p">{card.title}</p>
                    <img className="cards__card__img" src={card.cover} alt={card.title}/>
                </Link>
            ))}
        </div>
    )
}

export default Cards