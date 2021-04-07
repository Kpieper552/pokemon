import React, {useState, useEffect} from 'react';
import './card.css';
import axios from "axios";

function Card({ url }) {
    const [singlePokemon, setSinglePokemon] = useState({});
    const [moves, setMoves] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [ability, setAbility] = useState({});
    useEffect(() => {
        async function getSinglePokemon() {
            try {
                const { data: {name, weight, sprites: {front_default}, moves, abilities, }} = await axios.get(url);
                    setSinglePokemon({
                        name: name,
                        weight: weight,
                        image: front_default,
                    });
                    setAbilities(abilities.length);
                    setMoves(moves.length);
                    setAbility(ability);
                //console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getSinglePokemon();
    },   [],);

return (
    <ul>
        <li>
            <h3>{singlePokemon.name}</h3>
            <img src={singlePokemon.image}/>
            <p>weight {singlePokemon.weight}</p>
            <p>moves {moves}</p>
            <p>abilities {abilities}</p>
            <p>ability list</p> <li>{ability?.name}</li>
        </li>
   </ul>
);
}
export default Card;
