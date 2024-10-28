import { useRef } from 'react';
import useDocumentTitle from '../hook/useDocumentTitle';
import { Link } from 'react-router-dom';

function Home() {
    useDocumentTitle('FIXY - HOME');
    
    // Passo 1: Crie uma referência para a seção de destino
    const targetSectionRef = useRef(null);

    // Passo 2: Função para fazer o scroll suave
    const scrollToSection = () => {
        targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

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
                        src="whitefixy.png"  
                        alt="Logo FIXY" 
                        className="w-1/3 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-105"
                    />
                    <p className="text-white text-xl mt-4">
                        Facilitando a conexão entre clientes e profissionais
                    </p>
                </div>

                {/* Passo 3: Ícone da Seta com onClick */}
                <div
                    onClick={scrollToSection}
                    className="absolute bottom-10 cursor-pointer text-yellow-500 hover:text-yellow-400"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        className="animate-bounce transition-transform duration-300 hover:scale-110"
                    >
                        <path d="M12 19c-.256 0-.512-.098-.707-.293l-7-7c-.39-.39-.39-1.023 0-1.414s1.024-.39 1.414 0L12 16.586l6.293-6.293c.39-.39 1.024-.39 1.414 0s.39 1.024 0 1.414l-7 7c-.195.195-.451.293-.707.293z"/>
                    </svg>
                </div>
            </section>

            {/* Seção "Como Funciona" com referência */}
 <section ref={targetSectionRef} className="py-10 text-center">
    <h2 className="text-yellow-500 text-3xl mb-8">Como Funciona</h2>
    <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-10">
        <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between">
            <h3 className="text-2xl mb-4 text-yellow-500">Afiliado</h3>
            <p className="mb-6 text-gray-300">
                Para o pedreiro, o processo é direto: ele cadastra suas 
                habilidades e localização na Fixy. Quando um cliente solicita 
                um serviço, a Fixy conecta as oportunidades compatíveis, 
                facilitando a expansão de seus clientes e negócios.
            </p>
            <Link 
                to="afiliado" 
                className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center"
            >
                VEJA MAIS
            </Link>
        </div>

        <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between">
            <h3 className="text-2xl mb-4 text-yellow-500">Cliente</h3>
            <p className="mb-6 text-gray-300">
                Para o cliente, é fácil: ele descreve o problema e informa sua 
                localização no app da Fixy. A plataforma filtra e apresenta 
                pedreiros disponíveis para o trabalho, simplificando a busca 
                por um profissional.
            </p>
            <Link 
                to="cliente" 
                className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center"
            >
                VEJA MAIS
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
