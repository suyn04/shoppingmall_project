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
import Payment3 from './components/order/Payment3';
import Mypage from './Mypage';
import Footer from './components/dup/Footer';
import Admin from './components/admin/Admin';

function App() {
    const [ham, setHam] = useState(0);

    const sessionToken = sessionStorage.getItem('sessionToken');
    const email = sessionStorage.getItem('email');
    const customerName = sessionStorage.getItem('customerName');

    function AdminChk() {
        // 홈으로 이동
        if (email === 'admin@jomalone.kr' && customerName === '관리자') {
            console.log('관리자 확인함');
            return <Admin />;
        } else {
            console.log('일반 고객이므로 어드민 접근불가');
            return <></>;
        }
    }

    return (
        <BrowserRouter>
            <Header ham={ham} setHam={setHam} />
            <Nav ham={ham} setHam={setHam} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/payment1" element={<Payment1 />} />
                <Route path="/payment2" element={<Payment2 />} />
                <Route path="/payment3" element={<Payment3 />} />
            </Routes>
            <Product />
            <Services />
            <Mypage />
            <AdminChk />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
