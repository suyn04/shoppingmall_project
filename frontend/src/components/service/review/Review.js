import React, { useState } from 'react';
import '../../../scss/service/review/Review.scss'
const Review = () => {
  const [rating, setRating] = useState(0); // 별점 상태
  const [recommend, setRecommend] = useState(''); // 추천 여부 상태

  return (
    <div>
      <div className="rwrapper">

        <div className="rimgbox">
          <img src="/imgs/service/reviewimg_1.avif" alt="Product" />
        </div>

        <div className="content">
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
                        className={`fa-star ${value <= rating ? 'fa-solid' : 'fa-regular'
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
                {/* 제목 입력 */}
                <div className='rtitle'>
                    <label for="ptitle">
                      <span>제목*</span>
                    </label>
                    <input type="text" id="ptitle" placeholder='예) 저는 이 상품을 또 구매할 의향이 있습니다.'/>
                </div>

                {/* 상품후기 입력 */}
                <div className='rreview'>
                    <label for="rreview">
                      <span>상품후기*</span>
                    </label>
                    <div className='law'>상품을 이용하는 법 또는 이 상품의 장단점을 기입하여 주세요.
                    구매자 성함이나 연락처, 이메일 주소와 같은 개인정보를 기재하지 마시고, 제품에 지출한 특정 가격이나 경쟁 업체에 대한 언급은 자제해 주십시오.'</div>
                </div>

                <div className='plus'>
                  <span>장점</span>
                  <button type='button' className='selfplus'>
                    직접추가 + 
                  </button>
                  <div className='plustext'>
                    <label for="addtext1">
                      <span>직접 추가 장점</span>
                    </label>
                    
                    <input type="text" className='addtext1'/>
                    <button className='add' type='button'>추가</button>
                    <button className='remove' type='button'>취소</button>
                  </div>
                </div>


                <div className='minus'>
                  <span>단점</span>
                  <button type='button' className='selfminus'>
                    직접추가 + 
                  </button>
                  <div className='minustext'>
                    <label for="addtext2">
                      <span>직접 추가 단점</span>
                    </label>
                    
                    <input type="text" className='addtext1'/>
                    <button className='add' type='button'>추가</button>
                    <button className='remove' type='button'>취소</button>
                  </div>
                </div>


                 {/* 제목 입력 */}
                 <div className='rtitle'>
                    <label for="ptitle">
                      <span>제목*</span>
                    </label>
                    <input type="text" id="ptitle" placeholder='예) 저는 이 상품을 또 구매할 의향이 있습니다.'/>
                </div>







          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
