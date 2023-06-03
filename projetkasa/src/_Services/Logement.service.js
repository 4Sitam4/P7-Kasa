import logements from "@/Assets/Api/Logement.json";

let GetAllLogement = () => {
    return logements;
}

let GetLogementById = (id) => {
    return logements.find(logement => logement.id === id);
}

export const LogementService = {
    GetAllLogement,
    GetLogementById
};

export default LogementService;