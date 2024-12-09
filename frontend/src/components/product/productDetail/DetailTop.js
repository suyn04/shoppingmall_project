import React from "react";
import styles from "../../../scss/product/detailTop.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailTop = () => {
    const { product_opt_id } = useParams();
    const navigate = useNavigate();
    const email = sessionStorage.getItem("email");
    console.log(product_opt_id);

    const basketGo = (product_opt_id) => {
        console.log(email);
        if (!email) {
            navigate("/signIn");
        } else {
            const params = { bs_email: email, bs_product_id: product_opt_id };
            console.log(params);
            axios
                .get(`http://localhost:5001/product/basket`, { params })
                .then((res) => {
                    console.log(res.data);
                    const basketItem = res.data.find(
                        (item) => item.bs_product_id == product_opt_id
                    );
                    console.log(basketItem);
                    if (basketItem) {
                        const useConfirm = window.confirm(
                            "이미 장바구니에 추가된 상품입니다. 장바구니에서 제품을 확인하시겠습니까?"
                        );
                        if (useConfirm) {
                            navigate(`/basket`);
                        }
                    } else {
                        const data = params;
                        axios
                            .post(`http://localhost:5001/product/basket`, data)

                            .then((res) => {
                                console.log("게시물 등록 완료", res.data);
                                alert("장바구니에 제품이 담겼습니다.");
                            })
                            .catch((err) => {
                                console.error("에러발생 ; ", err);
                            });
                    }
                })
                .catch((err) => console.error("axios 에러", err));
        }
    };
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
                    <button onClick={() => basketGo(product_opt_id)}>
                        장바구니 담기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailTop;
