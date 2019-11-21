import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm";
import Header from "./Header";
import styled from "styled-components";

import withAuth from "../axios";
import ProjectForm from "./ProjectForm";

const StyledForms = styled.div`
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 21px;
    color: #fe0202;
  }

  form {
    background: #e9e7e3;
  }
`;

const StudentDashboard = props => {
  console.log(props);
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
      .get(`https://bw-better-professor-app-cmp.herokuapp.com/projects`)
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
      .get(`https://bw-better-professor-app-cmp.herokuapp.com/messages/${id}`)
      .then(response => {
        setAllMessages(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  }, [props.match.params.id]);

  return (
    <StyledForms>
      <Header />
      <h1>Dashboard</h1>
      <section className="messagesSection">
        <div className="messagediv">
          <h2>Messages</h2>
          {allMessages.map(message => {
            return (
              <div>
                <div>{message.text}</div>
                <div>{message.timestamp}</div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="btnMessage">
        <MessageForm className="form" />
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
        <ProjectForm className="form" />
      </div>
    </StyledForms>
  );
};
export default StudentDashboard;
