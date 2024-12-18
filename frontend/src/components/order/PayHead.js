import React from 'react';
import styles from '../../scss/order/payHead.module.scss'

function PayHead(props) {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepActive}>
        <div className={styles.circle}></div>
        <div className={styles.label}>주문서 작성</div>
      </div>

      <div className={styles.step}>
        <div className={styles.circle}></div>
        <div className={styles.label}>주문 검토</div>
      </div>

      <div className={styles.step}>
        <div className={styles.circle}></div>
        <div className={styles.label}>결제</div>
      </div>

      <div className={styles.step}>
        <div className={styles.circle}></div>
        <div className={styles.label}>주문 최종 확인</div>
      </div>
    </div>
  );
}

export default PayHead;