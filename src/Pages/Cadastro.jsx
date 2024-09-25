import loginImg from '../assets/login.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Cadastro() {

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

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const validatePassword = (senha) => {
        return /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(senha);
    }

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

    const addCliente = async(e) => {
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

        try{
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, nome, endereco, complemento, cidade, senha
                }),
            })

            if(response.ok) {
                setSubmitted(true)
                setTimeout(() => {setSubmitted(false); navigate("/")}, 2000);
            }
            else {
                console.log("Failed to submit data.")
            }

        } catch(error){
            console.log(error); 
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover scale-x-[-1]' src={loginImg} alt="" />
            </div>
    
            <div className='bg-black flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8' onSubmit={addCliente}>
                    <h2 className='text-4xl text-yellow-500 font-bold text-center'>CADASTRO CLIENTE</h2>
                    
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Nome completo</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Endereço</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Complemento</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Cidade</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Senha</label>
                        <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                    <input type="submit" value={submitted ? "Registrando usuário..." : "REGISTRAR"} disabled={submitted} className='w-full my-5 py-2 bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/40 text-white font-semibold rounded-lg'/>
                    <p className='text-center'>
                        {submitted && <div className='w-full my-3 py-1 bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/40 text-white font-semibold rounded-lg'>Usuário criado com sucesso</div>}
                    </p>
                    
                </form>
            </div>
        </div>
      )
}