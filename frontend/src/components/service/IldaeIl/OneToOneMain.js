import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../../scss/service/IldaeIl/OneToOneMain.module.scss";
import axios from 'axios';

const OneToOneMain = () => {
    const navigate = useNavigate();
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    // 문의 목록을 가져오는 함수
    const fetchInquiries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/onetoone');
            setInquiries(response.data.inquiries);
        } catch (error) {
            console.error("문의 목록 가져오기 실패:", error);
        } finally {
            setLoading(false);
        }
    };

    // 컴포넌트가 마운트될 때 API 호출
    useEffect(() => {
        fetchInquiries();
    }, []);

    // 작성하기 버튼 클릭 시 문의 작성 페이지로 이동
    const handleCreateInquiry = () => {
        navigate('/onetoone'); // 문의 작성 페이지 경로로 이동
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className={styles.onemain}>1:1 문의</div>

            {inquiries.length === 0 ? (
                <div>
                    <p>작성된 1:1 문의가 없습니다.</p>
                    <button className={styles.createButton} onClick={handleCreateInquiry}>
                        작성하기
                    </button>
                </div>
            ) : (
                <div>
                    <ul>
                        {inquiries.map((inquiry) => (
                            <li key={inquiry.post_no}>
                                <strong>{inquiry.post_title}</strong> - {inquiry.post_date} [{inquiry.reply_status}]
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