
import useDocumentTitle from '../hook/useDocumentTitle';
import loginImg from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    useDocumentTitle('FIXY - LOGIN CLIENTE')
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/clientes/login`;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (response.ok) {
                navigate("/");
            } else {
                setError("Email ou senha incorretos.");
            }
        } catch (error) {
            console.log(error);
            setError("Ocorreu um erro ao tentar fazer login.");
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover scale-x-[-1]' src={loginImg} alt="" />
            </div>

            <div className='bg-black flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={handleLogin}>
                    <h2 className='text-4xl text-yellow-500 font-bold text-center'>LOGIN CLIENTE</h2>
                    {error && <p className='text-red-500 text-center'>{error}</p>}
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Senha</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Lembrar-me</p>
                        <Link to={'/'}>
                            <p>Esqueci minha senha</p>
                        </Link>
                    </div>
                    <button type="submit" className='w-full my-5 py-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/40 text-white font-semibold rounded-lg'>LOGIN</button>
                    
                    <div className='flex justify-center text-gray-400 py-2'>
                        <p className='flex items-center'>Não tem conta? / ‎</p>
                        <Link to={'/cadastro'}>
                            <p className='text-yellow-500 underline'>Registrar</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}