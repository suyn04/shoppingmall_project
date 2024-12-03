import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminMain from "./AdminMain";
import AdminTemp from "./AdminTemp";
import OrderList from "./orders/OrderList";
import OrderDetail from "./orders/OrderDetail";
import AProductList from "./product/AProductList";

function Admin(props) {
    return (
        <Routes>
            <Route path="/admin" element={<AdminTemp />}>
                <Route path="" element={<AdminMain />} />
                <Route path="order" element={<OrderList />}>
                    <Route path="detail/:id" element={<OrderDetail />} />
                </Route>
            </Route>
            <Route path="/admin/product" element={<AProductList />} />
            <Route
                path="/admin/product/detail/:product_id"
                element={<AProductList />}
            />
        </Routes>
    );
}

export default Admin;
