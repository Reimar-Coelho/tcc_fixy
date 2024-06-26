import { Link } from 'react-router-dom';


function Banner({ id }) {

    return (
        <div 
            className="relative w-full h-80 md:h-96 bg-cover bg-center  overflow-hidden mb-10"
            style={{ backgroundImage: `url(${urlImg}${filme.backdrop_path})` }}
        >
            
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-70 hover:tracking-widest transition-all ">
            <Link to={`filmes/${filme.id}`} className="text-teal-800 mt-1 hover:tracking-widest transition-all font-bold">
                <div className="text-white text-center max-w-2xl p-4">
                <p className="mt-2 text-xl text-teal-500 font-bold">Disponível agora no MUVI! </p>
                    <h1 className="text-2xl md:text-5xl font-bold">{filme.title}</h1>
                    <p className="mt-2 text-2xl">Lançamento: {filme.release_date} </p>
                    <p className="mt-2">Nota Média de Avaliações: {filme.vote_average} </p>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Banner;