import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";

const App = () => {
  const [students, setStudents] = useState([]);

  const removeStudent = id => {
    const removedStudent = students.filter(students => students.id !== id);
    setStudents(removedStudent);
  };

  useEffect(() => {
    axios
      .get("https://back-end-bpa.herokuapp.com/api/students")
      .then(response => {
        setStudents(response.data);
        console.log("students", students);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <Route
        exact
        path="/"
        render={props => {
          return (
            <CardContainer
              students={students}
              {...props}
              removeStudent={removeStudent}
            />
          );
        }}
      />

      {/* <Route exact path="/student$[id]" render={STB}>
        <StudentDashboard />
      </Route> */}
    </div>
  );
};

export default App;
