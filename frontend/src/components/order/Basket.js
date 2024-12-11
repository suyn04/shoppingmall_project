import React, {useState, useEffect}  from 'react';
import styles from '../../scss/order/basket.module.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Basket(props) {
  const [prod, setProd] = useState([])
  const navigate = useNavigate()

  const email = sessionStorage.getItem('email')

  
  // console.log(`basket-email:${email}`)

  // 해당 고객의 장바구니 내역 불러오기
  function dataInit(){
    axios.get(`http://localhost:5001/basket/${email}`)
    .then((res) => {
      const updatedProd = res.data.map((item) => ({ // 제품 수량 1로 기본 지정
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
    dataInit()
  },[])
  // 수량 변경
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

  function paymentGo(){
    navigate('/payment1')
  }
  return (
    <div className={styles.wrap}>
      <img src="/imgs/order/JML_CheckoutBanner.avif" alt=''/>
      <div>
      <div className={styles.shoppingHead}>장바구니</div>
        <div className={styles.shoppingHead2}>
          <div>
            <small>({prod.length} 개의 제품 / 장바구니에 담긴 제품 수량)</small>
          </div>
        </div>
      </div>
      {prod.length > 0 && (
        <>
          <div className={styles.td}>
            <div>제품</div>
            <div>가격</div>
            <div>수량</div>
            <div>총합계</div>
          </div>
          {prod.map((pp, i) => {
            const totalPrice = pp.product_price * pp.quantity;

            return (
              <div key={i}>
                <div>
                  <img src={`/imgs/product/${pp.product_upSystem}`} alt='' />
                </div>
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
                <div>{totalPrice.toLocaleString()}</div>
                <button onClick={() => delBasket(pp.bs_id)}>삭제</button>
              </div>
            );
          })}
          {prod.length > 0 && (
          <input type="button" onClick={paymentGo} value="결제하기" />
        )}
        </>
      )}
      
      {prod.length === 0 && (
        <div>
          <div>장바구니가 비어 있습니다.</div>
          <Link to="/">쇼핑 계속하기</Link>
        </div>
      )}
          </div>
        );
      }

export default Basket;