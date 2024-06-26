import {Link, useLocation} from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {

    const location = useLocation();

    const getLoginPath = () => {
        if (location.pathname.includes('/afiliado')) {
          return '/loginParceiro';
        } 
        else  if (location.pathname.includes('/cliente')) {
          return '/login';
        }
        else if (location.pathname.includes('/loginParceiro')){
            return '/loginParceiro'
        }
        else if (location.pathname.includes('/login')){
            return '/login'
        }
        
        else {
            return '/escolhaLogin'
        }
      };

    return ( 
        <nav>
            <ul className='text-lg flex gap-3 ml-3 text-white'>
                <li className={`${location.pathname === '/' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500  hover:tracking-widest transition-all'}`}>
                    <Link to = "/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/cliente' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500  hover:tracking-widest transition-all'}`}>
                    <Link to = "cliente">CLIENTE</Link></li>

                <li className={`${location.pathname === '/afiliado' ? 'border-b-2 px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'border-b-2 px-2 border-yellow-500 hover:tracking-widest transition-all'}`}>
                    <Link to = "afiliado">AFILIADO</Link>
                </li>
                <li className={`${location.pathname === '/loginParceiro' ? ' px-2 border-yellow-500 text-yellow-500 hover:tracking-widest transition-all ' : 'px-2 border-yellow-500 hover:tracking-widest transition-all'}`}>
                    <Link to = {getLoginPath()} className='flex items-center gap-2'>
                        
                        LOGIN
                        <BsPersonCircle className='text-2xl text-yellow-500'/>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;