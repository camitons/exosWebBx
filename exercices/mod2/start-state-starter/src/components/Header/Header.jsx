import "./Header.css";
import {useState} from "react";


const Header = ({ title, version }) => {
    const [menuPrinted, setMenuPrinted] = useState(false);
    return (
        //une autre facon d'appeler le onClick c'est en faisant une fonction nommé et de l'utiliser en handler

        <header onClick={() => setMenuPrinted(!menuPrinted)}>
            <h1 className="animate__animated animate__bounce">{menuPrinted ? `${title}... and rarely do we love not it (im not bilingual) ` : title} </h1>`
            <h4>Version: {version}</h4>
        </header>
    );
};

  export default Header;