import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReportDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    console.log(id)
    const [report, setReport] = useState(null); // 신고 상세 데이터
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5001/reports/${id}`)
            .then(res => res.json())
            .then(data => setReport(data))
            .catch(err => console.error('상세 오류:', err));
    }, [id]);
    // useEffect(() => {
    //     // 서버에서 신고 상세 가져오기
    //     axios.get(`http://localhost:5001/reports/${id}`)
    //         .then((res) => {
    //             setReport(res.data); // 데이터 저장
    //         })
    //         .catch((err) => {
    //             console.error('상세 오류:', err);
    //         });
    // }, [id]);
 // 리뷰 비공개 처리 함수
 const handleHideReview = async (review_no, report_no) => {
    if (window.confirm('이 리뷰를 비공개 처리하시겠습니까?')) {
        // console.log(review_no, report_no)
        axios.put(`http://localhost:5001/reports/hide/${review_no}/${report_no}`)
        .then(res=>{
            console.log("정보수정 성공 ",res.data)
            alert(`신고되었습니다.`)
            navigate(`/admin/reports`)
        })
        .catch(err=>{
            console.error("정보수정 실패 ",err)
        })
    }
};

    if (!report) {
        return <p>로딩 중...</p>;
    }
    return (
        <div>
            <h2>신고 상세</h2>
            <p>
                <strong>번호:</strong> {report.report_no}
            </p>
            <p>
                <strong>신고자:</strong> {report.reporter}
            </p>
            <p>
                <strong>신고 일자:</strong> {new Date(report.report_date).toLocaleDateString()}
            </p>
            <p>
                <strong>내용:</strong> {report.report_detail}
            </p>
            <p>
                <button
                    onClick={() => handleHideReview(report.review_no, report.report_no)}
                    // className={styles.hideButton}
                >
                    리뷰 비공개
                </button>
            </p>
        </div>
    );
};

export default ReportDetail;
