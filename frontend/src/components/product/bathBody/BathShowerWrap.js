import React from "react";
import { Outlet } from "react-router-dom";
import BathShowerHomeTop from "./BathShowerHomeTop";
import BathShowerNav from "./BathShowerNav";

const BathShowerWrap = () => {
    return (
        <div>
            <BathShowerHomeTop />
            <BathShowerNav />
            <Outlet />
        </div>
    );
};

export default BathShowerWrap;
