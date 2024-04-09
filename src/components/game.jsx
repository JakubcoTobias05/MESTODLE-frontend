import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Helmet } from "react-helmet";
import Victory from "./victory";
import Titles from "./gameTitle";
import CityDetails from "./cityDetails";
import config from '../configs/config';
import { SelectStyles, customFilterOption } from "./selectStyles";

export default function Game() {
    const [validGuesses, setValidGuesses] = useState([]);
    const [cities, setCities] = useState([]);
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setGuess] = useState(validGuesses[0]);
    const [correctGuess, setCorrectGuess] = useState(false);
    
    useEffect(() => {
        FetchCities();
    }, []); 

    const FetchCities = () => {
        axios.get(`${config.url}/mesta/all`)
            .then(response => {
                if (response.data.status === "success") {
                    const data = response.data.mesta;
                    data.sort((a, b) => a.nazev.localeCompare(b.nazev));
                    const transformedData = data.map(city => ({
                        value: city.nazev,
                        label: city.nazev
                    }));
                    setValidGuesses(transformedData);
                }
            })
            .catch(error => {
                console.error('Chyba při načítání měst:', error);
            });
    };

    const Guess = (e) => {
      e.preventDefault();
      if (!currentGuess || guesses.includes(currentGuess)) return;

      setGuesses(guesses => [...guesses, currentGuess]);
      axios.post(`${config.url}/mesta/guess`, { guess: currentGuess })
        .then(response => {
          if (response.data.status === "success") {
            console.log("Odpověď serveru:", response.data); 
            const { correctGuess, properties } = response.data;
            setCorrectGuess(correctGuess);
            if (properties) {
              setCities(cities => [properties, ...cities]);
            }
          }
        })
        .catch(error => {
          console.error('Error during guess:', error);
        });
    };
  
    // eslint-disable-next-line
    const Reroll = async () => {
      
    };

    const Restart = () => {
        FetchCities();
        setGuesses([]);
        setCities([]);
        setGuess();
        setCorrectGuess(false);
    };

    return (
    <div className="container main pt-4 pb-5 mb-5">
      <Helmet>
        <title>
          MESTODLE
        </title>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <h1 className="text-center pb-3">MESTODLE</h1>

      <div className="d-flex justify-content-center mt-4 mb-3" id="form">
        <form
          class="form-control row g-3 mb-4 black-border"
          onSubmit={Guess}
          id="guess-form"
        >
          <Select
            className="select black-border"
            options={validGuesses}
            onChange={(selectedOption) => setGuess(selectedOption.value)}
            isDisabled={correctGuess}
            styles={SelectStyles}
            placeholder="Napiš jméno města"
            filterOption={customFilterOption}
            formatOptionLabel={(data) => (
              <div className="select-option">
                <span>{data.label}</span>
              </div>
            )}
          />
          <div className="d-flex justify-content-evenly">
            {correctGuess ? (
                <button className="btn btn-outline-dark mb-3 mt-1 min-vw-25" onClick={Restart}>Next</button>
            ) : (
                <button className="btn btn-dark mb-3 mt-1 min-vw-25">Guess</button>
            )}
            {!correctGuess && guesses.length >= 10 ? (
                <button className="btn btn-dark mb-3 mt-1 min-vw-25" onClick={Restart}>Restart</button>
            ) : (
                ""
            )}
        </div>
        </form>
      </div>
      
      <div className = "box">
        {cities.length > 0 ? <Titles /> : ""}

        <div id="cities">
            {cities.map(([mestoData, similarites], index) => (
              <CityDetails
              key={index}
              nazev={mestoData.nazev}
              kraj={mestoData.kraj}
              populace={mestoData.populace}
              rozloha={mestoData.rozloha}
              similarites={similarites}
              />
            ))}
        </div>     
      </div>

      {correctGuess ? (
        <Victory
          id="victory"
          mesto={cities[0][0].guessedCity}
          tries={guesses.length}
          title={cities[0][0].nazev}
        />
      ) : (
        ""
      )}
    </div>
    );
}
