import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../scss/admin/AdminTemp.module.scss';

function AdminTemp() {
    const [topbarLinks, setTopbarLinks] = useState([]);
    const [showTopbar, setShowTopbar] = useState(true);

    //사이드바 클릭 시 탑바 노출 : 사이드바 메뉴에 따라 노출되는 탑바 이름과 경로가 변경됨
    const SidebarClick = menu => {
        switch (menu) {
            case 'member': //회원관리 클릭시
                setTopbarLinks([
                    { name: '회원정보 조회', path: '/admin/member' },
                    {
                        name: '휴면고객 관리',
                        path: '/admin/member/unactivemember',
                    },
                    {
                        name: '탈퇴고객 관리',
                        path: '/admin/member/deletedmember',
                    },
                ]);
                break;
            case 'order': //주문관리 클릭시
                setTopbarLinks([
                    { name: '주문정보 조회', path: '/admin/order' },
                    { name: '주문상태 조회', path: '/admin/orderStatus' },
                ]);
                break;
            case 'product': //제품관리 클릭시
                setTopbarLinks([
                    { name: '제품정보 조회', path: '/admin/product' },
                    { name: '제품 등록', path: '/admin/product/register' },
                ]);
                break;
            case 'board': //게시판관리 클릭시
                setTopbarLinks([
                    { name: '1:1문의 관리', path: '/admin/onetoone' },
                    { name: '리뷰관리', path: '/admin/areviewlist' },
                    { name: '신고관리', path: '/admin/reports' },
                ]);
                break;
            case 'analysis': //매출분석 클릭시
                setTopbarLinks([{ name: '기간별 매출액 조회', path: '/admin/analysis' }]);
                break;
        }
        setShowTopbar(true); //사이드바를 클릭했을 때는 탑바가 노출되어있어야 함
    };

    // 경로가 어드민 메인페이지일땐 탑바 보이지 않게 설정 -- 경로가 어드민이 아니면 항상 setShowTopbar가 true이므로 노출됨
    useEffect(() => {
        const TopbarHidden = () => {
            if (window.location.pathname === '/admin') {
                setShowTopbar(false); // 탑바 보여주지 않음
            }
        };
        // 함수실행 -- 주소를 확인하고 어드민일 경우에는 탑바 숨김 설정으로 변경되게
        TopbarHidden();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.subbar1}>
                    <Link
                        to="/admin"
                        onClick={() => {
                            setTopbarLinks([]);
                            setShowTopbar(false);
                        }}
                    >
                        메인페이지로
                    </Link>
                </div>
                <div className={styles.subbar2}>
                    <Link to="/admin/member" onClick={() => SidebarClick('member')}>
                        회원관리
                    </Link>
                </div>
                <div className={styles.subbar3}>
                    <Link to="/admin/order" onClick={() => SidebarClick('order')}>
                        주문관리
                    </Link>
                </div>
                <div className={styles.subbar3}>
                    <Link to="/admin/product" onClick={() => SidebarClick('product')}>
                        제품관리
                    </Link>
                </div>
                <div className={styles.subbar4}>
                    <Link to="/admin/onetoone" onClick={() => SidebarClick('board')}>
                        게시판관리
                    </Link>
                </div>
                <div className={styles.subbar5}>
                    <Link to="/admin/analysis" onClick={() => SidebarClick('analysis')}>
                        매출분석
                    </Link>
                </div>
            </div>

            <div className={styles.content}>
                {showTopbar && (
                    <div className={styles.topbar}>
                        {topbarLinks.map((link, index) => (
                            <Link key={index} to={link.path}>
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
