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

// 공개/비공개 상태 변경 (프론트에서만 임시로 처리)
const handleStatusChange = () => {
    if (report) {
        const newStatus = report.check_status === 1 ? 0 : 1;
        setReport((prevReport) => ({
            ...prevReport,
            check_status: newStatus,
        }));
    }
};
    if (!report) return <p>로딩 중...</p>; // 데이터 없을 때 표시

    return (
        <div>
            <h2>신고 상세</h2>
            <p><strong>번호:</strong> {report.report_no}</p>
            <p><strong>신고자:</strong> {report.reporter}</p>
            <p><strong>신고 일자:</strong> {new Date(report.report_date).toLocaleDateString()}</p>
            <p><strong>내용:</strong> {report.report_detail}</p>
            <p>
                                <button
                                    onClick={() =>
                                        handleStatusChange(
                                            report.report_no,
                                            report.check_status
                                        )
                                    }
                                >
                                    {report.check_status
                                        ? "비공개로 전환"
                                        : "공개로 전환"}
                                </button>
                            </p>
        </div>
    );
};

export default ReportDetail;
