import React from 'react';

export default function CityDetails({ nazev, kraj, populace, rozloha, similarites }) {
  if (!similarites) {
    console.log("Waiting for data...");
    return <div>Loading...</div>;
  }

  return (
  <div className="d-flex justify-content-center">
    <div className="container text-center mb-2">
      <div className="row cities">
        <div className="col-2 cityData neutral"> 
          <span>{nazev}</span>
        </div>
        <div className={`col-2 cityData ${similarites.sameRegion ? "correct" : "incorrect"}`}>
          <span>{kraj}</span>
        </div>
        <div className={`col-2 cityData ${getStatusClass(similarites.samePopulace)}`}>
          <span>{populace.toLocaleString()}</span>
        </div>
        <div className={`col-2 cityData ${getStatusClass(similarites.sameRozloha)}`}>
          <span>{rozloha} km²</span>
        </div>
      </div>
    </div>
  </div>
  );
}

function getStatusClass(comparison) {
  switch (comparison) {
    case "=":
      return "correct";
    case "<":
      return "incorrect-greater";
    case ">":
      return "incorrect-less";
    default:
      return "";
  }
}
