// import { Space } from "antd";


import "./App.css";
import HeaderPage from "./components/Header/Header";
import MenuPage from "./components/Menu/Menu";
import ContentPage from "./components/Content/Content";
import FooterPage from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <HeaderPage />
      <div className="menu-content">
        <MenuPage></MenuPage>
        <ContentPage></ContentPage>
      </div>
      <FooterPage/>
    </div>
  );
}

export default App;
