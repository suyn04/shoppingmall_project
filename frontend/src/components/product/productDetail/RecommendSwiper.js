import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../scss/swiperStyles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function RecommendSwiper() {
    return (
        <>
            <div>당신을 위한 추천 상품</div>
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
                <SwiperSlide>
                    <div>
                        <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
