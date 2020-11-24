import { Route, Switch, Router } from 'react-router-dom';

import { Home } from 'components/Home/';
import { history } from 'utils/history.utility';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/employees' component={() => <div>EMPLOYEES</div>} />
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default App;
