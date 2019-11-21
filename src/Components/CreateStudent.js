import React, { useState } from "react";
import { Button, Form, Input, FormGroup } from "reactstrap";
import withAuth from "../axios";
import axios from "axios";
const CreateStudent = ({ setStudentList, studentList }) => {
  const [student, setStudent] = useState({
    name: ""
  });

  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: `${e.target.value}`
    });
    console.log(student);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(student);
    withAuth()
      .post(
        `https://bw-better-professor-app-cmp.herokuapp.com/students`,
        student
      )
      .then(res => {
        console.log(studentList);
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="studentForm">
      <h2>Add a Student</h2>
      <hr className="hr" />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="  name  "
            required
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Add Student</Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
