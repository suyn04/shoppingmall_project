import React, {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import PayHead from './PayHead';
import styles from '../../scss/order/payment2.module.scss'
import axios from 'axios'

function Payment2(props) {

  const location = useLocation()
  const navigate = useNavigate()

  const email = 'aram@gmail.com'
  const [ordersData, setOrder] = useState()
  const [data, setData] = useState()
  const [prod, setProd] = useState()

  function pageLoad(){
    axios.get(`http://localhost:5001/payment1/${email}`)
    .then((res) => {
      setOrder(res.data)
    }).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  }

  function dataInit(){
    // 해당 고객의 장바구니 접근
    axios.get(`http://localhost:5001/payment2/${email}`)
    .then((res) => {
      // console.log(res.data)
      const updatedProd = res.data.map((item) => ({
        ...item,
        quantity: 1,
      }))
      setProd(updatedProd)
    }).catch(
      err=>{
        console.error('에러발생 : ', err)
      }
    )
  }

  useEffect(()=>{
    const {myData} = location.state
    setData(myData)
    console.log("myData", myData.order_msg)
    pageLoad()
    dataInit()
  },[])

  // 데이터 가져온 후 페이지 동작
  if(!ordersData){
    return <div>로딩중...</div>
  }
  if(!prod){
    return <div>로딩중...</div>
  }

  const handleQuantityChange = (id, quantity) => {
    const updatedProd = prod.map((item) =>
      item.bs_product_id === id
        ? { ...item, quantity: parseInt(quantity, 10) }
        : item
    )
    setProd(updatedProd)
  }

  const getTotal = () => {
    // console.log(prod)
    return prod.reduce((sum, product) => sum + product.product_price * product.quantity, 0);
  }

  // 장바구니 정보 삭제
  function delBasket(id){
    axios.delete(`http://localhost:5001/basket/delete/${id}`)
    .then(res=>{
      alert("삭제되었습니다.")
      dataInit()
    })
    .catch(err=>{
      console.log("삭제오류 : ", err)
    })
  }

  // 결제 정보 넘기기
  function orderFin(e){
    // alert('결제끝!')
    e.preventDefault()
    const myData = Object.fromEntries(new FormData(document.myFrm))

    console.log(myData)

    // axios.post(`http://localhost:5001/payment2/join/${email}`,)
    // .then(res=>{
    //   alert("등록되었습니다.")
    //   // navigate('/payment3')
    // })
    // .catch(err=>{
    //   console.log("삭제오류 : ", err)
    // })
  }

  return (
    <>
      <PayHead/>
      <form name='myFrm'>
        <div className={styles.payments}>
          <div>결제방법</div>
          <label>
            <input type="radio" name="payment" value="card"/>신용카드
          </label>
          <label>
            <input type="radio" name="payment" value="kakao"/>Kakaopay
          </label>
          <label>
            <input type="radio" name="payment" value="payco"/>Payco
          </label>
          <label>
            <input type="radio" name="payment" value="naver"/>네이버페이
          </label>
        </div>
        <hr/>
        <div>
          <div>배송지정보</div>
          <div>{ordersData.customer_name}</div>
          <div>{ordersData.zip}</div>
          <div>{ordersData.roadname_address}</div>
          <div>{ordersData.building_name}</div>
          <div>{ordersData.detail_address}</div>
        </div>
        <button><Link to='/payment1'>수정</Link></button>
        <hr/>
        <div>
          <div>배송요청사항</div>
          <div>{data.order_msg}</div>
          <button><Link to='/payment1'>수정</Link></button>
        </div>
        <div>
          <div className={styles.td}>
            <div>제품</div>
            <div>가격</div>
            <div>수량</div>
            <div>총합계</div>
          </div>
          {prod.map((pp, i)=>{
            const totalPrice = pp.product_price * pp.quantity
            return(
              <div key={i}>
                <div><img src={`/imgs/product/${pp.product_upSystem}`} alt=''/></div>
                <div className={styles.prod}>
                  <div>{pp.product_name_kor}</div>
                  <div>{pp.product_name_eng}</div>
                  <div>{pp.product_volume}</div>
                </div>
                <div>{pp.product_price}</div>
                <div>
                  <select
                    value={pp.quantity}
                    onChange={(e) => handleQuantityChange(pp.bs_product_id, e.target.value)}
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>{totalPrice}</div>
                <button onClick={()=>{delBasket(pp.bs_id)}}>삭제</button>
              </div>
            )
          })}
          <div>
            <div>합계</div>
            <div>{getTotal().toLocaleString()}</div>
          </div>
          <input type='submit' onClick={orderFin} value='결제하기'/>
        </div>
      </form>
    </>
  )
}

export default Payment2;