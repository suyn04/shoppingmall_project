import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "../../../scss/admin/AdminList.module.scss";


const AReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5001/review');
                console.log('응답 데이터:', response.data); // 응답 데이터 확인
                const reviewData = Array.isArray(response.data) ? response.data : [];
                setReviews(reviewData); // 상태 업데이트
            } catch (err) {
                setError('리뷰 데이터를 가져오는 데 실패했습니다.');
                console.error('에러 발생:', err);
            }
        };

        fetchReviews();
    }, []);
    const handleDetailClick = id => {
        console.log('전달된 ID:', id); // 클릭한 리뷰의 ID 확인
        navigate(`/admin/areviewdetail/${id}`); // 상세보기 페이지로 이동
    };
    // if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.list}>
            <div className={styles.rtitle}>회원 리뷰 목록</div>

            <table>
                <tr>
                    <td>리뷰 번호</td>
                    <td>이메일</td>
                    <td>닉네임</td>
                    <td>제목</td>
                    {/* <td>내용</td> */}
                    <td>상세보기</td>
                </tr>

                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <tr key={review.review_no}>
                            <td>{review.review_no}</td>
                            <td>{review.email}</td>
                            <td>{review.review_nick}</td>
                            <td>{review.review_title}</td>
                            {/* <td>{review.detail}</td> */}
                            <td>
                                <button className={styles.changebutton} onClick={() => handleDetailClick(review.review_no)}>
                                    상세보기
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7">리뷰가 없습니다!</td>
                    </tr>
                )}
            </table>

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};
export default AReviewList;
