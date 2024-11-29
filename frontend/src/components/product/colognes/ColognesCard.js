import React from "react";
import styles from "../../../scss/product/productCard.module.scss";
import { useNavigate } from "react-router-dom";

const ColognesCard = () => {
    const navigate = useNavigate();
    const naviGo = (route) => {
        navigate(route);
    };
    return (
        <div className={styles.cardTotal}>
            <div className={styles.card}>
                <div
                    className={styles.cardContent}
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>100ml</div>
                        <div>₩235,000</div>
                    </div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className={styles.card}>
                <div
                    className={styles.cardContent}
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>100ml</div>

                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className={styles.card}>
                <div
                    className={styles.cardContent}
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    {" "}
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>100ml</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className={styles.card}>
                <div
                    className={styles.cardContent}
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>100ml</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className={styles.card}>
                <div
                    className={styles.cardContent}
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>100ml</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
        </div>
    );
};

export default ColognesCard;
