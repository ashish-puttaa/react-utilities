import { useRef } from 'react';

import Strip from '../strip';
import { useElementDimensionsOnResize } from '../../hooks/useElementDimensionsOnResize';

const ElementDimensionsOnResize = () => {
   const elRef = useRef();
   const elDimensions = useElementDimensionsOnResize(elRef);

   return (
      <Strip ref={elRef} className="is-warning">
         <Strip.Text>
            <span className="mr-3">This element's dimensions are</span>
            <span className="tag is-black">
               {Math.round(elDimensions.width)} x {Math.round(elDimensions.height)}
            </span>
         </Strip.Text>
         <Strip.Tag text="useElementDimensionsOnResize" className="is-warning" />
      </Strip>
   );
};

export default ElementDimensionsOnResize;
