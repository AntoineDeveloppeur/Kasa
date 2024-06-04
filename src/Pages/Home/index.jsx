import Banner from '../../Components/Banner'
import Cards from '../../Components/Cards'
import banner_home from '../../assets/banner_home.jpg'
import { useEffect } from 'react'
import '../../utils/styles/home.scss'

function Home ({setPageOpened}) {

    useEffect(() => {
        setPageOpened("Home")
    },[])
    
    return (
        <div className="home">
            <Banner pic={banner_home} message="Chez vous, partout et ailleurs" alt='paysage de montagne'/>
            <Cards />
        </div>
    )
}

export default Home