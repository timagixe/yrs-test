import { useContext, useState } from 'react';

import { EmployeesContext } from 'contexts/EmployeesContext';
import classes from './EmployeeItem.module.scss';

export const EmployeeItem = ({ employee }) => {
  const { lastName, firstName } = employee;
  const [checked, setChecked] = useState(false);
  const { updateCheckedEmployees } = useContext(EmployeesContext);

  return (
    <li className={classes.employeeItem}>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => {
          updateCheckedEmployees(employee);
          setChecked(!checked);
        }}
      />
      {`${lastName} ${firstName}`}
    </li>
  );
};
