import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../../scss/member/MemberList.module.scss';

function UnactiveMember(props) {
    const [arr, setArr] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]); // 필터링된 고객 데이터
    const [searchType, setSearchType] = useState(''); // 검색 기준
    const [searchValue, setSearchValue] = useState(''); // 검색 값
    const [sortOrder, setSortOrder] = useState('asc'); // 가입일 오름차순/내림차순 정렬
    const [selectAll, setSelectAll] = useState(false); // 전체 선택 체크 여부 (전체 선택 체크박스 false상태)
    const [selectedCustomers, setSelectedCustomers] = useState([]); // 개별 체크박스

    useEffect(() => {
        axios
            .get('http://localhost:5001/admin/member/unactivemember')
            .then(res => {
                setArr(res.data);
                setFilteredCustomers(res.data); // 처음에는 전체 데이터 표시
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, []);

    const handleUpdateStatus = async status => {
        try {
            const res = await axios.post('http://localhost:5001/admin/member/unactivemember', { customer_ids: selectedCustomers, status });
            alert(`정상 상태로 변경되었습니다.`);
            setArr(prev => prev.map(member => (selectedCustomers.includes(member.customer_id) ? { ...member, status } : member)));
            setFilteredCustomers(prev => prev.map(member => (selectedCustomers.includes(member.customer_id) ? { ...member, status } : member)));
            setSelectedCustomers([]);
        } catch (error) {
            console.error('상태 업데이트 에러: ', error);
        }
    };

    // 검색 이벤트 핸들러
    const handleSearch = () => {
        let member = [...arr];

        // 검색 필터 (이름으로 조회/연락처로 조회)
        if (searchType === 'customer_name') {
            member = member.filter(member => member.customer_name.includes(searchValue));
        } else if (searchType === 'contact_number') {
            member = member.filter(member => member.contact_number.includes(searchValue));
        } else if (searchType === 'join_date') {
            member = member.filter(member => member.join_date.includes(searchValue));
        }

        // 가입일 정렬 적용
        if (searchType === 'join_date') {
            member = member.sort((a, b) => {
                const dateA = new Date(a.join_date);
                const dateB = new Date(b.join_date);

                if (sortOrder === 'asc') {
                    return dateA - dateB; // 오름차순
                } else {
                    return dateB - dateA; // 내림차순
                }
            });
        }

        setFilteredCustomers(member);
    };

    // 초기화 버튼 이벤트 핸들러
    const resetSearch = () => {
        setSearchType(''); // 검색 기준 초기화
        setSearchValue(''); // 검색 값 초기화
        setFilteredCustomers(arr); // 전체 고객 데이터로 복원
    };

    // 날짜 포맷팅 함수
    const formatDate = dateString => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    // 체크박스 전체 선택
    const handleSelectAll = () => {
        setSelectAll(!selectAll);

        if (!selectAll) {
            // 전체 선택: 모든 고객이 체크가 됨
            setSelectedCustomers(filteredCustomers.map(member => member.customer_id));
        } else {
            // 전체선택 해제 : 초기화 (아무것도 선택되지 않은 상태)
            setSelectedCustomers([]);
        }
    };

    // 개별 체크박스
    const handleSelectEach = customerId => {
        if (selectedCustomers.includes(customerId)) {
            // 이미 체크가 된 고객이라면
            setSelectedCustomers(selectedCustomers.filter(id => id !== customerId));
            // 체크박스 재클릭 시 체크 해제
        } else {
            // 선택된 고객이 아니면 체크된고객들에다가 해당 고객번호 추가
            setSelectedCustomers([...selectedCustomers, customerId]);
        }
    };

    // 전체 선택 상태 동기화
    useEffect(() => {
        if (selectedCustomers.length === filteredCustomers.length && filteredCustomers.length > 0) {
            setSelectAll(true); // 모두 선택된 상태
        } else {
            setSelectAll(false); // 일부만 선택되거나 선택 없음
        }
    }, [selectedCustomers, filteredCustomers]); // `selectedCustomers`나 `filteredCustomers` 변경 시 실행

    return (
        <div className={styles.memberlist}>
            {/* 검색 바 */}
            <div className={styles.searchbar}>
                <select value={searchType} onChange={e => setSearchType(e.target.value)}>
                    <option value="">검색 기준 선택</option>
                    <option value="customer_name">이름으로 조회</option>
                    <option value="contact_number">연락처로 조회</option>
                    <option value="join_date">가입일로 정렬/조회</option>
                </select>

                <input type="text" placeholder="검색어 입력" value={searchValue} onChange={e => setSearchValue(e.target.value)} />

                {/* 정렬 옵션 */}
                {searchType === 'join_date' && (
                    <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="asc">오래된 가입일 순</option>
                        <option value="desc">최근 가입일 순</option>
                    </select>
                )}

                <div className={styles.actionButtons}>
                    <button className={styles.searchbutton} onClick={handleSearch}>
                        검색
                    </button>
                    <button className={styles.resetbutton} onClick={resetSearch}>
                        초기화
                    </button>
                    <button className={styles.changebutton} disabled={selectedCustomers.length === 0} onClick={() => handleUpdateStatus('휴면')}>
                        정상 변경
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                checked={selectAll} // selectAll 초기값 false
                                onChange={handleSelectAll} // 전체선택 함수로 작동해라
                            />
                            전체 선택
                        </th>
                        <th>고객번호</th>
                        <th>고객명</th>
                        <th>연락처</th>
                        <th>이메일</th>
                        <th>가입일</th>
                        <th>마지막 접속일</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map(mm => (
                        <tr key={mm.customer_id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedCustomers.includes(mm.customer_id)} // 선택된 고객을 넣어라
                                    onChange={() => handleSelectEach(mm.customer_id)} // 체크 상태에 따라 handleSelectEach 작동
                                />
                            </td>
                            <td>
                                <Link to={`/admin/member/detail/${mm.customer_id}`}>{mm.customer_id}</Link>
                            </td>
                            <td>{mm.customer_name}</td>
                            <td>{mm.contact_number}</td>
                            <td>{mm.email}</td>
                            <td>{formatDate(mm.join_date)}</td>
                            <td>{formatDate(mm.last_login_date)}</td>
                            <td>{mm.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UnactiveMember;
