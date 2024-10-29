import useDocumentTitle from '../hook/useDocumentTitle';
import loginImg from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    useDocumentTitle('FIXY - Login');
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
        <div
            className="h-screen w-full flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${loginImg})` }}
        >
            {/* Camada de overlay para escurecer o fundo */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Card de Login centralizado acima da camada de overlay */}
            <div className="relative z-10 max-w-[400px] w-full rounded-lg bg-neutral-900 p-8 px-8">
                <h2 className="text-4xl text-yellow-500 font-semibold text-center">LOGIN</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col text-neutral-400 py-2">
                        <label className="text-yellow-500">Email</label>
                        <input
                            className="rounded-lg bg-neutral-700 mt-2 p-2 focus:border-blue-500 focus:bg-neutral-800 focus:outline-none"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex flex-col text-gray-400 py-2">
                        <label className="text-yellow-500">Senha</label>
                        <input
                            className="p-2 rounded-lg bg-neutral-700 mt-2 focus:border-blue-500 focus:bg-neutral-800 focus:outline-none"
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex items-center text-neutral-400 py-2">
                        <input className="mr-2" type="checkbox" />
                        <p className="text-neutral-400">Lembrar-me</p>
                        <Link to={'/'} className="ml-auto hover:underline transition-all">
                            Esqueci minha senha
                        </Link>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full my-5 py-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/50 hover:bg-transparent hover:border-2 hover:border-yellow-500 hover:text-yellow-500 hover:tracking-widest transition-all text-white font-semibold rounded-lg"
                    >
                        LOGIN
                    </button>

                    <div className="flex justify-center text-neutral-400 py-2">
                        <p className="flex items-center">Não tem conta? / ‎</p>
                        <Link to={'/cadastro'}>
                            <p className="text-yellow-500 hover:underline transition-all">Registrar</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
