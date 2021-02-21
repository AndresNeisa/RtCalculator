import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Room from './Pages/Room';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Dashboard>
          <div className="col-md">

            {/* <Switch>

            </Switch> */}

            <Room></Room>

          </div>
        </Dashboard>
      </div>
    </BrowserRouter>
  );
}

export default App;
