import React from "react";
import styles from "../../../scss/product/colognesTotal.module.scss";
import HomeTop from "./HomeTop";

const BathBodyTotal = () => {
    return (
        <div className={styles.colognesTotal}>
            <HomeTop />
            <div className={styles.content}>
                <p>우리의 가장 사랑받는 배스 앤 바디 제품을 만나 보세요.</p>
                <p>
                    베스트셀러부터 신제품까지 다양한 조 말론 런던의 컬렉션이
                    있습니다.
                </p>
            </div>
        </div>
    );
};

export default BathBodyTotal;
