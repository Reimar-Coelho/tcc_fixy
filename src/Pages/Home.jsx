import { useRef, useEffect } from 'react';
import useDocumentTitle from '../hook/useDocumentTitle';
import { Link } from 'react-router-dom';

import CardAvaliacao from '../Componentes/CardAvaliacao/CardAvaliacao';

function Home() {
    useDocumentTitle('FIXY - HOME');

    // Passo 1: Crie uma referência para a seção de destino
    const targetSectionRef = useRef(null);

    // Passo 2: Função para fazer o scroll suave
    const scrollToSection = () => {
        targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                scrollToSection();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Limpa o evento ao desmontar
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

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
                        className="w-2/4 max-w-xs mx-auto transform transition-transform duration-500 hover:scale-105"
                    />
                
                    <p className="text-white text-lg font-semibold mt-4">
                        CONECTANDO CLIENTES E PRESTADORES COM EFICIÊNCIA
                    </p>
                </div>

                {/* Passo 3: Ícone da Seta com onClick */}
                <div className="absolute bottom-16 text-yellow-500 text-sm font-semibold">
                    Pressione &quot;Enter&quot;
                </div>
                <div
                    onClick={scrollToSection}
                    className="absolute bottom-4 cursor-pointer text-yellow-500 hover:text-white transition-all"
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

            <section ref={targetSectionRef} className="py-10 px-40 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">O que é a FIXY?</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-10 text-xl">
                    Focando na segurança e confiabilidade, a FIXY é uma plataforma que conecta clientes a prestadores de serviços, que podem exercer desde mudanças, até montagem de móveis como 
                </div>
            </section>

            {/* Seção do Card de Prestador de Serviço */}
<section className="py-10">
    <h2 className="text-yellow-500 text-3xl mb-8 font-semibold text-center">Prestadores de Serviço</h2>
    <div className="flex flex-wrap justify-center gap-6 px-4">
        <CardAvaliacao 
            nome="André"
            especializacao="Marceneiro"
            custo="R$ 100/h"
            servico="Corte de piso de madeira"
        />
        <CardAvaliacao 
            nome="Beatriz"
            especializacao="Eletricista"
            custo="R$ 150/h"
            servico="Instalação de iluminação"
        />
        <CardAvaliacao 
            nome="Carlos"
            especializacao="Pedreiro"
            custo="R$ 120/h"
            servico="Construção de parede"
        />
        {/* Adicione mais CardAvaliacao aqui conforme necessário */}
    </div>
</section>
            {/* Seção "Como Funciona" com referência */}
            <section className="py-10 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">Como Funciona</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-10">
                    <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between">
                        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Prestador de Serviço</h3>
                        <p className="mb-6 text-gray-300">
                            Para o prestador, o processo é direto: ele cadastra suas 
                            habilidades e localização na FIXY. Quando um cliente solicita 
                            um serviço, a FIXY conecta as oportunidades compatíveis, 
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
                        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Cliente</h3>
                        <p className="mb-6 text-gray-300">
                            Para o cliente, é fácil: ele descreve o problema e informa sua 
                            localização no serviço da FIXY. A plataforma filtra e apresenta 
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
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">Solicitação de serviços</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-10">
                    <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between">
                        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Montagem de Móveis</h3>
                        <p className="mb-6 text-gray-300">
                            Para o cliente, é fácil: ele descreve o problema e informa sua 
                            localização no serviço da FIXY. A plataforma filtra e apresenta 
                            pedreiros disponíveis para o trabalho, simplificando a busca 
                            por um profissional.
                        </p>
                        <Link 
                            to="cliente" 
                            className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center"
                        >
                            ORÇAMENTO
                        </Link>
                    </div> 
                    <div className="relative rounded-xl overflow-hidden w-80 mx-auto shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Caminho para a imagem na pasta public */}
      <img src="/mudança.jpg" alt="Mudanças" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-60"/>
      
      
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 flex flex-col justify-between p-6 text-white transition-all">
        
        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Mudanças</h3>
        <p className="text-gray-300 mb-4">
          Para o cliente, é fácil: ele descreve o problema e informa sua localização...
        </p>
        <Link 
            to="cliente" className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center">ORÇAMENTO
        </Link>
      </div>
      
</div>
<div className="relative rounded-xl overflow-hidden w-80 mx-auto shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Caminho para a imagem na pasta public */}
      <img src="/pedreiro.jpg" alt="Pedreiro" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-60"/>
      
      
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 flex flex-col justify-between p-6 text-white transition-all">
        
        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Pedreiro</h3>
        <p className="text-gray-300 mb-4">
          Para o cliente, é fácil: ele descreve o problema e informa sua localização...
        </p>
        <Link 
            to="cliente" className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center">ORÇAMENTO
        </Link>
      </div>
      
</div>
</div>
</section>
            <section className="py-10 text-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 justify-center">
    <div className="relative rounded-xl overflow-hidden w-80 mx-auto shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Caminho para a imagem na pasta public */}
      <img src="/1pintor.jpg" alt="Pintura" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-60"/>
      
      
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 flex flex-col justify-between p-6 text-white">
        
        <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">Pintura</h3>
        <p className="text-gray-300 mb-4">
          Para o cliente, é fácil: ele descreve o problema e informa sua localização...
        </p>
        <Link to="cliente" className="bg-yellow-500 text-black py-2 px-4 rounded transition-all hover:bg-transparent hover:border-2 hover:border-yellow-500 hover:text-yellow-500 self-center">
          ORÇAMENTO
        </Link>
      </div>
      
    </div>
    {/* Repita o card para outros serviços, mudando o caminho da imagem se necessário */}
  </div>
</section>

        </main>
    );
}

export default Home;
