import React from "react";
import RecommendSwiper from "./RecommendSwiper";

import "../../../scss/product/detailRecommend.scss";

const DetailRecommend = () => {
    return (
        <div className="detail-">
            <div>당신을 위한 추천 상품</div>
            <RecommendSwiper />
        </div>
    );
};

export default DetailRecommend;
