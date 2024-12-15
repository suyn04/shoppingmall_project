import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from '../../../scss/admin/AdminList.module.scss'

function AOrderStatus(props) {

  const [arr, setArr] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const [order, setOrder] = useState([])
  const [text, setText] = useState("")

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

  const formatDate = (dateString) => {
    if (!dateString) return '';
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

  const searchGo = (me) => {
    me.preventDefault();
    console.log("submitGo 진입");
    const frmData = new FormData(document.myFrm);
    // console.log(frmData);
    const data = Object.fromEntries(frmData);
    console.log("order 검색:",data);

    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
          data[key] = null;
      }
    });

    if (!data.text) {
        alert("검색할 단어를 입력해 주세요.");
        return;
    }

    axios
    .post(`http://localhost:5001/admin/order/search`, data)
    .then((res) => {
      console.log("검색 완료",res.data);

      setOrder(res.data);
      setText("해당하는 주문이 존재하지 않습니다.");
    })
    .catch((err) => {
      console.error("에러발생 ; ", err);
    });
  };

  const handleInvoiceChange = (id, newInvoice) => {
    const updatedArr = arr.map((item) =>
      item.order_id === id
        ? {
            ...item,
            invoice: newInvoice,
            status: item.status === '반품접수' || item.status === '환불접수' ? item.status : '반품접수',
          }
        : item
    );
    setArr(updatedArr);
  };

  return (
    <div className={styles.list}>
            <form name="myFrm" className={styles.searchbar}>
        <select name="orderCate" id="category">
          <option value="">검색기준 선택</option>
          <option value="orderNum">주문번호</option>
          <option value="status">주문상태</option>
          <option value="payment">결제방법</option>
          <option value="orderTo">수령자명</option>
          <option value="invoice">운송장번호</option>
        </select>

        <input type="text" placeholder="검색어 입력" name="text" />

        <div className={styles.actionButtons}>
          <button className={styles.searchbutton} onClick={searchGo}>
              검색
          </button>
          {!isEditable && <button className={styles.modifybutton} onClick={() => setIsEditable(true)}>수정하기</button>}
          {isEditable && <button className={styles.modiclearbutton} onClick={handleSaveChanges}>수정완료</button>}
        </div>
      </form>
      <table>
        <tr>
          <td>번호</td>
          <td>주문번호</td>
          <td>주문일시</td>
          <td>취소/반품/환불일시</td>
          <td>주문상태</td>
          <td>결제방법</td>
          <td>수령자</td>
          <td>총주문액</td>
          <td>반품/환불 운송장번호</td>
        </tr>
        {arr.map((mm, i) => (
          <tr key={mm.order_id}>
            <td>{i+1}</td>
            <td>
              <Link className={styles.link} to={`detail/${mm.order_id}`}>{mm.order_id}</Link>
            </td>
            <td>{formatDate(mm.order_date)}</td>
            <td>{formatDate(mm.status_date)}</td>
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
            <td>
              <input
                type="text"
                value={mm.invoice}
                readOnly={!isEditable || !(mm.status === '반품접수' || mm.status === '환불완료')}
                maxLength={14}
                onChange={(e) => handleInvoiceChange(mm.order_id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AOrderStatus;