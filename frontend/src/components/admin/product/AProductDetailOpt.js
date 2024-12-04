import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AProductDetailOpt = () => {
    const { product_id } = useParams();
    const [productOpt, setProductOpt] = useState([]);

    const productListGetAxios = () => {
        axios
            .get(
                `http://localhost:5001/product/admin/detail/option/${product_id}`
            )
            .then((res) => {
                console.log("서버 다녀옴", res.data);
                setProductOpt(res.data);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };
    useEffect(() => {
        if (!product_id) {
            console.log("id 없음");
            return;
        }
        productListGetAxios();
    }, []);
    if (!productOpt) {
        return <div>id 없음</div>;
    }
    return (
        <div>
            <div>
                <div>제품 옵션</div>
                <table border="1">
                    {productOpt.map((st, i) => {
                        return (
                            <tr>
                                <td>제품 용량</td>
                                <input type="text" value={st.product_volume} />
                                <td>제품 가격</td>
                                <input type="number" value={st.product_price} />
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default AProductDetailOpt;
