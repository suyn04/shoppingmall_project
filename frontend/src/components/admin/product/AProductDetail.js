import React from "react";

const AProductDetail = () => {
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
    }, []);
    return (
        <div>
            <table border="1">
                <tr>
                    <td>제품 국문명</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 영문명</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 가격</td>
                    <td>
                        <input type="number" />
                    </td>
                </tr>
                <tr>
                    <td>제품 용량</td>
                    <td>
                        <input type="number" />
                        <input type="radio" name="" id="" />
                    </td>
                </tr>
                <tr>
                    <td>제품 스페셜</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 카테고리1</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 카테고리2</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 카테고리3</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 향</td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
                <tr>
                    <td>제품 그룹향</td>
                    <td></td>
                </tr>
                <tr>
                    <td>제품 </td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default AProductDetail;
