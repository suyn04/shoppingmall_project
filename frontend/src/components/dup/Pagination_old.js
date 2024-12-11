import React from "react";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    pagesPerGroup = 5,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const totalGroups = Math.ceil(totalPages / pagesPerGroup);

    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    return (
        <div className="pagination">
            <button
                className="first"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                처음
            </button>
            <button
                className="prev"
                onClick={() => onPageChange(startPage - 1)}
                disabled={currentGroup === 1}
            >
                이전
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page ${page === currentPage ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="next"
                onClick={() => onPageChange(endPage + 1)}
                disabled={currentGroup === totalGroups}
            >
                다음
            </button>
            <button
                className="last"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                마지막
            </button>
        </div>
    );
};

export default Pagination;
