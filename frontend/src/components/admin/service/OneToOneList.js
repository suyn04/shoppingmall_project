import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../../scss/admin/AdminList.module.scss';

const bkURL = process.env.REACT_APP_BACK_URL;

const OneToOneList = () => {
    const [onetoone, setOnetoone] = useState([]);
    const navigate = useNavigate();

    // 서버에서 데이터를 가져오는 함수
    const fetchOnetoone = async () => {
        try {
            const response = await axios.get(`${bkURL}/onetoone`);
            console.log('API 응답 데이터:', response.data); // 데이터 구조 확인
            setOnetoone(response.data.inquiries); // 서버에서 받은 데이터를 onetoone에 저장
        } catch (error) {
            console.error('Error fetching onetoone:', error);
        }
    };

    useEffect(() => {
        fetchOnetoone(); // 처음에 데이터를 가져옴
    }, []); // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행

    const handleDetailClick = (id) => {
        navigate(`/admin/onetoone/detail/${id}`); // 상세보기 페이지로 이동 (절대 경로)
    };

    return (
        <div className={styles.list}>

            <table>
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자 이메일</td>
                    <td>처리 상태</td>
                    <td>상세보기</td>
                </tr>

                {Array.isArray(onetoone) && onetoone.length > 0 ? (
                    onetoone.map((item) => (
                        <tr key={item.post_no}>
                            <td>{item.post_no}</td>
                            <td>{item.post_title}</td>
                            <td>{item.email}</td>
                            <td>{item.reply_status}</td>
                            <td>
                                <button className={styles.changebutton} onClick={() => handleDetailClick(item.post_no)}>
                                    상세보기
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">문의 목록이 없습니다.</td>
                    </tr>
                )}
            </table>
        </div>
    );
};
export default OneToOneList;
