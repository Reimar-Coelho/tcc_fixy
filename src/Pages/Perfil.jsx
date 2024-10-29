import useDocumentTitle from '../hook/useDocumentTitle';


function Perfil() {
    useDocumentTitle('FIXY - PERFIL');

    const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikAW3pXN5YXgfLgdGesoC6uPKXkpEsbeSpA&s"; // Link da imagem de perfil
    const nome = "Seu Nome"; // Nome padrão
    const email = "seuemail@exemplo.com"; // Email padrão
    const endereco = "Rua Exemplo, 123, Bairro, Cidade"; // Endereço padrão

    return (
        <main className="bg-neutral-900 min-h-screen text-white">
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
        </main>
    );
}

export default Perfil;
