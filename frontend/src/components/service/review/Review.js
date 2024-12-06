import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import styles from '../../../scss/service/review/Review.module.scss'




const Review = () => {
  // 상태 관리: 폼 데이터
  const [nickname, setNickname] = useState(''); // 닉네임
  const [rating, setRating] = useState(0); // 별점
  const [recommend, setRecommend] = useState(''); // 추천 여부
  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용
  const [region, setRegion] = useState(''); // 거주지역
  const [fragranceType, setFragranceType] = useState(''); // 향수 계열
  const [timeOfDay, setTimeOfDay] = useState(''); // 잘 어울리는 시간대
  const [gift, setGift] = useState(''); // 선물 여부

  // 제출 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let reviewData = {
      product_id: 1, // 필수 값
      email: 123, // 필수 값
      review_rate: rating || 0, // 기본값: 0
      review_recommend: recommend === 'yes' ? 1 : 0, // 기본값: 0
      review_nick: nickname || '익명', // 기본값: '익명'
      review_title: title || '제목 없음', // 기본값: '제목 없음'
      review_detail: content || '내용 없음', // 기본값: '내용 없음'
      review_region: region || '지역 미지정', // 선택적 기본값
      review_scent: fragranceType || '향 미지정', // 선택적 기본값
      review_time: timeOfDay || null, // 선택적
      review_gift: gift || null, // 선택적
    };
    console.log('전송 데이터:', reviewData); // 데이터를 확인
  
    try {
      const response = await axios.post('http://localhost:5001/review', reviewData);
      console.log('리뷰 저장 성공:', response.data);
      alert('리뷰가 성공적으로 저장되었습니다!');
    } catch (err) {
      console.error('리뷰 저장 실패:', err);
      alert('리뷰 저장에 실패했습니다.');
    }
  };
  
  return (
    <div>
      <div className={styles.rwrapper}>

        <div className={styles.rimgbox}>
          <img src="/imgs/service/reviewimg_1.avif" alt="Product" />
        </div>

        <div className={styles.content}>
          <div className={styles.rtext}>
            <h2>English Pear & Freesia Cologne</h2>
            <h3>가을의 정수인 배 과수원에서 영감을 얻은 그윽한 프루티 향.</h3>
          </div>

          {/* <form action="" onSubmit={(e) => e.preventDefault()}> */}
          <form onSubmit={handleSubmit}>
            {/* 폼 내용 */}
          
          {/* 별점 평가 */}
          <fieldset className={styles.rating}>
            <legend>고객 평점*</legend>
            <div className={styles.labelbox}>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} onClick={() => setRating(value)}>
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    style={{ display: 'none' }} // 숨김 처리
                  />
                  <span className={styles.checkbox}>
                    <i
                      className={
                        value <= rating
                          ? `${styles["fa-star"]} ${styles["fa-solid"]}`
                          : `${styles["fa-star"]} ${styles["fa-regular"]}`
                      }
                    ></i>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* 추천 여부 */}
          <fieldset className={styles.recommend}>
            <legend>이 상품을 추천하시겠습니까?</legend>
            <div>답변을 선택하세요</div>
            <div className={styles["button-box"]}>
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
          <div className={styles.name}>
            <label htmlFor={styles.pname}>
              <div>닉네임*</div>
            </label>
            <input 
            type="text" 
            id="pname" 
            placeholder="예) A람" 
            value={nickname}  //상태변수와 연결
            onChange={(e)=> setNickname(e.target.value)}
            />
          </div>
          {/* 제목 입력 */}
          <div className={styles.rtitle}>
            <label for="ptitle">
              <div>제목*</div>
            </label>
            <input 
            type="text" 
            id="ptitle" 
            placeholder='예) 저는 이 상품을 또 구매할 의향이 있습니다.' 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          {/* 상품후기 입력 */}
          <div className={styles.rreview}>
            <label for="rreview">
              <div>상품후기*</div>
            </label>
            <div className={styles.law}>상품을 이용하는 법 또는 이 상품의 장단점을 기입하여 주세요.
              구매자 성함이나 연락처, 이메일 주소와 같은 <br />개인정보를 기재하지 마시고, 제품에 지출한 특정 가격이나 경쟁 업체에 대한 언급은 자제해 주십시오.'</div>
            <input 
            type="text" 
            className={styles.linput} 
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            />
          </div>



          {/* 장단점 */}
          {/* <div className='plus'>
              <div>장점</div>
              <button type='button' className='selfplus'>
                직접추가 +
              </button>
              <div className='plustext'>
                <label for="addtext1">
                  <span>직접 추가 장점</span>
                </label>

                <input type="text" className='addtext1' />
                <button className='add' type='button'>추가</button>
                <button className='remove' type='button'>취소</button>
              </div>
            </div>


            <div className='minus'>
              <div>단점</div>
              <button type='button' className='selfminus'>
                직접추가 +
              </button>
              <div className='minustext'>
                <label for="addtext2">
                  <div>직접 추가 단점</div>
                </label>

                <input type="text" className='addtext1' />
                <button className='add' type='button'>추가</button>
                <button className='remove' type='button'>취소</button>
              </div>
            </div>
 */}

          {/* 거주지역 입력 */}
          <div className={styles.seoul}>
            <label for="ptitle">
              <div>거주지역*</div>
            </label>
            <input 
            type="text" 
            id="ptitle" 
            placeholder='예) 서울' 
            value={region}
            onChange={(e)=> setRegion(e.target.value)}
            />
          </div>

          {/* 향수 계열 선택 */}
          <div className={styles.rtitle}>
            <label className={styles.type}>
              <div>평소 사용하는 향수 계열</div>
            </label>
            <select 
            className={styles.type}
            value={fragranceType} //선택된 값이 상태에 반영됨
            onChange={(e)=> setFragranceType(e.target.value)}
            >
              <option>시트러스</option>
              <option>프루티</option>
              <option>라이트 플로럴</option>
              <option>플로럴</option>
              <option>스파이시</option>
              <option>우디</option>

            </select>
          </div>

          {/* 잘 어울리는 시간대 선택 */}
          <div className={styles.rtitle}>
            <label className={styles.time}>
              <div>이 제품이 잘 어울리는 시간대</div>
            </label>
            <select className={styles.time}>
              <option value disabled selected>선택</option>
              <option>낮</option>
              <option>밤</option>
              <option>낮과 밤</option>
            </select>
          </div>

          <div className={styles.rtitle}>
            <label className={styles.gift}>
              <div>선물여부</div>
            </label>
            <select className={styles.gift}>
              <option value disabled selected>선택</option>
              <option>누군가를 위한</option>
              <option>나를 위한</option>
            </select>
          </div>



          <div className={styles.load}>
            <label for="imgLoad">
              <div>이미지 첨부</div>
            </label>
            <input type="file" className={styles.imgLoad} />
            <button type='button' className={styles.imgLoadBtn}>이미지 첨부</button>
          </div>

          {/* 
            <div className={styles.load}>
              <label for="videoLoad">
                <div>비디오 첨부</div>
              </label>
              <input type="file" className={styles.videoLoad} />
              <button type='button' className={styles.videoLoadBtn}>비디오 첨부</button>
            </div> */}

          <button type='submit' className={styles.btnsubmit}>제출</button>


        </form>
      </div>
    </div>
    </div >
  );
};

export default Review;
