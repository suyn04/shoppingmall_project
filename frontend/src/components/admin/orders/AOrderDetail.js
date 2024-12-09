import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderDetail(props) {
  const [arr, setArr] = useState([])
  const orderId = window.location.pathname.split('/').pop()

  console.log(orderId)

  useEffect(()=>{
    axios.get(`http://localhost:5001/admin/order/detail/${orderId}`)
    .then(
      res=>{
        console.log('갔다옴 : ', res.data)
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
    <>
      <div>주문 제품 상세</div>
      <table border="1">
        <tr>
          <td>번호</td>
          <td>이미지</td>
          <td>제품명</td>
          <td>수량</td>
          <td>단가</td>
        </tr>
      </table>
    </>
  );
}

export default OrderDetail;