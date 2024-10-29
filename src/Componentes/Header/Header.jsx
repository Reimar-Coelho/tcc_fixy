import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="fixed top-0 left-0 w-full p-3 z-50">
            <div className="flex flex-row items-center justify-between ml-3 mr-7">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img 
                        src="fixy (1).png" // Substitua pelo caminho exato da sua imagem
                        alt="Logo FIXY" 
                        className="w-10 h-10 object-contain" // Ajuste o tamanho conforme desejado
                    />
                </Link>
                
                <Navbar />
           </div>
        </header>
    );
}

export default Header;
