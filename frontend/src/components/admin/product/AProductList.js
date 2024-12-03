import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AProductList = () => {
    const [product, setProduct] = useState([]);
    const productListGetAxios = () => {
        axios
            .get(`http://localhost:5001/admin/product`)
            .then((res) => {
                console.log("서버 다녀옴", res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    useEffect(() => {
        productListGetAxios();
    });
    return (
        <div>
            <div>AProductList</div>
            <table>
                <tr>
                    <td>제품명</td>
                    <td>향</td>
                </tr>
                {product.map((st, i) => {
                    return (
                        <tr>
                            <td>
                                <Link to={`/admin/product/${st.product_id}`}>
                                    {st.product_name_kor}
                                </Link>
                            </td>
                            <td>{st.product_scent}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default AProductList;
