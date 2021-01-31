import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import Strip from '../strip';

const WindowDimensions = () => {
   const dimensions = useWindowDimensions();

   return (
      <Strip className="is-danger">
         <Strip.Text>
            Your window size is
            <span className="tag is-black mx-3" style={{ marginLeft: 'auto' }}>
               {dimensions.width} x {dimensions.height}
            </span>
         </Strip.Text>
         <Strip.Tag text="useWindowDimensions" className="is-danger" />
      </Strip>
   );
};

export default WindowDimensions;
