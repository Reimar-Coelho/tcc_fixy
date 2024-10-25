import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="absolute top-0 left-0 w-full text-white p-3 z-50">
            <div className="flex flex-row items-center justify-between mx-7">
                {/* Substituindo o texto por uma imagem */}
                <Link to="/" className="flex items-center">
                    <img 
                        src="fixy (1).png" // Substitua pelo caminho exato da sua imagem
                        alt="Logo FIXY" 
                        className="w-12 h-12 object-contain" // Ajuste o tamanho conforme desejado
                    />
                </Link>
                
                <Navbar />
           </div>
        </header>
    );
}

export default Header;
