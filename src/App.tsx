import CrearCurso from "./components/CrearCurso";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConsultaAlumnos from "./components/ConsultaAlumnos";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/consulta" element={<ConsultaAlumnos />} />
          <Route path="/creacion" element={<CrearCurso />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
