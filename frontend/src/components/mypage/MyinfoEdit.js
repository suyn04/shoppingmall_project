import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                    'http://localhost:5001/myPage/myinfoEdit', //index.js의 라우트경로랑 일치시킴
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                        <input type="text" defaultValue={userInfo.customer_name} className={styles.inputname} />

                        <label>*이메일 주소</label>
                        <input type="text" defaultValue={userInfo.email} className={styles.inputemail} />
                    </div>

                    {/* 비밀번호 재설정 모달 */}
                    {isModalOpen && (
                        <div className={styles.modal}>
                            <div className={styles.modalcontent}>
                                <div className={styles.modalheader}>
                                    <span>비밀번호를 변경해주세요</span>
                                    <button className={styles.modalclose} onClick={closeModal}>
                                        &times;
                                    </button>
                                </div>
                                <div className={styles.modalbody}>
                                    <input type="password" placeholder="현재 비밀번호" className={styles.modalinput} />
                                    <input type="password" placeholder="새로운 비밀번호" className={styles.modalinput} />
                                    <input type="password" placeholder="비밀번호 재확인" className={styles.modalinput} />
                                </div>
                                <div className={styles.modalfooter}>
                                    <button className={styles.modalcancel} onClick={closeModal}>
                                        취소
                                    </button>
                                    <button className={styles.modalconfirm}>확인</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <button className={styles.btnopenmodal} onClick={openModal}>
                        비밀번호 재설정
                    </button>
                </fieldset>
            </div>
            <div className={styles.block}>
                {/* 휴대전화 번호 */}
                <div className={styles.phonenumber}>
                    <label>*휴대전화 번호</label>
                    <div className={styles.phoneinputgroup}>
                        <select className={styles.phoneselect}>
                            <option value="010">010</option>
                        </select>
                        <span></span>
                        <input type="text" defaultValue="5796" className={styles.phoneinput} />
                        <span></span>
                        <input type="text" defaultValue="6269" className={styles.phoneinput} />
                        <button className={styles.btnrequestcode}>인증번호 요청</button>
                    </div>
                    <div className={styles.authcode}>
                        <input type="text" placeholder="인증번호" readOnly className={styles.authcodeinput} />
                        <button className={styles.btnconfirmcode}>확인</button>
                    </div>
                </div>
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
                        <input type="text" placeholder="년" defaultValue="1998" className={styles.birthinput} />
                        <input type="text" placeholder="월" defaultValue="02" className={styles.birthinput} />
                        <input type="text" placeholder="일" defaultValue="09" className={styles.birthinput} />
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

            <div className={styles.block}>
                {/* 연동 서비스 관리 */}
                <div className={styles.sociallinks}>
                    <h4>연동 서비스 관리</h4>
                    <p>더 빠르고 쉬운 로그인 방법이 필요하십니까?</p>
                    <p>소셜 계정 연결 기억해야 할 암호가 하나 적습니다! 페이지에 아무 것도 자동으로 게시해도 걱정하지 마십시오.</p>
                    <div className={styles.social}>
                        <div>
                            <img src="/imgs/kakao.svg" alt="Kakao" />
                            <button className={styles.btndisconnect}>연결 해제</button>
                        </div>
                        <div>
                            <img src="/imgs/naver.svg" alt="Naver" />
                            <button className={styles.btndisconnect}>연결 해제</button>
                        </div>
                    </div>
                    <p>
                        계정 병합과 같은 연결된 계정에 대한 지원이 필요하면 24/7 (16443753)으로 문의하거나{' '}
                        <Link to="/contact" className="a1">
                            이메일
                        </Link>
                        을 보내주십시오.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MyinfoEdit;
