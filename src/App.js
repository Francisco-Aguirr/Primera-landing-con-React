
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom"
import Home from "./vistas/home/Home"
import Discover from "./vistas/discover/Discover"
import Join from "./vistas/join/Join"
function App() {
    return ( <div className = "App" >
       <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Discover" element={<Discover/>}/>
            <Route exact path="/Join" element={<Join/>}/>
        </Routes>
       </Router>
         </div>
    );
}

export default App;