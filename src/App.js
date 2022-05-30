import { BrowserRouter  ,Route,Routes} from 'react-router-dom';
import './App.css';
import Error from './Error';
import InstabugLogin from './InstabugLogin';
import Welcome from './Welcome';
import { AuthProvider } from './auth';
import { RequireAuth } from './RequireAuth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InstabugLogin/>}></Route>
          <Route path="/Welcome" element={<RequireAuth><Welcome/></RequireAuth>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
