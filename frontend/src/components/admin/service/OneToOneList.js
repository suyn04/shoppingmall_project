import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OneToOneList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [editingInquiry, setEditingInquiry] = useState(null);  // 수정 중인 항목

  // 서버에서 데이터를 가져오는 함수
  const fetchInquiries = async () => {
    try {
      const response = await axios.get('http://localhost:5001/onetoone');
      setInquiries(response.data);  // 서버에서 받은 데이터를 inquiries에 저장
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  // 삭제 함수
  const handleDelete = async (post_no) => {
    try {
      const response = await axios.delete(`http://localhost:5001/onetoone/delete/${post_no}`);  // 수정된 경로
      if (response.status === 200) {
        alert('삭제되었습니다!');
        setInquiries(inquiries.filter(inquiry => inquiry.post_no !== post_no));
      } else {
        alert('삭제 실패');
      }
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };


  // 수정 함수
  const handleEdit = (inquiry) => {
    setEditingInquiry(inquiry);  // 수정할 항목의 데이터를 상태에 저장
  };

  // 수정된 데이터 서버로 전송
const handleUpdate = async () => {
  try {
    const response = await axios.put(`http://localhost:5001/onetoone/update/${editingInquiry.post_no}`, {
      post_title: editingInquiry.post_title,
      post_detail: editingInquiry.post_detail,
      reply_detail: editingInquiry.reply_detail,
      reply_status: editingInquiry.reply_status,
    });

    if (response.status === 200) {
      alert('수정되었습니다!');
      setEditingInquiry(null);  // 수정이 완료되면 수정 폼 숨기기
      fetchInquiries();  // 수정 후 목록 다시 불러오기
    } else {
      alert('수정 실패');
    }
  } catch (error) {
    console.error('Error updating inquiry:', error);
    alert('수정 중 오류가 발생했습니다.');
  }
};

  useEffect(() => {
    fetchInquiries();  // 처음에 데이터를 가져옴
  }, []);  // 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <div>
      <h1>1:1 문의 목록</h1>
      {editingInquiry ? (
        <div>
          <h2>수정하기</h2>
          <input
            type="text"
            value={editingInquiry.post_title}
            onChange={(e) => setEditingInquiry({ ...editingInquiry, post_title: e.target.value })}
          />
          <textarea
            value={editingInquiry.post_detail}
            onChange={(e) => setEditingInquiry({ ...editingInquiry, post_detail: e.target.value })}
          />
          <button onClick={handleUpdate}>수정</button>
          <button onClick={() => setEditingInquiry(null)}>취소</button>
        </div>
      ) : (
        <ul>
          {inquiries.map((inquiry) => (
            <li key={inquiry.post_no}>
              {inquiry.post_title} - {inquiry.customer_id}
              <button onClick={() => handleDelete(inquiry.post_no)}>삭제</button>
              <button onClick={() => handleEdit(inquiry)}>수정</button> {/* 수정 버튼 클릭 시 수정 폼 표시 */}
            </li>
          ))}
        </ul>
      )}
      {inquiries.length === 0 && <p>문의 목록이 없습니다.</p>}
    </div>
  );
};

export default OneToOneList;
