import 'bulma-scss/bulma.scss';

import ClickOutside from './components/click-outside';
import WindowDimensions from './components/window-dimensions';
import ElementDimensionsOnResize from './components/element-dimensions-on-resize';

function App() {
   return (
      <div className="container">
         <div className="section">
            <ClickOutside />
            <WindowDimensions />
            <ElementDimensionsOnResize />
         </div>
      </div>
   );
}

export default App;
