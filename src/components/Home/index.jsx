import { Link } from 'react-router-dom';

import logo from './logo.svg';
import classes from './Home.module.scss';

export const Home = () => (
  <div className={classes.home}>
    <header className={classes.homeHeader}>
      <img src={logo} className={classes.homeLogo} alt='logo' />
      <Link className={classes.homeLink} to='/yrs-test/employees'>
        Employees
      </Link>
    </header>
  </div>
);
