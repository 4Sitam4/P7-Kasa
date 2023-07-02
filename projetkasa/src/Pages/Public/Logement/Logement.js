import React, { useEffect, useRef } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import '@/Pages/Public/Logement/Logement.css';
import useLogementService from '@/_Services/useLogementService';
import Carrousel from '@/Components/Carrousel/Carrousel.js';

const Logement = () => {
    const { id } = useParams();
    const { loading, logement } = useLogementService(id);
    const timerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            timerRef.current = setTimeout(() => {
                navigate("/404");
            }, 2000);
        }

        return () => {
            clearTimeout(timerRef.current);
        }
    }, [loading, navigate]);

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
