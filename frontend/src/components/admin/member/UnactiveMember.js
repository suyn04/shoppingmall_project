import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../scss/member/MemberList.module.scss';

function UnactiveMember() {
    const [customers, setCustomers] = useState([]); // 고객 데이터
    const [selectedCustomers, setSelectedCustomers] = useState([]); // 선택된 고객 ID

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/admin/member/unactivemember');
                setCustomers(data);
            } catch (err) {
                console.error('데이터 로드 실패:', err);
            }
        };
        fetchData();
    }, []);

    // 상태 변경 요청
    const handleUpdateStatus = async () => {
        try {
            await axios.post('http://localhost:5001/admin/member/unactivemember', {
                customer_ids: selectedCustomers,
                status: '정상',
            });
            alert('선택된 고객을 정상 상태로 변경했습니다.');
            setCustomers(prev => prev.map(customer => (selectedCustomers.includes(customer.customer_id) ? { ...customer, status: '정상' } : customer)));
            setSelectedCustomers([]);
        } catch (err) {
            console.error('상태 업데이트 실패:', err);
        }
    };

    // 전체 선택/해제
    const toggleSelectAll = () => {
        setSelectedCustomers(customers.length === selectedCustomers.length ? [] : customers.map(c => c.customer_id));
    };

    // 개별 선택/해제
    const toggleSelectCustomer = id => {
        setSelectedCustomers(prev => (prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]));
    };

    return (
        <div className={styles.memberlist}>
            <div className={styles.actionButtons}>
                <button onClick={handleUpdateStatus} disabled={selectedCustomers.length === 0}>
                    정상 상태로 변경
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" checked={selectedCustomers.length === customers.length && customers.length > 0} onChange={toggleSelectAll} />
                        </th>
                        <th>고객번호</th>
                        <th>고객명</th>
                        <th>연락처</th>
                        <th>이메일</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.customer_id}>
                            <td>
                                <input type="checkbox" checked={selectedCustomers.includes(customer.customer_id)} onChange={() => toggleSelectCustomer(customer.customer_id)} />
                            </td>
                            <td>{customer.customer_id}</td>
                            <td>{customer.customer_name}</td>
                            <td>{customer.contact_number}</td>
                            <td>{customer.email}</td>
                            <td>{customer.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UnactiveMember;
