import React from 'react';
import './App.css';
import CustomLayout from "./package/components/CustomLayout";

function App() {
  return (
    <div className="App">
        <h1>Hello, world!</h1>
        <CustomLayout backgroundColor={'blue'}>

        </CustomLayout>
    </div>
  );
}

export default App;
