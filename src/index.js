import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {Label} from "./Label.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const TextFileContent = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch('data.txt');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo.');
        }
        const text = await response.text();
        setFileContent(text.split(","));
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    };

    fetchFileContent();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Label 
              shipment={fileContent[0]}
              truck={fileContent[1]}
              location={fileContent[2]}
              trip={fileContent[3]}
              numpallet={fileContent[4]}
              totalpallet={fileContent[5]}
              way={fileContent[6]} />
          } />
        <Route
          path="/bema2"
          element={
            <Label 
              shipment={fileContent[7]}
              truck={fileContent[8]}
              location={fileContent[9]}
              trip={fileContent[10]}
              numpallet={fileContent[11]}
              totalpallet={fileContent[12]}
              way={fileContent[13]} />
          } />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <>
    <TextFileContent/>
  </>
);
