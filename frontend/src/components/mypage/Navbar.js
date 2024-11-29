import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/mypage/Navbar.module.scss';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftLinks}>
                <Link to="/myInfo">내 정보</Link>
                <Link to="/index.html">로그아웃</Link>
            </div>
            <div className={styles.rightLinks}>
                <Link to="/myinfoEdit">회원정보입력</Link>
                <Link to="/addressList">배송주소록</Link>
                <Link to="/viewOrders">주문내역 보기</Link>
                <Link to="/reorder">1:1 문의</Link>
            </div>
        </div>
    );
}

export default Navbar;
