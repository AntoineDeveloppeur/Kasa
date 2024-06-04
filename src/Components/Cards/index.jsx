import Listlogement from '../../data/logement.json'
import { Link } from 'react-router-dom'
import '../../utils/styles/cards.scss'

function Cards() {
    return (
        <div className="cards">
            {Listlogement.map((card) => (
                <Link to={`/Fichelogement/${card.id}`} id={card.id} className="cards__card" key={card.id}>
                    <p className="cards__card__p">{card.title}</p>
                    <img className="cards__card__img" src={card.cover} alt={card.title}/>
                </Link>
            ))}
        </div>
    )
}

export default Cards