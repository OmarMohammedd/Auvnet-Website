import { useState, useEffect } from 'react';

function useFormattedDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

      const formattedDate = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${milliseconds}`;
      setCurrentDate(formattedDate);
    }, 1); // Update every millisecond

    return () => clearInterval(intervalId);
  }, []); // Run effect only once

  return currentDate;
}

export default useFormattedDate;
