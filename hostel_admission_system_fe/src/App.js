import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './Container/Dashboard/Dashboard';
import Report from './Container/Report/Report';
import StudentDetails from './Container/StudentDetails/StudentDetails';
import AllotmentDetails from './Container/AllotmentDetails/AllotmentDetails';
import Login from './Container/LoginPage/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<StudentDetails />} />
            <Route path="Report" element={<Report />} />
            <Route path="Allotment" element={<AllotmentDetails />} />
            <Route path="Login" element={<Login />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
