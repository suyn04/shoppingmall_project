import React from 'react';
import styles from '../../scss/dup/pagination.module.scss';

const Pagination = ({
    totalItems, //전체 데이터 건수
    itemsPerPage, //1페이지에 보이는 데이터 건수
    pagesPerGroup, //페이지 수 노출
    curPage, //현재 페이지
    setCurPage, //현재 페이지 재설정
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const groupStart = Math.floor((curPage - 1) / pagesPerGroup) * pagesPerGroup + 1; // 그룹의 시작 페이지
    const groupEnd = Math.min(groupStart + pagesPerGroup - 1, totalPages); // 그룹의 끝 페이지

    const pageChange = (page) => {
        setCurPage(page);
    };
    console.log(curPage);

    return (
        <div className={styles.pagination}>
            {/* 이전 그룹 버튼 */}
            <button
                disabled={curPage <= pagesPerGroup}
                className={styles.move}
                onClick={() => pageChange(groupStart - pagesPerGroup)}
            >
                이전
            </button>

            {/* 페이지 버튼 */}
            {Array.from({ length: groupEnd - groupStart + 1 }, (_, index) => (
                <button
                    key={groupStart + index}
                    className={`${styles.page} ${curPage === groupStart + index ? styles.active : ''}`}
                    onClick={() => pageChange(groupStart + index)}
                >
                    {groupStart + index}
                </button>
            ))}

            {/* 다음 그룹 버튼 */}
            <button
                disabled={curPage > pagesPerGroup * (Math.floor(totalPages / pagesPerGroup) - 1)}
                className={styles.move}
                onClick={() => pageChange(groupStart + pagesPerGroup)}
            >
                다음
            </button>
        </div>
    );
};

export default Pagination;
