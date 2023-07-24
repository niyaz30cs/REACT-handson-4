import React from 'react'
import {Link} from "react-router-dom"
function Student() {
  return (
    <div>
      <div className='first'>
        <h1>Students Details</h1>
        <button>Add new student</button>
      </div>
      <table className='table' border={(2)} cellSpacing={(0)}>
        <thead>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        </thead>
        <tbody className='tbody'>
        <tr>
          <td>Niyaz Alam</td>
          <td>22</td>
          <td>MERN</td>
          <td>February</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>26</td>
          <td>MERN</td>
          <td>September</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Barar</td>
          <td>22</td>
          <td>MERN</td>
          <td>September</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Christ</td>
          <td>23</td>
          <td>MERN</td>
          <td>October</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Elent</td>
          <td>24</td>
          <td>MERN</td>
          <td>November</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        <tr>
          <td>Harshita Sharma</td>
          <td>24</td>
          <td>MERN</td>
          <td>October</td>
          <td><Link to="#">Edit</Link></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Student
