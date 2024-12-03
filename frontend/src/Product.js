import { Routes, Route } from "react-router-dom";

import ColognesHomeWrap from "./components/product/colognes/ColognesHomeWrap";
import ColognesTotal from "./components/product/colognes/ColognesTotal";
import DetailWrap from "./components/product/productDetail/DetailWrap";

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
import BathShowerWrap from "./components/product/bathBody/BathShowerWrap";
import BathShowerTotal from "./components/product/bathBody/BathShowerTotal";
import BodyHandWash from "./components/product/bathBody/BodyHandWash";
import ShowerGelOil from "./components/product/bathBody/ShowerGelOil";
import BathOil from "./components/product/bathBody/BathOil";
import ColognesCate from "./components/product/colognes/ColognesCate";
import AProductList from "./components/admin/product/AProductList";

function Product() {
    return (
        <Routes>
            <Route path="/:product_category_one" element={<ColognesHomeWrap />}>
                <Route path="" element={<ColognesTotal />} />
                <Route path=":product_scent" element={<ColognesCate />} />
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
                <Route path="bath-shower" element={<BathShowerWrap />}>
                    <Route path="" element={<BathShowerTotal />} />
                    <Route path="body-handwash" element={<BodyHandWash />} />
                    <Route path="shower-gel-oil" element={<ShowerGelOil />} />
                    <Route path="bath-oil" element={<BathOil />} />
                </Route>
            </Route>
            <Route path="/product" element={<DetailWrap />} />
            <Route path="/admin/product" element={<AProductList />} />
            <Route
                path="/admin/product/detail/:product_id"
                element={<AProductList />}
            />
        </Routes>
    );
}

export default Product;
