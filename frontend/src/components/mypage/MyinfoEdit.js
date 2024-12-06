import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../scss/mypage/MyinfoEdit.module.scss';
import axios from 'axios';

const MyinfoEdit = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null); // 사용자 정보

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('sessionToken');

        if (!sessionToken) {
            navigate('/signIn'); // 세션 토큰 없으면 로그인 페이지로 이동
        } else {
            // Axios로 사용자 정보 가져오기
            axios
                .post(
                    'http://localhost:5001/myPage', //index.js의 라우트경로랑 일치시킴
                    { email: sessionStorage.getItem('email') }, // 요청 본문
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
    }, [navigate]);

    // userInfo가 null일 때 로딩 메시지 표시
    if (!userInfo) {
        return <p>로딩 중...</p>;
    }

    return (
        <main>
            {/* 상단 제목 및 안내 */}
            <p className={styles.infomessage}>
                회원가입이 완료되었습니다.
                <br />
                추가 선택 정보를 기입하시려면 아래 배송지 및 생일 등 선택 정보를 업데이트 하여 주십시오.
            </p>

            <div className={styles.block}>
                {/* 개인정보 관리 */}
                <h3>개인정보 관리</h3>
                <div className={styles.requiredinfo}>*는 필수 입력 정보입니다</div>

                <fieldset className={styles.infoinput}>
                    <div className={styles.inputgroup}>
                        <label>*이름</label>
                        <input defaultValue={userInfo.customer_name} className={styles.inputname} readOnly />

                        <label>*이메일</label>
                        <input defaultValue={userInfo.email} className={styles.inputemail} readOnly />

                        <label>*휴대전화 번호</label>
                        <div>
                            <input defaultValue={userInfo.contact_number} className={styles.inputphone} />
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className={styles.block}>
                {/* 뉴스레터 정보 */}
                <div className={styles.newsletter}>
                    <h4>조 말론 런던 뉴스레터</h4>
                    <p>온라인 부티크 뉴스레터 및 문자 수신에 동의하시면 조 말론 런던의 신제품 선출시 소식과 이벤트, 혜택 등 다양한 최신 정보를 받아보실 수 있습니다.</p>
                </div>

                <fieldset className={styles.newslettersettings}>
                    <div className={styles.checkboxgroup}>
                        <label>뉴스레터 수신여부</label>
                        <input type="checkbox" />
                        <span>수신함</span>
                        <input type="checkbox" defaultChecked />
                        <span>수신안함</span>
                    </div>
                    <div className={styles.checkboxgroup}>
                        <label>MMS 수신여부</label>
                        <input type="checkbox" />
                        <span>수신함</span>
                        <input type="checkbox" defaultChecked />
                        <span>수신안함</span>
                    </div>
                    <div className={styles.checkboxgroup}>
                        <label>DM 수신여부</label>
                        <input type="checkbox" />
                        <span>수신함</span>
                        <input type="checkbox" defaultChecked />
                        <span>수신안함</span>
                    </div>
                </fieldset>
            </div>
            <div className={styles.block}>
                {/* 추가 정보 */}
                <div className={styles.additionalinfo}>
                    <h4>추가정보(선택)</h4>
                    <p>고객님의 생일은 언제입니까?</p>
                    <div className={styles.birthinputgroup}>
                        <input type="date" value={userInfo.birthdate} className={styles.birthinput} />
                    </div>
                    <div className={styles.gender}>
                        <label>성별</label>
                        <input type="radio" name="gender" defaultChecked />
                        <span>남</span>
                        <input type="radio" name="gender" />
                        <span>여</span>
                    </div>
                </div>
            </div>

            {/* 확인 버튼 */}
            <button className={styles.btnsubmit}>확인</button>
        </main>
    );
};

export default MyinfoEdit;
