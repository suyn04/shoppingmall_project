import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                console.log('왜 안들어와 너 왜 안들어와 안들어와!')
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
    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>회원 리뷰 목록</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.review_no}>
                            {' '}
                            {/* key를 review_no로 설정 */}
                            <strong>{review.memberName}</strong> {review.content}
                            <p>
                                <strong>작성자 이메일:</strong> {review.email}
                            </p>
                            <p>
                                <strong>닉네임:</strong> {review.review_nick}
                            </p>
                            <p>
                                <strong>제목:</strong> {review.review_title}
                            </p>
                            <button onClick={() => handleDetailClick(review.review_no)}>상세보기</button> {/* review_no로 ID 전달 */}
                            <br />
                            <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>리뷰가 없습니다!</p>
            )}
        </div>
    );
};

export default AReviewList;
