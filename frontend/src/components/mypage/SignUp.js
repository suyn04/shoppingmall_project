import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/mypage/SignUp.module.scss';

function SignUp() {
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

                            <form className={styles.inform}>
                                <input type="text" placeholder="*이름" className={styles.input} required />
                                <input type="email" placeholder="*이메일" className={styles.input} required />
                                <input type="text" placeholder="*핸드폰 번호" className={styles.input} required />
                                <input type="password" placeholder="*비밀번호" className={styles.input} required />

                                <select>
                                    <option>성별 (선택)</option>
                                    <option>남자</option>
                                    <option>여자</option>
                                </select>

                                <div className={styles.birthdaygroup}>
                                    <input type="text" placeholder="년" className={styles.birth} />
                                    <input type="text" placeholder="월" className={styles.birth} />
                                    <input type="text" placeholder="일" className={styles.birth} />
                                </div>

                                <div className={styles.checkboxgroup}>
                                    <label>
                                        <input type="checkbox" className={styles.chk1} required /> [필수] 이용 약관에 동의하고, 본인은 만 14세 이상입니다.
                                    </label>
                                    <label>
                                        <input type="checkbox" className={styles.chk2} /> [선택] 마케팅 및 홍보 목적의 개인정보 수집에 동의합니다.
                                    </label>
                                </div>

                                <p className={styles.marketing}>
                                    마케팅 수신 및 홍보 목적의 개인정보 수집 및 이용에 미동의 시,
                                    <br />
                                    마케팅 목적의 소식 및 특별 혜택 정보를 받아 보실 수 없습니다.
                                </p>

                                <button type="submit" className={styles.join}>
                                    계정 생성하기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
