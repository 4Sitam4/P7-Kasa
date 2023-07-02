const fetchLogements = async (id) => {
    
    const response = await fetch('http://localhost:3030/logements/' + id);
    if (!response.ok) {
        throw new Error(`Erreur HTTP! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export default fetchLogements;