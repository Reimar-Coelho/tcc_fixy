import useDocumentTitle from '../hook/useDocumentTitle';
import { Link } from 'react-router-dom';

function Perfil() {
    useDocumentTitle('FIXY - HOME');

    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikAW3pXN5YXgfLgdGesoC6uPKXkpEsbeSpA&s"; // Link da imagem de perfil
    const nome = "Seu Nome"; // Nome padrão
    const email = "seuemail@exemplo.com"; // Email padrão
    const endereco = "Rua Exemplo, 123, Bairro, Cidade"; // Endereço padrão

    return (
        <main className="bg-black min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative">
                <img 
                    src="cimento.jpg" 
                    alt="Background" 
                    className="w-full h-96 object-cover opacity-80"
                />
            </section>

            {/* Seção de Perfil */}
            <section className="py-10 text-center">
                <h1 className="text-white text-3xl mb-4">PERFIL</h1>
                <div className="flex flex-col items-center">
                    <img 
                        src={profileImage} 
                        alt="Perfil" 
                        className="rounded-full w-32 h-32 mb-4" // Estilo da imagem
                    />
                    <h2 className="text-white text-2xl">{nome}</h2>
                    <p className="text-gray-400">{email}</p>
                    <p className="text-gray-400">{endereco}</p> {/* Endereço */}
                    {/* Integre com banco */}
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8">Como Funciona</h2>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-80 p-2 flex flex-col justify-between">
                        <h3 className="text-2xl mb-4">Afiliado</h3>
                        <p className="mb-4">
                            Para o pedreiro, o processo é direto: ele cadastra suas 
                            habilidades e localização na Fixy. Quando um cliente solicita 
                            um serviço, a Fixy conecta as oportunidades compatíveis, 
                            facilitando a expansão de seus clientes e negócios.
                        </p>
                        <Link to="afiliado" className="bg-transparent border-2 border-yellow-500 text-yellow-500 py-2 px-4 hover:tracking-widest transition-all">
                            AFILIADO
                        </Link>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-80 p-2 flex flex-col justify-between">
                        <h3 className="text-2xl mb-4">Cliente</h3>
                        <p className="mb-4">
                            Para o cliente, é fácil: ele descreve o problema e informa sua 
                            localização no app da Fixy. A plataforma filtra e apresenta 
                            pedreiros disponíveis para o trabalho, simplificando a busca 
                            por um profissional.
                        </p>
                        <Link to="cliente" className="bg-transparent text-black border-2 border-yellow-500 text-yellow-500 py-2 px-4 hover:tracking-widest transition-all">
                            CLIENTE
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Perfil;
