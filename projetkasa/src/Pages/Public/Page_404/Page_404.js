// Description: Page d'accueil du site
import '@/Pages/Public/Page_404/Page_404.css';

// fonction d'appel de la page d'accueil
const page404 = () => {
    return (
        <section className="section_404">
            <h1 className="titre1">404</h1>
            <h2 className="titre2">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="link" href="/">Retourner sur la page d'accueil</a>
        </section>
    );
};
export default page404;