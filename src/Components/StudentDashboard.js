import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import Header from "./Header";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Spinner
} from "reactstrap";

import withAuth from "../axios";
import ProjectForm from "./ProjectForm";

const StudentDashboard = props => {
  console.log(props.match.params);
  const [allProjects, setAllProjects] = useState([]);
  const [projectAdded, setProjectAdded] = useState({
    project_name: "",
    deadline: "",
    description: "",
    student_id: ""
  });

  const [sendMessage, setsendMessage] = useState({});
  const [allMessages, setAllMessages] = useState([]);

  var id = props.match.params.id;

  useEffect(() => {
    withAuth()
      .get(
        `https://bw-better-professor-app-cmp.herokuapp.com/students/${id}/projects`
      )
      .then(response => {
        setAllProjects(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  }, []);

  useEffect(() => {
    withAuth()
      .get(
        `https://bw-better-professor-app-cmp.herokuapp.com/students/${id}/messages`
      )
      .then(response => {
        setAllMessages(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  }, [props.match.params.id]);

  return (
    <section className="dashboard">
      <Header />
      <h1>student.name</h1>
      <div>
        <h2>messages here</h2>
        {allMessages.map(message => {
          return (
            <div>
              <div>{message.text}</div>
            </div>
          );
        })}
      </div>
      <div className="btnMessage">
        <MessageForm />
        <div>
          <br />
          <hr />
          <h2>Projects here</h2>
          <div className="listofProjects">
            {allProjects.map(project => {
              return (
                <div>
                  <div>{project.name}</div>
                  <div>{project.deadline}</div>
                </div>
              );
            })}
          </div>
          {allProjects.map(project => {
            return (
              <div>
                <div>{project.text}</div>
              </div>
            );
          })}
        </div>
        <ProjectForm />
      </div>
    </section>
  );
};
export default StudentDashboard;
