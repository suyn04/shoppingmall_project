import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/mypage/ViewOrders.module.scss';

function ViewOrders() {
    const orders = [
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '배송중',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation',
        },
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '교환중',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation',
        },
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '교환완료',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation2',
        },
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '배송완료',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation2',
        },
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '반품중',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation3',
        },
        {
            date: '2024/09/12',
            orderNumber: '1792266802',
            status: '반품완료',
            trackingNumber: '6078918209416',
            detailsUrl: '/orderInformation3',
        },
    ];

    return (
        <div className={styles.orderlistcontainer}>
            <div className={styles.block}>
                <div className={styles.orderheader}>주문 전체 보기</div>
                <p className={styles.orderdescription}>주문하신 제품의 상세내역을 보시려면 아래 자세히 보기를 클릭해 주세요</p>

                <div className={styles.orderlist}>
                    <div className={styles.orderlistheader}>
                        <div>주문번호</div>
                        <div>주문날짜</div>
                        <div>주문상태</div>
                        <div>송장번호</div>
                    </div>
                    {orders.map((order, index) => (
                        <div className={styles.orderlistitem} key={index}>
                            <div>{order.date}</div>
                            <div>
                                {order.orderNumber}
                                <Link to={order.detailsUrl} className={styles.a1}>
                                    자세히 보기
                                </Link>
                            </div>
                            <div>{order.status}</div>
                            <div>{order.trackingNumber}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewOrders;
