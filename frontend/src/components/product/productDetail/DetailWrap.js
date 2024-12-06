import React from "react";
import DetailTop from "./DetailTop";
import DetailAcor from "./DetailAcor";
import DetailTasting from "./DetailTasting";
import DetailUse from "./DetailUse";
import DetailRecommend from "./DetailRecommend";
import ReviewList from "../../service/review/ReviewList"
const DetailWrap = () => {
    return (
        <div>
            <DetailTop />
            <DetailAcor />
            <DetailTasting />
            <DetailUse />
            <DetailRecommend/>
            <ReviewList/>
        </div>
    );
};

export default DetailWrap;
