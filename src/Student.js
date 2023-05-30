import React from 'react'

function Student() {
  return (
    <div>
      <div className='first'>
        <h1>Students Details</h1>
        <button>Add new student</button>
      </div>
      <table className='table' border={(2)} cellSpacing={(0)}>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>John</td>
          <td>26</td>
          <td>MERN</td>
          <td>October</td>
          <td></td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td></td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>26</td>
          <td>MERN</td>
          <td>September</td>
          <td></td>
        </tr>
        <tr>
          <td>Barar</td>
          <td>22</td>
          <td>MERN</td>
          <td>September</td>
          <td></td>
        </tr>
        <tr>
          <td>Christ</td>
          <td>23</td>
          <td>MERN</td>
          <td>October</td>
          <td></td>
        </tr>
        <tr>
          <td>Elent</td>
          <td>24</td>
          <td>MERN</td>
          <td>November</td>
          <td></td>
        </tr>
        <tr>
          <td>Harshita Sharma</td>
          <td>24</td>
          <td>MERN</td>
          <td>October</td>
          <td></td>
        </tr>
      </table>
    </div>
  )
}

export default Student
