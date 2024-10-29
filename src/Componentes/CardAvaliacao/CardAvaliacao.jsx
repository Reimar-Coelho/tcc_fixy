import { useState } from 'react';
import PropTypes from 'prop-types';

function CardAvaliacao({ nome, especializacao, custo, servico }) {
    // State to store the rating
    const [rating, setRating] = useState(0);

    // Function to handle rating
    const handleRating = (rating) => {
        setRating(rating);
        console.log(`Rated: ${rating}`);
    };

    return (
        <div className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between text-center">
            <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">{nome}</h3>
            <p className="mb-4 text-gray-300">Especialização: <span className="text-white">{especializacao}</span></p>
            <p className="mb-4 text-gray-300">Custo: <span className="text-white">{custo}</span></p>
            <p className="mb-2 text-gray-300">Serviço: <span className="text-white">{servico}</span></p>
            
            <div className="mb-4 text-center">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer text-neutral-600 hover:text-yellow-500 transition-colors text-4xl duration-300`}
                        onClick={() => handleRating(index + 1)}
                    >
                        {index < rating ? '★' : '☆'}
                    </span>
                ))}
            </div>
        </div>
    );
}

CardAvaliacao.propTypes = {
    nome: PropTypes.string.isRequired,
    especializacao: PropTypes.string.isRequired,
    custo: PropTypes.string.isRequired,
    servico: PropTypes.string.isRequired,
};

export default CardAvaliacao;
