import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminTemp() {
    const [topbarLinks, setTopbarLinks] = useState([]);
    const [showTopbar, setShowTopbar] = useState(true);

    //사이드바 클릭 시 탑바 노출 : 사이드바 메뉴에 따라 노출되는 탑바 이름과 경로가 변경됨
    const SidebarClick = menu => {
        switch (menu) {
            case 'member': //회원관리 클릭시
                setTopbarLinks([
                    { name: '회원정보 조회', path: '/admin/member' },
                    { name: '휴면고객 관리', path: '/admin/member/unactivemember' },
                    { name: '탈퇴고객 관리', path: '/admin/member/deletedmember' },
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
                    { name: '제품 관리', path: '/admin/product/modify/:product_id' },
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
                setTopbarLinks([
                    { name: '기간별 매출액 조회', path: '/admin/analysis' },
                    { name: '기간별 판매량 조회', path: '/admin/analysis' },
                ]);
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
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {/* 사이드바 */}
            <div style={{ width: '200px', background: '#f0f0f0', padding: '10px', overflowY: 'auto' }}>
                <Link
                    to="/admin"
                    onClick={() => {
                        //관리자 메인페이지를 클릭했을 때 탑바를 숨겨버림
                        setTopbarLinks([]);
                        setShowTopbar(false);
                    }}
                    style={{ display: 'block', margin: '10px 0' }}
                >
                    관리자 메인 페이지
                </Link>
                <Link to="/admin/member" onClick={() => SidebarClick('member')} style={{ display: 'block', margin: '10px 0' }}>
                    회원관리
                </Link>
                <Link to="/admin/order" onClick={() => SidebarClick('order')} style={{ display: 'block', margin: '10px 0' }}>
                    주문관리
                </Link>
                <Link to="/admin/product" onClick={() => SidebarClick('product')} style={{ display: 'block', margin: '10px 0' }}>
                    제품관리
                </Link>
                <Link to="/admin/onetoone" onClick={() => SidebarClick('board')} style={{ display: 'block', margin: '10px 0' }}>
                    게시판관리
                </Link>
                <Link to="/admin/analysis" onClick={() => SidebarClick('analysis')} style={{ display: 'block', margin: '10px 0' }}>
                    매출분석
                </Link>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                {showTopbar && ( //탑바 구간 -- 설정된 경로(path)로 이동
                    <div style={{ padding: '10px', display: 'flex', gap: '20px' }}>
                        {topbarLinks.map((link, index) => (
                            <Link key={index} to={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
                {/* 탑바 선택에 따라 내용바뀌므로 아울렛처리 */}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminTemp;
