import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import Encuesta from "./pages/Encuesta";
import Home from "./pages/Home";
import Inicio from "./pages/Inicio";
import Residuo from "./pages/Residuo";
import Error404 from "./pages/Error404";
import Sasisopa from "./pages/Sasisopa";
import EncuestaEnviada from "./pages/SasisopaEnviada";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Error404 />} />
          <Route path="evaluacion" element={<Home/>} />
          <Route path="residuos" element={<Residuo/>} />
          <Route path="atmosferas" element={<Encuesta/>} />
          <Route path="sasisopa" element={<Sasisopa/>} />
          <Route path="sasisopa/finalizado" element={<EncuestaEnviada/>} />
          <Route path="*" element={<Error404/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
