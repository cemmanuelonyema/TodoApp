import React from "react";
import AppHeader from "./components/AppHeader";
import Title from "./components/Title";
import style from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className="container">
      <Title />
      <div className={style.app__wrapper}>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
