import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import PayHead from './PayHead';
import PayModal1 from './PayModal1';
import axios from 'axios'

function Payment1(props) {

  const email = 'aram@gmail.com'
  const [ordersData, setOrder] = useState()
  const [isModal, setModal] = useState(false)
  const navigate = useNavigate()

  function pageLoad(){
    axios.get(`http://localhost:5001/payment1/${email}`)
    .then((res) => {
      setOrder(res.data)
      // console.log("useEffect : ",ordersData)
    }).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  }

  useEffect(()=>{
    pageLoad()
  },[])

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
    pageLoad()
  }

  function payment2GO(){
    const myData = Object.fromEntries(new FormData(document.myFrm)
  )   
   console.log("myData", myData)
    navigate('/payment2', {state : {'myData':myData}})
  }

  if(!ordersData){
    return <div>로딩중...</div>
  }

  return (
    <>
      <PayHead/>
      <form name="myFrm">
      <div>
        <div>배송지 정보</div>
        <div>{ordersData.customer_name}</div>
        <div>{ordersData.zip}</div>
        <div>{ordersData.roadname_address}</div>
        <div>{ordersData.building_name}</div>
        <div>{ordersData.detail_address}</div>
      </div>
      <button onClick={handleOpenModal}>배송지 수정</button>
      {isModal && <PayModal1 onClose={handleCloseModal} />}
      <hr/>
      <div>
        <label>
          배송요청사항<br/>
          <textarea name="order_msg"></textarea>
        </label>
      </div>
      <input type='button' onClick={payment2GO} value='결제하기'/>
      </form>
    </>
  )
}

export default Payment1;