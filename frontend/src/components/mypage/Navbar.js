import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/Navbar.module.scss';

function Navbar() {
    const navigate = useNavigate();

    const Logout = () => {
        //이 부분도 확인
        sessionStorage.clear('sessionToken'); // 세션 토큰 삭제
        sessionStorage.clear('email'); // 이메일 삭제
        sessionStorage.clear('customerName'); // 고객명 삭제
        navigate('/'); // 메인 페이지로 이동
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.leftLinks}>
                <Link to="/myPage">내 정보</Link>
                <Link to="/" onClick={Logout}>
                    로그아웃
                </Link>
            </div>
            <div className={styles.rightLinks}>
                <Link to="myinfoEdit">회원정보 수정</Link>
                <Link to="addressList">배송 주소록</Link>
                <Link to="viewOrders">주문내역 보기</Link>
                <Link to="/onetoonemain">1:1 문의</Link>
            </div>
        </div>
    );
}

export default Navbar;
