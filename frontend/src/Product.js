import { BrowserRouter, Routes, Route } from "react-router-dom";

import ColognesHomeWrap from "./components/product/colognes/ColognesHomeWrap";
import ColognesTotal from "./components/product/colognes/ColognesTotal";
import ColognesCitrus from "./components/product/colognes/ColognesCitrus";
import DetailWrap from "./components/product/productDetail/DetailWrap";
import ColognesFruity from "./components/product/colognes/ColognesFruity";
import ColognesLightFloral from "./components/product/colognes/ColognesLightFloral";
import ColognesFloral from "./components/product/colognes/ColognesFloral";
import ColognesWoody from "./components/product/colognes/ColognesWoody";
import HomeSecntsHomeWrap from "./components/product/homeSecnts/HomeSecntsHomeWrap";
import HomeSecntsTotal from "./components/product/homeSecnts/HomeSecntsTotal";
import CandleHomeWrap from "./components/product/homeSecnts/CandleHomeWrap";
import CandleTotal from "./components/product/homeSecnts/CandleTotal";
import CandleCitrus from "./components/product/homeSecnts/CandleCitrus";
import CandleFruity from "./components/product/homeSecnts/CandleFruity";
import CandleLightFloral from "./components/product/homeSecnts/CandleLightFloral";
import CandleFloral from "./components/product/homeSecnts/CandleFloral";
import CandleWoody from "./components/product/homeSecnts/CandleWoody";
import BathBodyTotal from "./components/product/bathBody/BathBodyTotal";
import BathBodyHomeWrap from "./components/product/bathBody/BathBodyHomeWrap";

function Product() {
    return (
        <Routes>
            <Route path="/colognes" element={<ColognesHomeWrap />}>
                <Route path="" element={<ColognesTotal />} />
                <Route path="citrus" element={<ColognesCitrus />} />
                <Route path="fruity" element={<ColognesFruity />} />
                <Route path="light-floral" element={<ColognesLightFloral />} />
                <Route path="floral" element={<ColognesFloral />} />
                <Route path="woody" element={<ColognesWoody />} />
            </Route>
            <Route path="/home-scents" element={<HomeSecntsHomeWrap />}>
                <Route path="" element={<HomeSecntsTotal />} />
                <Route path="candle" element={<CandleHomeWrap />}>
                    <Route path="" element={<CandleTotal />} />
                    <Route path="citrus" element={<CandleCitrus />} />
                    <Route path="fruity" element={<CandleFruity />} />
                    <Route
                        path="light-floral"
                        element={<CandleLightFloral />}
                    />
                    <Route path="floral" element={<CandleFloral />} />
                    <Route path="woody" element={<CandleWoody />} />
                </Route>
            </Route>
            <Route path="/bath-body" element={<BathBodyHomeWrap />}>
                <Route path="" element={<BathBodyTotal />} />
                <Route path="candle" element={<CandleHomeWrap />}>
                    <Route path="" element={<CandleTotal />} />
                    <Route path="citrus" element={<CandleCitrus />} />
                    <Route path="fruity" element={<CandleFruity />} />
                    <Route
                        path="light-floral"
                        element={<CandleLightFloral />}
                    />
                    <Route path="floral" element={<CandleFloral />} />
                    <Route path="woody" element={<CandleWoody />} />
                </Route>
            </Route>
            <Route path="/product" element={<DetailWrap />} />
        </Routes>
    );
}

export default Product;
