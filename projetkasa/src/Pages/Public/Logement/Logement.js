import React from 'react'; 
import { useParams} from 'react-router-dom';
import '@/Pages/Public/Logement/Logement.css';
import useLogementService from '@/_Services/useLogementService';
import Carrousel from '@/Components/Carrousel/Carrousel.js';

const Logement = () => {
    const { id } = useParams();
    const { loading, logement } = useLogementService(id);
    
    if (loading) {
        return <div>Chargement...</div>;
    }
    
    return (
        <section className="logement">
            <Carrousel slides={logement.pictures} />
        </section>
    );
};

export default Logement;
