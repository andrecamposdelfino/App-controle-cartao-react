
// config css
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar(){
    return(
        <header className="container-navbar">

            <div className="navbar">
                <img src="./logo.webp" alt="" srcset="" />

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/lancamentos">Lancamentos</Link>
                </nav>

            </div>

        </header>
    )
}

export default Navbar