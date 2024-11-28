import "./reset.css";
import Home from "./components/main/Home";
import Header from "./components/dup/Header";
import Nav from "./components/dup/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Services from "./Services";
import Footer from './components/dup/Footer'


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Product />
            <Services />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
