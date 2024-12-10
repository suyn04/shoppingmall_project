import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OrderList(props) {
  const [arr, setArr] = useState([])
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5001/admin/order/')
      .then((res) => {
        const updatedData = res.data.map((item) => ({
          ...item,
          status: item.order_status || '주문 완료',
          invoice: item.invoice || '',
        }))
        setArr(updatedData)
      })
      .catch((err) => {
        console.error('에러발생 : ', err)
      })
  },[])

  // 상태 변경 핸들러
  const handleStatusChange = (id, newStatus) => {
    const updatedArr = arr.map((item) => {
      if (item.order_id === id) {
        // invoice가 null이면서 상태가 '배송 중'일 때, 상태를 '주문 완료'로 되돌림
        if (!item.invoice && newStatus === '배송중') {
          alert('운송장번호를 먼저 입력하세요')
          return { ...item, status: '주문 완료' }
        }
        return { ...item, status: newStatus }
      }
      return item
    })
    setArr(updatedArr)
  }

  // 운송장 번호 변경 핸들러
  const handleInvoiceChange = (id, newInvoice) => {
    const updatedArr = arr.map((item) =>
      item.order_id === id ? { ...item, invoice: newInvoice, status: '배송중' } : item
    )
    setArr(updatedArr)
  }

  // 수정 완료 핸들러 (DB에 업데이트)
  const handleSaveChanges = () => {
    axios.post('http://localhost:5001/admin/order/update', arr)
      .then((res) => {
        alert('수정이 완료되었습니다.')
        setIsEditable(false)
        window.location.reload()
      })
      .catch((err) => {
        console.error('수정 실패 :', err)
        alert('수정에 실패했습니다.')
      });
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }); // 한국 로컬 시간대에 맞게 변환
  };

  return (
    <>
      <div>
        <button><Link to='/admin/order'>주문목록관리</Link></button>
        <button><Link to='/admin/orderStatus'>취소/반품/환불관리</Link></button>
      </div>
      <button onClick={() => setIsEditable(true)}>수정하기</button>
      <button onClick={handleSaveChanges}>수정 완료</button>
      <table border="1">
        <thead>
          <tr>
            <td>주문id</td>
            <td>주문일시</td>
            <td>주문상태</td>
            <td>결제방법</td>
            <td>수령자</td>
            <td>총주문액</td>
            <td>운송장번호</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((mm) => (
            <tr key={mm.order_id}>
              <td>
                <Link to={`detail/${mm.order_id}`}>{mm.order_id}</Link>
              </td>
              <td>{formatDate(mm.order_date)}</td>
              <td>
                <select
                  value={mm.status}
                  onChange={(e) => handleStatusChange(mm.order_id, e.target.value)}
                  disabled={!isEditable}
                >
                  <option value="주문 완료">주문 완료</option>
                  <option value="배송중">배송중</option>
                  <option value="배송완료">배송완료</option>
                  <option value="반품접수">반품접수</option>
                  <option value="환불접수">환불접수</option>
                </select>
              </td>
              <td>{mm.pay_to}</td>
              <td>{mm.order_name}</td>
              <td>{mm.order_total}</td>
              <td>
                <input
                  type="text"
                  value={mm.invoice}
                  readOnly={!isEditable}
                  maxLength={14}
                  onChange={(e) => handleInvoiceChange(mm.order_id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default OrderList;
