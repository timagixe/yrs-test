import axios from 'axios';
import { useState, useEffect } from 'react';

import { groupEmployeesByAlphabet } from 'utils';

export const useRequest = (baseUrl, pathName) => {
  const [employees, setEmployees] = useState(new Map());

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(`${baseUrl}/${pathName}`);
        setEmployees(groupEmployeesByAlphabet(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [baseUrl, pathName]);

  return [employees, setEmployees];
};
