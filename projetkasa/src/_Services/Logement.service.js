// Logement.service.js
export const getAllLogements = async () => {
    const response = await fetch('/db.json');
    if (!response.ok) {
        throw new Error(`Erreur HTTP! status: ${response.status}`);
    }
    const data = await response.json();
    return data.logements; // Retourne tous les logements
};

export const getLogementById = async (id) => {
    const response = await fetch('/db.json');
    if (!response.ok) {
        throw new Error(`Erreur HTTP! status: ${response.status}`);
    }
    const data = await response.json();
    const logement = data.logements.find(logement => logement.id === id);
    if (!logement) {
        throw new Error(`Aucun logement trouvé avec l'ID: ${id}`);
    }
    return logement; // Retourne un logement spécifique (selon l'ID)
};