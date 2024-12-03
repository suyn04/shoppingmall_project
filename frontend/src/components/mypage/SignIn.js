import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/SignIn.module.scss';

function SignIn() {
    const [email, setEmail] = useState(''); // 이메일 입력값 상태
    const [password, setPassword] = useState(''); // 비밀번호 입력값 상태
    const navigate = useNavigate();

    // 로그인 요청 처리 함수
    const handleSubmit = async e => {
        e.preventDefault(); // 기본 동작 방지

        // 이메일과 비밀번호 공란이면 얼럿
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
        }

        try {
            // 로그인 요청을 서버로 전송
            const res = await fetch('http://localhost:5001/signIn/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }), //email이랑 password를 서버에 전달해야함
            });

            const result = await res.json();

            if (res.ok) {
                // 서버 응답이 오면
                sessionStorage.setItem('sessionToken', 'mockSessionToken'); // 세션 토큰을 프론트엔드에서 생성 및 저장
                sessionStorage.setItem('email', email); // 이메일 저장
                alert('로그인 성공');
                navigate('/'); // 마이페이지로 이동
            } else {
                // 서버 응답이 실패 상태면
                alert(`${result.message}`);
            }
        } catch (err) {
            // 네트워크 오류 또는 서버 오류 처리
            console.error('로그인 요청 오류:', err);
            alert('서버 문제 발생');
        }
    };

    return (
        <div className={styles.wrapper}>
            <section>
                <div className={styles.wrap}>
                    <div>
                        <div className={styles.topBtn}>
                            <button className={styles.signIn}>
                                <Link to="/signIn">로그인</Link>
                            </button>
                            <button className={styles.signUp}>
                                <Link to="/signUp">계정 생성하기</Link>
                            </button>
                        </div>
                        <div className={styles.bottomCnt}>
                            <div>
                                <div className={styles.kakao}>
                                    <a href="#">
                                        <img src="/imgs/sign/kakao.svg" alt="카카오" />
                                    </a>
                                </div>
                                <div className={styles.naver}>
                                    <a href="#">
                                        <img src="/imgs/sign/naver.svg" alt="네이버" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.or}>또는</div>
                            <form onSubmit={handleSubmit} className={styles.loginForm}>
                                <input
                                    type="text"
                                    className={styles.email}
                                    placeholder="*이메일"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} // 이메일 입력값 업데이트
                                />
                                <input
                                    type="password"
                                    className={styles.pw}
                                    placeholder="*비밀번호"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} // 비밀번호 입력값 업데이트
                                />
                                <div className={styles.pwIcon}>
                                    <img className={styles.crossed} src="/imgs/sign/pwIcon_cross.svg" alt="" />
                                    <img className={styles.notCrossed} src="/imgs/sign/pwIcon.svg" alt="" />
                                </div>
                                <div className={styles.pwfind}>
                                    <Link to="/pwRequest">비밀번호 찾기</Link>
                                </div>
                                <button type="submit" className={styles.login}>
                                    로그인
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignIn;
