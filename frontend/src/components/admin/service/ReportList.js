import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // 데이터베이스에서 신고 목록 가져오기
    const fetchReports = async () => {
        try {
            const response = await axios.get('http://localhost:5001/reports');
            console.log(response.data);
            
            setReports(response.data);
        } catch (err) {
            console.error('신고 목록을 불러오는 중 오류가 발생했습니다:', err);
            setError('데이터를 가져오는 데 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    // 상세보기 페이지로 이동
    const handleDetail = (reportno) => {
        navigate(`/reports/detail/${reportno}`);
    };

    return (
        <div>
            <h2>리뷰 신고 목록</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isLoading ? (
                <p>로딩 중...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>신고 번호</th>
                            <th>리뷰 번호</th>
                            <th>신고자 이메일</th>
                            <th>신고 일자</th>
                            <th>처리 상태</th>
                            <th>상세보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.report_no}>
                                <td>{report.report_no}</td>
                                <td>{report.review_no}</td>
                                <td>{report.email}</td>
                                <td>{new Date(report.report_date).toLocaleString()}</td>
                                <td>{report.check_status === 1 ? '처리 완료' : '처리 대기'}</td>
                                <td>
                                    <button onClick={() => handleDetail(report.report_no)}>
                                        상세보기
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReportList;
