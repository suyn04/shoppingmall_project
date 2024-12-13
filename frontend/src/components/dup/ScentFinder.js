import React from "react";
import FinderModal from "./FinderModal";

const ScentFinder = () => {
    return (
        <div>
            <div>센트파인더</div>
            <p>당신 만의 시그니처 향을 찾고 계시나요?</p>
            <p>아니면 특별한 누군가에게 줄 선물이 고민되시나요?</p>
            <p>지금부터 조 말론 런던이 제안하는 완벽한 향을 만나보세요.</p>
            <button>시작하기</button>
            <img src="/imgs/product/scentFinderBanner.jpg" alt="" />
            <p>
                “탑, 하트, 베이스 노트에 대해 아는 것도 도움이 됩니다. 하지만
                원료 하나 하나에 신경쓸 필요는 없어요. 끌리는 향을 찾다보면 나도
                모르게 새로운 발견을 하게 되실거에요" 셀린 루, 글로벌 프레그런스
                디렉터”
            </p>
            <p>셀린 루</p>
            <p>글로벌 프레그런스 헤드 디렉터</p>
            <FinderModal />
        </div>
    );
};

export default ScentFinder;
