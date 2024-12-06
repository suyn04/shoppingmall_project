import React from "react";
import { Link } from "react-router-dom";
import styles from "../../scss/product/colongnesNav.module.scss";

const ProductNav = ({ navInfo }) => {
    console.log(navInfo);

    return (
        <ul className={styles.colongnesNav}>
            {navInfo.map((info, i) => {
                return (
                    <li>
                        <Link to={info.url}>{info.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductNav;
