import React, { useState, useEffect } from 'react';
import styles from '../../scss/order/paymodal1.module.scss';
import axios from 'axios';

function PayModal1({ onClose, onSave, btnData }) {
  const email = sessionStorage.getItem('email')

  // 초기 상태 설정
  const [formData, setFormData] = useState(btnData)
  const [isAddressReadOnly, setIsAddressReadOnly] = useState(false)

  // btnData가 있으면 formData를 업데이트
  useEffect(() => {
    if (btnData.zip) {
      setFormData(btnData)
    }
  }, [btnData])

  // 입력 필드 값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // 주소버튼 변경 핸들러
  const addrhandleChange = (e) => {
    e.preventDefault()

    const newAddress = {
      zip: '12345',
      roadname_address: '서울특별시 강남구 테헤란로 123',
      building_name: '테헤란빌딩',
    }

    setFormData({
      ...formData,
      zip: newAddress.zip,
      roadname_address: newAddress.roadname_address,
      building_name: newAddress.building_name,
    })

    // 주소 입력란을 readonly로 변경
    setIsAddressReadOnly(true)
  }

  // 저장 버튼 클릭 핸들러
  const handleSave = async (e) => {
    e.preventDefault()
    alert('dndn')

    try {
      if (btnData.zip) {
        // 수정 요청 (PUT)
        await axios.put(`http://localhost:5001/payment1/update/${email}`, formData)
      }
      
      onSave(formData)
      onClose()
    } catch (error) {
      console.error('데이터 저장 중 에러 발생:', error)
      alert('데이터 저장 중 문제가 발생했습니다.')
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{btnData.zip ? '배송지 수정' : '배송지 추가'}</h2>
        <form onSubmit={handleSave}>
          <input type="hidden" value={formData.email} name="email" />

          <label>
            이름:
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
            />
          </label>

          <label>
            우편번호:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              readOnly={isAddressReadOnly}
            />
            <button className={styles.btn} onClick={addrhandleChange}>주소검색</button>
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
            <input
              type="text"
              name="detail_address"
              value={formData.detail_address}
              onChange={handleChange}
            />
          </label>

          <label>
            휴대전화 번호:
            <input
              type="text"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </label>

          <div className={styles.buttons}>
            <button type="submit">저장</button>
            <button type="button" onClick={onClose}>
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PayModal1;