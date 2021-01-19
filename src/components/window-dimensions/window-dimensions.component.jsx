import { useWindowDimensions } from '../../hooks/useWindowDimensions';

const WindowDimensions = () => {
   const dimensions = useWindowDimensions();

   return (
      <div className="notification is-danger">
         <p className="subtitle">
            Your window size is
            <span className="tag is-black mx-3">
               {dimensions.width} x {dimensions.height}
            </span>
         </p>
      </div>
   );
};

export default WindowDimensions;
