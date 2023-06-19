import "./Banner.css";

function Banner({ image, title}) {

    return (
        <section className="banner">
            <img className="banner-img" src={image} alt="Bannière" />
            <div className="banner-sombre"></div>
            <h1>{title}</h1>
        </section>
    )
}

export default Banner;