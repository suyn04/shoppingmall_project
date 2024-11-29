import React from "react";
import RecommendSwiper from "./RecommendSwiper";

import styles from "../../../scss/product/detailRecommend.module.scss";

const DetailRecommend = () => {
    return (
        <div className={styles.detailRecommend}>
            <div className={styles.recommendTitle}>당신을 위한 추천 상품</div>
            <RecommendSwiper />
        </div>
    );
};

export default DetailRecommend;
