import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/mypage/SignIn.module.scss';

function SignIn() {
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
                            <form action="/logOn">
                                <input type="text" className={styles.email} placeholder="*이메일" />
                                <input type="password" className={styles.pw} placeholder="*비밀번호" />
                                <div className={styles.pwIcon}>
                                    <img className={styles.crossed} src="/imgs//sign/pwIcon_cross.svg" alt="" />
                                    <img className={styles.notCrossed} src="/imgs//sign/pwIcon.svg" alt="" />
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
