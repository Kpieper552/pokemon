import React,
{
    useState, useEffect,
}
from 'react';
import axios from 'axios';
import './App.css';
import Card from "./componentcard/card";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState("");

//components 1stuk url maken dus dan de url van de pokemon gebruiken zoals hieronder als object geen array
    useEffect (() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
                setPokemon(response.data.results);
                console.log(response.data.results);
            } catch (error) {
                setError("Er is een fout opgetreden bij het ophalen van de data!");
                console.log(error);
            }
        }
            fetchData();
    }, []);

  return (
      <>
          <h1>Pokemon</h1>
          <button type="button" className="single-button">Previous</button><button type="button" className="single-button">Next</button>
          <div  id="cardpage" >
              {error && <p>{error}</p>}
              {pokemon &&
                  pokemon.map((pokemon) => {
                      return <Card url={pokemon.url} id="card" />;

               })}
          </div>

      </>
  );
}

export default App;

//onClick={handleClickPrevious}
///?offset=20limit=20

//const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
//const [nextUrl, setNextUrl] = useState('');
//const [previousUrl, setPreviousUrl] = useState('');

//function handleClickNext() {
//setCurrentUrl(nextUrl)
//}
//function handleClickPrevious() {
//setCurrentUrl(PreviousUrl)
//}
//catch (e) {
//