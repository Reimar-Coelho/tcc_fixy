import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App;