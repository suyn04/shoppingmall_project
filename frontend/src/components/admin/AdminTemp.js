import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../scss/admin/AdminTemp.module.scss';

function AdminTemp() {
    return (
        <div className={styles.container}>
            {/* 사이드바로 뺌 */}
            <div className={styles.sidebar}>
                <h1>관리자 전용 메뉴</h1>
                <Link to={`/admin/member`}>회원정보 조회</Link>
                <Link to={`/admin/member/unactivemember`}>휴면고객 관리</Link>
                <Link to={`/admin/member`}>탈퇴고객 관리</Link>
                <Link to={`/admin/product`}>상품</Link>
                <Link to={`/admin/order`}>주문</Link>
                <Link to={`/admin/onetoone`}>1:1문의</Link>
                <Link to={`/admin/areviewlist`}>리뷰관리</Link>
                <Link to={`/admin/reports`}>리뷰 신고관리</Link>
                <Link to={`/admin/analysis`}>매출 분석</Link>
            </div>

            {/* 메인 콘텐츠 */}
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminTemp;
