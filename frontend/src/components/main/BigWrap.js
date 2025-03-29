import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../dup/Header';
import Nav from '../dup/Nav';
import Footer from '../dup/Footer';

const BigWrap = () => {
    const [ham, setHam] = useState(0);

    // 현재 경로를 확인하여 `/admin` 경로일 때만 헤더와 푸터를 숨김 처리
    const location = useLocation();
    const isAdminPath = location.pathname.startsWith('/admin');
    return (
        <div>
            {!isAdminPath && (
                <>
                    <Header ham={ham} setHam={setHam} />
                    <Nav ham={ham} setHam={setHam} />
                </>
            )}
            <Outlet />
            {!isAdminPath && <Footer />}
        </div>
    );
};

export default BigWrap;
