import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../assets/css/dashlite.css?ver=1.3.0";
import "../assets/css/theme.css?ver=1.3.0";

import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import DefaultDashboard from "./navigation/DefaultDashboard";

function App() {
  return (
    <div classNameName="nk-body bg-lighter npc-general has-sidebar ">
      <div className="nk-app-root">
        <div className="nk-main ">
          <Router>
            <SideBar />
            <div className="nk-wrap ">
              <Header />
              <Switch>
                <Route path="/" exact component={DefaultDashboard} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
