import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../../scss/main/home.module.scss'
// import MainSlide from './MainSlide';


function Home(props) {
  const url = '/imgs/main/'
  return (
    <>
      {/* <MainSlide/> */}
      <div>
        {/* 히노키 */}
        <section className={styles.new}>
          <div>
            <img src={`${url}main_new1.avif`} alt=""/>
            <div className={styles.newText}>
              <p>히노키 앤 시더우드 코롱</p>
              <Link to="/story/product.html">더 알아보기</Link>
            </div>
          </div>
          <img src={`${url}main_new2.avif`} alt=""/>
        </section>

        {/* 센트파인더 */}
        <section className={styles.scent}>
        <img src={`${url}scentFinder.avif`} alt=""/>
        <div>
          <p>센트 파인더</p>
          <p>조 말론 런던의 도움을 받아 편리하게 나만의 시그니처 향을 찾아보세요.</p>
          <Link to="/main/scentFinder.html">시작하기</Link>
        </div>
        </section>
      </div>
    </>
  );
}

export default Home;