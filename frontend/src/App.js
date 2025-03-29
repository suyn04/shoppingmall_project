import Home from './components/main/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BigWrap from './components/main/BigWrap';
// product
import ColognesHomeWrap from './components/product/colognes/ColognesHomeWrap';
import DetailWrap from './components/product/productDetail/DetailWrap';
import HomeSecntsHomeWrap from './components/product/homeSecnts/HomeSecntsHomeWrap';
import HomeSecntsTotal from './components/product/homeSecnts/HomeSecntsTotal';
import CandleHomeWrap from './components/product/homeSecnts/CandleHomeWrap';
import ColognesScent from './components/product/colognes/ColognesScent';
import ColognesSize from './components/product/colognes/ColognesSize';
import DiffuserHomeWrap from './components/product/homeSecnts/DiffuserHomeWrap';
import BathBodyHomeWrap from './components/product/bathBody/BathBodyHomeWrap';
import BathBodyTotal from './components/product/bathBody/BathBodyTotal';
import BathShowerHomeWrap from './components/product/bathBody/BathShowerHomeWrap';
import BodyCareHomeWrap from './components/product/bathBody/BodyCareHomeWrap';
import Search from './components/dup/Search';
import BestSeller from './components/product/BestSeller';
import ScentFinder from './components/dup/ScentFinder';
import ProdListContainer from './components/product/ProdListContainer';
// services
import Faq from './components/service/service/Faq'; //고객 서비스 및 이용약관
import MyProfile from './components/service/service/MyProfile';
import MyOrder from './components/service/service/MyOrder';
import Delivery from './components/service/service/Delivery';
import ExchangeRefund from './components/service/service/ExchangeRefund';
import OnlineShopping from './components/service/service/OnlineShopping';
import Terms from './components/service/service/Terms';
import Temp from './components/service/service/Temp';
import StoryMain from './components/service/story/StoryMain'; //스토리
import CharityMission from './components/service/story/CharityMission';
import Sustainable from './components/service/story/Sustainable';
import PeopleWorkplace from './components/service/story/PeopleWorkplace';
import OneToOne from './components/service/IldaeIl/OneToOne'; //일대일문의
import OneToOneMain from './components/service/IldaeIl/OneToOneMain';
import Review from './components/service/review/Review'; //리뷰
import ReviewList from './components/service/review/ReviewList';
import AReviewList from './components/admin/service/AReviewList'; //관리자 페이제 리뷰
import AReviewDetail from './components/admin/service/AReviewDetail';
//mypage
import AddressList from './components/mypage/AddressList';
import MyInfoTemp from './components/mypage/MyInfoTemp';
import MyInfo from './components/mypage/MyInfo';
import MyinfoEdit from './components/mypage/MyinfoEdit';
import ViewOrders from './components/mypage/ViewOrders';
import SignIn from './components/mypage/SignIn';
import SignUp from './components/mypage/SignUp';
import FindPw from './components/mypage/FindPw';
import OrderDetail from './components/mypage/OrderDetail';
//
import Map from './components/dup/Map';
import Basket from './components/order/Basket';
import Payment1 from './components/order/Payment1';
import Payment2 from './components/order/Payment2';
import Payment3 from './components/order/Payment3';
import Mypage from './Mypage';
import Admin from './components/admin/Admin';
import ScrollToTop from './components/dup/ScrollToTop';

function AdminChk() {
    const email = sessionStorage.getItem('email');
    const customerName = sessionStorage.getItem('customerName');
    // 홈으로 이동
    if (email === 'admin@jomalone.kr' && customerName === '관리자') {
        return <Admin />;
    } else {
        console.log('일반 고객이므로 어드민 접근불가');
        return <></>;
    }
}
function AppContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BigWrap />}>
                    <Route path="" element={<Home />} />
                    <Route path="map" element={<Map />} />
                    {/* payment */}
                    <Route path="basket" element={<Basket />} />
                    <Route path="payment1" element={<Payment1 />} />
                    <Route path="payment2" element={<Payment2 />} />
                    <Route path="payment3" element={<Payment3 />} />
                    {/* product */}
                    <Route path="colognes" element={<ColognesHomeWrap />}>
                        <Route path="" element={<ColognesScent />} />
                        <Route path=":product_scent" element={<ColognesScent />} />
                        <Route path="size" element={<ColognesSize />} />
                        <Route path="size/:product_volume" element={<ColognesSize />} />
                    </Route>
                    <Route path="home-scents" element={<HomeSecntsHomeWrap />}>
                        <Route path="" element={<HomeSecntsTotal />} />
                        <Route path="candles" element={<CandleHomeWrap />} />
                        <Route path="candles/:product_scent" element={<CandleHomeWrap />} />
                        <Route path="diffusers" element={<DiffuserHomeWrap />} />
                        <Route path="diffusers/:product_scent" element={<DiffuserHomeWrap />} />
                    </Route>
                    <Route path="bath-body" element={<BathBodyHomeWrap />}>
                        <Route path="" element={<BathBodyTotal />} />
                        <Route path="bath-shower" element={<BathShowerHomeWrap />} />
                        <Route path="bath-shower/:product_category_thr" element={<BathShowerHomeWrap />} />
                        <Route path="body-care" element={<BodyCareHomeWrap />} />
                        <Route path="body-care/:product_category_thr" element={<BodyCareHomeWrap />} />
                    </Route>
                    <Route path="product/:product_opt_id" element={<DetailWrap />} />
                    <Route path="search" element={<Search />} />
                    <Route path="best-seller" element={<BestSeller />} />
                    <Route path="all-product" element={<ProdListContainer />} />
                    <Route path="scent-finder" element={<ScentFinder />} />
                    {/* services */}
                    <Route path="info" element={<Temp />}>
                        <Route path="faq" element={<Faq />} />
                        <Route path="myprofile" element={<MyProfile />} />
                        <Route path="myorder" element={<MyOrder />} />
                        <Route path="delivery" element={<Delivery />} />
                        <Route path="excahngerefund" element={<ExchangeRefund />} />
                        <Route path="onlineshopping" element={<OnlineShopping />} />
                        <Route path="terms" element={<Terms />} />
                    </Route>
                    {/* Story 관련 라우트 */}
                    <Route path="storymain" element={<StoryMain />} />
                    <Route path="chartiymission" element={<CharityMission />} />
                    <Route path="sustainable" element={<Sustainable />} />
                    <Route path="peopleworkplace" element={<PeopleWorkplace />} />
                    {/* 일대일문의 */}
                    <Route path="onetoone" element={<OneToOne />} />
                    <Route path="onetoonelist" element={<OneToOneMain />} />
                    {/* 리뷰 */}
                    <Route path="review/:product_opt_id" element={<Review />} />
                    <Route path="review/:product_opt_id" element={<ReviewList />} />
                    <Route path="areviewlist" element={<AReviewList />} />
                    <Route path="areviewdetail/:id" element={<AReviewDetail />} />
                    {/* mypage */}
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                    <Route path="findPw" element={<FindPw />} />
                    <Route path="myPage" element={<MyInfoTemp />}>
                        <Route path="" element={<MyInfo />} />
                        <Route path="addressList" element={<AddressList />} />
                        <Route path="myinfoEdit" element={<MyinfoEdit />} />
                        <Route path="viewOrders" element={<ViewOrders />} />
                        <Route path="orderDetail/:id" element={<OrderDetail />} />
                    </Route>
                    <Route path="admin" element={<AdminChk />} />
                </Route>
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
