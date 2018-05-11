import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import WorkDiary from "./routes/workdiary/WorkDiary";
import WorkDiaryCreate from "./routes/workdiary/WorkDiaryCreate";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/workdiary" exact component={WorkDiary} />
        <Route path="/workdiaryCreate" exact component={WorkDiaryCreate} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
