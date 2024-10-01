//Veuillez créer un composant React qui permette à l'utilisateur de changer la couleur de fond d'une boîte en cliquant sur un bouton.
import { useState } from 'react'

const SelectCouleur = () => {

    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const [index, onSetIndex] = useState(0);
    const [color, setColor] = useState('red');
    function changeColor() {
        if (index < colors.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }
    function setIndex(i) {
        onSetIndex(i);
        setColor(colors[i]);
    }

    function getNextColor() {
        if (index < colors.length - 1) {
            return colors[index + 1];
        }
        else {
            return colors[0];
        }
    }

    return(
        <div>
            <button onClick={changeColor}>Changer la couleur pour mettre : {getNextColor()}</button>
            <div style={{backgroundColor: color, width: '100px', height: '100px'}}></div>
        </div>
    )
}

export default SelectCouleur