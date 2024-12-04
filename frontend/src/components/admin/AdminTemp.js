import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminTemp(props) {
  return (
    <>
      <div>
        <Link to={`/admin/member`}>회원</Link>
        <Link to={`/admin/product`}>상품</Link>
        <Link to={`/admin/order`}>주문</Link>
        <Link to={`/admin/onetoone`}>게시판</Link>
      </div>
      <Outlet/>
    </>
  );
}

export default AdminTemp;