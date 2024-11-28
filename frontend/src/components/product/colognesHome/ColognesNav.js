import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../../scss/product/colongnesNav.scss";

const ColognesNav = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <ul className="colongnes-nav">
            <li>
                <Link to={"/colognes"}>전체</Link>
            </li>
            <li>
                <Link to={"/colognes/citrus"}>시트러스</Link>
            </li>
            <li>
                <Link to={"/colognes/fruity"}>프루티</Link>
            </li>
            <li>
                <Link to={"/colognes/light-floral"}>라이트 플로랄</Link>
            </li>
            <li>
                <Link to={"/colognes/floral"}>플로랄</Link>
            </li>
            <li>
                <Link to={"/colognes/woody"}>우디</Link>
            </li>
        </ul>
    );
};

export default ColognesNav;
