import React, { useState } from 'react';
import styles from '../../scss/mypage/AddressList.module.scss';

function AddressList() {
    // 주소 데이터를 상태로 관리
    const [address, setaddress] = useState([
        {
            // 추후 db로 연결
            id: 1, // 주소 고유 ID
            name: '임세훈', // 이름
            zip: '21580', // 우편번호
            address: '인천광역시 남동구 호구포로739번길 37 (구월동) 401', // 주소
            phone: '010-5796-6269', // 휴대전화 번호
            homePhone: '02-579-6269', // 집전화 번호
        },
    ]);

    // 수정 모드에서 편집할 주소 데이터를 관리
    const [editAddress, seteditAddress] = useState(null);

    // 새 주소 입력을 위한 초기 상태
    const [newAddress, setnewAddress] = useState({
        name: '',
        zip: '',
        address: '',
        phone: '',
        homePhone: '',
    });

    // 모달 열림/닫힘 상태
    const [modalOpenChk, setmodalOpenChk] = useState(false);

    // 현재 모달이 '수정 모드'인지 '새 주소 추가 모드'인지 확인
    const [editInfo, seteditInfo] = useState(false);

    // 모달 열기 함수 (수정 모드인지 확인하여 상태를 설정)
    const openModal = (address = null) => {
        if (address) {
            // 주소가 있으면
            // 수정 모드 : 선택된 주소를 편집 상태로 설정
            seteditAddress(address);
            seteditInfo(true); // 수정모드 켜기
        } else {
            // 새 주소 추가 : 빈 상태로 초기화
            setnewAddress({
                name: '',
                zip: '',
                address: '',
                phone: '',
                homePhone: '',
            });
            seteditInfo(false); // 수정모드 끄기 : 수정이 아니라 새로운 주소 추가하는 거니까
        }
        setmodalOpenChk(true); // 모달 열림 상태로 설정
    };

    // 모달 닫기 함수
    const closeModal = () => {
        seteditAddress(null); // 주소 편집 null값으로
        seteditInfo(false); // 수정모드 끄기
        setmodalOpenChk(false); // 모달 오픈상태 false로 바꾸기
    };

    // 주소 저장 함수 (새 주소 추가 또는 기존 주소 수정)
    const saveAddress = () => {
        if (editInfo) {
            // 정보 변경 : 편집한 주소를 업데이트
            setaddress(prev => prev.map(addr => (addr.id === editAddress.id ? editAddress : addr)));
        } else {
            // 새 주소 추가 : 새로운 주소를 리스트에 추가
            setaddress(prev => [
                ...prev,
                { ...newAddress, id: Date.now() }, // 고유 ID를 현재 시간으로 생성
            ]);
        }
        closeModal(); // 저장 후 모달 닫기
    };

    // 주소 삭제 함수
    const deleteAddress = id => {
        // 선택된 주소를 제외한 나머지 주소만 필터링하여 상태 업데이트
        setaddress(address.filter(address => address.id !== id));
    };

    return (
        <main>
            {/* 주소 리스트 표시 */}
            {address.map(address => (
                <div className={styles.block} key={address.id}>
                    <div className={styles.headerFont}>기본 배송지</div>
                    <div id={styles.blockBtnList}>
                        {/* 수정 버튼 */}
                        <button className={styles.editmodal} onClick={() => openModal(address)}>
                            수정
                        </button>
                        <div>|</div>
                        {/* 삭제 버튼 */}
                        <button className={styles.deletemodal} onClick={() => deleteAddress(address.id)}>
                            삭제
                        </button>
                    </div>
                    {/* 주소 정보 표시 */}
                    <p className={styles.blockName}>이름 : {address.name}</p>
                    <p className={styles.blockAd1}>우편번호 : {address.zip}</p>
                    <p className={styles.blockAd2}>주소 : {address.address}</p>
                    <p className={styles.blockCall1}>휴대전화 : {address.phone}</p>
                    <p className={styles.blockCall2}>집전화 : {address.homePhone}</p>
                </div>
            ))}

            {/* 새 주소 입력 버튼 */}
            <button className={styles.modalOpen} onClick={() => openModal()}>
                배송지 추가
            </button>

            {/* 모달 */}
            {modalOpenChk && (
                <div className={styles.modal}>
                    <div id={styles.modalOverF}>
                        <div id={styles.newAddress}>
                            <div className={styles.modalHeader}>
                                {/* 모달 헤더: 수정/추가에 따라 제목 변경 */}
                                <h4>{editInfo ? '주소 수정' : '새 배송지 입력'}</h4>
                                {/* 닫기 버튼 */}
                                <button id={styles.deleteModal} onClick={closeModal}>
                                    &times;
                                </button>
                            </div>
                            <div>
                                {/* 이름 입력 */}
                                <input className={styles.addInput} type="text" value={editInfo ? editAddress.name : newAddress.name} onChange={e => (editInfo ? seteditAddress({ ...editAddress, name: e.target.value }) : setnewAddress({ ...newAddress, name: e.target.value }))} placeholder="이름" />
                                {/* 우편번호 입력 */}
                                <input className={styles.addInput} type="text" value={editInfo ? editAddress.zip : newAddress.zip} onChange={e => (editInfo ? seteditAddress({ ...editAddress, zip: e.target.value }) : setnewAddress({ ...newAddress, zip: e.target.value }))} placeholder="우편번호" />
                                {/* 주소 입력 */}
                                <input className={styles.addInput} type="text" value={editInfo ? editAddress.address : newAddress.address} onChange={e => (editInfo ? seteditAddress({ ...editAddress, address: e.target.value }) : setnewAddress({ ...newAddress, address: e.target.value }))} placeholder="주소" />
                            </div>
                            {/* 저장 버튼 */}
                            <button id={styles.modalOk} onClick={saveAddress}>
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default AddressList;
