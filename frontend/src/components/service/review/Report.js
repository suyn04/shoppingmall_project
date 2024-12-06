import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../../scss/service/review/Report.module.scss';

const Report = () => {
  const { id } = useParams(); // 신고할 리뷰 ID
  const [email, setEmail] = useState(''); // 신고자 이메일
  const [reportDetail, setReportDetail] = useState(''); // 신고 내용
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reportData = {
      review_no: id, // 리뷰 번호
      email,
      report_detail: reportDetail,
    };

    try {
      const response = await axios.post('http://localhost:5001/report', reportData);
      alert('신고가 성공적으로 접수되었습니다.');
      navigate('/reviewlist'); // 신고 후 리뷰 목록으로 이동
    } catch (err) {
      console.error('신고 접수 실패:', err);
      alert('신고 접수에 실패했습니다.');
    }
  };

  return (
    <div className={styles.reportWrapper}>
      <h2>리뷰 신고</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="신고자 이메일을 입력하세요."
            required
          />
        </div>
        <div>
          <label>신고 내용</label>
          <textarea
            value={reportDetail}
            onChange={(e) => setReportDetail(e.target.value)}
            placeholder="신고 내용을 입력하세요."
            required
          />
        </div>
        <button type="submit">신고 접수</button>
      </form>
    </div>
  );
};

export default Report;
