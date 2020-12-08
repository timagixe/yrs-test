import { createContext, useState } from 'react';

import { baseUrl, monthsEntries, pathName } from '../constants';
import { useRequest } from 'hooks/useRequest.hook';

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const [data] = useRequest(baseUrl, pathName);
  const [checked, setChecked] = useState(new Map(monthsEntries));
  const [count, setCount] = useState(0);

  const updateCheckedEmployees = (employee) => {
    const checkedCopy = new Map(checked);
    const keyToUpdate = new Date(employee.dob).toLocaleString('en-GB', {
      month: 'long',
    });
    const newValue = checkedCopy.get(keyToUpdate);

    if (!newValue.includes(employee)) {
      newValue.push(employee);
      setCount(count + 1);
    } else {
      newValue.filter((emp) => emp !== employee);
      setCount(count - 1);
    }

    checkedCopy.set(keyToUpdate, newValue);

    setChecked(checkedCopy);
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees: data,
        updateCheckedEmployees,
        checkedEmployees: checked,
        checkedEmployeesCount: count,
      }}
      children={children}
    />
  );
};

export { EmployeesContext, EmployeesProvider };
