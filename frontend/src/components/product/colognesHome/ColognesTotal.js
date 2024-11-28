import React from "react";
import ColognesCard from "./ColognesCard";
import "../../../scss/product/colognesTotal.scss";

const ColognesTotal = () => {
    return (
        <div className="colognesTotal">
            <div className="content">
                <p>우리의 가장 사랑받는 코롱을 만나 보세요.</p>
                <p>
                    베스트셀러부터 신제품까지 다양한 조 말론 런던의 컬렉션이
                    있습니다.
                </p>
            </div>
            <ColognesCard />
        </div>
    );
};

export default ColognesTotal;
