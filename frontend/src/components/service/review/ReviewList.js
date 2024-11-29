import React from 'react'
import styles from '../../../scss/service/review/ReviewList.module.scss'
const ReviewList = () => {
  return (
    <div>
        <div className={styles.reviewTitle}>리뷰</div>
        <div className={styles.starstar}>4.6/5</div>
    </div>
  )
}

export default ReviewList
