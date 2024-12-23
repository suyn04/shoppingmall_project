import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../scss/member/MemberList.module.scss';

function DeletedMember() {
    const [arr, setArr] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]); // 필터링된 고객 데이터
    const bkURL = process.env.REACT_APP_BACK_URL;

    // 데이터 가져오기
    useEffect(() => {
        axios
            .get(`${bkURL}/admin/member/deletedmember`)
            .then(res => {
                setArr(res.data);
                setFilteredCustomers(res.data); //전체 탈퇴고객 표시
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, []);

    return (
        <div className={styles.memberlist}>
            <table>
                <tr>
                    <td>No.</td>
                    <td>고객번호</td>
                    <td>고객명</td>
                    <td>연락처</td>
                    <td>이메일</td>
                    <td>상태</td>
                </tr>
                {filteredCustomers.map((customer, index) => (
                    <tr key={customer.customer_id}>
                        <td>{index + 1}</td>
                        <td>{customer.customer_id}</td>
                        <td>{customer.customer_name}</td>
                        <td>{customer.contact_number}</td>
                        <td>{customer.email}</td>
                        <td>{customer.status}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default DeletedMember;
