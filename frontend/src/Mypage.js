import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/mypage/Navbar';
import AddressList from './components/mypage/AddressList';
import MyInfo from './components/mypage/MyInfo';
import MyinfoEdit from './components/mypage/MyinfoEdit';
import ViewOrders from './components/mypage/ViewOrders';
import SignIn from './components/mypage/SignIn';
import SignUp from './components/mypage/SignUp';

function App() {
    return (
        <>
            <Navbar />
            <div className="App">
                <Outlet />
                <div className="content">
                    <Routes>
                        <Route path="/signIn" element={<SignIn />} />
                        <Route path="/signUp" element={<SignUp />} />
                    </Routes>
                    <Routes>
                        {/* 기본라우트 */}
                        <Route path="/myInfo" element={<MyInfo />} />
                        <Route path="/addressList" element={<AddressList />} />
                        <Route path="/myinfoEdit" element={<MyinfoEdit />} />
                        <Route path="/viewOrders" element={<ViewOrders />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
