import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const ReviewDetail = () => {
  const { id } = useParams(); // URL에서 ID 가져오기
  //console.log('url에서 전달된 id : ',id)
  const navigate = useNavigate();
  const [review, setReview] = useState(null); //리뷰 데이터 상태
  const [loading, setLoading] = useState(true); //로딩 상태
  const [error, setError] = useState(null); //에러 상태

  useEffect(() => {
    const fetchReviewDetail = async () => {
      try {
        // console.log(`요청 URL: http://localhost:5001/review_management/${id}`);
        const response = await axios.get(`http://localhost:5001/review/${id}`);
        // console.log('리뷰 상세 데이터:', response.data);
        setReview(response.data); //상태 업데이트
      } catch (err) {
        setError('리뷰 세부 정보를 가져오는 데 실패했습니다.');
        console.error('에러 발생:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewDetail();  //데이터 요청
  }, [id]);

  const handleBack = () => {
    navigate('/admin/areviewlist'); // 목록 페이지로 이동
  };

  if (loading) return <div className="spinner">로딩 중...</div>;
  if (error) return <p>{error}</p>;
  if (!review) return <p>리뷰를 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>리뷰 상세 정보</h2>
      <p><strong>제목:</strong> {review.review_title}</p>
      <p><strong>닉네임:</strong> {review.review_nick}</p>
      <p><strong>내용:</strong> {review.review_detail}</p>
      <p><strong>작성일:</strong> {new Date(review.review_date).toLocaleDateString()}</p>
      <p><strong>별점:</strong> {review.review_rate}</p>
      <p><strong>추천 여부:</strong> {review.review_recommend === 1 ? '추천' : '비추천'}</p>
      <p><strong>지역:</strong> {review.review_region}</p>
      <p><strong>향수 계열:</strong> {review.review_scent}</p>
      {/* <p><strong>좋아요:</strong> {review.review_good}</p>
      <p><strong>싫어요:</strong> {review.review_bad}</p> */}
      <p><strong>처리상태:</strong> {review.is_visible === 1 ? '활성화' : '비활성화'}</p>
      <button onClick={handleBack} style={{ marginTop: '20px' }}>뒤로가기</button> {/* 뒤로가기 버튼 */}
    </div>
  );
};

export default ReviewDetail;
