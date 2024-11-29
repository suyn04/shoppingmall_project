import Home from "./components/main/Home";
import Header from "./components/dup/Header";
import Nav from "./components/dup/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import Product from "./Product";
import Services from "./Services";
import Mypage from './Mypage';
import Footer from './components/dup/Footer';

function App() {

    const [hamBtn, setHam] = useState(false)
    return (
        <BrowserRouter>
            <Header hamBtn={hamBtn} setHam={setHam}/>
            <Nav hamBtn={hamBtn} setHam={setHam} />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Product />
            <Services />
            <Mypage />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
