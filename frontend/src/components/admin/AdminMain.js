import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Analysis from './analysis/Analysis';
import styles from '../../scss/admin/AdminMain.module.scss';
import axios from 'axios';

const AdminMain = () => {
    // useEffect(() => {
    //     axios
    //         .post(
    //             'http://localhost:5001/admin/order', //index.js의 라우트경로랑 일치시킴
    //             { action: 'countNewOrder' } //주문접수 가져오는 액션
    //         )
    //         .then(response => {
    //             console.log('주문접수 건 확인');
    //             const ordercnt = response.data;
    //         })
    //         .catch(error => {
    //             console.log('주문접수 가져오기 에러 : ', error.message);
    //         });
    // }, []);

    return (
        <div className={styles.container}>
            {/* 업무 -- 건수 확인하고 클릭시 해당 게시판으로 넘어감 */}
            <div className={styles.topboard}>
                <Link to="/admin/order">
                    <div>주문접수</div>
                    <div className={styles.title}>13 건</div>
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
                    <Bar 
                        data={chartData} 
                        options={{ 
                        scales: { 
                            y: { beginAtZero: true }
                        },
                        }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminMain;
