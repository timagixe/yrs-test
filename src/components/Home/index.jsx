import { Link } from 'react-router-dom';

import logo from './logo.svg';
import classes from './Home.module.scss';

export const Home = () => (
  <div className={classes.App}>
    <header className={classes.AppHeader}>
      <img src={logo} className={classes.AppLogo} alt='logo' />
      <Link className={classes.AppLink} to='/employees'>
        Employees
      </Link>
    </header>
  </div>
);
