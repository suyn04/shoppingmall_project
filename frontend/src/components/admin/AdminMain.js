import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Analysis from './analysis/Analysis';
import styles from '../../scss/admin/AdminMain.module.scss';
import axios from 'axios';

const AdminMain = () => {
    const [order, setOrderCount] = useState(0);
    // const [ask, setaskCount] = useState(0);

    const DataCount = async () => {
        try {
            // 신규 주문접수건 가져오기
            const orderCnt = await axios.post('http://localhost:5001/admin/order', { action: 'orderCount' });
            setOrderCount(orderCnt.data);

            // // 문의접수건 가져오기
            // const askCount = await axios.post('http://localhost:5001/멀라', { action: 'askCount' });
            // setaskCount(askCount.data);
        } catch (error) {
            console.error('데이터 가져오다가 에러남', error.message);
        }
    };

    // 컴포넌트 마운트 시 데이터 로드
    useEffect(() => {
        DataCount();
    }, []);

    return (
        <div className={styles.container}>
            {/* 업무 -- 건수 확인하고 클릭시 해당 게시판으로 넘어감 */}
            <div className={styles.topboard}>
                <Link to="/admin/order">
                    <div>주문접수</div>
                    <div className={styles.title}>{order} 건</div>
                </Link>
                <Link to="/admin/onetoone">
                    <div>문의접수</div>
                    <div className={styles.title}>5 건</div>
                </Link>
                <Link to="/admin/reports">
                    <div>반품요청</div>
                    <div className={styles.title}>8 건</div>
                </Link>
                <Link to="/admin/reports">
                    <div>신고접수</div>
                    <div className={styles.title}>3 건</div>
                </Link>
            </div>

            {/* 차트 영역 */}
            <div className={styles.chartcontainer}>
                <div className={styles.chartbox}>
                    {/* 메인에 차트를 끌어와서 넣으려면 컴포넌트로 만들어서 가져오면 댐 */}
                    {/* <Bar 
                        data={chartData} 
                        options={{ 
                        scales: { 
                            y: { beginAtZero: true }
                        },
                        }} 
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
