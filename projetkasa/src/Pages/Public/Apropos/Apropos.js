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
                title="Qui sommes-nous ?" 
                content="Test" />
            </div>
        </section>
    );
};
export default Apropos;