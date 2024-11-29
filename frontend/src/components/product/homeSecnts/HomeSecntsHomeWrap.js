import React from "react";
import HomeTop from "./HomeTop";
import { Outlet } from "react-router-dom";

const HomeSecntsHomeWrap = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default HomeSecntsHomeWrap;
