import classes from './Employees.module.scss';
import { EmployeesContext } from 'contexts/EmployeesContext';
import { useContext } from 'react';
import { EmployeeCard } from 'components/EmployeeCard';

export const Employees = () => {
  const { employees, checkedEmployees, checkedEmployeesCount } = useContext(
    EmployeesContext
  );

  return (
    <>
      <div className={classes.employeesWrapper}>
        <div className={classes.employeesContent}>
          <div className={classes.employeesHeader}>EMPLOYEES</div>
          {employees.size ? (
            <div style={{ overflowY: 'scroll', height: '100vh' }}>
              {Array.from(employees).map(([letter]) => (
                <EmployeeCard
                  key={letter}
                  letter={letter}
                  employees={employees.get(letter)}
                />
              ))}
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className={classes.employeesBirthday}>
          <div className={classes.employeesHeader}>EMPLOYEES' BIRTHDAYS</div>
          {checkedEmployeesCount ? (
            <div style={{ overflowY: 'scroll', height: '100vh' }}>
              {Array.from(checkedEmployees).map(
                ([monthName, employeesArray]) => {
                  return employeesArray.length ? (
                    <div key={monthName} className={classes.blockWrapper}>
                      <div className={classes.monthTitle}>{monthName}</div>
                      <ul className={classes.monthEmployeesList}>
                        {employeesArray.map((emp) => (
                          <li key={emp.id}>{`${emp.firstName} ${
                            emp.lastName
                          } - ${new Date(emp.dob).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}`}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null;
                }
              )}
            </div>
          ) : (
            <div style={{ margin: '10px' }}>No selected employees</div>
          )}
        </div>
      </div>
    </>
  );
};
