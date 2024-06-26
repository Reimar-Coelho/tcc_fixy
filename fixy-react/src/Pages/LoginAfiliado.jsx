import loginImg from '../assets/login2.png'
import { Link } from 'react-router-dom'

export default function LoginAfiliado() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-black flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-yellow-500 font-bold text-center'>LOGIN AFILIADO</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Usuário</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Senha</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Lembrar-me</p>
                    <Link to={'/'}>
                        <p>Esqueci minha senha</p>
                    </Link>
                </div>
                <Link to={'/'}>
                    <button className='w-full my-5 py-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/40 text-white font-semibold rounded-lg'>LOGIN</button>
                </Link>
                <div className='flex justify-center text-gray-400 py-2'>
                    <p className='flex items-center'>Não tem conta? / ‎</p>
                    <Link to={'/cadastroParceiro'}>
                        <p className='text-yellow-500 underline'>Registrar</p>
                    </Link>
                </div>
                
            </form>
        </div>
    </div>
    )
}