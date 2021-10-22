import React from "react";

const App = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>Nishant Racherla</h1>
        <h3>Course: B.Tech, Computer Science & Engineering</h3>
        <h3>Passout: 2022</h3>
        <h3>Mobile: 7702230055</h3>
        <h3>CGPA: 8.76</h3>
      </div>
      <div className="education">
        <h2>Academic Details:</h2>
        <table>
          <th>
            <tr>
              <td>Course</td>
              <td>Specialization</td>
              <td>Institute/College</td>
              <td>Board/University</td>
              <td>Score</td>
              <td>Year of Passout</td>
            </tr>
          </th>
        </table>
      </div>
    </div>
  );
};

export default App;
