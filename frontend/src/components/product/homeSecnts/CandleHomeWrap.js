import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandleHomeTop from "./CandleHomeTop";
import ProductNav from "../ProductNav";
import axios from "axios";
import ProductCard from "../ProductCard";
import CandleTotal from "./CandleTotal";
import Citrus from "../Citrus";
import Floral from "../Floral";
import Fruity from "../Fruity";
import LightFloral from "../LightFloral";
import Woody from "../Woody";

const CandleHomeWrap = () => {
    const { product_scent } = useParams();
    const curPath = window.location.pathname;

    const [comp, setComp] = useState(null);
    const [candles, setCandles] = useState([]);

    const colognesGetAxios = () => {
        console.log("product_scent : ", product_scent);

        axios
            .get(`http://localhost:5001/product/home-scents/candles`)
            .then((res) => {
                // console.log("서버 다녀옴", res.data);
                // console.log(product_scent);
                // console.log(curPath); // "/path"

                // console.log(
                //     res.data.filter((item) => {
                //         item.product_volume == "100ml";
                //         item.product_scent == `${product_scent}`;
                //     })
                // );
                let curProduct = res.data;
                console.log(curProduct);

                if (product_scent) {
                    curProduct = res.data.filter(
                        (item) => item.product_scent == `${product_scent}`
                    );
                }
                setCandles(curProduct);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };
    useEffect(() => {
        document.title = "캔들";
        colognesGetAxios();
        console.log(candles);
    }, [product_scent]);

    console.log(product_scent);
    useEffect(() => {
        console.log(comp);
        if (!product_scent) {
            setComp(<CandleTotal />);
        }
        if (product_scent == `citrus`) {
            setComp(<Citrus />);
        }
        if (product_scent == `floral`) {
            setComp(<Floral />);
        }
        if (product_scent == `fruity`) {
            setComp(<Fruity />);
        }
        if (product_scent == `light-floral`) {
            setComp(<LightFloral />);
        }
        if (product_scent == `woody`) {
            setComp(<Woody />);
        }
    }, [product_scent]);
    return (
        <div>
            <CandleHomeTop />
            <ProductNav
                navInfo={[
                    { url: "/home-scents/candles", title: "전체" },
                    { url: "/home-scents/candles/citrus", title: "시트러스" },
                    { url: "/home-scents/candles/fruity", title: "프루티" },
                    {
                        url: "/home-scents/candles/light-floral",
                        title: "라이트 플로랄",
                    },
                    { url: "/home-scents/candles/floral", title: "플로랄" },
                    { url: "/home-scents/candles/woody", title: "우디" },
                ]}
            />
            {comp}
            <ProductCard product={candles} />
        </div>
    );
};

export default CandleHomeWrap;
