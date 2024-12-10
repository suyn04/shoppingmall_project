import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../scss/mypage/OrderDetail.module.scss';

function OrderDetail() {
    const [detailorders, setDetailOrders] = useState([]); // 주문 목록 상태

    useEffect(() => {
        const OrderDetail = async () => {
            const sessionToken = sessionStorage.getItem('sessionToken');
            const orderId = window.location.pathname.split('/').pop(); // URL에서 order_id 추출

            if (!sessionToken) {
                alert('로그인이 필요합니다.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5001/myPage/orderDetail/${orderId}`, {
                    headers: { Authorization: sessionToken },
                });
                console.log('주문 상세 데이터:', response.data);
                setDetailOrders([response.data]); // 상세보기라 배열로 처리
            } catch (err) {
                console.error('데이터 가져오기 오류:', err);
                alert('데이터를 불러올 수 없습니다.');
            }
        };

        OrderDetail();
    }, []);

    // 날짜 포맷팅 함수
    const formatDate = dateString => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    return (
        <div>
            <div className={styles.Dorderlistcontainer}>
                <div className={styles.Dblock}>
                    <div className={styles.Dorderheader}>주문 상세 보기</div>

                    <div className={styles.Dorderlist}>
                        <div className={styles.Dorderlistheader}>
                            <div className={styles.Dnum}>주문번호</div>
                            <div className={styles.Ddate}>주문일</div>
                            <div className={styles.Dpay}>결제수단</div>
                            <div className={styles.Damount}>결제금액</div>
                            <div className={styles.Dstatus}>주문상태</div>
                            <div className={styles.Dinvoice}>송장번호</div>
                        </div>
                        {detailorders.length > 0 ? (
                            detailorders.map((od, index) => (
                                <div className={styles.Dorderlistitem} key={index}>
                                    <div>{od[0].order_id}</div>
                                    <div>{formatDate(od[0].order_date)}</div>
                                    <div>{od[0].pay_to}</div>
                                    <div>{od[0].order_total}</div>
                                    <div>{od[0].order_status}</div>
                                    <div>{od[0].invoice}</div>
                                </div>
                            ))
                        ) : (
                            <p>주문 내역이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
