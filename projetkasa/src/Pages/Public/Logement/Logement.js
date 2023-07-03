import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '@/Pages/Public/Logement/Logement.css';
import useLogementService from '@/_Services/useLogementService';
import Carrousel from '@/Components/Carrousel/Carrousel.js';
import Tag from '@/Components/Tag/Tag';
import Dropdown from '@/Components/Dropdown/Dropdown';
import Rating from '@/Components/Rating/Rating';

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
            <div className="logement__content">
                <div className="Container_1">
                    <div className="title_loc_tag">
                        <h1 className="logement__title">{logement.title}</h1>
                        <p className="logement__location">{logement.location}</p>
                        <div className="TLC_tag-row">
                        <Tag tags={logement.tags} />
                        </div>
                    </div>
                    <div className="Host_rating">
                        <div className="Host">
                            <h2 className="Host__name">{logement.host.name}</h2>
                            <img className="Host__avatar" src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className="Rating">
                            <Rating rating={logement.rating} />
                        </div>
                    </div>
                </div>
                    <div className="Container_2">
                        <div className="logement__description">
                            <Dropdown title="Description" content={logement.description} />
                        </div>
                        <div className="logement__equipements">
                            <Dropdown title="Equipements" content={logement.equipments} />
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Logement;
