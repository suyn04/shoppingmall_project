import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportList = () => {
    const [reports, setReports] = useState([]); // 신고 목록 상태
    const navigate = useNavigate(); // 페이지 이동 함수 

  // 신고 목록 가져오기
  useEffect(() => {
    const fetchReports = async () => {
        alert('신고관리진입')
        try {
            const response = await axios.get('http://localhost:5001/reports');
            setReports(response.data); // 데이터 저장
        } catch (err) {
            console.error('신고 목록 불러오기 실패:', err);
            alert('신고 목록을 불러오는 데 실패했습니다.');
        }
    };

    fetchReports(); // 함수 호출
}, []); // 컴포넌트가 처음 렌더링될 때 실행


    // 상세보기로 이동
    const handleDetail = (id) => {
        navigate(`/admin/reports/detail/${id}`); // URL 이동
    };

    return (
        <div>
            <h2>신고 목록</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>신고자</th>
                        <th>신고 일자</th>
                        <th>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                        {reports.map((report) => (
                            <tr key={report.report_no}>
                                <td>{report.report_no}</td>
                                <td>{report.reporter}</td>
                                <td>{new Date(report.report_date).toLocaleDateString()}</td>
                                <td>{report.check_status ? '처리 완료' : '미처리'}</td>
                                <td>
                                    <button onClick={() => handleDetail(report.report_no)}>
                                        보기
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </div>
    );
};

export default ReportList;
