import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminMain from './AdminMain';
import AdminTemp from './AdminTemp';
import AOrderList from './orders/AOrderList';
import AOrderDetail from './orders/AOrderDetail';
import AProductList from './product/AProductList';
import OneToOneList from './service/OneToOneList';
import OneToOneDetail from './service/OneToOneDetail';
import AReviewList from './service/AReviewList';
import AReviewDetail from './service/AReviewDetail';
import ReportList from './service/ReportList';
import MemberList from './member/MemberList';
import MemberDetail from './member/MemberDetail';
import AProductDetail from './product/AProductDetail';
import AProductRegister from './product/AProductRegister';
import AProductRegisterOpt from './product/AProductRegisterOpt';
import UnactiveMember from './member/UnactiveMember';
import ReportDetail from "./service/ReportDetail";

function Admin(props) {
    return (
        <Routes>
            <Route path="/admin" element={<AdminTemp />}>
                <Route path="" element={<AdminMain />} />
                <Route path="order" element={<AOrderList />} />
                <Route path="order/detail/:id" element={<AOrderDetail />} />
                <Route path="member" element={<MemberList />} />
                <Route path="member/detail/:id" element={<MemberDetail />} />
                <Route path="unactivemember" element={<UnactiveMember />} />
                <Route path="product" element={<AProductList />} />
                <Route path="product/detail/:product_id" element={<AProductDetail />} />
                <Route path="product/register" element={<AProductRegister />} />
                <Route path="product/register/option/:product_id" element={<AProductRegisterOpt />} />
                {/* 일대일 문의 관련 */}
                <Route path="onetoone" element={<OneToOneList />} />
                <Route path="onetoone/:id" element={<OneToOneDetail />} />

                {/* 리뷰관련 */}
                <Route path="areviewlist" element={<AReviewList />} />
                <Route path="areviewdetail/:id" element={<AReviewDetail />} />
                {/* 리뷰 신고 */}
                <Route path="reports" element={<ReportList />} />
                <Route path="reportsdetail/:id" element={<ReportDetail />} />
            </Route>
        </Routes>
    );
}

export default Admin;
