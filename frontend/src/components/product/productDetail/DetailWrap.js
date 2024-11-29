import React from "react";
import DetailTop from "./DetailTop";
import DetailAcor from "./DetailAcor";
import DetailTasting from "./DetailTasting";
import DetailUse from "./DetailUse";
import DetailRecommend from "./DetailRecommend";

const DetailWrap = () => {
    return (
        <div>
            <DetailTop />
            <DetailAcor />
            <DetailTasting />
            <DetailUse />
            <DetailRecommend/>
        </div>
    );
};

export default DetailWrap;
