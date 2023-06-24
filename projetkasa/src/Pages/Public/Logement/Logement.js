// Description: Page d'accueil du site

import '@/Pages/Public/Logement/Logement.css';
import useLogementService from '@/_Services/Logement.service.js';

// fonction d'appel de la page d'accueil
const Logement = () => {
    const logementService = useLogementService();
    return (
        <section className="logement">
            
        </section>
    );
};
export default Logement;