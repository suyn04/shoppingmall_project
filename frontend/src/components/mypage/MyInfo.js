import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/MyInfo.module.scss';
import axios from 'axios';

const MyInfo = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null); // 사용자 정보

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('sessionToken');
        const email = sessionStorage.getItem('email');
        const customerName = sessionStorage.getItem('customerName');

        if (!sessionToken) {
            navigate('/signIn'); // 세션 토큰 없으면 로그인 페이지로 이동
        } else {
            // Axios로 사용자 정보 가져오기
            axios
                .post(
                    'http://localhost:5001/myPage', //index.js의 라우트경로랑 일치시킴
                    { action: 'getUserInfo', email: sessionStorage.getItem('email') }, // 요청 본문
                    {
                        headers: {
                            Authorization: sessionToken, // 세션 토큰 포함
                        },
                    }
                )
                .then(response => {
                    setUserInfo(response.data); // 세션토큰 콘솔에서 확인
                    console.log('세션 토큰 :', sessionStorage.getItem('sessionToken'));
                    console.log('이메일 :', sessionStorage.getItem('email'));
                })
                .catch(error => {
                    console.error('세션 토큰 확인불가', error);
                    navigate('/signIn'); // 실패 시 로그인 페이지로 이동
                });
        }
    }, []);

    const deleteMember = () => {
        if (window.confirm('정말 탈퇴하시겠습니까?')) {
            const sessionToken = sessionStorage.getItem('sessionToken');
            const email = sessionStorage.getItem('email');
            axios
                .post(
                    'http://localhost:5001/myPage', // 탈퇴 처리 라우트
                    { action: 'deleteMember', email },
                    {
                        headers: { Authorization: sessionToken },
                    }
                )
                .then(() => {
                    alert('회원 탈퇴가 완료되었습니다.');
                    sessionStorage.clear(); // 세션 정리
                    navigate('/');
                })
                .catch(error => {
                    console.error('회원 탈퇴 실패', error);
                    alert('회원 탈퇴 중 문제가 발생했습니다. 다시 시도해 주세요.');
                });
        }
    };

    // 날짜 포맷팅 함수
    const formatDate = dateString => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    return (
        <main>
            <div className={styles.sectionContainer}>
                <div className={styles.sectionBox}>
                    {/* 섹션 1: 나의 정보 */}
                    <div className={styles.sectionHeader}>
                        나의 정보
                        <div>
                            <Link to="/myPage/myinfoEdit" className={styles.a1}>
                                정보 수정하기
                            </Link>
                            <button onClick={deleteMember} className={styles.deleteMember}>
                                회원 탈퇴
                            </button>
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        {/* 불러온 사용자 정보가 있으면 */}
                        {userInfo ? (
                            <>
                                <p>이름 : {userInfo.customer_name}</p>
                                <p>이메일 : {userInfo.email}</p>
                                <p>연락처 : {userInfo.contact_number}</p>
                                <p>가입일 : {formatDate(userInfo.join_date)}</p>
                                <p>개인정보 수집 동의: {userInfo.optional_agree === 1 ? '동의' : '동의 안함'}</p>
                            </>
                        ) : (
                            <p>사용자 정보 없음</p>
                        )}
                    </div>
                </div>
                <div className={styles.sectionBox}>
                    {/* 섹션 2: 주문 내역 */}
                    <div className={styles.sectionHeader}>
                        주문 내역
                        <div>
                            <Link to="/myPage/viewOrders" className={styles.a1}>
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
