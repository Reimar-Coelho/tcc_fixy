import useDocumentTitle from '../hook/useDocumentTitle';
import loginImg from '../assets/login3.jpg'
import { Link } from 'react-router-dom';

export default function EscolhaLogin() {
    useDocumentTitle('FIXY - Escolha de Login')
    return (
        <>
        <div className="w-full h-screen flex gap-5 flex-col justify-center items-center">
            <h1 className='text-yellow-500 text-3xl font-semibold'>Fazer login como</h1>
            <div className='gap-5 w-full flex justify-center items-center'>
                <Link to={"/login"}>
                    <button className='text-yellow-500 font-semibold text-4xl border-2 p-4 border-yellow-500 transition-all hover:bg-yellow-500 hover:text-white transition-all'>CLIENTE</button>
                </Link>
                <Link to={"/loginParceiro"}>
                    <button className='text-yellow-500 font-semibold text-4xl border-2 p-4 border-yellow-500 transition-all hover:bg-yellow-500 hover:text-white transition-all'>AFILIADO</button>
                </Link>
            </div>
        </div>
            
        </>
    )
}