import React from "react";
import HomeTop from "./BathBodyHomeTop";
import { Outlet } from "react-router-dom";

const BathBodyHomeWrap = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default BathBodyHomeWrap;
