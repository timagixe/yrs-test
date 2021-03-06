import { Route, Switch, Router } from 'react-router-dom';

import { EmployeesProvider } from 'contexts/EmployeesContext';
import { Home } from 'components/Home/';
import { Employees } from 'components/Employees';
import { history } from 'utils';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path='/yrs-test/employees'
        component={() => (
          <EmployeesProvider children={<Employees />}></EmployeesProvider>
        )}
      />
      <Route exact path='/yrs-test' component={Home} />
    </Switch>
  </Router>
);

export default App;
