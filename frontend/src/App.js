import Home from "./components/main/Home";
import Header from "./components/dup/Header";
import Nav from "./components/dup/Nav";
import "./reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Services from "./Services";


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
        </BrowserRouter>
    );
}

export default App;
