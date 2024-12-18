import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "../../scss/product/swiperStyles.scss";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export default function ProductSwiper({ product }) {
    const [curProduct, setCurProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        console.log("ProductSwiper 동작");
        if (!product) {
            console.log(`상품이 없습니다`);
            return;
        }

        setCurProduct(product);
    }, [product]);
    const fileGo = (file) => {
        if (file) {
            return <img src={`http://localhost:5001/imgs/product/${file}`} />;
        }
        return null;
    };

    return (
        <div className="product">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {curProduct.map((prod, i) => {
                    return (
                        <SwiperSlide>
                            <div
                                onClick={() => {
                                    navigate(`/product/${prod.product_opt_id}`);
                                }}
                            >
                                {fileGo(prod.product_upSystem)}
                                <div>{prod.product_special}</div>
                                <div>{prod.product_name_eng}</div>
                                <div>{prod.product_name_kor}</div>
                                <div>{prod.product_volume}</div>
                                <div>₩ {prod.product_price}</div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
