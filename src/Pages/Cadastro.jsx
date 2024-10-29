import useDocumentTitle from '../hook/useDocumentTitle';
import signinImg from '../assets/cadastro.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cadastro() {
    useDocumentTitle('FIXY - Cadastro');
    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/clientes`;
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [cidade, setCidade] = useState("");
    const [senha, setSenha] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (senha) => /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(senha);

    const checkEmailExists = async (email) => {
        try {
            const response = await fetch(`${baseUrl}/check-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            return data.exists;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const addCliente = async (e) => {
        e.preventDefault();

        if (!email || !nome || !endereco || !cidade || !senha) {
            setError("Todos os campos obrigatórios devem ser preenchidos.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Email inválido.");
            return;
        }

        if (!validatePassword(senha)) {
            setError("A senha deve ter no mínimo 8 dígitos, pelo menos uma letra maiúscula e um número.");
            return;
        }

        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setError("Email já cadastrado.");
            return;
        }

        setError("");

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, nome, endereco, complemento, cidade, senha
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    navigate("/");
                }, 2000);
            } else {
                console.log("Failed to submit data.");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            className="h-screen w-full flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${signinImg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 max-w-[400px] w-full rounded-lg bg-neutral-900 p-8 px-8">
                <h2 className="text-4xl text-yellow-500 font-semibold text-center">CADASTRO</h2>
                {error && <p className='text-red-500 text-center'>{error}</p>}

                <form onSubmit={addCliente}>
                    {["Email", "Nome completo", "Endereço", "Complemento", "Cidade", "Senha"].map((label, index) => (
                        <div key={index} className='flex flex-col text-gray-400 py-2'>
                            <label className="text-yellow-500">{label}</label>
                            <input
                                className='rounded-lg bg-neutral-700 mt-2 p-2 focus:border-blue-500 focus:bg-neutral-800 focus:outline-none'
                                type={label === "Senha" ? "password" : "text"}
                                value={label === "Email" ? email : label === "Nome completo" ? nome : label === "Endereço" ? endereco : label === "Complemento" ? complemento : label === "Cidade" ? cidade : senha}
                                onChange={(e) =>
                                    label === "Email" ? setEmail(e.target.value) :
                                    label === "Nome completo" ? setNome(e.target.value) :
                                    label === "Endereço" ? setEndereco(e.target.value) :
                                    label === "Complemento" ? setComplemento(e.target.value) :
                                    label === "Cidade" ? setCidade(e.target.value) :
                                    setSenha(e.target.value)
                                }
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        disabled={submitted}
                        className='w-full my-5 py-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/50 hover:bg-transparent hover:border-2 hover:border-yellow-500 hover:text-yellow-500 hover:tracking-widest transition-all text-white font-semibold rounded-lg'
                    >
                        {submitted ? "Registrando usuário..." : "REGISTRAR"}
                    </button>

                    {submitted && (
                        <div className='w-full my-3 py-1 bg-green-500 shadow-lg shadow-green-500/50 text-white font-semibold rounded-lg text-center'>
                            Usuário criado com sucesso
                        </div>
                    )}

                    <div className="flex justify-center text-neutral-400 py-2">
                        <p className="flex items-center">Já tem conta? /</p>
                        <Link to="/login" className="text-yellow-500 ml-1 hover:underline">
                            Faça Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
