import React from 'react';
import { Link } from 'react-router-dom';
import Analysis from './analysis/Analysis';

function AdminMain() {
    return (
        <div style={{ padding: '20px' }}>
            {/* 업무 -- 건수 확인하고 클릭시 해당 게시판으로 넘어감 */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                }}
            >
                <Link
                    to="/admin/order"
                    style={{
                        textDecoration: 'none',
                        textAlign: 'center',
                        flex: 1,
                        padding: '10px',
                        color: '#333',
                    }}
                >
                    <div>주문접수</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>13 건</div>
                </Link>
                <Link
                    to="/admin/onetoone"
                    style={{
                        textDecoration: 'none',
                        textAlign: 'center',
                        flex: 1,
                        padding: '10px',
                        color: '#333',
                    }}
                >
                    <div>문의접수</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>5 건</div>
                </Link>
                <Link
                    to="/admin/reports"
                    style={{
                        textDecoration: 'none',
                        textAlign: 'center',
                        flex: 1,
                        padding: '10px',
                        color: '#333',
                    }}
                >
                    <div>반품요청</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>3 건</div>
                </Link>
                <Link
                    to="/admin/reports"
                    style={{
                        textDecoration: 'none',
                        textAlign: 'center',
                        flex: 1,
                        padding: '10px',
                        color: '#333',
                    }}
                >
                    <div>신고접수</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>1 건</div>
                </Link>
            </div>

            {/* 차트 영역 */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        height: '600px',
                        backgroundColor: '#f4f4f4',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                    }}
                >
                    {/* 메인에 차트를 끌어와서 넣으려면 컴포넌트로 만들어서 가져오면 댐 */}
                    <Analysis />
                </div>
            </div>
        </div>
    );
}

export default AdminMain;
