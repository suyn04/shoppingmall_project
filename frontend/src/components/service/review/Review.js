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
  // const [file, setFile] = useState('');
  const email = sessionStorage.getItem('email')
  const navigate = useNavigate();
  if(!email){
    navigate('/signIn')
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(document.myFrm);

    formData.append('product_opt_id', product.product_opt_id);
    formData.append('product_id', product.product_id);
    formData.append('email', email);
    formData.append('review_rate', rating || 0);
    // formData.append('review_recommend', recommend === 'yes' ? 1 : 0);
    // formData.append('review_nick', nickname || '익명');
    // formData.append('review_title', title || '제목 없음');
    // formData.append('review_detail', content || '내용 없음');
    // formData.append('review_region', region || '지역 미지정');
    // formData.append('review_scent', fragranceType || '향 미지정');
    // formData.append('review_time', timeOfDay || null);
    // formData.append('review_gift', gift || null);
  
    // form 데이터를 일반 객체로 변환
    const data = Object.fromEntries(formData)
    console.log("data:",data) // 보내는 값 확인

    //console.log("파일 확인:", formData.get('review_file'));

    try {
      const response = await axios.post('http://localhost:5001/review', data, {
        headers:{
          'Content-Type':"multipart/form-data" // 파일업로드를 위해 타입을 이렇게 씀
        }}
      );
      console.log('리뷰 저장 성공:', response.data);
      alert('리뷰가 성공적으로 저장되었습니다!');
      navigate('/')
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

          <form name='myFrm' onSubmit={handleSubmit} >
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

            {/* 닉네임 입력 */}
            <div className={styles.name}>
              <label htmlFor="pname">
                <div>닉네임*</div>
              </label>
              <input type="text" id="pname" placeholder="예) A람" name='review_nick' value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </div>

            {/* 제목 입력 */}
            <div className={styles.rtitle}>
              <label htmlFor="ptitle">
                <div>제목*</div>
              </label>
              <input type="text" id="ptitle" name='review_title' placeholder="예) 저는 이 상품을 또 구매할 의향이 있습니다." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* 상품후기 입력 */}
            <div className={styles.rreview}>
              <label htmlFor="rreview">
                <div>상품후기*</div>
              </label>
              <input type="text" name='review_detail' className={styles.linput} value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
  {/* 거주지역 입력 */}
  <div className={styles.seoul}>
            <label for="ptitle">
              <div>거주지역*</div>
            </label>
            <input 
            type="text" 
            name="review_region"
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
            name="review_scent"
            value={fragranceType} //선택된 값이 상태에 반영됨
            onChange={(e)=> setFragranceType(e.target.value)}
            >
              <option value="시트러스">시트러스</option>
              <option value="프루티">프루티</option>
              <option value="라이트 플로럴">라이트 플로럴</option>
              <option value="플로럴">플로럴</option>
              <option value="스파이시">스파이시</option>
              <option value="우디">우디</option>

            </select>
          </div>

          {/* 잘 어울리는 시간대 선택 */}
          <div className={styles.rtitle}>
            <label className={styles.time}>
              <div>이 제품이 잘 어울리는 시간대</div>
            </label>
            <select 
            name="review_time"
            className={styles.time}
            value={timeOfDay}
            onChange={(e)=>setTimeOfDay(e.target.value)}
            >
              <option value="낮">낮</option>
              <option value="밤">밤</option>
              <option value="낮과 밤">낮과 밤</option>
            </select>
          </div>

          <div className={styles.rtitle}>
            <label className={styles.gift}>
              <div>선물여부</div>
            </label>
            <select className={styles.gift}
            name="review_gift"
            value={gift}
            onChange={(e)=>setGift(e.target.value)}
            >
              <option value="누군가를 위한">누군가를 위한</option>    
              <option value="나를 위한">나를 위한</option>
            </select>
          </div>


{/* review_upload_file */}
          <div className={styles.load}>
            <label for="imgLoad">
              <div>이미지 첨부</div>
            </label>
            <input 
            type="file"
            name="review_file"
            className={styles.imgLoad}
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
