
import useDocumentTitle from '../hook/useDocumentTitle';
import loginImg from '../assets/login.png'
import { Link } from 'react-router-dom';

function Cliente() {
    useDocumentTitle('FIXY - Cliente');
    return (
        <main className="bg-black min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative">
                <img 
                    src={loginImg} // Substitua pelo caminho da imagem correta
                    alt="Background"
                    className="w-full h-96 object-cover opacity-80"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Clientes</h1>
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-4">Como Funciona</h2>
                <p className="max-w-3xl mx-auto mb-8">
                    Nosso site facilita a conexão entre você e pedreiros qualificados. Aqui, você pode descrever o serviço necessário, encontrar profissionais especializados próximos à sua localização e se comunicar diretamente com eles de forma simples e segura.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Filtragem</h3>
                        <p className="mb-4">
                            Descreva seu problema e informe sua localização. Nosso sistema irá filtrar pedreiros com as especialidades necessárias que estão próximos a você, facilitando a escolha do profissional ideal.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Garantia</h3>
                        <p className="mb-4">
                            Nossa política de garantia assegura que o serviço prestado tenha a qualidade esperada, cobrindo eventuais problemas de execução.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Chat</h3>
                        <p className="mb-4">
                            Comunique-se diretamente com o pedreiro selecionado através do sistema de mensagens, isso permite esclarecer dúvidas e agendar serviços de forma prática e segura.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Avaliação</h3>
                        <p className="mb-4">
                            Após o serviço, você pode avaliar o pedreiro. Essas avaliações são fundamentais para manter a qualidade dos profissionais, ajudando outros clientes a fazer escolhas informadas.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link to="/cadastro" className="bg-yellow-500 hover:bg-yellow-400 transition-all text-black py-2 px-4 rounded">
                        Cadastre-se
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Cliente;
