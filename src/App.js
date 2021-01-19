import 'bulma-scss/bulma.scss';

import ClickOutside from './components/click-outside';
import WindowDimensions from './components/window-dimensions';

function App() {
   return (
      <div className="container">
         <div className="section">
            <ClickOutside />
            <WindowDimensions />
         </div>
      </div>
   );
}

export default App;
