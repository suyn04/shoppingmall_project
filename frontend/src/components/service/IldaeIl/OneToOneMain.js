import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "../../../scss/service/IldaeIl/OneToOneMain.module.scss";

const OneToOneMain = () => {
  const [onetoone, setOnetoone] = useState([]);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");

  const handleCreateInquiry = () => {
    navigate('/onetoone'); // 문의 작성 페이지 경로로 이동
};
  // 서버에서 데이터를 가져오는 함수
  const fetchOnetoone = async () => {
    try {
      const response = await axios.get('http://localhost:5001/onetoone');
      console.log('API 응답 데이터:', response.data); // 데이터 구조 확인

        console.log(email);
        
      let data = response.data.inquiries
      console.log(data);
      
      let filterdata = data.filter((item)=>item.email === email);
      console.log(filterdata);
      
      setOnetoone(filterdata); // 서버에서 받은 데이터를 onetoone에 저장
    } catch (error) {
      console.error('Error fetching onetoone:', error);
    }   
  };
  const formatDate = dateString => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};
  useEffect(() => {
    fetchOnetoone(); // 처음에 데이터를 가져옴
  }, []); // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행



  return (
    <div className={styles.list}>
      <div className={styles.rtitle}>1:1 문의 목록</div>

      <table border='1'>

          <tr>
            <td>제목</td>
            <td>내용</td>
            <td>작성일</td>
            <td>처리 상태</td>
          </tr>

          {Array.isArray(onetoone) && onetoone.length > 0 ? (
            onetoone.map((item) => (
              <tr key={item.post_no}>
                <td>{item.post_title}</td>
                <td>{item.post_detail}</td>
                <td>{formatDate(item.post_date)}</td>
                <td>{item.reply_status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">문의 목록이 없습니다.</td>
            </tr>
          )}

      </table>
      <button className={styles.createButton} onClick={handleCreateInquiry}>
                        작성하기
    </button>
    </div>
  );
};
export default OneToOneMain;
