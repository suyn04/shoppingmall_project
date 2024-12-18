import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from '../../scss/admin/AdminTemp.module.scss';

function AdminTemp() {
    const [topbarLinks, setTopbarLinks] = useState([]);
    const [showTopbar, setShowTopbar] = useState(true);
    const location = useLocation();

    // 탑바 링크를 경로에 따라 설정
    useEffect(() => {
        if (location.pathname.startsWith('/admin/member')) {
            // 경로가 '/admin/member' 또는 그 하위 경로일 때
            setTopbarLinks([
                { name: '회원정보 조회', path: '/admin/member' },
                { name: '휴면고객 관리', path: '/admin/member/unactivemember' },
                { name: '탈퇴고객 관리', path: '/admin/member/deletedmember' },
            ]);
        } else if (location.pathname.startsWith('/admin/order')) {
            setTopbarLinks([
                { name: '주문정보 조회', path: '/admin/order' },
                { name: '주문상태 조회', path: '/admin/orderStatus' },
            ]);
        } else if (location.pathname.startsWith('/admin/product')) {
            setTopbarLinks([
                { name: '제품정보 조회', path: '/admin/product' },
                { name: '제품 등록', path: '/admin/product/register' },
            ]);
        } else if (location.pathname.startsWith('/admin/onetoone') || location.pathname.startsWith('/admin/areviewlist') || location.pathname.startsWith('/admin/reports')) {
            setTopbarLinks([
                { name: '1:1문의 관리', path: '/admin/onetoone' },
                { name: '리뷰관리', path: '/admin/areviewlist' },
                { name: '신고관리', path: '/admin/reports' },
            ]);
        } else if (location.pathname.startsWith('/admin/analysis')) {
            setTopbarLinks([{ name: '기간별 매출액 조회', path: '/admin/analysis' }]);
        } else {
            setTopbarLinks([]); // 기본값
        }

        setShowTopbar(location.pathname !== '/admin'); // /admin 메인에서는 탑바 숨기기
    }, [location.pathname]);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Link to="/admin" className={styles.topLink}>
                    페이지 메인으로
                </Link>
                <div className={styles.menu}>
                    <div className={styles.subbar}>
                        <Link to="/admin/member">
                            <span>회원관리</span>
                            <span className={styles.arrow}>➡︎</span>
                        </Link>
                    </div>
                    <div className={styles.subbar}>
                        <Link to="/admin/order">
                            <span>주문관리</span>
                            <span className={styles.arrow}>➡︎</span>
                        </Link>
                    </div>
                    <div className={styles.subbar}>
                        <Link to="/admin/product">
                            <span>제품관리</span>
                            <span className={styles.arrow}>➡︎</span>
                        </Link>
                    </div>
                    <div className={styles.subbar}>
                        <Link to="/admin/onetoone">
                            <span>게시판관리</span>
                            <span className={styles.arrow}>➡︎</span>
                        </Link>
                    </div>
                    <div className={styles.subbar}>
                        <Link to="/admin/analysis">
                            <span>매출분석</span>
                            <span className={styles.arrow}>➡︎</span>
                        </Link>
                    </div>
                </div>
                <Link to="/" className={styles.bottomLink}>
                    조말론 쇼핑몰 페이지로 이동
                </Link>
            </div>

            {/* 콘텐츠 영역 */}
            <div className={styles.content}>
                {showTopbar && (
                    <div className={styles.topbar}>
                        {topbarLinks.map((link, index) => (
                            <Link key={index} to={link.path} className={`${styles.topbarLink} ${location.pathname === link.path ? styles.active : ''}`}>
                                {/* 현재 클릭한 메뉴만 별도 스타일로 표시 */}
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
                <Outlet />
            </div>
        </div>
    );
}

export default AdminTemp;
