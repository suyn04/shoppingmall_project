import React, { useEffect, useState } from "react";
import DetailTop from "./DetailTop";
import DetailAcor from "./DetailAcor";
import DetailTasting from "./DetailTasting";
import DetailRecommend from "./DetailRecommend";
import ReviewList from "../../service/review/ReviewList";
import ColognesUse from "./ColognesUse";
import { useParams } from "react-router-dom";
import axios from "axios";

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
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    console.log(product);

    useEffect(() => {
        if (!product_opt_id) {
            console.log("데이터 없음");
            return;
        }
        productGetAxios();
        console.log(product);

        // console.log(product.product_category_id);
    }, []);

    useEffect(() => {
        if (product && product.product_category_id == 2) {
            setComp(<ColognesUse />);
        }
    }, [product]);

    return (
        <div>
            <DetailTop />
            <DetailAcor />
            <DetailTasting />
            {comp}
            <DetailRecommend />
            <ReviewList />
        </div>
    );
};

export default DetailWrap;
