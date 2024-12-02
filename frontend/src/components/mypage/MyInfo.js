import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/MyInfo.module.scss';

const MyInfo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('sessionToken'); // 세션 토큰 확인
        if (!token) {
            navigate('/signIn'); // 로그인 페이지로 이동
        }
    }, [navigate]);

    return (
        <main>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionBox}>
                    {/* 섹션 1: 나의 정보 */}
                    <div className={styles.sectionHeader}>
                        나의 정보
                        <div>
                            <Link to="/member-information-input" className={styles.a1}>
                                정보 보기
                            </Link>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <p>이름 : 임세훈</p>
                        <p>이메일 주소 : rkdcjftkrhk123@gmail.com</p>
                        <p>뉴스레터 : 동의 안함</p>
                        <p>MMS : 동의 안함</p>
                        <p>DM : 동의 안함</p>
                    </div>
                </div>
                <div className={styles.sectionBox}>
                    {/* 섹션 2: 주문 내역 */}
                    <div className={styles.sectionHeader}>
                        주문 내역
                        <div>
                            <Link to="/ViewOrders" className={styles.a1}>
                                주문 내역 보기
                            </Link>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <p>
                            고객님의 주문내역이 없습니다.
                            <Link to="/shop" className={styles.a1}>
                                쇼핑하러가기
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyInfo;
