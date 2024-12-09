import Home from './components/main/Home';
import Header from './components/dup/Header';
import Nav from './components/dup/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Product from './Product';
import Services from './Services';
import Basket from './components/order/Basket';
import Payment1 from './components/order/Payment1';
import Payment2 from './components/order/Payment2';
import Mypage from './Mypage';
import Footer from './components/dup/Footer';
import Admin from './components/admin/Admin';

function App() {
    const [hamBtn, setHam] = useState(false);

    return (
        <BrowserRouter>
            <Header hamBtn={hamBtn} setHam={setHam} />
            <Nav hamBtn={hamBtn} setHam={setHam} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket/:id" element={<Basket />} />
                <Route path="/payment1" element={<Payment1/>} />
                <Route path="/payment2"  element={<Payment2/>} />
            </Routes>
            <Product />
            <Services />
            <Mypage />
            {/* <Order /> */}
            <Admin />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
