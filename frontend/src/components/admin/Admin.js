import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminMain from "./AdminMain";
import AdminTemp from "./AdminTemp";
import OrderList from "./orders/OrderList";
import OrderDetail from "./orders/OrderDetail";
import AProductList from "./product/AProductList";
import OneToOneList from"./service/OneToOneList"
import OneToOneDetail from"./service/OneToOneDetail"
import AReviewList from"./service/AReviewList"
import AReviewDetail from"./service/AReviewDetail"
import ReportPage from"./service/ReportPage"


function Admin(props) {
    return (
        <Routes>
            <Route path="/admin" element={<AdminTemp/>}>
                <Route path="" element={<AdminMain />} />
                <Route path="order" element={<OrderList />} />
                <Route path="order/detail/:id" element={<OrderDetail />} />
                <Route path="product" element={<AProductList />} />
                <Route
                    path="product/detail/:product_id"
                    element={<AProductList />}
                />
                {/* 일대일 문의 관련 */}
                <Route path="onetoone" element={<OneToOneList/> }/>
                <Route path="onetoone/:id" element={<OneToOneDetail/> }/>

                {/* 리뷰관련 */}
                <Route path="areviewlist" element={<AReviewList/> }/>
                <Route path="areviewdetail/:id" element={<AReviewDetail/> }/>
                <Route path="reports" element={<ReportPage/> }/>
            </Route>
        </Routes>
    );
}

export default Admin;
