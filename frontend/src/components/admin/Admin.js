import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminMain from "./AdminMain";
import AdminTemp from "./AdminTemp";
import OrderList from "./orders/OrderList";
import OrderDetail from "./orders/OrderDetail";
import AProductList from "./product/AProductList";
import AProductDetail from "./product/AProductDetail";
import AProductRegister from "./product/AProductRegister";
import AProductRegisterOpt from "./product/AProductRegisterOpt";

function Admin(props) {
    return (
        <Routes>
            <Route path="/admin" element={<AdminTemp />}>
                <Route path="" element={<AdminMain />} />
                <Route path="order" element={<OrderList />} />
                <Route path="order/detail/:id" element={<OrderDetail />} />
                <Route path="product" element={<AProductList />} />
                <Route
                    path="product/detail/:product_id"
                    element={<AProductDetail />}
                />
                <Route path="product/register" element={<AProductRegister />} />
                <Route
                    path="product/register/option/:product_id"
                    element={<AProductRegisterOpt />}
                />
            </Route>
        </Routes>
    );
}

export default Admin;
