import React, {useState, useEffect} from 'react';
import styles from '../../scss/order/paymodal1.module.scss';
import axios from 'axios'

function PayModal1({onClose}) {

  const email = 'aram@gmail.com'
  const [ordersData, setOrder] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:5001/payment1/${email}`)
    .then((res) => {
      setOrder(res.data)
    }).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  },[])

  if(!ordersData){
    return <div>로딩중...</div>
  }

  function orderChange(kk,me){

    setOrder({...ordersData,
        [kk] : me.value
    })
  }

  function modifySubmit(e){
    e.preventDefault()
    const frmData = new FormData(document.myFrm)
    const myData = Object.fromEntries(frmData)
    console.log(myData)
    // alert('저장')

    axios.put(`http://localhost:5001/payment1/modify`,myData)
    .then(res=>{
        console.log("정보수정 성공 ",res.data)
        alert("수정되었습니다")
        onClose()
        // navigate(`/detail/${id}`)
    })
    .catch(err=>{
        console.error("정보수정 실패 ",err)
    })

  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>수정하기</h2>
        <form name='myFrm'>
          <input type="hidden" value={ordersData.email} name="email"/>
          <label>
            이름:
            <input type="text" value={ordersData.customer_name} name="customer_name" onChange={(e)=>orderChange("customer_name",e.target)} />
          </label>
          <label>
            우편번호:
            <input type="text" value={ordersData.zip} name="zip" onChange={(e)=>orderChange("zip",e.target)} />
          </label>
          <label>
            주소:
            <input type="text" value={ordersData.roadname_address} name="roadname_address" onChange={(e)=>orderChange("roadname_address",e.target)} />
          </label>
          <label>
            주소:
            <input type="text" value={ordersData.building_name} name="building_name" onChange={(e)=>orderChange("building_name",e.target)} />
          </label>
          <label>
            상세주소:
            <input type="text" value={ordersData.detail_address} name="detail_address" onChange={(e)=>orderChange("detail_address",e.target)} />
          </label>
          <label>
            휴대전화 번호:
            <input type="text" value={ordersData.contact_number} name="contact_number" onChange={(e)=>orderChange("contact_number",e.target)} />
          </label>
          <div className={styles.buttons}>
            <button type="submit" onClick={modifySubmit}>저장</button>
            <button type="button" onClick={onClose}>
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PayModal1;