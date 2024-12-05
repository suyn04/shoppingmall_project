import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReportDetail = () => {
    const { id } = useParams(); // URL에서 id 가져오기
    console.log('URL에서 가져온 id:', id);

    

    const [reportDetail, setReportDetail] = useState(null); // 신고 상세 데이터 저장
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    // 신고 상세 정보 가져오기
    const fetchReportDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/reports/${id}`);
           console.log('api 응답 데이터 : ',response.data);
           
            setReportDetail(response.data); // 데이터 저장
        } catch (error) {
            console.error('신고 상세 정보를 불러오는 중 오류가 발생했습니다:', error);
            setError('신고 상세 정보를 불러오는 데 실패했습니다.');
        } finally {
            setLoading(false); // 로딩 완료
        }
    };

    useEffect(() => {
        fetchReportDetail();
    }, [id]);

    // 로딩 중일 때 처리
    if (loading) {
        return <div>로딩 중...</div>;
    }

    // 에러가 발생했을 때 처리
    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    // 데이터가 없을 때 처리
    if (!reportDetail) {
        return <div>신고 상세 정보를 불러올 수 없습니다.</div>;
    }

    return (
        <div>
            <h2>신고 상세 정보</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                <p><strong>신고 번호:</strong> {reportDetail.report_no}</p>
                <p><strong>리뷰 번호:</strong> {reportDetail.review_no}</p>
                <p><strong>신고자 이메일:</strong> {reportDetail.email}</p>
                <p><strong>신고 날짜:</strong> {new Date(reportDetail.report_date).toLocaleString()}</p>
                <p><strong>신고 내용:</strong> {reportDetail.report_detail}</p>
                <p><strong>처리 내용:</strong> {reportDetail.check_detail || '처리되지 않음'}</p>
                <p><strong>처리 날짜:</strong> {reportDetail.check_datetime ? new Date(reportDetail.check_datetime).toLocaleString() : '처리되지 않음'}</p>
                <p><strong>처리 상태:</strong> {reportDetail.check_status === 1 ? '처리 완료' : '처리 대기'}</p>
            </div>
            <button
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => console.log('처리 상태 변경 버튼 클릭')}
            >
                처리 상태 변경
            </button>
        </div>
    );
};

export default ReportDetail;
