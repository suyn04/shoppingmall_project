import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneToOneList = () => {
  const [onetoone, setOnetoone] = useState([]);
  const navigate = useNavigate();

  // 서버에서 데이터를 가져오는 함수
  const fetchOnetoone = async () => {
    try {
      const response = await axios.get('http://localhost:5001/onetoone');
      console.log('API 응답 데이터:', response.data); // 데이터 구조 확인
      setOnetoone(response.data.inquiries); // 서버에서 받은 데이터를 onetoone에 저장
    } catch (error) {
      console.error('Error fetching onetoone:', error);
    }
  };

  useEffect(() => {
    fetchOnetoone(); // 처음에 데이터를 가져옴
  }, []); // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleDetailClick = (id) => {
    navigate(`/admin/onetoone/${id}`); // 상세보기 페이지로 이동 (절대 경로)
  };

  return (
    <div>
      <h1>1:1 문의 목록</h1>
      <ul>
        {Array.isArray(onetoone) && onetoone.length > 0 ? (
          onetoone.map((item) => (
            <li key={item.post_no}>
              {item.post_title} - {item.email} 
              <button onClick={() => handleDetailClick(item.post_no)}>상세보기</button>
            </li>
          ))
        ) : (
          <p>문의 목록이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default OneToOneList;
