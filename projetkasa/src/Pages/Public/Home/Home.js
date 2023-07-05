import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '@/Pages/Public/Home/Home.css';
import imagebanner from '@/Assets/Images/Pages/Home/homeBanner.png';
import Banner from '@/Components/Banner/Banner';
import Card from '@/Components/Card/Card';
import { getAllLogements } from '@/_Services/Logement.service.js';

const Home = () => {
    const [logements, setLogements] = useState([]);

    // découper le titre en 2 lignes si la largeur de l'écran est inférieure à 640px
    const [title, setTitle] = useState(["Chez vous,", "partout et ailleurs"]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setTitle(["Chez vous,", "partout et ailleurs"]);
            } else {
                setTitle(["Chez vous, partout et ailleurs"]);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        getAllLogements()
            .then(setLogements)
            .catch(console.error);
    }, []);

    return (
        <section className="home">
            <Banner image={imagebanner} title={title} />
            <ul className='listelogements'>
                {
                    logements.map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id}>
                            <Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
};
export default Home;