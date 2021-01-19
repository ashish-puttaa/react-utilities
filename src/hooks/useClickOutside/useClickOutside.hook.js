import { useEffect, useRef } from 'react';

export const useClickOutside = (elementRef, callback) => {
   const callbackRef = useRef();
   callbackRef.current = callback;

   useEffect(() => {
      const handleClickOutside = (e) => {
         const elementRefContainsTarget = elementRef?.current?.contains(e.target);

         if (!elementRefContainsTarget && callbackRef.current) {
            callbackRef.current(e);
         }
      };

      document.addEventListener('click', handleClickOutside, true);
      return () => {
         document.removeEventListener('click', handleClickOutside, true);
      };
   }, [callbackRef, elementRef]);
};
