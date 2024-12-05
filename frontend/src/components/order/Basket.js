import React, {useState, useEffect}  from 'react';
// import {Link, useParams} from 'react-router-dom';
import styles from '../../scss/order/basket.module.scss';
import axios from 'axios';

function Basket(props) {
  const [prod, setProd] = useState([])

  const memId = 'AA2460962'

  useEffect(()=>{
    axios.get(`http://localhost:5001/basket/${memId}`)
    .then((res) => {
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
  },[])
  // 수량 변경
  const handleQuantityChange = (id, quantity) => {
    const updatedProd = prod.map((item) =>
      item.product_opt_id === id
        ? { ...item, quantity: parseInt(quantity, 10) }
        : item
    )
    setProd(updatedProd)
  }

  // 장바구니 정보 삭제
  function delBasket(){
    alert('삭제')
  }
  return (
    <div className={styles.wrap}>
      <img src="/imgs/order/JML_CheckoutBanner.avif"/>
      <div>
      <div className={styles.shoppingHead}>장바구니</div>
        <div className={styles.shoppingHead2}>
          <div>
            <small>({prod.length} 개의 제품 / 장바구니에 담긴 제품 수량)</small>
          </div>
        </div>
      </div>
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
            <div><img src={`/imgs/product/${pp.product_upSystem}`}/></div>
            <div className={styles.prod}>
              <div>{pp.product_name_kor}</div>
              <div>{pp.product_name_eng}</div>
              <div>{pp.product_volume}</div>
            </div>
            <div>{pp.product_price}</div>
            <div>
              <select
                value={pp.quantity}
                onChange={(e) => handleQuantityChange(pp.product_opt_id, e.target.value)}
              >
                {Array.from({ length: 8 }, (_, i) => i + 1).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div>{totalPrice}</div>
            <button onClick={delBasket}>삭제</button>
          </div>
        )
      })}
    </div>
  );
}

export default Basket;