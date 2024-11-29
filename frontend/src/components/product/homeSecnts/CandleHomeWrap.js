import React from "react";
import HomeTop from "./HomeTop";
import { Outlet } from "react-router-dom";
import HomeScentsNav from "./HomeScentsNav";
import CandleHomeTop from "./CandleHomeTop";

const CandleHomeWrap = () => {
    return (
        <div>
            <CandleHomeTop />
            <HomeScentsNav />
            <Outlet />
        </div>
    );
};

export default CandleHomeWrap;
