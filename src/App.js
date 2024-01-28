import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Registration } from './Registration';
import { Login } from './Login';
import { Driver } from './Driver'
import { AssignedJob } from './AssignedJobDriver';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Driver" element={<Driver/>}></Route>
        <Route path="/Driver/AssignedJob" element={<AssignedJob/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;