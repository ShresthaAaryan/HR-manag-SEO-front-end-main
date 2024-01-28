import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; 

const EmployeeInfo = ({ employee }) => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            Navbar
            </a>
        </nav>
        <h2>Employee Information</h2>
        <div>
            <strong>Name:</strong> {employee.name}
        </div>
        <div>
            <strong>Position:</strong> {employee.position}
        </div>
        <div>
            <strong>Department:</strong> {employee.department}
        </div>
      {/* Add more details as needed */}
    </div>
  );
};

export default EmployeeInfo;
