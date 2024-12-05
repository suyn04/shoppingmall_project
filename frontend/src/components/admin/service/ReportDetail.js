import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReportDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const [report, setReport] = useState(null); // 신고 상세 데이터

    useEffect(() => {
        // 서버에서 신고 상세 가져오기
        axios.get(`http://localhost:5001/reports/${id}`)
            .then((res) => {
                setReport(res.data); // 데이터 저장
            })
            .catch((err) => {
                console.error('상세 오류:', err);
            });
    }, [id]);

    if (!report) return <p>로딩 중...</p>; // 데이터 없을 때 표시

    return (
        <div>
            <h2>신고 상세</h2>
            <p><strong>번호:</strong> {report.report_no}</p>
            <p><strong>신고자:</strong> {report.reporter}</p>
            <p><strong>신고 일자:</strong> {new Date(report.report_date).toLocaleDateString()}</p>
            <p><strong>내용:</strong> {report.report_detail}</p>
        </div>
    );
};

export default ReportDetail;
