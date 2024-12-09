import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styles from '../../../scss/admin/orderDetail.module.scss'

function OrderDetail(props) {
  const [arr, setArr] = useState([])
  const orderId = window.location.pathname.split('/').pop()

  // console.log(orderId)

  useEffect(()=>{
    axios.get(`http://localhost:5001/admin/order/detail/${orderId}`)
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

  // 총 수량 계산
  const getTotalQuantity = () => {
    return arr.reduce((total, product) => total + product.order_cnt, 0)
  }

  return (
    <>
      <div>주문 제품 상세</div>
      <table border="1" className={styles.orderTable}>
        <tr>
          <td>번호</td>
          <td>이미지</td>
          <td>제품명</td>
          <td>단가</td>
          <td>수량</td>
          <td>제품별 합계</td>
        </tr>
        {arr.map((order, i)=>{
          return (
            <tr key={i}>
              <td>{i+1}</td>
              <td className={styles.imgTag}><img src={`http://localhost:5001/imgs/product/${order.product_upSystem}`}/></td>
              <td>
                <div>{order.product_name_kor}</div>
                <div>{order.product_name_eng}</div>
              </td>
              <td>{order.unit_price}</td>
              <td>{order.order_cnt}</td>
              <td>{order.product_price}</td>
            </tr>
          )
        })}
      </table>
      <div>
        <div>총 수량 : {getTotalQuantity}</div>
      </div>
    </>
  );
}

export default OrderDetail;