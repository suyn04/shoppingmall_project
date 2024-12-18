import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
        requiredAgree: true,
        optionalAgree: false,
    });
    const [emailChkFinish, setemailChkFinish] = useState(false); // 중복 확인 여부 상태
    const [editChk, seteditChk] = useState(false); //readOnly 초기값 false

    const handleChange = async e => {
        //각 요소 이름, 값, 종류, 체크여부 데이터 저장(폼데이터 바꾸기)
        const { name, value, type, checked } = e.target;
        // requiredAgree 체크박스는 항상 true 유지
        if (name === 'requiredAgree') {
            setFormData(prev => ({
                ...prev,
                [name]: true, // 항상 true로 강제 설정
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const emailChk = async () => {
        const { email } = formData;

        try {
            const res = await axios.get('http://localhost:5001/signUp/checkEmail', {
                params: { email }, // GET 요청에서 데이터를 전달할 때는 params 사용
            });
            console.log('Axios 요청 전송:', { email });

            if (res.data.exists) {
                setFormData(prev => ({
                    ...prev,
                    email: '',
                }));
                setemailChkFinish(false); // 중복 확인 실패 시 false로 설정
                alert('이미 사용 중인 이메일입니다. 다시 입력해주세요.');
            } else {
                setemailChkFinish(true);
                seteditChk(true);
                alert('사용 가능한 이메일입니다.');
            }
        } catch (err) {
            console.error('이메일 확인 오류:', err);
            alert('서버와 통신 중 오류가 발생했습니다.');
        }
    };

    // 회원가입 요청 처리 함수
    const handleSubmit = async e => {
        e.preventDefault(); // 기본 동작 방지

        const { name, email, phone, password, password2, requiredAgree } = formData;

        // 유효성 검사
        if (!/^[가-힣]{2,5}$/.test(name)) {
            alert('이름을 정확히 입력해주세요.');
            return;
        }
        if (!/^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            alert('유효한 이메일을 입력해주세요.');
            return;
        }
        // 이메일 중복확인을 안했을 경우
        if (!emailChkFinish) {
            alert('이메일 중복 확인을 완료해주세요.');
            return;
        }
        if (!/^01[0-9]-\d{3,4}-\d{4}$/.test(phone)) {
            alert('연락처를 정확히 입력해주세요.');
            return;
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/.test(password)) {
            alert('비밀번호를 정확히 입력해주세요.');
            return;
        }
        if (!requiredAgree) {
            alert('필수 이용약관에 동의하셔야 합니다.');
            return;
        }
        if (!name || !email || !phone || !password || !password2) {
            alert('모든 필수 입력값을 작성해주셔야 합니다.');
            return;
        }
        if (password !== password2) {
            alert('입력하신 비밀번호가 서로 일치하지 않습니다.');
            return;
        }

        console.log(formData);

        try {
            const customerData = { ...formData, requiredAgree: 1 };
            //고객데이터를 저장 : 기존 폼데이터 불러오고 필수동의약관은 항상 1 값으로 저장

            // 회원가입 요청을 서버로 전송
            const res = await axios.post('http://localhost:5001/signUp/', customerData);

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
            <div className={styles.wrap}>
                <div className={styles.joinContainer}>
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
                                    <img src="/imgs/sign/naver.png" alt="네이버" />
                                </a>
                            </div>
                        </div>
                        <div className={styles.or}>또는</div>

                        <form className={styles.inform}>
                            <input type="text" name="name" placeholder="*이름" className={styles.input} required onChange={handleChange} />
                            <input type="email" name="email" placeholder="*이메일" className={styles.input} required value={formData.email} onChange={handleChange} readOnly={editChk} />
                            <button className={styles.chkbtn} onClick={emailChk}>
                                이메일 중복확인
                            </button>
                            <input type="text" name="phone" placeholder="*핸드폰 번호 (하이픈(-)포함하여 기재해주세요.)" className={styles.input} required onChange={handleChange} />
                            <input type="password" name="password" placeholder="*비밀번호 (영문대소문자, 숫자, 특수기호 (!,@,#,$,%,~) 필수 12-16자)" className={styles.input} required onChange={handleChange} />
                            <input type="password" name="password2" placeholder="*비밀번호확인 (영문대소문자, 숫자, 특수기호 (!,@,#,$,%,~) 필수 12-16자)" className={styles.input} required onChange={handleChange} />

                            <select name="gender" onChange={handleChange} className={styles.gender}>
                                <option value="">성별 (선택)</option>
                                <option value="남자">남자</option>
                                <option value="여자">여자</option>
                            </select>

                            <div class="dateInputWrapper">
                                <input type="date" name="birthdate" onChange={handleChange} />
                            </div>

                            <div className={styles.checkboxgroup}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="requiredAgree"
                                        className={styles.chk1}
                                        checked={formData.requiredAgree} // 상태를 항상 유지
                                        onChange={() => {}} // 변경 방지 (비활성화)
                                    />
                                    [필수] 이용 약관에 동의하고, 본인은 만 14세 이상입니다.
                                </label>
                                <label>
                                    <input type="checkbox" name="optionalAgree" className={styles.chk2} onChange={handleChange} />
                                    [선택] 마케팅 및 홍보 목적의 개인정보 수집에 동의합니다.
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
        </div>
    );
}

export default SignUp;
