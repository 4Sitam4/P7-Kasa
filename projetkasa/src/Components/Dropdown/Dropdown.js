import "./Dropdown.css";
import { useState } from "react";
import arrow from "@/Assets/Images/Components/Dropdown/arrow.png";

function Dropdown({ title, content }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="Dropdown">
            <h3 className="Dropdown_title" onClick={() => setToggle(!toggle)}>
                {title}
                <img
                    className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
                    src={arrow}
                    alt="show content"
                />
            </h3>
            <div className={`Dropdown_content ${toggle ? "" : "Dropdown_content_hidden"}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => {
                            return (
                                <li className={`list_item list_item-${index}`} key={index}>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
