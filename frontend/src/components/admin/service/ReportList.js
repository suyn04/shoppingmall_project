import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportList = () => {
    const [reports, setReports] = useState([]); // 신고 목록
    const navigate = useNavigate(); // 이동 함수

    useEffect(() => {
        // 서버에서 신고 목록 가져오기
        axios.get('http://localhost:5001/reports')
            .then((res) => {
                setReports(res.data); // 데이터 저장
            })
            .catch((err) => {
                console.error('목록 오류:', err);
            });
    }, []);

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
                            <td>
                                <button onClick={() => handleDetail(report.report_no)}>보기</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportList;
