import { BrowserRouter, Routes, Route } from "react-router-dom";

import ColognesHomeWrap from "./components/product/colognesHome/ColognesHomeWrap";
import ColognesTotal from "./components/product/colognesHome/ColognesTotal";
import ColognesCitrus from "./components/product/colognesHome/ColognesCitrus";
import DetailWrap from "./components/product/productDetail/DetailWrap";

function Product() {
    return (
        <Routes>
            <Route path="/colognes" element={<ColognesHomeWrap />}>
                <Route path="" element={<ColognesTotal />} />
                <Route path="citrus" element={<ColognesCitrus />} />
            </Route>
            <Route path="/product" element={<DetailWrap />} />
        </Routes>
    );
}

export default Product;
