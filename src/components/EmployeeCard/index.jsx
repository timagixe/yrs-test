import classes from './EmployeeCard.module.scss';
import { EmployeeItem } from 'components/EmployeeItem';

export const EmployeeCard = ({ letter, employees }) => {
  return (
    <div key={letter} className={classes.employeeCard}>
      <div className={classes.employeeLetter}>{letter}</div>
      <div>
        <ul className={classes.employeeList}>
          {employees.length ? (
            employees.map((employee) => (
              <EmployeeItem key={employee.id} employee={employee} />
            ))
          ) : (
            <li className={classes.employeeItem}> --- </li>
          )}
        </ul>
      </div>
    </div>
  );
};
