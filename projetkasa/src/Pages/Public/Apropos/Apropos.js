// Description: Page d'accueil du site
import '@/Pages/Public/Apropos/Apropos.css';
import imagebanner from '@/Assets/Images/Pages/Apropos/AproposBanner.png';
import Banner from '@/Components/Banner/Banner';
import Dropdown from '@/Components/Dropdown/Dropdown';

// fonction d'appel de la page d'accueil
const Apropos = () => {
    return (
        <section className="Apropos">
            <Banner image={imagebanner} title="" />
            <div className="Apropos-content">
                <Dropdown
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <Dropdown
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Dropdown
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </section>
    );
};
export default Apropos;