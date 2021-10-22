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
        <h2>Academic Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Specialization</th>
              <th>Institute/College</th>
              <th>Board/University</th>
              <th>Score</th>
              <th>Year of Passout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class XII</td>
              <td>MPC</td>
              <td>Sri Chaitanya Junior Kalasala</td>
              <td>TSBIE</td>
              <td>96.5%</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>Class X</td>
              <td></td>
              <td>Sri Chaitanya School</td>
              <td>CBSE</td>
              <td>10.0</td>
              <td>2016</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>ReactJS</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Python</li>
          <li>C</li>
        </ul>
      </div>
      <div className="workexp">
        <h1>Work Experience</h1>
        <h2>Frontend Developer at Intense Technologies Ltd.</h2>
        <h3>September 2021 - November 2021</h3>
        <p>Worked on a Project Budget Tracker Webapp using ReactJS and CSS.</p>
        <h2>Frontend Developer at Intense Technologies Ltd.</h2>
        <h3>May 2020 - June 2020</h3>
        <p>Worked on a COVID-19 Statistics Webpage using ReactJS and CSS.</p>
      </div>
      <div className="projects">
        <h1>Projects</h1>
        <h2>No Pun Intended</h2>
        <h3>September 2021 - September 2021</h3>
        <p>
          A simple dictionary app made using HTML, CSS, JavaScript and ReactJS.
          It uses a public dictionary API to fetch the results and the data is
          then parsed in the ReactJS frontend and displayed to the user in a
          neat manner. Project is hosted at:
          https://t1lt.github.io/NoPunIntended/
        </p>
        <h2>Cryptocurrency Price Predictor</h2>
        <h3>September 2021 - September 2021</h3>
        <p>
          A dashboard-style website showing the current market prices, the 1-day
          and 7-day predicted prices of 7 different cryptocurrencies - Bitcoin,
          Ethereum, Litecoin, Dogecoin, Stellar, Tether and Ripple. The frontend
          was created using ReactJS and the backend using Django. The styling
          was done using CSS3.
        </p>
      </div>
      <div className="extracurricular">
        <h1>Extra Curricular Activities</h1>
        <h2>Photography</h2>
        <p>
          Worked in the Sreenidhi Photography Club - the club that deals with
          the photographic coverage for all the events taking place in the
          college.
        </p>
      </div>
      <div className="certifications">
        <ul>
          <li>ReactJS - Codecademy</li>
          <li>JavaScript - Codecademy</li>
          <li>Asynchronous JavaScript - Codecademy</li>
          <li>CSS - Codecademy</li>
          <li>HTML - Codecademy</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
