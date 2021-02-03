import { useState, useLayoutEffect } from 'react';

export const useElementDimensionsOnResize = (ref) => {
   const [panelDimensions, setPanelDimensions] = useState({});

   const updateDimensions = (domEl) => {
      const dimensions = domEl.getBoundingClientRect();
      setPanelDimensions(dimensions);
   };

   useLayoutEffect(() => {
      updateDimensions(ref.current);

      const handleResize = () => updateDimensions(ref.current);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, [ref]);

   return panelDimensions;
};
