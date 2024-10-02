import { Link } from 'react-router-dom';
import useDocumentTitle from '../hook/useDocumentTitle';

function Afiliado() {
    useDocumentTitle('FIXY - Afiliado')
    return (
        <main className="bg-black min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative">
                <img 
                    src="pintor.jpg" // Substitua pelo caminho da imagem correta
                    alt="Background"
                    className="w-full h-96 object-cover opacity-80"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Afiliados</h1>
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-4">Como Funciona</h2>
                <p className="max-w-3xl mx-auto mb-8">
                    Nosso sistema foi criado para conectar pedreiros qualificados com clientes que precisam de serviços em sua área. Ao se cadastrar, você terá acesso a uma plataforma que facilita a oferta de seus serviços e a comunicação direta com os clientes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Filtragem</h3>
                        <p className="mb-4">
                            Nosso sistema combina suas especialidades e localização com as necessidades dos clientes, enviando apenas solicitações relevantes para você.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Garantia</h3>
                        <p className="mb-4">
                            Oferecemos uma política de garantia para assegurar a qualidade dos serviços prestados, cobrindo possíveis problemas de execução ou qualidade.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Chat</h3>
                        <p className="mb-4">
                            Você poderá se comunicar diretamente com os clientes através de mensagens instantâneas para esclarecer dúvidas e agendar serviços.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl mb-4">Avaliação</h3>
                        <p className="mb-4">
                            Os clientes podem avaliar seus serviços ao final de cada trabalho. Isso ajuda a manter a qualidade dos serviços e aumenta a sua reputação na plataforma.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <Link to="/cadastroParceiro" className="bg-yellow-500 hover:bg-yellow-400 transition-all text-black py-2 px-4 rounded">
                        Cadastre-se
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Afiliado;
