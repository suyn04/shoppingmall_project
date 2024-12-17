import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import styles from "../../../scss/service/review/ReviewList.module.scss";

const ReviewList = ({ product_id }) => {

    // email 세션 추가

    const email = sessionStorage.getItem('email')
    const [reviews, setReviews] = useState([]);
    const [expandedReview, setExpandedReview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [reportReason, setReportReason] = useState("");
    const [reportContent, setReportContent] = useState("");
    const navigate = useNavigate();
    const { product_opt_id } = useParams();
    console.log("product_opt_id:", product_opt_id);
    console.log(`product_id : `, product_id);

    // 리뷰 데이터 가져오기
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5001/review/productReview?product_id=${product_id}`
                );
                console.log(response.data);
                setReviews(Array.isArray(response.data) ? response.data : []);
            } catch (err) {
                console.error("API 호출 실패:", err);
            }
        };
        fetchReviews();
    }, [product_opt_id]);

    // "더 보기" 토글
    const handleToggle = (reviewId) => {
        setExpandedReview(expandedReview === reviewId ? null : reviewId);
    };

    // 모달 열기
    const handleOpenModal = (review) => {
        // 로그인한 사람만 리뷰작성 가능하게 끔
        if(!email){
            alert('회원만 리뷰작성이 가능합니다.')
            navigate('/signIn')
        }
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
        setReportReason("");
        setReportContent("");
    };

    // 신고 제출 함수
    const handleReportSubmit = async () => {
        if (!reportReason) {
            alert("신고 사유를 선택해 주세요.");
            return;
        }

        if (!reportContent) {
            alert("신고 내용을 입력해 주세요.");
            return;
        }

        try {
            const reportData = {
                email,
                review_no: parseInt(selectedReview.review_no, 10),
                reason: reportReason,
                content: reportContent,
            };

            console.log("보내는 데이터:", reportData);

            await axios.post("http://localhost:5001/reports", reportData);
            alert("신고가 접수되었습니다.");
            handleCloseModal();
        } catch (error) {
            console.error("신고 제출 실패:", error);
            alert("신고 제출에 실패했습니다.");
        }
    };

    // 리뷰 작성 페이지 이동
    const handleWriteReview = () => {
        if (!product_opt_id) {
            console.error("product_opt_id가 없습니다.");
            return;
        }
        navigate(`/review/${product_opt_id}`);
    };
  
    return (
        <div>
            <div className={styles.reviewTitle}>
                리뷰
                <button
                    className={styles.writeReviewButton}
                    onClick={handleWriteReview}
                >
                    리뷰 작성하기
                </button>
            </div>

            {reviews.length === 0 ? (
                <p>리뷰가 없습니다.</p>
            ) : (
                reviews.map((review,index) => (
                    <div key={`${review.review_no}-${index}`} className={styles.reviewCnt}>
                        <h2>{review.review_rate}/5</h2>
                        <h3>{review.review_title}</h3>
                        <p>{review.review_detail}</p>

                        {/* 제품 이미지 표시 */}
                        {review.review_upload_file && (
                            <img
                                src={`http://localhost:5001/imgs/review/${review.review_upload_file}`}
                                alt="Product"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                        )}

                        <button onClick={() => handleToggle(review.review_no)}>
                            {expandedReview === review.review_no
                                ? "닫기"
                                : "더 보기"}
                        </button>

                        {expandedReview === review.review_no && (
                            <div className={styles.rcontent}>
                                <div>
                                    <p>
                                        추천 여부:{" "}
                                        {review.review_recommend
                                            ? "추천함"
                                            : "추천하지 않음"}
                                    </p>
                                    <p>작성자: {review.review_nick}</p>
                                    <p>
                                        지역:{" "}
                                        {review.review_region || "지역 미지정"}
                                    </p>
                                    <p>
                                        향수 계열:{" "}
                                        {review.review_scent || "향 미지정"}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        작성일:{" "}
                                        {new Date(
                                            review.review_date
                                        ).toLocaleDateString()}
                                    </p>
                                    <p>
                                        선물 여부:{" "}
                                        {review.review_gift ? "선물" : "본인용"}
                                    </p>
                                    <button
                                        onClick={() => handleOpenModal(review)}
                                    >
                                        신고하기
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            )}

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <h2>리뷰 신고하기</h2>
                    <p>신고하려는 문제가 어떤 종류인지 알려주세요: *</p>
                    <select
                        value={reportReason}
                        onChange={(e) => setReportReason(e.target.value)}
                        required
                    >
                        <option value="">선택하세요</option>
                        <option value="저속함">저속함</option>
                        <option value="저작권 위반">저작권 위반</option>
                        <option value="틀린 상품">틀린 상품</option>
                        <option value="상품리뷰가 아니다">
                            상품 리뷰가 아니다
                        </option>
                        <option value="스팸">스팸</option>
                        <option value="고객 이미지">고객 이미지</option>
                        <option value="중복">중복</option>
                        <option value="기타">기타</option>
                    </select>

                    <p>내용:</p>
                    <textarea
                        value={reportContent}
                        onChange={(e) => setReportContent(e.target.value)}
                        rows="4"
                        placeholder="신고 내용을 입력하세요."
                    />

                    <div className={styles.buttonGroup}>
                        <button
                            onClick={handleReportSubmit}
                            className={styles.submitButton}
                        >
                            제출하기
                        </button>
                        <button
                            onClick={handleCloseModal}
                            className={styles.cancelButton}
                        >
                          취소
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ReviewList;
