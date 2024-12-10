import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function AOrderStatus(props) {

  const [arr, setArr] = useState([])
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5001/admin/order/status')
      .then((res) => {
        const updatedData = res.data.map((item) => ({
          ...item,
          status: item.order_status,
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
        return { ...item, status: newStatus }
      }
      return item
    })
    setArr(updatedArr)
  }

  // 수정 완료 핸들러 (DB에 업데이트)
  const handleSaveChanges = () => {
    axios.post('http://localhost:5001/admin/order/update', arr)
      .then((res) => {
        alert('수정이 완료되었습니다.')
        setIsEditable(false)
      })
      .catch((err) => {
        console.error('수정 실패 :', err)
        alert('수정에 실패했습니다.')
      });
  }
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
            <td>취소/반품/환불일시</td>
            <td>주문상태</td>
            <td>결제방법</td>
            <td>수령자</td>
            <td>총주문액</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((mm) => (
            <tr key={mm.order_id}>
              <td>
                <Link to={`detail/${mm.order_id}`}>{mm.order_id}</Link>
              </td>
              <td>{mm.order_date}</td>
              <td>{mm.status_date}</td>
              <td>
                <select
                  value={mm.status}
                  onChange={(e) => handleStatusChange(mm.order_id, e.target.value)}
                  disabled={!isEditable}
                >
                  <option value="취소">취소</option>
                  <option value="반품접수">반품접수</option>
                  <option value="반품완료">반품완료</option>
                  <option value="환불접수">환불접수</option>
                  <option value="환불완료">환불완료</option>
                </select>
              </td>
              <td>{mm.pay_to}</td>
              <td>{mm.order_name}</td>
              <td>{mm.order_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AOrderStatus;