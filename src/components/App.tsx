import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import WorkHistory from './pages/workHistory';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/work/history" component={WorkHistory} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
