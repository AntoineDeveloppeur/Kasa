import Banner from '../../Components/Banner'
import Cards from '../../Components/Cards'
import banner_home from '../../assets/banner_home.jpg'

function Home () {
    return (
        <div className="home">
            <Banner pic={banner_home}/>
            <Cards />
        </div>
    )
}

export default Home