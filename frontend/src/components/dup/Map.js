import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/dup/map.module.scss';

function Map(props) {
    const mapRef = useRef(null);
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_MAPS_CLIENT_ID; // 환경 변수 불러오기

    useEffect(() => {
        // 이미 네이버 지도 API가 로드되었는지 확인
        if (window.naver) {
            initializeMap();
            return;
        }

        // 동적으로 <script> 태그 추가
        const script = document.createElement('script');
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
        script.async = true;
        script.onload = () => initializeMap();
        document.body.appendChild(script);

        function initializeMap() {
            if (!window.naver || !mapRef.current) return;
            const map = new window.naver.maps.Map(mapRef.current, {
                center: new window.naver.maps.LatLng(37.5665, 126.978),
                zoom: 15,
            });

            // 마커 추가
            new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(37.5665, 126.978),
                map,
            });
        }
    }, [NAVER_CLIENT_ID]);

    return (
        <div className={styles.mapWrap}>
            <div className={styles.topDir}>
                <ol>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <p>&gt;</p>
                    <li>
                        <Link to="/map">매장 안내</Link>
                    </li>
                </ol>
            </div>
            <div ref={mapRef} style={{ width: '90%', height: '400px', margin: 'auto' }} />
        </div>
    );
}

export default Map;
