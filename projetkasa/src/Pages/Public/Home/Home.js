// Description: Page d'accueil du site
import { NavLink } from 'react-router-dom';

import '@/Pages/Public/Home/Home.css';

import imagebanner from '@/Assets/Images/Pages/Home/homeBanner.png';
import Banner from '@/Components/Banner/Banner';
import Card from '@/Components/Card/Card';

import logementService from '@/_Services/Logement.service.js';

// fonction d'appel de la page d'accueil
const Home = () => {
    return (
        <section className="home">
            <Banner image={imagebanner} title="Chez vous, partout et ailleurs" />

            <ul className='listelogements'>
                {
                    logementService.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
};
export default Home;