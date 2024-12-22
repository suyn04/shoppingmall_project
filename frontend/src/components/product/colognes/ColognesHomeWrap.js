import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ColognesHomeTop from './ColognesHomeTop';

const ColognesHomeWrap = () => {
    return (
        <div>
            <ColognesHomeTop />
            <Outlet />
        </div>
    );
};

export default ColognesHomeWrap;
