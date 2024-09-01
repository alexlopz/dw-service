import React, { useState } from "react";

const ConsultaAlumnos = () => {
  const [carnet, setCarnet] = useState("");
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [seccion, setSeccion] = useState("");

  const handleBuscar = async () => {
    try {
      const response = await fetch(
        `https://test-deploy-12.onrender.com/estudiantes/${carnet}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener la data");
      }
      const data = await response.json();

      if (data.length > 0) {
        setNombres(data[0].Estudiante);
        setEmail(data[0].Email);
        setSeccion(data[0].Seccion);
      } else {
        alert("No se encontraron datos para este carnet");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLimpiar = () => {
    setCarnet("");
    setNombres("");
    setEmail("");
    setSeccion("");
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        color: "black",
      }}
    >
      <h2>Consulta de alumnos</h2>
      <div className="field">
        <label>Carnet: </label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Nombres: </label>
        <input type="text" value={nombres} readOnly />
      </div>
      <div className="field">
        <label>Email: </label>
        <input type="text" value={email} readOnly />
      </div>
      <div className="field">
        <label>Sección: </label>
        <input type="text" value={seccion} readOnly />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBuscar}>Buscar</button>
        <button onClick={handleLimpiar} style={{ marginLeft: "10px" }}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default ConsultaAlumnos;
