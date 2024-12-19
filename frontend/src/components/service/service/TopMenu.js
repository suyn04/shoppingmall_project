import React ,{useState,useEffect}from 'react'
import '../../../scss/service/TopMenu.scss'
import { Link, useParams, useNavigate,useLocation } from "react-router-dom";


const TopMenu = () => {
    const location = useLocation(); // 현재 경로 가져오기
    
  const [activeMenu, setActiveMenu] = useState(''); // 클릭된 메뉴 상태 관리

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName); // 클릭된 메뉴 업데이트
};

// URL이 변경될 때마다 active 상태를 자동으로 업데이트
useEffect(() => {
    const path = location.pathname.replace(urlInfo, '');
    setActiveMenu(path);
  }, [location.pathname]);

const urlInfo = '/info/' 

return (
  <div className="wrapper">
      <div className="swrapper1">
          <div
              className={activeMenu === "faq" ? "active" : ""}
              onClick={() => handleMenuClick("faq")}
          >
              <Link to={`${urlInfo}faq`}>자주 묻는 질문</Link>
          </div>
          <div
              className={activeMenu === "myprofile" ? "active" : ""}
              onClick={() => handleMenuClick("myprofile")}
          >
              <Link to={`${urlInfo}myprofile`}>나의 프로필</Link>
          </div>
          <div
              className={activeMenu === "myorder" ? "active" : ""}
              onClick={() => handleMenuClick("myorder")}
          >
              <Link to={`${urlInfo}myorder`}>나의 오더</Link>
          </div>
          <div
              className={activeMenu === "delivery" ? "active" : ""}
              onClick={() => handleMenuClick("delivery")}
          >
              <Link to={`${urlInfo}delivery`}>배송관련</Link>
          </div>
     
      
          <div
              className={activeMenu === "excahngerefund" ? "active" : ""}
              onClick={() => handleMenuClick("excahngerefund")}
          >
              <Link to={`${urlInfo}excahngerefund`}>교환&환불</Link>
          </div>
          <div
              className={activeMenu === "onlineshopping" ? "active" : ""}
              onClick={() => handleMenuClick("onlineshopping")}
          >
              <Link to={`${urlInfo}onlineshopping`}>온라인 쇼핑하기</Link>
          </div>
          <div
              className={activeMenu === "terms" ? "active" : ""}
              onClick={() => handleMenuClick("terms")}
          >
              <Link to={`${urlInfo}terms`}>이용약관 및 개인정보 처리방침</Link>
          </div>
          </div>
  </div>
);
};

export default TopMenu;