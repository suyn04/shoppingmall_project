import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5001/review');
        console.log('응답 데이터:', response.data); // 데이터 확인
        const reviewData = Array.isArray(response.data) ? response.data : [];
        setReviews(reviewData); // 상태 업데이트
      } catch (err) {
        setError('리뷰 데이터를 가져오는 데 실패했습니다.');
        console.error('에러 발생:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>회원 리뷰 목록</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.memberName}</strong>: {review.content}
              {/* 작성일과 별점 추가 */}
              <p><strong>작성일:</strong> {new Date(review.createdAt).toLocaleDateString()}</p>
              <p><strong>별점:</strong> {review.rating}</p>
              <p><strong>추천 여부:</strong> {review.review_recommend === 1 ? '추천' : '비추천'}</p>
              <p><strong>지역:</strong> {review.review_region}</p>
              <p><strong>향수 계열:</strong> {review.review_scent}</p>
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
