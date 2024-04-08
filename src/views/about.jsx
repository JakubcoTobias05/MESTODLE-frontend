import React from "react";
import AboutComponent from "../components/about";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="container mb-5 pb-4">
      <Helmet>
        <title>MESTODLE - O nás</title>
        <meta
          name="description"
          content="Vyzkoušej své znalosti Českých měst!"
        />
      </Helmet>

      <h3 className="text-center pb-3 pt-4">O nás</h3>

      <div className="d-flex justify-content-center">
        <div className="card p-5 w-75 text-start">
          <AboutComponent />
        </div>
      </div>
    </div>
  );
}
