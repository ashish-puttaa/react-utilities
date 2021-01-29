import { useRef } from 'react';

import { useElementDimensionsOnResize } from '../../hooks/useElementDimensionsOnResize';

const ElementDimensionsOnResize = () => {
   const elRef = useRef();
   const elDimensions = useElementDimensionsOnResize(elRef);

   return (
      <div ref={elRef} className="notification is-warning">
         <p className="subtitle">
            This element's dimensions are
            <span className="tag is-black mx-3">
               {Math.round(elDimensions.width)} x {Math.round(elDimensions.height)}
            </span>
         </p>
      </div>
   );
};

export default ElementDimensionsOnResize;
