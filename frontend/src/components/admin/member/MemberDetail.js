import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MemberDetail() {
    const { id } = useParams(); // URL에서 id 추출
    const [mm, setMM] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5001/admin/member/detail/${id}`)
            .then(res => {
                setMM(res.data[0]);
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, [id]);

    // 날짜 포맷팅 함수
    const formatDate = dateString => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    if (!mm) {
        return <div>회원 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>고객번호</th>
                    <th>고객명</th>
                    <th>이메일</th>
                    <th>연락처</th>
                    <th>가입일</th>
                    <th>마지막접속일</th>
                    <th>상태</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{mm.customer_id}</td>
                    <td>{mm.customer_name}</td>
                    <td>{mm.email}</td>
                    <td>{mm.contact_number}</td>
                    <td>{formatDate(mm.join_date)}</td>
                    <td>{formatDate(mm.last_login_date)}</td>
                    <td>{mm.status}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default MemberDetail;
