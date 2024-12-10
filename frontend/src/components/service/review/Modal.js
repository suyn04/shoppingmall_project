import React from 'react';
import styles from '../../../scss/service/review/Modal.module.scss';

const Modal = ({ children, onClose}) =>{
    return(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
                <div className={styles.buttonGroup}>
                <button onClick={onClose} className={styles.closeButton}>
                    취소
                </button>
            </div>
            </div>
        </div>
    );
};

export default Modal;