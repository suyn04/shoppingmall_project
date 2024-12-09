import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailVolume = ({ product_id }) => {
    const navigate = useNavigate();
    const [volume, setVolume] = useState([]);
    const volumeGetAxios = () => {
        // console.log("product_scent : ", product_scent);

        if (!product_id) {
            console.log("데이터 없음");
            return;
        }
        axios
            .get(`http://localhost:5001/product/volume/${product_id}`)
            .then((res) => {
                console.log(res.data);
                setVolume(res.data);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };

    useEffect(() => {
        volumeGetAxios();
    }, []);
    return (
        <>
            {volume.map((volume, i) => {
                return (
                    <button
                        onClick={() => {
                            navigate(`/product/${volume.product_opt_id}`);
                        }}
                    >
                        {volume.product_volume}
                    </button>
                );
            })}
        </>
    );
};

export default DetailVolume;
