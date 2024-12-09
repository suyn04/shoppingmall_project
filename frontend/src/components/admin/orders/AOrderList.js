import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function OrderList(props) {
  const [arr, setArr] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5001/admin/order/')
    .then(
      res=>{
        // console.log('갔다옴 : ', res.data)
        setArr(res.data) // arr 상태를 업데이트하는 함수
        // console.log(arr)
      }
    ).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  },[])

  if(!arr){
    return <div>로딩중...</div>
  }

  return (
    <table border="1">
      <tr>
        <td>주문id</td>
        <td>주문일시</td>
        <td>주문상태</td>
        <td>결제방법</td>
        <td>수령자</td>
        <td>총주문액</td>
      </tr>
      {arr.map((mm, i)=>{
        return <tr key={i}>
                  <td>
                    <Link to={`detail/${mm.order_id}`}>{mm.order_id}</Link>
                  </td>
                  <td>{mm.order_date}</td>
                  <td>{mm.order_status}</td>
                  <td>{mm.pay_to}</td>
                  <td>{mm.order_name}</td>
                  <td>{mm.order_total}</td>
                </tr>
      })}
    </table>
  );
}

export default OrderList;