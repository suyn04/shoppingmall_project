import "../../../scss/product/detailTop.scss";

const DetailTop = () => {
    return (
        <div className="detail-top">
            <div className="img-wrap">
                <img src="/imgs/product/blackberry_50ml.jpg" alt="" />
            </div>
            <div className="content-wrap">
                <div className="text-wrap">
                    <div>베스트 셀러</div>
                    <div>Blackberry & Bay Cologne</div>
                    <div>블랙베리 앤 베이 코롱</div>
                    <div>리뷰보기</div>
                    <div>₩235,000</div>
                    <div>
                        순수의 향. 블랙베리를 따던 어린 시절의 추억, 블랙베리로
                        물든 입술과 손. 이제 막 수확한 월계수 잎의 신선함에 톡
                        쏘는 블랙베리 과즙을 가미하였습니다. 매력적이고 생기
                        넘치는 상쾌한 느낌의 향입니다.
                    </div>
                </div>
                <div className="volume-wrap">
                    <div>30ml</div>
                    <div>50ml</div>
                    <div>100ml</div>
                </div>
                <div className="button-wrap">
                    <button>장바구니 담기</button>
                </div>
            </div>
        </div>
    );
};

export default DetailTop;
