import React, { useEffect, useState } from "react";
import styles from "../../scss/product/productCard.module.scss";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [curProduct, setCurProduct] = useState([]);

    useEffect(() => {
        console.log("ProductCard 동작");
        if (!product) {
            console.log(`상품이 없습니다`);
            return;
        }

        setCurProduct(product);
    }, [product]);

    const naviGo = (route) => {
        navigate(route);
    };

    const basketGo = (id) => {
        console.log(id);
        navigate(`/basket/${id}`);
    };

    const fileGo = (file) => {
        if (file) {
            return <img src={`http://localhost:5001/imgs/product/${file}`} />;
        }
        return null;
    };
    if (!curProduct) {
        return <div>id 없음</div>;
    }

    return (
        <div className={styles.cardTotal}>
            {curProduct.map((prod, i) => {
                return (
                    <div className={styles.card} key={prod.product_opt_id}>
                        <div
                            className={styles.cardContent}
                            onClick={() => {
                                naviGo(`/product/${prod.product_opt_id}`);
                            }}
                        >
                            {fileGo(prod.product_upSystem)}
                            <div>
                                <div>{prod.product_name_eng}</div>
                                <div>{prod.product_name_kor}</div>
                                <div>{prod.product_volume}</div>
                                <div>₩ {prod.product_price}</div>
                            </div>
                        </div>
                        <button onClick={() => basketGo(prod.product_id)}>
                            장바구니 담기
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCard;
