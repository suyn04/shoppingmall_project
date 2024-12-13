import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/mypage/SignIn.module.scss";
import axios from "axios";

function SignIn() {
    const [email, setEmail] = useState(""); // 이건 input에 있는 email value
    const [password, setPassword] = useState(""); // 비밀번호 입력값 상태
    const navigate = useNavigate();

    // 로그인 요청 처리 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 동작 방지

        // 이메일과 비밀번호 공란이면 얼럿
        if (!email || !password) {
            alert("이메일과 비밀번호를 입력해주세요.");
            return;
        }

        try {
            // 로그인 요청을 서버로 전송
            const res = await axios.post("http://localhost:5001/signIn/", {
                email,
                password,
            });

            if (res.data.error) {
                // 서버에서 반환된 에러 메시지 처리
                alert(res.data.error); //에러일 경우 데이터 확인 전 얼럿
                return;
            }

            // 서버 응답에서 데이터 추출
            const {
                sessionToken,
                email: returnedEmail,
                customer_name,
            } = res.data;
            if (!sessionToken || !returnedEmail || !customer_name) {
                //세션토큰이 없거나, 이메일이나 이름이 없는 경우라면
                alert("로그인에 실패하였습니다.");
                return;
            }

            // 성공 메시지
            alert(`${customer_name}님 로그인되었습니다.`);

            // 세션 저장
            sessionStorage.setItem("sessionToken", sessionToken); // 세션 토큰 저장
            sessionStorage.setItem("email", returnedEmail); // 이메일 저장
            sessionStorage.setItem("customerName", customer_name); // 고객 이름 저장

            // 홈으로 이동
            if (email === "admin@jomalone.kr" && customer_name === "관리자") {
                console.log("관리자 계정으로 확인됨");
                // location.href = "/admin";
            } else {
                console.log("일반 고객 계정으로 확인됨");
                // location.href = '/';
            }
        } catch (err) {
            console.error("로그인 요청 오류 :", err);
            alert("정확한 정보를 입력해주세요.");
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
                                    <Link to="#">
                                        <img
                                            src="/imgs/sign/kakao.svg"
                                            alt="카카오"
                                        />
                                    </Link>
                                </div>
                                <div className={styles.naver}>
                                    <Link to="#">
                                        <img
                                            src="/imgs/sign/naver.svg"
                                            alt="네이버"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.or}>또는</div>
                            <form
                                onSubmit={handleSubmit}
                                className={styles.loginForm}
                            >
                                <input
                                    type="text"
                                    className={styles.email}
                                    placeholder="*이메일"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // 이메일 입력값 업데이트
                                />
                                <input
                                    type="password"
                                    className={styles.pw}
                                    placeholder="*비밀번호"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    } // 비밀번호 입력값 업데이트
                                />
                                <div className={styles.pwIcon}>
                                    <img
                                        className={styles.crossed}
                                        src="/imgs/sign/pwIcon_cross.svg"
                                        alt=""
                                    />
                                    <img
                                        className={styles.notCrossed}
                                        src="/imgs/sign/pwIcon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.pwfind}>
                                    <Link to="/findPw">비밀번호 찾기</Link>
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
