import React from "react";
import styles from "../../../scss/product/prodTotal.module.scss";
import HomeTop from "./HomeTop";
import ProductSwiper from "../ProductSwiper";
import { Link } from "react-router-dom";

const HomeSecntsTotal = () => {
    return (
        <div className={styles.prodTotal}>
            <HomeTop />
            <div className={styles.content}>
                <p>우리의 가장 사랑받는 코롱을 만나 보세요.</p>
                <p>
                    베스트셀러부터 신제품까지 다양한 조 말론 런던의 컬렉션이
                    있습니다.
                </p>
            </div>
            <div className={styles.category}>
                <div className={styles.subTitle}>캔들</div>
                <ProductSwiper />
                <Link to="/home-scents/candle">전체보기</Link>
            </div>
            <div className={styles.category}>
                <div className={styles.subTitle}>디퓨저</div>
                <ProductSwiper />
                <Link to="/home-scents/diffuser">전체보기</Link>
            </div>
        </div>
    );
};

export default HomeSecntsTotal;
