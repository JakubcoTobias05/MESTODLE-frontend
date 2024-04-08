import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function About() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div id="about">
      <h3>Inspirace</h3>
      <p>
        Toto jsou hry kterými jsme se inspirovali <a href="https://globle.org/?">globle.org</a>,
         a <a href="https://www.nytimes.com/games/wordle/index.html">wordle.net</a>, obě fungují podobně, prostě hádáte!
      </p>
      <h3>Jak hrát</h3>
      <p>
        V textboxu budeš vybírat svůj tip města který chceš uhádnout. 
        Po kliknutí na tlačítko Guess, se tvůj tip zhodnotí a odešle.
      </p>
      <p>
        Jestli tvůj tip nebyl správný, zobrází se informační boxy s barvami podle toho,
        jaké údaje o městě se shodují pro lepší nápovědu.
      </p>

      <h4 className="pb-3">Význam barev</h4>

      <div className="d-flex pb-2 align-items-center">
        <div className={`demo correct`}></div>
        <p className="my-auto mx-auto">Správný tip</p>
      </div>

      <div className="d-flex pb-2 align-items-center">
        <div
          className={`demo incorrect-greater`}
        ></div>
        <p className="my-auto mx-auto">Správná hodnota je vyšší</p>
      </div>

      <div className="d-flex pb-2 align-items-center">
        <div
          className={`demo incorrect-less`}
        ></div>
        <p className="my-auto mx-auto">Správná hodnota je nižší</p>
      </div>

      <div className="d-flex">
        <div className={`demo incorrect`}></div>
        <p className="my-auto mx-auto">Nesprávný tip</p>
      </div>

      <h4 className="pb-3 pt-4">Kontaktujte nás: </h4>
      <p>Email:<strong>dvojtasazka@gmail.com</strong>.{" "}
        <CopyToClipboard text="">
          <button
            className="btn btn-outline-dark"
            onClick={() => setIsCopied(true)}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </p>
    </div>
  );
}
