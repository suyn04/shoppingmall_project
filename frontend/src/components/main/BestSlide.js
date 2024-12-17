import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductSwiper from '../product/ProductSwiper';
import styles from '../../scss/product/prodTotal.module.scss'

function BestSlide(props) {
  const [candle, setCandle] = useState([]);

  const candleGetAxios = () => {
    axios
    .get(`http://localhost:5001/product/home-scents/candles`)
    .then((res) => {
      let curProduct = res.data;
      console.log(curProduct);

      setCandle(curProduct);
    })
    .catch((err) => {
      console.error("에러발생 ; ", err);
    });
  };
  useEffect(() => {
    candleGetAxios();
  }, []);
  return (
    <div className={styles.bestSlide}>
      <div>베스트셀러</div>
      <ProductSwiper product={candle} />
    </div>
  );
}

export default BestSlide;