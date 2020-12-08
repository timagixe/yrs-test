import { alphabetEntries } from 'constants/index';

export const groupEmployeesByAlphabet = (employees) => {
  const grouppedEmployees = new Map(alphabetEntries);

  employees.forEach((emp) => {
    const keyToUpdate = emp.lastName[0];
    const newValue = grouppedEmployees.get(keyToUpdate);
    emp.checked = false;
    newValue.push(emp);
    grouppedEmployees.set(keyToUpdate, newValue);
  });

  return grouppedEmployees;
};
