import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../../scss/service/IldaeIl/OneToOne.module.scss';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const OneToOne = () => {
    // 폼 데이터 상태 관리
    const [formData, setFormData] = useState({
        category: '', // 문의 유형
        title: '', // 제목
        content: '', // 내용
        file: null, // 첨부 파일
    });

    // 에러 상태 관리
    const [categoryError, setCategoryError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    const navigate = useNavigate();
    const email = sessionStorage.getItem('email');
    const customerName = sessionStorage.getItem('customerName');

    if (!email) {
        navigate('/signIn');
    }

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 파일 업로드 핸들러
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;

        // 문의 유형 유효성 검사
        if (!formData.category) {
            setCategoryError('문의 유형을 선택해 주세요.');
            isValid = false;
        } else {
            setCategoryError('');
        }

        // 제목 유효성 검사 (2~50자)
        const titleRegex = /^.{2,50}$/;
        if (!titleRegex.test(formData.title.trim())) {
            setTitleError('제목은 2~50자 이내로 입력해 주세요.');
            isValid = false;
        } else {
            setTitleError('');
        }

        // 문의 내용 유효성 검사 (10~1000자)
        const contentRegex = /^.{10,1000}$/;
        if (!contentRegex.test(formData.content.trim())) {
            setContentError('문의 내용은 10~1000자 이내로 입력해 주세요.');
            isValid = false;
        } else {
            setContentError('');
        }

        if (!isValid) return;

        // FormData 객체 생성
        const data = new FormData();
        data.append('post_category', formData.category);
        data.append('email', email);
        data.append('post_title', formData.title);
        data.append('post_detail', formData.content);
        if (formData.file) {
            data.append('one_upload_file', formData.file);
        }

        try {
            const response = await axios.post('${bkURL}/onetoone/register', data);
            if (response.status === 201) {
                alert('문의가 접수되었습니다!');
                navigate('/onetoonelist');
            } else {
                alert(`문의 등록 실패: ${response.data.error}`);
            }
        } catch (err) {
            console.error('서버 오류 발생:', err);
            if (err.response) {
                alert(`문의 등록 실패: ${err.response.data.error}`);
            } else {
                alert('서버와 연결할 수 없습니다.');
            }
        }
    };

    // 취소 버튼 클릭 핸들러
    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className={styles.one}>
            <div className={styles.onetitle}>1:1 문의</div>
            <div className={styles.gray}>
                ※ 문의하신 사항은 성실하게 답변 드리겠습니다. 문의하시기 전에 FAQ를 참고 해주세요.
            </div>

            <form className={styles.inquiryForm} onSubmit={handleSubmit}>
                <div>
                    <span>
                        작성자: {customerName} ({email})
                    </span>
                </div>

                {/* 문의 유형 선택 */}
                <div>
                    <label htmlFor="category">
                        문의 유형 <span className={styles.red}>*</span>
                    </label>
                    <select name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value="">선택하세요</option>
                        <option value="information">회원정보</option>
                        <option value="order">주문/배송</option>
                        <option value="refund">반품/환불</option>
                        <option value="product">제품 문의</option>
                        <option value="etc">기타</option>
                    </select>
                    {categoryError && <p style={{ color: 'red' }}>{categoryError}</p>}
                </div>

                {/* 제목 입력 */}
                <div>
                    <label htmlFor="title">
                        제목 <span className={styles.red}>*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="제목을 입력하세요"
                    />
                    {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
                </div>

                {/* 내용 입력 */}
                <div>
                    <label htmlFor="content">
                        문의 내용 <span className={styles.red}>*</span>
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder={
                            formData.category === 'refund' ? '주문번호를 입력하세요' : '문의 내용을 입력하세요'
                        }
                    />
                    {contentError && <p style={{ color: 'red' }}>{contentError}</p>}
                    <p className={styles.gray}>
                        ※ 개인정보 보호를 위해 이메일, 주소, 휴대폰 번호 등의 개인정보 입력은 지양하여 주시기 바랍니다.
                    </p>
                </div>

                {/* 파일 첨부 */}
                <div>
                    <label htmlFor="file">파일 첨부</label>
                    <input type="file" id="file" name="file" onChange={handleFileChange} />
                </div>

                {/* 버튼 그룹 */}
                <div className={styles.buttonGroup}>
                    <button type="submit">문의 접수</button>
                    <button type="button" onClick={handleCancel} className={styles.cbutton}>
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OneToOne;
