import React, { useEffect, useState } from "react";
import styles from "../../scss/dup/finderModal.module.scss";

const FinderModal = ({ openModal, setOpenModal, finderData }) => {
    const [curQuestion, setCurQuestion] = useState(0);
    // console.log(finderData);

    const nextGo = () => {
        if (curQuestion < finderData.length - 1) {
            setCurQuestion((prev) => prev + 1);
        }
    };
    const prevGo = () => {
        if (curQuestion > 0) {
            setCurQuestion((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.modalTitle}>센트파인더</div>
                <div className={styles.content}>
                    {finderData.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.question} ${
                                    index === curQuestion ? styles.active : ""
                                }`}
                            >
                                <div>{data.question}</div>
                                <div>
                                    {data.options.map((option, i) => {
                                        return (
                                            <div key={i}>
                                                <input
                                                    className={styles.btn}
                                                    type="radio"
                                                    name={`queston-${index}`}
                                                    id={`option-${index}-${i}`}
                                                    value={i}
                                                />
                                                <label
                                                    for={`option-${index}-${i}`}
                                                >
                                                    {option}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={prevGo}
                                        disabled={curQuestion === 0}
                                    >
                                        이전
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextGo}
                                        disabled={
                                            curQuestion ===
                                            finderData.length - 1
                                        }
                                    >
                                        다음
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div className={(styles.question, styles.active)}>
                        <div>{finderData[0].question}</div>
                        <div>
                            <input
                                className={styles.btn}
                                type="radio"
                                name="for"
                                id="forMe"
                                value={1}
                            />
                            <label for="forMe">당신을 위한</label>
                            <input
                                className={styles.btn}
                                type="radio"
                                name="for"
                                id="forYou"
                                value={2}
                            />
                            <label for="forYou">누군가를 위한</label>
                            <div>
                                <button>이전</button>
                                <button>다음</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div>누구를 위한 건가요?</div>
                        <div>
                            <div>남성</div>
                            <div>여성</div>
                            <div>모두</div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div>언제 사용할 예정인가요?</div>
                        <div>
                            <div>평범한 일상에서</div>
                            <div>특별한 저녁 모임 혹은 파티</div>
                            <div>나른한 오후 시간에</div>
                            <input type="radio" name="" id="" />
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div>당신을 가장 매료시키는 단어는?</div>
                        <div>
                            <div>신선한</div>
                            <div>생동감 있는</div>
                            <div>섬세한</div>
                            <div>깊은</div>
                            <div>풍부한</div>
                        </div>
                    </div>
                    <div className={styles.question}>
                        <div>당신을 가장 매료시키는 단어는?</div>
                        <div>
                            <div>관용적인</div>
                            <div>편안한</div>
                            <div>고급스러운</div>
                            <div>우아한</div>
                            <div>활기찬</div>
                        </div>
                    </div> */}
                </div>
                <button
                    className="cancle"
                    type="button"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
                    취소
                </button>
            </div>
        </div>
    );
};

export default FinderModal;
