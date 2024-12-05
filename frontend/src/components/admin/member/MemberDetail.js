import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function MemberDetail() {
    const { id } = useParams(); // URL에서 id 추출
    const [mm, setMM] = useState(null);
    const navigate = useNavigate();
    const [newStatus, setNewStatus] = useState('정상');

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

    const handleStatusChange = async () => {
        try {
            const res = await axios.put(`http://localhost:5001/admin/member/update/${id}`, {
                newStatus,
            });
            if (res.status === 200) {
                alert(res.data.message); // 성공 메시지 출력
                if (res.status === '탈퇴') {
                    navigate('/admin/member'); // 탈퇴 후 목록으로 이동
                } else {
                    setMM({ ...mm, status: newStatus }); // 상태 업데이트
                }
            }
        } catch (err) {
            console.error('상태 업데이트 실패:', err);
            alert('상태 업데이트 중 오류가 발생했습니다.');
        }
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
                    <td>{mm.join_date}</td>
                    <td>{mm.last_login_date}</td>
                    <td>
                        <select
                            value={newStatus} // 기존에 'status'로 사용하던 곳을 'newStatus'로 변경
                            onChange={e => setNewStatus(e.target.value)}
                        >
                            <option value="정상">정상</option>
                            <option value="휴면">휴면</option>
                            <option value="탈퇴">탈퇴</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default MemberDetail;
