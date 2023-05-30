import React from 'react';
import './App.css';
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import {Link,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/Student">Student</Link>
        <Link className="link" to="/ContactUs">ContactUs</Link>
      </div>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Student' element={<Student />}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
