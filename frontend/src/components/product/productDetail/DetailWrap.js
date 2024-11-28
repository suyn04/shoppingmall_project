import React from "react";
import DetailTop from "./DetailTop";
import DetailAcor from "./DetailAcor";
import DetailTasting from "./DetailTasting";
import DetailUse from "./DetailUse";
import RecommendSwiper from "./RecommendSwiper";

const DetailWrap = () => {
    return (
        <div>
            <DetailTop />
            <DetailAcor />
            <DetailTasting />
            <DetailUse />
            <RecommendSwiper />
        </div>
    );
};

export default DetailWrap;
