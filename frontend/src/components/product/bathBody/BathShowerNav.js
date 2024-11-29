import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../../../scss/product/colongnesNav.module.scss";

const BathShowerNav = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <ul className={styles.colongnesNav}>
            <li>
                <Link to={"/bath-body/bath-shower"}>전체</Link>
            </li>
            <li>
                <Link to={"/bath-body/bath-shower/body-handwash"}>
                    바디 앤 핸드워시
                </Link>
            </li>
            <li>
                <Link to={"/bath-body/bath-shower/shower-gel-oil"}>
                    샤워 젤 앤 오일
                </Link>
            </li>
            <li>
                <Link to={"/bath-body/bath-shower/bath-oil"}>배스 오일</Link>
            </li>
        </ul>
    );
};

export default BathShowerNav;
