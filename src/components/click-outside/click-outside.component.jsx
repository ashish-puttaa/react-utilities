import { useRef, useState } from 'react';

import Strip from '../strip';
import { useClickOutside } from '../../hooks/useClickOutside';

const ClickOutside = () => {
   const [count, setCount] = useState(0);
   const ref = useRef();

   const onClickOutside = () => setCount(count + 1);
   useClickOutside(ref, onClickOutside);

   return (
      <Strip ref={ref} className="is-info">
         <Strip.Text>
            <span className="mr-2">You clicked outside</span>
            <span className="tag is-black mr-2">{count}</span> times
         </Strip.Text>
         <Strip.Tag text="useClickOutside" className="is-info" />
      </Strip>
   );
};

export default ClickOutside;
