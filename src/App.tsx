import DynamicMap from "./Map/DynamicMap";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";
import './index.css'

const App = () => {
  return (
    <KakaoMapScriptLoader>
      <DynamicMap/>
      <SearchLocation/>
    </KakaoMapScriptLoader>
  );
};

export default App;
