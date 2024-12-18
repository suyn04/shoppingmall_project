import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/dup/header.module.scss';

function Header({ ham, setHam }) {
    const navigate = useNavigate();

    //세션토큰 사용
    const Loginchk = sessionStorage.getItem('sessionToken'); // 세션 스토리지에 있는 토큰 가져와
    const email = sessionStorage.getItem('email'); // 세션 스토리지에 있는 토큰 가져와

    const Loginbtn = () => {
        if (Loginchk) {
            console.log(Loginchk);
            navigate('/myPage'); // 로그인 상태면 마이페이지로 이동
        } else {
            navigate('/signIn'); // 아니면 로그인 페이지로 이동
        }
    };

    const Adminbtn = () => {
        navigate('/admin'); // 관리자 페이지로 이동
    };

    const showHamMenu = e => {
        e.stopPropagation();
        setHam(!ham);
    };

    const url = '/imgs/main/';

    return (
        <header>
            <div className={styles.wrap}>
                <div>
                    <div className={styles.hamIcon} onClick={showHamMenu}>
                        <img src={`${url}menuIcon.svg`} alt="" />
                    </div>
                    <div
                        className={styles.searchIcon}
                        onClick={() => {
                            navigate('/search');
                        }}
                    >
                        <img src={`${url}searchIcon.svg`} alt="" />
                    </div>
                    <div className={styles.mapIcon}>
                        <Link to="/map">
                            <img src={`${url}mapIcon.svg`} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={styles.logo}>
                    <Link to="">
                        <img src={`${url}조말론로고.svg`} alt="" />
                    </Link>
                </div>
                <div>
                    {/* 관리자 계정일 때 관리자 페이지로 이동하게 */}
                    {email === 'admin@jomalone.kr' && (
                        <div className={styles.adminLink} onClick={Adminbtn}>
                            관리자
                        </div>
                    )}
                    {/* 로그인 혹은 마이페이지 버튼 */}
                    <div className={styles.myPageIcon} onClick={Loginbtn}>
                        <img src={`${url}myPageIcon.svg`} alt="" />
                    </div>
                    <div className={styles.basketContainer}>
                        <div className={styles.basketIcon}>
                            <Link to="/basket">
                                <img src={`${url}basketIcon.svg`} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
