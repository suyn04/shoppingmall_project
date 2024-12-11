import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../scss/service/IldaeIl/OneToOne.scss";
import axios from "axios";

const OneToOne = () => {
    //폼 데이터 상태 관리
    const [formData, setFormData] = useState({
        category: "", // 문의 유형
        title: "", // 제목
        content: "", // 내용
        file: null, // 첨부 파일
    });

    const navigate = useNavigate();
    const email = sessionStorage.getItem("email");
    const customerName = sessionStorage.getItem("customerName")

    console.log("customerName:",customerName)

    if (!email) {
        navigate("/signIn");
    }

    //입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //파일 업로드 핸들러
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 동작(페이지 새로고침) 방지

        // 서버로 보낼 데이터 준비
        const data = {
            post_category: formData.category, // 문의 유형
            email: email, //email
            post_title: formData.title, // 제목
            post_detail: formData.content, // 내용
        };

        try {
            const response = await fetch("http://localhost:5001/onetoone", {
                // 백엔드 주소와 정확히 일치
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // 데이터를 JSON으로 변환하여 보냄
            });
            const result = await response.json();
            if (response.ok) {
                alert("문의가 접수되었습니다!");
                console.log("등록된 데이터:", result);
                //navigate(-1); // 이전 페이지로 이동

                navigate("/onetoonelist"); // 목록 페이지로 이동
            } else {
                alert(`문의 등록 실패: ${result.error}`);
            }
        } catch (err) {
            console.error("서버 오류 발생:", err);
            alert("서버와 연결할 수 없습니다.");
        }
    };

    // 취소 버튼 클릭 핸들러
    const handleCancel = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div>
            <h2>1:1 문의</h2>
            <div className="gray">
                ※ 문의하신 사항은 성실하게 답변 드리겠습니다. 문의하시기 전에
                FAQ를 참고 해주세요.
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
                {/* 회원 아이디 */}
                {/* <div>
                    <label htmlFor="userid">회원 아이디</label>
                    <input
                        type="text"
                        id="userid"
                        value={formData.userid}
                        onChange={handleChange}
                        placeholder='아이디를 입력하세요'
                        />
                </div> */}

                <div>
                    <span>
                        작성자: {customerName}({email})
                    </span>
                </div>

                {/* 문의 유형 선택 */}
                <div>
                    <label htmlFor="category">
                        문의 유형 <span className="red">*</span>
                    </label>
                    <select
                        name="category"
                        id="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
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
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="제목을 입력하세요"
                    />
                </div>
                {/* 내용 입력 */}
                <div>
                    <label htmlFor="content">
                        문의 내용 <span className="red">*</span>
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="문의 내용을 입력하세요"
                    />
                    <p className="gray">
                        ※ 개인정보 보호를 위해 이메일, 주소, 휴대폰 번호 등의
                        개인정보 입력은 지양하여 주시기 바랍니다.
                    </p>
                </div>

                {/* 파일 첨부 */}
                <div>
                    <label htmlFor="file">파일 첨부</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                    <p className="red">※ 10MB 미만의 파일 4개까지 첨부 가능</p>
                </div>

                {/* 버튼 그룹 */}
                <div className="button-group">
                    <button type="submit">문의 접수</button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="cbutton"
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OneToOne;
