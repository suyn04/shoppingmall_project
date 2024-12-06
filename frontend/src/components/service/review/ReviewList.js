import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../scss/service/review/ReviewList.module.scss';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]); // 리뷰 데이터 상태 관리
  const [expandedReview, setExpandedReview] = useState(null); // "더 보기" 상태 관리

  // 리뷰 데이터 가져오기
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5001/review'); // API 호출
        console.log('API 응답:', response.data); // 데이터 확인
        setReviews(Array.isArray(response.data) ? response.data : []); // 배열만 상태에 저장
      } catch (err) {
        console.error('API 호출 실패:', err);
      }
    };
    fetchReviews();
  }, []);

  // "더 보기" 토글
  const handleToggle = (reviewId) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId); // 열려 있으면 닫고, 닫혀 있으면 열기
  };

  return (
    <div>
      <div className={styles.reviewTitle}>리뷰</div>
      {reviews.length === 0 ? (
        <p>리뷰가 없습니다.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.review_no} className={styles.reviewCnt}>
            <h2>{review.review_rate}/5</h2>
            <h3>{review.review_title}</h3>
            <p>{review.review_detail}</p>
            <button onClick={() => handleToggle(review.review_no)}>
              {expandedReview === review.review_no ? '닫기' : '더 보기'}
            </button>

            {expandedReview === review.review_no && (
              <div className={styles.rcontent}>
                <div>
                  <p>추천 여부: {review.review_recommend ? '추천함' : '추천하지 않음'}</p>
                  <p>작성자: {review.review_nick}</p>
                  <p>지역: {review.review_region || '지역 미지정'}</p>
                  <p>향수 계열: {review.review_scent || '향 미지정'}</p>
                </div>
                <div>
                  <p>작성일: {new Date(review.review_date).toLocaleDateString()}</p>
                  <p>선물 여부: {review.review_gift ? '선물' : '본인용'}</p>
                  <button>신고하기</button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
