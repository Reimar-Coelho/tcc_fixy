import { Link, useLocation } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-transparent z-10"> {/* Garantir que a navbar esteja acima de outros elementos */}
            <ul className="text-lg flex gap-3 ml-3 text-white flex-wrap">
                <li className={`${location.pathname === '/' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:border-b-2 hover:tracking-widest hover:text-yellow-500 transition-all'}`}>
                    <Link to="/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/cliente' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:border-b-2 hover:tracking-widest hover:text-yellow-500 transition-all'}`}>
                    <Link to="/cliente">CLIENTE</Link>
                </li>

                <li className={`${location.pathname === '/afiliado' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:border-b-2 hover:tracking-widest hover:text-yellow-500 transition-all'}`}>
                    <Link to="/afiliado">PROFISSIONAL</Link>
                </li>

                <li className={`${location.pathname === '/login' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:border-b-2 hover:tracking-widest hover:text-yellow-500 transition-all'}`}>
                    <Link to="/login" className="flex items-center gap-2">LOGIN</Link>
                </li>

                <li className={`${location.pathname === '/perfil' ? 'px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:tracking-widest hover:text-yellow-500 transition-all'}`}>
                    <Link to="/perfil" className="flex items-center gap-2">
                        PERFIL
                        <BsPersonCircle className="text-2xl text-yellow-500" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
