import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./pages/Header/Header";
import Menubar from "./pages/Menubar/Menubar";
import Titlebar from "./pages/Titlebar/Titlebar";

const App = () => {
  const [userName, setUserName] = useState('')
  const onChangeHandler = (event) => {
    setUserName(event.target.value)
  }
  return (
    <div className="mainlayout">
      <Menubar />
      <div className="dashboardlayout">
        <Header userName={userName} onChangeHandler={onChangeHandler}/>
        <Titlebar />
        <Dashboard userName={userName}/>
      </div>
    </div>
  );
};
export default App;
