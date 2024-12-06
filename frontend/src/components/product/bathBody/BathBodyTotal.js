import React from "react";
import styles from "../../../scss/product/prodTotal.module.scss";
import ProductSwiper from "../ProductSwiper";
import { Link } from "react-router-dom";
import BathBodyHomeTop from "./BathBodyHomeTop";

const BathBodyTotal = () => {
    return (
        <div className={styles.prodTotal}>
            <BathBodyHomeTop />
            <div className={styles.content}>
                <p>나만을 위한 일상의 호화로움.</p>
            </div>
            <div className={styles.category}>
                <div className={styles.subTitle}>배스 앤 샤워</div>
                <ProductSwiper />
                <Link to="/bath-body/bath-shower">전체보기</Link>
            </div>
            <div className={styles.category}>
                <div className={styles.subTitle}>바디케어</div>
                <ProductSwiper />
                <Link to="/bath-body/body-care">전체보기</Link>
            </div>
        </div>
    );
};

export default BathBodyTotal;
