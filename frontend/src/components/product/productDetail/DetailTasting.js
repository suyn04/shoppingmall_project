import React from "react";
import styles from "../../../scss/product/detailTasting.module.scss";

const DetailTasting = () => {
    return (
        <div className={styles.note}>
            <div className={styles.noteTitle}>테이스팅 노트</div>
            <div className={styles.imgWrap}>
                <img src="/imgs/product/blackberry_tasting.png" alt="" />
            </div>
        </div>
    );
};

export default DetailTasting;
