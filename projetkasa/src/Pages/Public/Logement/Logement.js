// Description: Page d'accueil du site

import '@/Pages/Public/Logement/Logement.css';
import useLogementService from '@/_Services/LogementByID.service.js';
// import Carrousel from '@/Components/Carrousel/Carrousel.js';

// fonction d'appel de la page d'accueil
const Logement = () => {
    const GetLogementById = useLogementService();

    // récupération de l'id du logement
    let url = new URL(window.location.href);
    let sections = url.pathname.split('/');
    let id = sections[sections.length - 2];

    return (
        <section className="logement">
            
            
        </section>
    );
};
export default Logement;