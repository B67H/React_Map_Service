import { useEffect } from "react";

const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script'
const KAKAO_MAP_APP_KEY = '4cad08175d3b2cc80f05db4d52912a31'

const KakaoMapScriptLoader = () => {

  useEffect(() => {
    const script = document.createElement('script')
    script.id = KAKAO_MAP_SCRIPT_ID
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}`
  },[])

  return <div>맵</div>;
};

export default KakaoMapScriptLoader
