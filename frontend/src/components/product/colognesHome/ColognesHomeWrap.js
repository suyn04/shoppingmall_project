import React from "react";
import HomeTop from "./HomeTop";
import { Outlet } from "react-router-dom";
import ColognesNav from "./ColognesNav";

const ColognesHomeWrap = () => {
    return (
        <div>
            <HomeTop />
            <ColognesNav />
            <Outlet />
        </div>
    );
};

export default ColognesHomeWrap;
