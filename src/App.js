import React from 'react';
import SwitchRoute, { RouteState }  from './routing/SwitchRoute';
import { Router, withRouter } from './routing/Routing';
import RouteList from "./RouteList";
import GlobalState from "./state/GlobalState";
import Login from './page/home/Login';
import SideMenu from './components/SideMenu';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
      {!GlobalState.session.uid === null ? (<Login />) : (
        <div>
          <div class="navbar-bg"></div>
          <TopMenu />
          <SideMenu />
        </div>
      )}
        <div class="main-content" style={{minHeight:545}}>
          <SwitchRoute routes={RouteList} />
        </div>
      </Router>
      <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2020 <div class="bullet"></div> eWed Team
        </div>
        <div class="footer-right">
          2.3.0
        </div>
      </footer>
    </div>
  );
}

export default App;
