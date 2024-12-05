import React, { useState, useEffect } from 'react';
import axios from 'axios';
function ReportPage() {
    const [reports, setReports] = useState([]); // 신고 데이터 상태

    // 데이터 가져오기
    useEffect(() => {
        axios
            .get('http://localhost:5001/reports')
            .then(response => {
                setReports(response.data); // 데이터 설정
            })
            .catch(error => {
                console.error('Failed to fetch reports:', error);
            });
    }, []); // 컴포넌트 로드 시 1회 실행

    // 공개/비공개 상태 변경 (프론트에서만 임시로 처리)
    const handleStatusChange = (reportId, currentStatus) => {
        const newStatus = currentStatus === 1 ? 0 : 1;
        setReports(prevReports => prevReports.map(report => (report.report_no === reportId ? { ...report, check_status: newStatus } : report)));
    };

    return (
        <div>
            <h1>신고 목록</h1>
            <table>
                <thead>
                    <tr>
                        <th>신고 번호</th>
                        <th>리뷰 번호</th>
                        <th>리뷰 제목</th>
                        <th>작성자</th>
                        <th>신고자</th>
                        <th>신고 날짜</th>
                        <th>처리 상태</th>
                        <th>옵션</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.report_no}>
                            <td>{report.report_no}</td>
                            <td>{report.review_no}</td>
                            <td>{report.review_title}</td>
                            <td>{report.review_author}</td>
                            <td>{report.reporter}</td>
                            <td>{new Date(report.report_date).toLocaleDateString()}</td>
                            <td>{report.check_status ? '공개' : '비공개'}</td>
                            <td>
                                <button onClick={() => handleStatusChange(report.report_no, report.check_status)}>{report.check_status ? '비공개로 전환' : '공개로 전환'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReportPage;
