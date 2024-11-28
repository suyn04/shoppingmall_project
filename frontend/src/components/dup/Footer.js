import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../scss/dup/footer.module.scss'

function Footer(props) {
  return (
    <footer>
      <div className={styles.footerSite}>
        <div>
          <div className={styles.tt}>
            <span>고객 서비스</span>
            <div className={styles.footerIcons}>
              <img className={styles.down} src="/imgs/main/downIcon.svg" alt=""/>
              <img className={styles.up} src="/imgs/main/upIcon.svg" alt=""/>
            </div>
          </div>
          <Link to="story/customerSerivce/01_faq.html">자주 묻는 질문</Link>
          <Link to="story/customerSerivce/02_csTeam.html">고객관리지원팀</Link>
          <Link to="story/customerSerivce/03_MyProfile.html">나의 프로필</Link>
          <Link to="story/customerSerivce/04_myOrder.html">나의 오더</Link>
          <Link to="story/customerSerivce/05_delivery.html">배송관련</Link>
          <Link to="story/customerSerivce/06_return_exchange.html">교환 및 환불 규정</Link>
          <Link to="story/customerSerivce/07_onlineShopping.html">온라인 부티크 쇼핑</Link>
        </div>
        <div>
          <div>
            <div className={styles.tt}>
              <span>살펴보기</span>
              <div className={styles.footerIcons}>
                <img className={styles.down} src="/imgs/main/downIcon.svg" alt=""/>
                <img className={styles.up} src="/imgs/main/upIcon.svg" alt=""/>
              </div>
            </div>
            <Link to="story/londonHouse/01_ourvalues.html">브랜드 소개</Link>
            <Link to="story/product.html">제품 전체</Link>
            <Link to="story/product.html">신제품</Link>
            <Link to="main/map.html">매장 안내</Link>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.tt}>
              <span>소셜 네트워크</span>
              <div className={styles.footerIcons}>
                <img className={styles.down} src="/imgs/main/downIcon.svg" alt=""/>
                <img className={styles.up} src="/imgs/main/upIcon.svg" alt=""/>
              </div>
            </div>
            <Link to="https://www.instagram.com/jomalonelondon">인스타그램</Link>
            <Link to="https://www.facebook.com/JoMaloneLondon">페이스북</Link>
            <Link to="https://www.youtube.com/channel/UCWMSJ5L5Zvkr9JfflU4JMUA">유튜브</Link>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <p>© Jo Malone London 2021</p>
          <img src="/imgs/main/main_trustmark.webp" alt=""/>
          <div>
            <Link to="story/customerSerivce/08_termsConditons.html">이용약관</Link>
            <Link to="story/customerSerivce/08_termsConditons.html">개인정보 처리방침</Link>
          </div>
        </div>
        <div>
          <p>
            이엘씨에이한국(유) 대표: Teng, Hsiao-Hua (Catherine), 서울시 강남구 강남대로 382 (역삼동) 메리츠타워, 06232<br/>
            사업자등록번호: 211-81-71889<br/>
            통신판매업신고번호: 강남-15737호<br/>
            고객관리지원팀: <Link to="tel:1644-3753">1644-3753</Link><br/>
            호스팅서비스 사업자: (주)엘지유플러스
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;