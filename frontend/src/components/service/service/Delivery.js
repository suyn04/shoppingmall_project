import React from 'react'
import styles from '../../../scss/service/Accordion.module.scss';

const Delivery = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>배송 정보</div>
    <b>배송 지연 안내</b>
  <p>주문하신 제품은 모두 무료로 배송해 드리며, 결제 완료된 시점으로부터 1~3일 이내 출고됩니다.<br/>
단, 도서 지역 및 섬 지역은 지연 될 수 있으며, 명절 및 연말이나 주문 폭주 시 또한 지연될 수 있습니다.<br/>
공휴일 및 기타 휴무일에는 배송 되지 않고 배송 소요 기간에서 제외됩니다.</p>
    </div>
  )
}

export default Delivery
