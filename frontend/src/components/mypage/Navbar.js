import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/Navbar.module.scss';

function Navbar() {
    const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.clear('sessionToken');
        sessionStorage.clear('email');
        sessionStorage.clear('customerName');
        navigate('/');
    };

    return (
        <div className={styles.navbar}>
            {/* 왼쪽 링크 */}
            <div className={styles.leftLinks}>
                <Link to="/myPage">내 정보</Link>
            </div>

            {/* 중앙 링크 */}
            <div className={styles.centerLinks}>
                <Link to="myinfoEdit">회원정보 수정</Link>
                <Link to="addressList">배송 주소록</Link>
                <Link to="viewOrders">주문내역 보기</Link>
                <Link to="/onetoonemain">1:1 문의</Link>
            </div>

            {/* 오른쪽 링크 */}
            <div className={styles.rightLinks}>
                <Link to="/" onClick={Logout}>
                    로그아웃
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
