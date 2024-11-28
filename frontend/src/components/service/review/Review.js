import React, { useState } from 'react';
import '../../../scss/service/review/Review.scss'
const Review = () => {
  const [rating, setRating] = useState(0); // 별점 상태
  const [recommend, setRecommend] = useState(''); // 추천 여부 상태

  return (
    <div>
      <div className="rwrapper">
        <div className="content">
          <div className="rimgbox">
            <img src="/imgs/service/reviewimg_1.avif" alt="Product" />
          </div>

          <div className="text">
            <h2>English Pear & Freesia Cologne</h2>
            <h3>가을의 정수인 배 과수원에서 영감을 얻은 그윽한 프루티 향.</h3>
          </div>

          <form action="" onSubmit={(e) => e.preventDefault()}>
            {/* 별점 평가 */}
            <fieldset className="rating">
              <legend>고객 평점*</legend>
              <div className="labelbox">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} onClick={() => setRating(value)}>
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      style={{ display: 'none' }} // 숨김 처리
                    />
                    <span className="checkbox">
                      <i
                        className={`fa-star ${
                          value <= rating ? 'fa-solid' : 'fa-regular'
                        }`}
                      ></i>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 추천 여부 */}
            <fieldset className="recommend">
              <legend>이 상품을 추천하시겠습니까?</legend>
              <div>답변을 선택하세요</div>
              <div className="button-box">
                <button
                  type="button"
                  className={`btn ${recommend === 'yes' ? 'active' : ''}`}
                  onClick={() => setRecommend('yes')}
                >
                  예
                </button>
                <button
                  type="button"
                  className={`btn ${recommend === 'no' ? 'active' : ''}`}
                  onClick={() => setRecommend('no')}
                >
                  아니오
                </button>
              </div>
            </fieldset>

            {/* 닉네임 입력 */}
            <div className="name">
              <label htmlFor="pname">
                <span>닉네임*</span>
              </label>
              <input type="text" id="pname" placeholder="예) A람" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
