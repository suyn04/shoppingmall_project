import React from "react";
import styles from "../../../scss/product/detailTop.module.scss";

const DetailTop = () => {
    return (
        <div className={styles.detailTop}>
            <div className={styles.imgWrap}>
                <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
            </div>
            <div className={styles.contentWrap}>
                <div className={styles.textWrap}>
                    <div className={styles.tag}>베스트 셀러</div>
                    <div className={styles.prodName}>
                        <div>Blackberry & Bay Cologne</div>
                        <div>블랙베리 앤 베이 코롱</div>
                    </div>
                    <div className={styles.price}>₩235,000</div>
                    <div className={styles.prodInfo}>
                        순수의 향. 블랙베리를 따던 어린 시절의 추억, 블랙베리로
                        물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡
                        쏘는 블랙베리 과즙을 가미하였습니다. 매력적이고 생기
                        넘치는 상쾌한 느낌의 향입니다.
                    </div>
                </div>
                <div className={styles.volumeWrap}>
                    <button>30ml</button>
                    <button>50ml</button>
                    <button>100ml</button>
                </div>
                <div className={styles.btnWrap}>
                    <button>리뷰보기</button>
                    <button>장바구니 담기</button>
                </div>
            </div>
        </div>
    );
};

export default DetailTop;
