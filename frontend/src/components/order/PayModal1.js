import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../../scss/order/paymodal1.module.scss';

function PayModal1({ onClose, onSave, btnData, email }) {
  const [formData, setFormData] = useState({
    customer_name: '',
    zip: '',
    roadname_address: '',
    building_name: '',
    detail_address: '',
    ...btnData,
  });

  const [isAddressReadOnly, setIsAddressReadOnly] = useState(false);
  const formRef = useRef(null); // 폼 요소에 접근하기 위한 ref

  useEffect(() => {
    if (btnData) {
      setFormData(btnData);
    }
  }, [btnData]);

  // 입력 필드 값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 주소 검색 버튼 클릭 핸들러
  const handleAddressSearch = (e) => {
    e.preventDefault();

    // 예제용 주소 데이터 (실제 주소 검색 API 연동 시 이 부분을 변경)
    const newAddress = {
      zip: '12345',
      roadname_address: '서울특별시 강남구 테헤란로 123',
      building_name: '테헤란빌딩',
    };

    setFormData({
      ...formData,
      zip: newAddress.zip,
      roadname_address: newAddress.roadname_address,
      building_name: newAddress.building_name,
    });

    // 주소 입력란을 readonly로 변경
    setIsAddressReadOnly(true);
  };

  // 저장 버튼 클릭 핸들러
  const handleSave = async (e) => {
    e.preventDefault();

    if (formRef.current) {
      const myData = Object.fromEntries(new FormData(formRef.current));
      console.log(myData);

      try {
        if (!btnData || !btnData.zip) {
          await axios.post('http://localhost:5001/payment1/add', {
            email,
            ...myData,
          });
          alert('배송지가 추가되었습니다.');
        }

        onSave(formData);
        onClose();
      } catch (error) {
        console.error('배송지 저장 중 에러 발생:', error);
        alert('배송지 저장 중 문제가 발생했습니다.');
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{btnData ? '배송지 수정' : '배송지 추가'}</h2>
        <form ref={formRef}> {/* ref 속성으로 form 요소를 참조 */}
          <label>
            이름:
            <input type="text" name="customer_name" value={formData.customer_name} onChange={handleChange} />
          </label>

          <label>
            우편번호:
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} readOnly={isAddressReadOnly} />
            <button className={styles.addressBtn} onClick={handleAddressSearch}>
              주소검색
            </button>
          </label>

          <label>
            도로명 주소:
            <input
              type="text"
              name="roadname_address"
              value={formData.roadname_address}
              onChange={handleChange}
              readOnly={isAddressReadOnly}
            />
          </label>

          <label>
            건물명:
            <input
              type="text"
              name="building_name"
              value={formData.building_name}
              onChange={handleChange}
              readOnly={isAddressReadOnly}
            />
          </label>

          <label>
            상세 주소:
            <input type="text" name="detail_address" value={formData.detail_address} onChange={handleChange} />
          </label>

          <label>
            상세 주소:
            <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} />
          </label>

          <div className={styles.buttons}>
            <button type="button" onClick={handleSave}>저장</button>
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
