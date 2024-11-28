import React from "react";
import "../../../scss/product/colognesCard.scss";
import { useNavigate } from "react-router-dom";

const ColognesCard = () => {
    const navigate = useNavigate();
    const naviGo = (route) => {
        navigate(route);
    };
    return (
        <div className="card-total">
            <div className="card">
                <div
                    className="card-content"
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>
                        <div>Lime Basil & Mandarin Cologne</div>
                        <div>라임 바질 앤 만다린 코롱</div>
                        <div>₩235,000</div>
                    </div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className="card">
                <div
                    className="card-content"
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className="card">
                <div
                    className="card-content"
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    {" "}
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className="card">
                <div
                    className="card-content"
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
            <div className="card">
                <div
                    className="card-content"
                    onClick={() => {
                        naviGo("/product");
                    }}
                >
                    <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
                    <div>Lime Basil & Mandarin Cologne</div>
                    <div>라임 바질 앤 만다린 코롱</div>
                    <div>₩235,000</div>
                </div>
                <button>장바구니 담기</button>
            </div>
        </div>
    );
};

export default ColognesCard;
