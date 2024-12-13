import React from "react";
import styles from "../../scss/dup/finderModal.module.scss";

const FinderModal = ({ openModal, setOpenModal }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.modalTitle}>센트파인더</div>
                <div className={styles.content}>
                    <div>
                        <div>당신의 고민은?</div>
                        <div>
                            <input
                                className={styles.btn}
                                type="radio"
                                name="for"
                                id="for"
                                value={1}
                            />
                            <label for="for">당신을 위한</label>
                            <input
                                className={styles.btn}
                                type="radio"
                                name="for"
                                id="for"
                                value={2}
                            />
                            <label for="for">누군가를 위한</label>
                        </div>
                    </div>
                    <div>
                        <div>누구를 위한 건가요?</div>
                        <div>
                            <div>남성</div>
                            <div>여성</div>
                            <div>모두</div>
                        </div>
                    </div>
                    <div>
                        <div>언제 사용할 예정인가요?</div>
                        <div>
                            <div>평범한 일상에서</div>
                            <div>특별한 저녁 모임 혹은 파티</div>
                            <div>나른한 오후 시간에</div>
                            <input type="radio" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div>당신을 가장 매료시키는 단어는?</div>
                        <div>
                            <div>신선한</div>
                            <div>생동감 있는</div>
                            <div>섬세한</div>
                            <div>깊은</div>
                            <div>풍부한</div>
                        </div>
                    </div>
                    <div>
                        <div>당신을 가장 매료시키는 단어는?</div>
                        <div>
                            <div>관용적인</div>
                            <div>편안한</div>
                            <div>고급스러운</div>
                            <div>우아한</div>
                            <div>활기찬</div>
                        </div>
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
        </div>
    );
};

export default FinderModal;
