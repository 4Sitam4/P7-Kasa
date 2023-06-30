import "./Carrousel.css";


function Carrousel ({slides}) {


    return (
        <div className="Carrousel">
            <img className="Slider_img" src={slides} alt="logement"/>
        </div>
    )
}
export default Carrousel;