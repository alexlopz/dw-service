import React, { useState } from "react";

const ConsultaAlumnos = () => {
  const [carnet, setCarnet] = useState("");
  const [nombres, setNombres] = useState("");
  const [email, setEmail] = useState("");
  const [seccion, setSeccion] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCarnet(e.target.value);
    setError(false);
  };

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
        setError(true);
      }
    } catch (error) {
      setError(true);
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
      className="card"
      style={{
        width: "600px",
        margin: "auto",
        padding: "20px",
      }}
    >
      {error && (
        <div className="alert alert-danger" role="alert">
          No se encontro el carnet!
        </div>
      )}
      <div className="mb-3 row">
        <label htmlFor="inputCarnet" className="col-sm-2 col-form-label">
          Carnet:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputCarnet"
            value={carnet}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputNombres" className="col-sm-2 col-form-label">
          Nombres:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputNombres"
            value={nombres}
            readOnly
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
          Email:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            value={email}
            readOnly
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputSeccion" className="col-sm-2 col-form-label">
          Sección:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputSeccion"
            value={seccion}
            readOnly
          />
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleBuscar}
        >
          Buscar
        </button>
        <button
          type="button"
          className="btn btn-warning ms-2"
          onClick={handleLimpiar}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default ConsultaAlumnos;
