
import useDocumentTitle from '../hook/useDocumentTitle';
import loginImg from '/marceneiro.jpg'
import { Link } from 'react-router-dom';
import CardAvaliacao from '../Componentes/CardAvaliacao/CardAvaliacao';

function Pro1() {
    useDocumentTitle('FIXY - Serviço de Pedreiro - PROFISSIONAIS'); 
    return (
        <main className="bg-neutral-900 min-h-screen text-white">
            {/* Seção de Imagem Principal */}
            <section className="relative">
                <img 
                    src={loginImg} // Substitua pelo caminho da imagem correta
                    alt="Background"
                    className="w-full h-96 object-cover opacity-60"
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">Serviço de Pedreiro</h1>
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 bg-neutral-900">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold text-center">Prestadores de Serviço</h2>
                <div className="flex flex-wrap justify-center gap-10 px-4">
                    <CardAvaliacao 
                        nome="André"
                        especializacao="Pedreiro"
                        custo="R$ 100/h"
                        servico="Corte de piso de madeira"
                    />
                    <CardAvaliacao 
                        nome="Bernardo"
                        especializacao="Pedreiro"
                        custo="R$ 120/h"
                        servico="Instalação de iluminação"
                    />
                    <CardAvaliacao 
                        nome="Carol"
                        especializacao="Pedreiro"
                        custo="R$ 170/h"
                        servico="Construção de parede"
                    />
                    {/* Adicione mais CardAvaliacao aqui conforme necessário */}
                </div>
            </section>
            <section className="pb-20 bg-neutral-900">
                <div className="flex flex-wrap justify-center gap-10 px-4">
                    <CardAvaliacao 
                        nome="Douglas"
                        especializacao="Pedreiro"
                        custo="R$ 100/h"
                        servico="Corte de piso de madeira"
                    />
                    <CardAvaliacao 
                        nome="Eduardo"
                        especializacao="Pedreiro"
                        custo="R$ 90/h"
                        servico="Instalação de iluminação"
                    />
                    <CardAvaliacao 
                        nome="Felipe"
                        especializacao="Pedreiro"
                        custo="R$ 40/h"
                        servico="Construção de "
                    />
                    {/* Adicione mais CardAvaliacao aqui conforme necessário */}
                </div>
            </section>
        </main>
    );
}

export default Pro1;
