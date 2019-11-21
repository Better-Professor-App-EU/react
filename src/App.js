import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import StudentDashboard from "./Components/StudentDashboard";
import LogIn from "./Components/Login";
import withAuth from "./axios";

const App = () => {
  const [students, setStudents] = useState([]);

  const removeStudent = id => {
    const removedStudent = students.filter(students => students.id !== id);
    setStudents(removedStudent);
  };

  useEffect(() => {
    withAuth()
      .get("https://bw-better-professor-app-cmp.herokuapp.com/students")
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
      <Route path="/login" component={LogIn} />
      <Route exact path="/" component={Header} />
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
      <Route
        exact
        path="/students/:id"
        render={props => {
          return (
            <StudentDashboard
              students={students}
              {...props}
              removeStudent={removeStudent}
            />
          );
        }}
      />
    </div>
  );
};

export default App;
