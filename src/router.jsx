import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './App'
import Analysis from './page/dashboard/analysis'
import Monitor from './page/dashboard/monitor'
import Workplace from './page/dashboard/workplace'

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/dashboard" component={Home}></Route>
      <Route path="/dashboard/analysis" component={Analysis} />
      <Route path="/dashboard/monitor" component={Monitor} />
      <Route path="/dashboard/workplace" component={Workplace} />
    </div>
  </Router>
);

export default AppRouter;