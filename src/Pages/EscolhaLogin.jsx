import loginImg from '../assets/login3.jpg'
import { Link } from 'react-router-dom';

export default function EscolhaLogin() {
    return (
        <>
        <img src={loginImg} className='absolute z-[-1] filter blur-sm opacity-40'/>
        <div className="w-full h-screen flex gap-5 flex-col justify-center items-center">
            <h1 className='text-yellow-500 text-3xl font-bold'>Fazer login como</h1>
            <div className='gap-5 w-full flex justify-center items-center'>
                <Link to={"/login"}>
                    <button className='text-yellow-500 font-semibold text-4xl border-4 p-4 border-yellow-500 transition-all hover:bg-yellow-500 hover:text-white '>CLIENTE</button>
                </Link>
                <Link to={"/loginParceiro"}>
                    <button className='text-yellow-500 font-semibold text-4xl border-4 p-4 border-yellow-500 transition-all hover:bg-yellow-500 hover:text-white'>AFILIADO</button>
                </Link>
            </div>
        </div>
            
        </>
    )
}