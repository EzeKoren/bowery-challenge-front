import React from 'react';
import Header from 'views/Header';
import EmployeeCards from 'views/EmployeeCards';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <EmployeeCards/>
      </div>
    </div>
  );
}

export default App;
