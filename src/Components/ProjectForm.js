import React, { useState } from "react";
import { button, Form, label, div } from "reactstrap";
import withAuth from "../axios";
import { send } from "q";

const ProjectForm = () => {
  const [projectData, setprojectData] = useState({
    id: "",
    name: "",
    deadlines: [{ deadline_type: "", deadline: "" }]
  });

  const handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    setprojectData({
      ...projectData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(projectData);
    withAuth()
      .post(
        `https://bw-better-professor-app-cmp.herokuapp.com/projects`,
        projectData
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  };

  return (
    <div className="Project-form">
      <h2>Add Project</h2>
      <hr />
      <form className="propjectForm" onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Project name"
            onChange={handleChange}
          />
          <label for="deadline">Project Due By: </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            placeholder="date"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text">Project description: </label>
          <textarea
            className="message-area"
            name="description"
            id="description"
            placeholder="Description"
            value={projectData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="deadlineType">Deadline Type: </label>
          <input
            type="text"
            name="deadlineType"
            id="deadlineType"
            placeholder="Deadline type"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
