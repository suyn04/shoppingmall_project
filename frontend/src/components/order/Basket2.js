import React, {useState}  from 'react';
import {Link} from 'react-router-dom';
import styles from '../../scss/order/basket.module.scss';

function Basket(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '블랙베리 앤 베이 코롱',
      price: 235000,
      quantity: 1,
      img: '/imgs/wishPerfume1.avif',
    },
    {
      id: 2,
      name: '잉글리쉬 페어 앤 프리지아',
      price: 235000,
      quantity: 1,
      img: '/imgs/wishPerfume2.avif',
    },
  ]);

  // 수량 변경 처리
  const handleQuantityChange = (id, quantity) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: parseInt(quantity, 10) } : product
    );
    setProducts(updatedProducts);
  };

  // 제품 삭제 처리
  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // 총합 계산
  const getTotal = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };
  return (
    <div className={styles.whole}>
      <div className={styles.imgSection}>
        <img src="/imgs/order/JML_CheckoutBanner.avif" alt="" />
      </div>

      <div>
        <div className={styles.shoppingHead}>장바구니</div>
        <div className={styles.shoppingHead2}>
          <div>
            <small>({products.length} 개의 제품 / 장바구니에 담긴 제품 수량)</small>
          </div>
        </div>

        <div className={styles.ProductHead}>
          <div className={styles.productImg1}>제품</div>
          <div className={styles.info1}></div>
          <div className={styles.price1}>가격</div>
          <div className={styles.qty1}>수량</div>
          <div className={styles.total1}>총 합계</div>
        </div>

        {products.map((product) => (
          <div className={styles.prdSection} key={product.id}>
            <div className={styles.productImg}>
              <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.info}>{product.name}</div>
            <div className={styles.price}>₩{product.price.toLocaleString()}</div>
            <div className={styles.qty}>
              <select
                className={styles.productQty}
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              >
                {Array.from({ length: 8 }, (_, i) => i + 1).map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.total}>
              ₩{(product.price * product.quantity).toLocaleString()}
              <br />
              <button onClick={() => handleRemoveProduct(product.id)}>삭제</button>
            </div>
          </div>
        ))}

        <div className={styles.subTotal}>
          <div className={styles.allTotal}>
            합계
            <div className={styles.won}>₩</div>
            <div id="subTotal">{getTotal().toLocaleString()}</div>
          </div>
        </div>

        <div className={styles.buttonSection}>
          <Link to="/">
            <small>쇼핑 계속하기</small>
          </Link>
          <Link to={`/order`} className={styles.payButton}>
            결제하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Basket;