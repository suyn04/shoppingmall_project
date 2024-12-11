import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../scss/service/IldaeIl/OneToOne.scss';
import axios from 'axios';

const OneToOne = () => {
    // 폼 데이터 상태 관리
    const [formData, setFormData] = useState({
        category: '', // 문의 유형
        title: '', // 제목
        content: '', // 내용
        file: null, // 첨부 파일
    });

    const [userInfo, setUserInfo] = useState();
    const navigate = useNavigate();
    const email = sessionStorage.getItem('email');

    if (!email) {
        navigate('/signIn');
    }

    useEffect(() => {
        const sessionToken = sessionStorage.getItem('sessionToken');

        if (!sessionToken) {
            navigate('/signIn');
        } else {
            axios
                .post('http://localhost:5001/myPage', { email }, { headers: { Authorization: sessionToken } })
                .then(response => {
                    setUserInfo(response.data);
                })
                .catch(error => {
                    console.error('세션 토큰 확인불가', error);
                    navigate('/signIn');
                });
        }
    }, [navigate, email]);

    // 로딩 메시지
    if (!userInfo) {
        return <p>로딩 중...</p>;
    }

    // 입력값 변경 핸들러
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 파일 업로드 핸들러
    const handleFileChange = e => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    // 폼 제출 핸들러
    const handleSubmit = async e => {
        e.preventDefault();

        // FormData 생성
        const data = new FormData();
        data.append('post_category', formData.category);
        data.append('email', userInfo.email);
        data.append('post_title', formData.title);
        data.append('post_detail', formData.content);

        if (formData.file) {
            data.append('file', formData.file); // 파일 추가
        }

        try {
            const response = await axios.post('http://localhost:5001/onetoone', data);
            if (response.status === 201) {
                alert('문의가 접수되었습니다!');
                navigate('/onetoonelist');
            }
        } catch (err) {
            console.error('서버 오류 발생:', err);
            alert('문의 등록에 실패했습니다.');
        }
    };

    // 취소 버튼 핸들러
    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div>
            <h2>1:1 문의</h2>
            <div className="gray">※ 문의하신 사항은 성실하게 답변 드리겠습니다. 문의하시기 전에 FAQ를 참고 해주세요.</div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
                <div>
                    <span>
                        작성자: {userInfo.customer_name} ({userInfo.email})
                    </span>
                </div>

                {/* 문의 유형 선택 */}
                <div>
                    <label htmlFor="category">
                        문의 유형 <span className="red">*</span>
                    </label>
                    <select name="category" id="category" value={formData.category} onChange={handleChange}>
                        <option value="">선택하세요</option>
                        <option value="information">회원정보</option>
                        <option value="order">주문/배송</option>
                        <option value="refund">반품/환불</option>
                        <option value="product">제품 문의</option>
                        <option value="etc">기타</option>
                    </select>
                </div>

                {/* 제목 입력 */}
                <div>
                    <label htmlFor="title">
                        제목 <span className="red">*</span>
                    </label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="제목을 입력하세요" />
                </div>

                {/* 내용 입력 */}
                <div>
                    <label htmlFor="content">
                        문의 내용 <span className="red">*</span>
                    </label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} placeholder="문의 내용을 입력하세요" />
                </div>

                {/* 파일 첨부 */}
                <div>
                    <label htmlFor="file">파일 첨부</label>
                    <input type="file" id="file" name="file" onChange={handleFileChange} />
                </div>

                {/* 버튼 그룹 */}
                <div className="button-group">
                    <button type="submit">문의 접수</button>
                    <button type="button" onClick={handleCancel} className="cbutton">
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OneToOne;
