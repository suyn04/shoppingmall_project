import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/SignUp.module.scss';
import axios from 'axios';

function SignUp() {
    const navigator = useNavigate();
    const [formData, setFormData] = useState({
        //초기 폼데이터 세팅값
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        requiredAgree: false,
        optionalAgree: false,
    });

    const handleChange = e => {
        //각 요소 이름, 값, 종류, 체크여부 데이터 저장(폼데이터 바꾸기)
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        })); //각 요소가 체크박스고 true면 체크표시 그게 아니면 값을 저장
    };

    // 회원가입 요청 처리 함수
    const handleSubmit = async e => {
        e.preventDefault(); // 기본 동작 방지
        console.log(formData);

        try {
            // 회원가입 요청을 서버로 전송
            const res = await axios.post('http://localhost:5001/signUp/', formData);

            // 서버 응답이 성공일 경우
            alert('회원가입 성공');
            navigator('/'); // 홈으로 이동
        } catch (err) {
            // 서버 오류 또는 네트워크 오류 처리
            if (err.res) {
                // 서버에서 오류 응답을 보낸 경우
                console.error('회원가입 실패:', err.res.data.message);
                alert(err.res.data.message);
            } else {
                // 네트워크 오류 또는 기타 문제
                console.error('회원가입 요청 오류:', err);
                alert('서버 문제 발생');
            }
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

                            <form className={styles.inform}>
                                <input type="text" name="name" placeholder="*이름" className={styles.input} required onChange={handleChange} />
                                <input type="email" name="email" placeholder="*이메일" className={styles.input} required onChange={handleChange} />
                                <input type="text" name="phone" placeholder="*핸드폰 번호" className={styles.input} required onChange={handleChange} />
                                <input type="password" name="password" placeholder="*비밀번호" className={styles.input} required onChange={handleChange} />

                                <select name="gender" onChange={handleChange} className={styles.input}>
                                    <option value="">성별 (선택)</option>
                                    <option value="남자">남자</option>
                                    <option value="여자">여자</option>
                                </select>

                                <input type="date" name="birthdate" onChange={handleChange} />

                                <div className={styles.checkboxgroup}>
                                    <label>
                                        <input type="checkbox" name="requiredAgree" className={styles.chk1} required onChange={handleChange} /> [필수] 이용 약관에 동의하고, 본인은 만 14세 이상입니다.
                                    </label>
                                    <label>
                                        <input type="checkbox" name="optionalAgree" className={styles.chk2} onChange={handleChange} /> [선택] 마케팅 및 홍보 목적의 개인정보 수집에 동의합니다.
                                    </label>
                                </div>

                                <p className={styles.marketing}>
                                    마케팅 수신 및 홍보 목적의 개인정보 수집 및 이용에 미동의 시,
                                    <br />
                                    마케팅 목적의 소식 및 특별 혜택 정보를 받아 보실 수 없습니다.
                                </p>

                                <button type="submit" className={styles.join} onClick={handleSubmit}>
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
