import React, { useEffect, useState } from "react";
import DetailTop from "./DetailTop";
import DetailAcor from "./DetailAcor";
import DetailTasting from "./DetailTasting";
import ReviewList from "../../service/review/ReviewList";
import ColognesUse from "./ColognesUse";
import { useParams } from "react-router-dom";
import axios from "axios";
import CandleUse from "./CandleUse";
import ProductSwiper from "../ProductSwiper";
import DiffuserUse from "./DiffuserUse";

const DetailWrap = () => {
    const { product_opt_id } = useParams();
    const [comp, setComp] = useState(null);
    const [product, setProduct] = useState(null);

    console.log(product_opt_id);

    const productGetAxios = () => {
        // console.log("product_scent : ", product_scent);

        axios
            .get(`http://localhost:5001/product/detail/${product_opt_id}`)
            .then((res) => {
                if (res.data) {
                    setProduct(res.data);
                } else {
                    console.warn("No product data found");
                }
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    useEffect(() => {
        if (!product_opt_id) {
            console.log("데이터 없음");
            return;
        }
        productGetAxios();

        // console.log(product.product_category_id);
    }, [product_opt_id]);

    useEffect(() => {
        if (product && product.product_category_id == 1) {
            setComp(
                <>
                    <DetailTasting /> <ColognesUse />
                </>
            );
            console.log(product);
        } else if (product && product.product_category_id == 2) {
            setComp(<CandleUse />);
        } else {
            setComp(<DiffuserUse />);
        }
    }, [product]);

    console.log(comp);

    return (
        <div>
            <DetailTop />
            <DetailAcor />
            {comp}
            <ProductSwiper product={[]} />
            {product ? (
                <ReviewList product_id={product.product_id} />
            ) : (
                <p>Loading reviews...</p> // 로딩 중 메시지 추가
            )}
        </div>
    );
};

export default DetailWrap;
