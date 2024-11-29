import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../../../scss/product/colongnesNav.module.scss";

const HomeScentsNav = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <ul className={styles.colongnesNav}>
            <li>
                <Link to={"/home-scents/candle"}>전체</Link>
            </li>
            <li>
                <Link to={"/home-scents/candle/citrus"}>시트러스</Link>
            </li>
            <li>
                <Link to={"/home-scents/candle/fruity"}>프루티</Link>
            </li>
            <li>
                <Link to={"/home-scents/candle/light-floral"}>
                    라이트 플로랄
                </Link>
            </li>
            <li>
                <Link to={"/home-scents/candle/floral"}>플로랄</Link>
            </li>
            <li>
                <Link to={"/home-scents/candle/woody"}>우디</Link>
            </li>
        </ul>
    );
};

export default HomeScentsNav;
