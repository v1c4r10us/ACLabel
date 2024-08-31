import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Label } from "./Label.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const TextFileContent = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch('/files/data.txt');
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
              ude={fileContent[0]}
              shipment={fileContent[1]}
              truck={fileContent[2]}
              location={fileContent[3]}
              trip={fileContent[4]}
              numpallet={fileContent[5]}
              totalpallet={fileContent[6]}
              way={fileContent[7]} />
          } />
        <Route
          path="/bema2"
          element={
            <Label
              ude={fileContent[8]}
              shipment={fileContent[9]}
              truck={fileContent[10]}
              location={fileContent[11]}
              trip={fileContent[12]}
              numpallet={fileContent[13]}
              totalpallet={fileContent[14]}
              way={fileContent[15]} />
          } />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <>
    <TextFileContent />
  </>
);
