import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/dup/header.module.scss';

function Header({ ham, setHam }) {
    const navigate = useNavigate();

    //세션토큰 사용
    const Loginchk = sessionStorage.getItem('sessionToken');
    const email = sessionStorage.getItem('email');
    const userName = sessionStorage.getItem('customerName');

    const Loginbtn = () => {
        if (Loginchk) {
            // console.log(Loginchk);
            navigate('/myPage'); // 로그인 상태면 마이페이지로 이동
        } else {
            navigate('/signIn'); // 아니면 로그인 페이지로 이동
        }
    };

    const LoginBsk = () => {
        if (Loginchk) {
            navigate('/basket');
        } else {
            navigate('/signIn');
        }
    };

    const Adminbtn = () => {
        navigate('/admin'); // 관리자 페이지로 이동
    };

    const showHamMenu = (e) => {
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
                    {/* 이메일이 있거나 없을 때 이메일에 따라서 표기되는 값 변경 */}
                    {email ? (
                        email === 'admin@jomalone.kr' ? (
                            <div className={styles.userLink} onClick={Adminbtn}>
                                관리자
                            </div>
                        ) : (
                            <div className={styles.userLink} onClick={Loginbtn}>{`${userName}님`}</div>
                        )
                    ) : null}

                    {/* 로그인 혹은 마이페이지 버튼 */}
                    <div className={styles.myPageIcon} onClick={Loginbtn}>
                        <img src={`${url}myPageIcon.svg`} alt="" />
                    </div>
                    <div className={styles.basketIcon} onClick={LoginBsk}>
                        <img src={`${url}basketIcon.svg`} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
