import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/dup/header.module.scss";

function Header({ hamBtn, setHam }) {
    const navigate = useNavigate();
    const Loginchk = Boolean(sessionStorage.getItem("token") || null); // 로그인 상태 확인--초기값 토큰 0

    const Loginbtn = () => {
        if (Loginchk) {
            navigate("/myPage"); // 로그인 상태면 마이페이지로 이동
        } else {
            navigate("/signIn"); // 아니면 로그인 페이지로 이동
        }
    };
    const showHamMenu = (e) => {
        e.stopPropagation();
        setHam(!hamBtn);
    };

    const url = "/imgs/main/";
    return (
        <header>
            <div className={styles.wrap}>
                <div>
                    <div className={styles.hamIcon} onClick={showHamMenu}>
                        <img src={`${url}menuIcon.svg`} alt="" />
                    </div>
                    <div className={styles.searchIcon}>
                        <img src={`${url}searchIcon.svg`} alt="" />
                        <div id="search">
                            <form>
                                <button
                                    type="button"
                                    className={styles.searchClose}
                                >
                                    <img src={`${url}close_icon.svg`} alt="" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="찾으시는 상품을 입력하여 주세요."
                                    id="searchText"
                                />
                            </form>
                            <div className={styles.defContent}>
                                <p>도움이 필요하세요?</p>
                                <Link to="">
                                    히노키 앤 시더우드 코롱 인텐스
                                </Link>
                                <Link to="">코롱 인텐스</Link>
                                <Link to="">베스트셀러</Link>
                            </div>
                            <div className={styles.activeContent}>
                                <h2>추천상품</h2>
                                <div className={styles.items}>
                                    <Link to="">
                                        <div className={styles.right}>
                                            <img src="imgs/item1.avif" alt="" />
                                            <div className={styles.txt}>
                                                <div>블랙베리 앤 베이 코롱</div>
                                                <div>₩112,000</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className={styles.item}>
                                            <img src="imgs/item2.avif" alt="" />
                                            <div className={styles.txt}>
                                                <div>
                                                    우드 세이지 앤 씨 솔트 바디
                                                    크림
                                                </div>
                                                <div>₩45,000</div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="">
                                        <div className={styles.right}>
                                            <img src="imgs/item3.avif" alt="" />
                                            <div className={styles.txt}>
                                                <div>
                                                    포피 앤 바알리 바디 앤 핸드
                                                    워시
                                                </div>
                                                <div>₩105,000</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mapIcon}>
                        <Link to="">
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
