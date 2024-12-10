import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styles from '../../../scss/service/review/Review.module.scss';
import { useNavigate, useParams } from 'react-router-dom';


// 이미지 파일 경로를 생성하는 함수
function fileGo(file) {
  if (file) {
    return <img src={`http://localhost:5001/imgs/product/${file}`} alt="Product" />;
  }
  return <img src="http://localhost:5001/imgs/product/default.jpg" alt="Default Product" />;
}

const Review = () => {
  // 상태 관리: 폼 데이터
  const {product_opt_id} = useParams()
  const [nickname, setNickname] = useState('');
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [region, setRegion] = useState('');
  const [fragranceType, setFragranceType] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [gift, setGift] = useState('');
  const [product, setProduct] = useState('');
  const [file, setFile] = useState('');
  const email = sessionStorage.getItem('email')
  const navigate = useNavigate();
  if(!email){
    navigate('/signIn')
  }
  // 초기 이미지 파일명 설정
  const [productFile, setProductFile] = useState('mandarine_cologne_30ml.jpg');

  // 용량에 따라 이미지 변경 함수
  const handleVolumeChange = (volume) => {
    const fileName = `mandarine_cologne_${volume}ml.jpg`;
    setProductFile(fileName);
  };

  useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5001/review/reviewWrite?product_opt_id=${product_opt_id}`
                );
                console.log(response.data);
                setProduct(response.data);
            } catch (err) {
                console.error("API 호출 실패:", err);
            }
        };
        fetchReviews();
    }, [product_opt_id]);

  // 제출 처리 함수
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let reviewData = {
  //     product_opt_id: product.product_opt_id,
  //     product_id: product.product_id,
  //     email: email,
  //     review_rate: rating || 0,
  //     review_recommend: recommend === 'yes' ? 1 : 0,
  //     review_nick: nickname || '익명',
  //     review_title: title || '제목 없음',
  //     review_detail: content || '내용 없음',
  //     review_region: region || '지역 미지정',
  //     review_scent: fragranceType || '향 미지정',
  //     review_time: timeOfDay || null,
  //     review_gift: gift || null,
  //     review_upload_file: file || null,
  //   };


  //   console.log('전송 데이터:', reviewData);

  //   try {
  //     const response = await axios.post('http://localhost:5001/review', reviewData);
  //     console.log('리뷰 저장 성공:', response.data);
  //     alert('리뷰가 성공적으로 저장되었습니다!');
  //   } catch (err) {
  //     console.error('리뷰 저장 실패:', err);
  //     alert('리뷰 저장에 실패했습니다.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('product_opt_id', product.product_opt_id);
    formData.append('product_id', product.product_id);
    formData.append('email', email);
    formData.append('review_rate', rating || 0);
    formData.append('review_recommend', recommend === 'yes' ? 1 : 0);
    formData.append('review_nick', nickname || '익명');
    formData.append('review_title', title || '제목 없음');
    formData.append('review_detail', content || '내용 없음');
    formData.append('review_region', region || '지역 미지정');
    formData.append('review_scent', fragranceType || '향 미지정');
    formData.append('review_time', timeOfDay || null);
    formData.append('review_gift', gift || null);
  
    // 이미지 파일 추가
    const imageInput = document.querySelector('input[type="file"]');
    if (imageInput.files[0]) {
      formData.append('review_upload_file', imageInput.files[0]);
    }
  
    try {
      const response = await axios.post('http://localhost:5001/review', formData);
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
          {fileGo(product.product_upSystem)}
        </div>

        <div className={styles.content}>
          <div className={styles.rtext}>
            <h2>{product.product_name_kor}</h2>
            <h3>{product.product_intro}</h3>
          </div>

          {/* 용량 선택 버튼 */}
          {/* <div className={styles.volumeButtons}>
            <button type="button" onClick={() => handleVolumeChange(30)}>30ml</button>
            <button type="button" onClick={() => handleVolumeChange(50)}>50ml</button>
            <button type="button" onClick={() => handleVolumeChange(100)}>100ml</button>
          </div> */}

          <form onSubmit={handleSubmit}>
            {/* 별점 평가 */}
            <fieldset className={styles.rating}>
              <legend>고객 평점*</legend>
              <div className={styles.labelbox}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} onClick={() => setRating(value)}>
                    <input type="radio" name="rating" value={value} style={{ display: 'none' }} />
                    <span className={styles.checkbox}>
                      <i className={value <= rating ? `${styles["fa-star"]} ${styles["fa-solid"]}` : `${styles["fa-star"]} ${styles["fa-regular"]}`}></i>
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
                <button type="button" className={`btn ${recommend === 'yes' ? 'active' : ''}`} onClick={() => setRecommend('yes')}>예</button>
                <button type="button" className={`btn ${recommend === 'no' ? 'active' : ''}`} onClick={() => setRecommend('no')}>아니오</button>
              </div>
            </fieldset>

            {/* 닉네임 입력 */}
            <div className={styles.name}>
              <label htmlFor="pname">
                <div>닉네임*</div>
              </label>
              <input type="text" id="pname" placeholder="예) A람" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </div>

            {/* 제목 입력 */}
            <div className={styles.rtitle}>
              <label htmlFor="ptitle">
                <div>제목*</div>
              </label>
              <input type="text" id="ptitle" placeholder="예) 저는 이 상품을 또 구매할 의향이 있습니다." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* 상품후기 입력 */}
            <div className={styles.rreview}>
              <label htmlFor="rreview">
                <div>상품후기*</div>
              </label>
              <input type="text" className={styles.linput} value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
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
            <select 
            className={styles.time}
            value={timeOfDay}
            onChange={(e)=>setTimeOfDay(e.target.value)}
            >
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
            <select className={styles.gift}
            value={gift}
            onChange={(e)=>setGift(e.target.value)}
            >
              <option value disabled selected>선택</option>
              <option>누군가를 위한</option>    
              <option>나를 위한</option>
            </select>
          </div>


{/* review_upload_file */}
          <div className={styles.load}>
            <label for="imgLoad">
              <div>이미지 첨부</div>
            </label>
            <input 
            type="file" 
            className={styles.imgLoad}
            onChange={(e)=>setFile(e.target.files[0].name)}
            />
            
          </div>
          

            <button type="submit" className={styles.btnsubmit}>제출</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
