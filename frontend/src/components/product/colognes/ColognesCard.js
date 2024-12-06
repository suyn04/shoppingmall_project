import { useState, useEffect } from "react";
import styles from "../../../scss/product/productCard.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ColognesCard = () => {
    const navigate = useNavigate();
    const naviGo = (route) => {
        navigate(route);
    };
    const { product_scent } = useParams();
    const curPath = window.location.pathname;
    const [colognes, setColognes] = useState([]);

    const colognesGetAxios = () => {
        axios
            .get(`http://localhost:5001/product/colognes`)
            .then((res) => {
                // console.log("서버 다녀옴", res.data);
                // console.log(product_scent);
                console.log(curPath); // "/path"

                // console.log(
                //     res.data.filter((item) => {
                //         item.product_volume == "100ml";
                //         item.product_scent == `${product_scent}`;
                //     })
                // );
                let curProduct = res.data.filter(
                    (item) => item.product_volume == "100ml"
                );
                if (product_scent) {
                    curProduct = res.data.filter(
                        (item) =>
                            item.product_volume == "100ml" &&
                            item.product_scent == `${product_scent}`
                    );
                }
                setColognes(curProduct);
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

    const fileGo = (file) => {
        if (file) {
            return <img src={`http://localhost:5001/imgs/product/${file}`} />;
        }
        return null;
    };

    return (
        <div className={styles.cardTotal}>
            {colognes.map((prod, i) => {
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

export default ColognesCard;
