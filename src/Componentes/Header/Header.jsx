import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header className="absolute top-0 left-0 w-full text-white p-3">
            <div className="flex flex-row items-center justify-between mx-7">
                <h1 className="text-4xl mt-3 mb-3 text-yellow-500 font-bold tracking-tight hover:text-yellow-300 transition-all">
                    <Link to="/">FIXY</Link>
                </h1>
                <Navbar/>
           </div>
        </header>
    );
}
export default Header;
