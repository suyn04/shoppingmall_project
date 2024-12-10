import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../../scss/service/review/ReportList.module.scss';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:5001/reports');
        setReports(response.data);
      } catch (error) {
        console.error('신고 목록 불러오기 실패:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className={styles.reportListWrapper}>
      <h2>신고 목록</h2>
      {reports.length === 0 ? (
        <p>신고된 리뷰가 없습니다.</p>
      ) : (
        <ul>
          {reports.map((report) => (
            <li key={report.report_no}>
              <p><strong>리뷰 번호:</strong> {report.review_no}</p>
              <p><strong>신고자:</strong> {report.reporter}</p>
              <p><strong>신고 내용:</strong> {report.report_detail}</p>
              <p><strong>신고 날짜:</strong> {new Date(report.report_date).toLocaleDateString()}</p>
              <p><strong>상태:</strong> {report.check_status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportList;
