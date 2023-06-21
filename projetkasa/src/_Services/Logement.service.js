import { useState, useEffect } from 'react';

export const useLogementService = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        const fetchLogements = async () => {
            const response = await fetch('http://localhost:3030/logements');
            if (!response.ok) {
                throw new Error(`Erreur HTTP! status: ${response.status}`);
            }
            const data = await response.json();
            setLogements(data);
        }
        fetchLogements();
    }, []);

    const GetAllLogement = () => {
        return logements;
    }

    const GetLogementById = (id) => {
        return logements.find(logement => logement.id === id);
    }

    return {
        GetAllLogement,
        GetLogementById,
    };
};

export default useLogementService;