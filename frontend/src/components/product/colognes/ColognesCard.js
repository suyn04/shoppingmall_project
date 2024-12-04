import { useState, useEffect } from "react";
import styles from "../../../scss/product/productCard.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ColognesCard = () => {
    const navigate = useNavigate();
    const naviGo = (route) => {
        navigate(route);
    };
    const [colognes, setColognes] = useState([]);

    const colognesGetAxios = () => {
        axios
            .get(`http://localhost:5001/product/colognes`)
            .then((res) => {
                console.log("서버 다녀옴", res.data);
                setColognes(res.data);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };
    useEffect(() => {
        document.title = "코롱";
        colognesGetAxios();
    }, []);

    const basketGo = (id) => {
        console.log(id);
        navigate(`/basket/${id}`);
    };

    return (
        <div className={styles.cardTotal}>
            {colognes.map((st, i) => {
                return (
                    <div className={styles.card}>
                        <div
                            className={styles.cardContent}
                            onClick={() => {
                                naviGo("/product");
                            }}
                        >
                            <img
                                src="/imgs/product/blackberry_50ml.jpg"
                                alt=""
                            />
                            <div>
                                <div>{st.product_name_eng}</div>
                                <div>{st.product_name_kor}</div>
                                <div>{st.product_volume}</div>
                                <div>₩ {st.product_price}</div>
                            </div>
                        </div>
                        <button onClick={() => basketGo(st.product_id)}>
                            장바구니 담기
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ColognesCard;
