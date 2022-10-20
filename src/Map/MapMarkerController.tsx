import { useEffect } from "react";
import { useMap } from "../hooks/useMap";
import MapMarker from "./MapMarker";
import { PlaceType } from "./mapTypes";

interface MapMarkerControllerProps {
  places: PlaceType[];
  selectedPlaceId?: string;
}

const MapMarkerController = (props: MapMarkerControllerProps) => {
  // 검색 결과들 기준으로 맵화면 바운더리 재설정
  const map = useMap();

  useEffect(() => {
    if (props.places.length < 1) {
      // 검색 결과 없을 시
      return;
    }

    const bounds = new window.kakao.maps.LatLngBounds(); // 검색된 장소 좌표 저장 객체
    props.places.forEach((place) => {
      bounds.extend(place.position);
    });

    map.setBounds(bounds);
  }, [props.places]);

  return (
    <>
      {props.places.map((place, index) => {
        return (
          <MapMarker
            key={place.id}
            place={place}
            showInfo={props.selectedPlaceId === place.id}
            index={index}
          />
        );
      })}
    </>
  );
};

export default MapMarkerController;
