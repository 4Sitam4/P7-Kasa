import { useState, useEffect } from 'react';
import fetchLogements from '@/_Services/LogementByID.service.js';

function useLogementService(id) {
    const [loading, setLoading] = useState(true);
    const [logement, setLogement] = useState(null);
  
    useEffect(() => {
        fetchLogements(id).then(data => {
            setLogement(data);
            setLoading(false);
        }).catch(error => console.error(error));
    }, [id]);
  
    return { loading, logement };
}

export default useLogementService;