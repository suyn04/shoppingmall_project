import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../scss/dup/nav.module.scss'

function Nav(props) {
  return (
    <div>
      <div className={styles.hamBg}></div>
      <div id={styles.hamMenu}>
        <ul className={styles.hMenu}>
          <li>
            <Link to="">브랜드 소개</Link>
            <ul className={styles.hSubmenu}>
              <li><Link to="">소개</Link></li>
              <li><Link to="">제품전체</Link></li>
              <li><Link to="">베스트셀러</Link></li>
              <li><Link to="">신제품</Link></li>
              <li><Link to="">매장안내</Link></li>
            </ul>
          </li>
          <li>
            <Link to="">코롱</Link>
            <ul className={styles.hSubmenu}>
              <li>
                <Link to="">센트패밀리</Link>
                <ul className={styles.hSubitem}>
                  <li><Link to="">시트러스</Link></li>
                  <li><Link to="">프루티</Link></li>
                  <li><Link to="">라이트 플로랄</Link></li>
                  <li><Link to="">플로랄</Link></li>
                  <li><Link to="">우디</Link></li>
                </ul>
              </li>
              <li>
                <Link to="">사이즈</Link>
                <ul className={styles.hSubitem}>
                  <li><Link to="">100ml</Link></li>
                  <li><Link to="">50ml</Link></li>
                  <li><Link to="">30ml</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">홈 프레그런스</Link>
            <ul className={styles.hSubmenu}>
              <li>
                <Link to="">캔들</Link>
              </li>
              <li>
                <Link to="">디퓨저</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">배스 앤 바디</Link>
            <ul className={styles.hSubmenu}>
              <li>
                <Link to="">배스 앤 샤워</Link>
                <ul className={styles.hSubitem}>
                  <li><Link to="">바디 앤 핸드워시</Link></li>
                  <li><Link to="">샤워 젤 앤 오일</Link></li>
                  <li><Link to="">배스 오일</Link></li>
                </ul>
              </li>
              <li>
                <Link to="">바디 케어</Link>
                <ul className={styles.hSubitem}>
                  <li><Link to="">바디 크림</Link></li>
                  <li><Link to="">바디 앤 핸드 로션</Link></li>
                  <li><Link to="">바디 미스트</Link></li>
                  <li><Link to="">핸드 크림</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">서비스</Link>
            <ul className={styles.hSubmenu}>
              <li><Link to="">센트 파인더</Link></li>
              <li><Link to="">고객 서비스</Link></li>
            </ul>
          </li>
          <li><Link to="">마이페이지</Link></li>
          <li><Link to="">위시리스트</Link></li>
          <li><Link to="">장바구니</Link></li>
          <li><Link to="">매장위치</Link></li>
        </ul>
      </div>
      <nav>
        <div div className={styles.menuBg}></div>
        <ul className={styles.menu}>
          <li>
            <Link to="">브랜드 소개</Link>
            <ul className={styles.submenu}>
              <li>
                <div>
                  <Link to="">
                    <img src="/imgs/nav01.avif" alt=""/>
                  </Link>
                  <div className={`${styles.subItem} ${styles.bold}`}>
                    <Link to="">소개</Link>
                    <Link to="">제품전체</Link>
                    <Link to="">베스트셀러</Link>
                    <Link to="">매장안내</Link>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">코롱</Link>
            <ul className={styles.submenu}>
              <li>
                <Link to="">
                  <img src="/imgs/nav02.avif" alt=""/>
                  <span>센트패밀리</span>
                </Link>
                <div className={styles.subItem}>
                  <Link to="">시트러스</Link>
                  <Link to="">프루티</Link>
                  <Link to="">라이트 플로랄</Link>
                  <Link to="">플로랄</Link>
                  <Link to="">우디</Link>
                </div>
              </li>
              <li>
                <Link to="">
                  <img src="/imgs/nav03.avif" alt=""/>
                  <span>사이즈</span>
                </Link>
                <div className={styles.subItem}>
                  <Link to="">100ml</Link>
                  <Link to="">50ml</Link>
                  <Link to="">30ml</Link>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">홈 프레그런스</Link>
            <ul className={styles.submenu}>
              <li>
                <Link to="">
                  <img src="/imgs/nav04.avif" alt=""/>
                  <span>캔들</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src="/imgs/nav05.avif" alt=""/>
                  <span>디퓨저</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">배스 앤 바디</Link>
            <ul className={styles.submenu}>
              <li>
                <Link to="">
                  <img src="/imgs/nav06.avif" alt=""/>
                  <span>배스 앤 샤워</span>
                </Link>
                <div className={styles.subItem}>
                  <Link to="">바디 앤 핸드워시</Link>
                  <Link to="">샤워 젤 앤 오일</Link>
                  <Link to="">배스 오일</Link>
                </div>
              </li>
              <li>
                <Link to="">
                  <img src="/imgs/nav07.avif" alt=""/>
                  <span>바디 케어</span>
                </Link>
                <div className={styles.subItem}>
                  <Link to="">바디 크림</Link>
                  <Link to="">바디 앤 핸드 로션</Link>
                  <Link to="">바디 미스트</Link>
                  <Link to="">핸드 크림</Link>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">서비스</Link>
            <ul className={styles.submenu}>
              <li>
                <div>
                  <Link to="">
                    <img src="/imgs/nav08.avif" alt=""/>
                  </Link>
                  <div className={`${styles.subItem} ${styles.bold}`}>
                    <Link to="">센트 파인더</Link>
                    <Link to="">고객 서비스</Link>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;