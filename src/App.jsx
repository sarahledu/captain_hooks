import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./Components/NavMain";
import Home from "./views/Home";
import ClassAsync from "./views/ClassAsync";
import HookAsync from "./views/HookAsync";
import Intro from "./views/Intro";
import Form from "./views/Form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./styles/reset.css";
import "./App.css";
library.add(faPlus, faMinus);

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/class-async" component={ClassAsync} />
        <Route path="/hook-async" component={HookAsync} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
