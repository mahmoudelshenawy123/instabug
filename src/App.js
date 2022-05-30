import { BrowserRouter  ,Route,Routes} from 'react-router-dom';
import './App.css';
import Error from './Error';
import InstabugLogin from './InstabugLogin';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <div className='outer'>
          <BrowserRouter>
            <Routes>
              <Route path="/InstabugLogin" element={<InstabugLogin/>}></Route>
              <Route path="/Welcome" element={<Welcome/>}></Route>
              <Route path="*" element={<Error/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
