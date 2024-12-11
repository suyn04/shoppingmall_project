import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AProductRegisterOpt = () => {
    const navigate = useNavigate();
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [options, setOptions] = useState([]); // 추가된 옵션 리스트

    const productAxiosGet = () => {
        if (!product_id) {
            console.log("id 없음");
            return;
        }
        axios
            .get(
                `http://localhost:5001/admin/product/register/option/${product_id}`
            )
            .then((res) => {
                console.log(res.data);
                console.log(res.data.option);
                setOptions(res.data.option);
                setProduct(res.data.product[0]);
            })
            .catch((err) => console.error("axios 에러", err));
    };

    useEffect(() => {
        productAxiosGet();
    }, []);

    const submitGo = (me) => {
        me.preventDefault();
        console.log("submitGo 진입");
        const frmData = new FormData(document.myFrm);
        console.log(frmData);

        axios
            .post(
                `http://localhost:5001/admin/product/register/option/${product_id}`,
                frmData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                console.log("옵션 추가 완료", res.data);
                alert("옵션추가가 완료되었습니다.");
                // 옵션 데이터 추가
                const newOption = Object.fromEntries(frmData);
                console.log(newOption);
                productAxiosGet();
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    const delGo = () => {
        console.log("delGo() 진입");

        axios
            .delete(
                `http://localhost:5001/admin/product/register/option/${product_id}`,
                {
                    data: { delUPfile: options.upSystem },
                }
            )
            .then((res) => {
                console.log("삭제완료 ", res.data);
                alert("삭제되었습니다.");
                productAxiosGet();
            })
            .catch((err) => {
                console.error("삭제 오류 ", err);
            });
    };
    function fileGo(file) {
        if (file) {
            return (
                <img
                    src={`http://localhost:5001/imgs/product/${file}`}
                    width="100px"
                />
            );
        }
        return null;
    }

    if (!product) {
        return <div>id 없음</div>;
    }

    return (
        <div>
            <form name="myFrm" onSubmit={submitGo}>
                <div>제품 옵션</div>
                <table border="1">
                    <tr>
                        <td>제품명</td>
                        <td colSpan={4}>
                            <input
                                type="hidden"
                                name="product_id"
                                value={product_id}
                            />
                            {product.product_name_kor}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>옵션</td>
                        <td>제품 용량</td>
                        <td>제품 가격</td>
                        <td>제품 이미지</td>
                        <td rowSpan={2}>
                            <input type="submit" value="옵션 추가" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="number"
                                step="0.1"
                                name="product_volume"
                            />
                            <input type="radio" name="unit" value="ml" />
                            ml
                            <input type="radio" name="unit" value="g" />g
                            <input type="radio" name="unit" value="kg" />
                            kg
                        </td>
                        <td>
                            <input type="number" name="product_price" />원
                        </td>
                        <td>
                            <input type="file" name="product_upfile" />
                        </td>
                    </tr>
                </table>
            </form>

            <h3>추가된 옵션</h3>
            <table border="1">
                <tr>
                    <td>제품 용량</td>
                    <td>제품 가격</td>
                    <td>제품 이미지</td>
                    <td>구분</td>
                </tr>
                {options.map((opt, index) => (
                    <tr key={index}>
                        <td>{opt.product_volume}</td>
                        <td>{opt.product_price} 원</td>
                        <td>{fileGo(opt.product_upSystem)}</td>
                        <td>
                            <button onClick={delGo}>삭제</button>
                        </td>
                    </tr>
                ))}
            </table>
            <button
                onClick={() => {
                    navigate(`/admin/product/detail/${product_id}`);
                }}
            >
                저장
            </button>
        </div>
    );
};

export default AProductRegisterOpt;
