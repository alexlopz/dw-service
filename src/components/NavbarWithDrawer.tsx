import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "bootstrap";

const NavbarWithDrawer = () => {
  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      const offcanvasElement = offcanvasRef.current;
      const bsOffcanvas =
        Offcanvas.getInstance(offcanvasElement) ||
        new Offcanvas(offcanvasElement);
      bsOffcanvas.hide();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="btn btn-outline-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        data-bs-backdrop="false"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Menú
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <Link
              to="/consulta"
              className="list-group-item list-group-item-action"
              onClick={closeOffcanvas}
            >
              Consulta de alumnos
            </Link>
            <Link
              to="/creacion"
              className="list-group-item list-group-item-action"
              onClick={closeOffcanvas}
            >
              Creación de Cursos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithDrawer;
