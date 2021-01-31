import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import Strip from '../strip';

const WindowDimensions = () => {
   const dimensions = useWindowDimensions();

   return (
      <Strip className="is-danger">
         <Strip.Text>
            <span className="mr-3">Your window size is</span>
            <span className="tag is-black" style={{ marginLeft: 'auto' }}>
               {dimensions.width} x {dimensions.height}
            </span>
         </Strip.Text>
         <Strip.Tag text="useWindowDimensions" className="is-danger" />
      </Strip>
   );
};

export default WindowDimensions;
