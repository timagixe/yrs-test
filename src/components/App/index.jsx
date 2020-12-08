import { Route, Switch, Router } from 'react-router-dom';

import { EmployeesProvider } from 'contexts/EmployeesContext';
import { Home } from 'components/Home/';
import { Employees } from 'components/Employees';
import { history } from 'utils/history.utility';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path='/employees'
        component={() => (
          <EmployeesProvider children={<Employees />}></EmployeesProvider>
        )}
      />
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default App;
