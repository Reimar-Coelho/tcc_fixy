import useDocumentTitle from '../hook/useDocumentTitle';
import { Link } from 'react-router-dom';

function Home() {
    useDocumentTitle('FIXY - HOME');
    return (
        <main className="bg-neutral-900 min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative h-screen flex justify-center items-center">
                <img 
                    src="cimento.jpg" 
                    alt="Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                
                {/* Conteúdo Centralizado */}
                <div className="relative z-10 text-center">
                    <img 
                        src="fixy (4).png"  // Substitua pelo caminho correto da imagem
                        alt="Logo FIXY" 
                        className="w-1/3 max-w-xs mx-auto" // Ajuste o tamanho conforme necessário
                    />
                    <p className="text-yellow-500 text-xl mt-4">
                        Facilitando a conexão entre clientes e profissionais
                    </p>
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8">Como Funciona</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-80 flex flex-col justify-between">
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
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-80 flex flex-col justify-between">
                        <h3 className="text-2xl mb-4">Cliente</h3>
                        <p className="mb-4">
                            Para o cliente, é fácil: ele descreve o problema e informa sua 
                            localização no app da Fixy. A plataforma filtra e apresenta 
                            pedreiros disponíveis para o trabalho, simplificando a busca 
                            por um profissional.
                        </p>
                        <Link to="cliente" className="bg-transparent border-2 border-yellow-500 text-yellow-500 py-2 px-4 hover:tracking-widest transition-all">
                            CLIENTE
                        </Link>
                    </div>
                </div>
            </section>

            {/* Seção "Solicitação de serviço" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8">Solicitação de serviço</h2>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="text-left max-w-md">
                        <p className="mb-4">
                            Cadastre-se, descreva o seu problema e informe sua localização. 
                            Nosso sistema filtrará pedreiros qualificados próximos de você, 
                            facilitando a contratação do profissional ideal para suas necessidades.
                        </p>
                        <Link to="404" className="bg-yellow-500 hover:bg-yellow-400 transition-all text-black py-2 px-4">
                            Solicitar um serviço
                        </Link>
                    </div>
                    <img 
                        src="pintor.jpg" 
                        alt="Worker" 
                        className="w-full md:w-1/3 h-96 object-cover bg-center opacity-80 rounded"
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;
