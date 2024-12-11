import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const ReportDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const [report, setReport] = useState(null); // 신고 상세 데이터
    const navigate = useNavigate();


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
 // 리뷰 비공개 처리 함수
 const handleHideReview = async (review_no) => {
    if (window.confirm('이 리뷰를 비공개 처리하시겠습니까?')) {
        try {
            await axios.put(`http://localhost:5001/reports/hide/${review_no}`);
            alert('리뷰가 비공개 처리되었습니다.');
            navigate('/admin/reports'); // 비공개 처리 후 신고 목록으로 이동
        } catch (error) {
            console.error('리뷰 비공개 처리 실패:', error);
            alert('리뷰 비공개 처리에 실패했습니다.');
        }
    }
};
   // report가 null이면 로딩 중 메시지 표시
    if (!report) {
        return <p>로딩 중...</p>;
    }
    return (
        <div>
            <h2>신고 상세</h2>
            <p><strong>번호:</strong> {report.report_no}</p>
            <p><strong>신고자:</strong> {report.reporter}</p>
            <p><strong>신고 일자:</strong> {new Date(report.report_date).toLocaleDateString()}</p>
            <p><strong>내용:</strong> {report.report_detail}</p>
            <p>
            <button
                onClick={() => handleHideReview(report.review_no)}
                // className={styles.hideButton}
              >
                리뷰 비공개
              </button>
                            </p>
        </div>
    );
};

export default ReportDetail;
