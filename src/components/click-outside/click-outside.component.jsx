import { useRef, useState } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside';

const ClickOutside = () => {
   const [count, setCount] = useState(0);
   const ref = useRef();

   const onClickOutside = () => setCount(count + 1);
   useClickOutside(ref, onClickOutside);

   return (
      <div ref={ref} className="notification is-info">
         <p className="subtitle">
            You clicked outside <span className="tag is-black mx-2">{count}</span> times
         </p>
      </div>
   );
};

export default ClickOutside;
