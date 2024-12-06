import React, {useState, useEffect} from 'react';
import PayHead from './PayHead';
import axios from 'axios'

function Payment1(props) {

  const email = 'sooyeon@naver.com'
  const [ordersData, setOrder] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:5001/payment1/${email}`)
    .then((res) => {
      // console.log(res.data)
      setOrder(res.data)
    }).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  },[email])

  return (
    <>
      <PayHead/>
      {ordersData.map((order, i)=>{
        return (
          <div key={i}>
            <div>{order.customer_name}</div>
            <div>{order.customer_address}</div>
            <div>{`휴대전화 번호 ${order.contact_number}`}</div>
          </div>
        )
      })}
    </>
  );
}

export default Payment1;