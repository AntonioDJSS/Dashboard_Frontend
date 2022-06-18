import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { cerrarSesion } = useAuth();

  return (
    <header className="py-10 bg-amber-500">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-amber-200 text-center">Sistema de Administracion{' '} <span className="text-white font-black">de Constancias</span>
            </h1>
            <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to="/admin" className="text-white text-sm uppercase font-bold">Constancias</Link>
                <Link to="" className="text-amber-200 text-sm uppercase font-bold">Evaluaciones</Link>
                <Link to="/admin/configuracion" className="text-white text-sm uppercase font-bold">Configuración</Link>

                <button 
                type="button"
                className="text-white text-sm uppercase font-bold"
                onClick={cerrarSesion}
                >Cerrar Sesión
                </button>
            </nav>
        </div>
    </header>
  )
}

export default Header