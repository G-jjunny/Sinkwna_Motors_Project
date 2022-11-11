import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      //   center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심좌표
      center: new kakao.maps.LatLng(37.1624125, 128.2295543), // 지도 중심좌표
      level: 3,
      zoomable: false,
      //   draggable: false,
    };
    const map = new kakao.maps.Map(container, options); //지도를 생성

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT); //타입 오른쪽 위

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //마커가 생성 될 위치
    var markerPosition = new kakao.maps.LatLng(37.1624125, 128.2295543);

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 지도에 마커 표시
    marker.setMap(map);
  }, []);

  return (
    <div
      id="myMap"
      //   style={{
      //     width: "500px",
      //     height: "400px",
      //   }}
      className="map"
    ></div>
  );
};

export default MapContainer;
