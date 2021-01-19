import { useEffect } from 'react';

export const useWatchValue = (value, name = 'provided value') => {
   useEffect(() => {
      console.log(name, 'changed to: ', value);
   }, [value, name]);
};
