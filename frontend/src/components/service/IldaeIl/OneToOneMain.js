import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../../scss/service/IldaeIl/OneToOneMain.module.scss";



const OneToOneMain = () => {
    const navigate = useNavigate();

    // 더미 데이터: 문의 내역 (나중에 API를 연결하면 여기에 데이터가 올 예정)
    const [inquiries, setInquiries] = useState([
        // 예시: 문의 내역이 있을 경우 더미 데이터
        // { id: 1, title: '배송이 늦어졌어요', date: '2024-12-01', status: '답변 완료' },
        // { id: 2, title: '제품 불량 문의', date: '2024-12-05', status: '답변 대기' },
    ]);

    // 작성하기 버튼 클릭 시 문의 작성 페이지로 이동
    const handleCreateInquiry = () => {
        navigate('/onetoone/create'); // 문의 작성 페이지 경로로 이동
    };

    return (
        <div>
            <h2>1:1 문의</h2>

            {inquiries.length === 0 ? (
                <div>
                    <p>작성된 1:1 문의가 없습니다.</p>
                    <button className={styles.createButton} onClick={handleCreateInquiry}>작성하기</button>
                </div>
            ) : (
                <div>
                    <ul>
                        {inquiries.map((inquiry) => (
                            <li key={inquiry.id}>
                                <strong>{inquiry.title}</strong> - {inquiry.date} [{inquiry.status}]
                            </li>
                        ))}
                    </ul>
                    <button className={styles.createButton} onClick={handleCreateInquiry}>
                        작성하기
                    </button>
                </div>
            )}
        </div>
    );
};

export default OneToOneMain;