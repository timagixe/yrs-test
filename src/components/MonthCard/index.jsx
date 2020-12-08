import classes from './MonthCard.module.scss';
import { formatDate } from 'utils/formatDate.utility';

export const MonthCard = ({ monthName, employeesArray }) => {
  return (
    <div key={monthName} className={classes.blockWrapper}>
      <div className={classes.monthTitle}>{monthName}</div>
      <ul className={classes.monthEmployeesList}>
        {employeesArray.map(({ id, firstName, lastName, dob }) => (
          <li key={id}>{`${firstName} ${lastName} - 
          ${formatDate(dob, 'en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          `}</li>
        ))}
      </ul>
    </div>
  );
};
