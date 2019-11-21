import React, { useState } from "react";
import { button, Form, label, div } from "reactstrap";
import withAuth from "../axios";
import { send } from "q";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    student_id: "",
    text: "",
    send_to_self: "no"
  });

  const handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "send_to_self") {
      value = value === "yes" ? true : false;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    withAuth()
      .post(
        `https://bw-better-professor-app-cmp.herokuapp.com/messages`,
        formData
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is an error", error);
      });
  };

  return (
    <div className="Message-form">
      <h2>Message Form</h2>
      <hr />
      <form className="messageForm" onSubmit={handleSubmit}>
        <div>
          <label>Select Student</label>
          <select
            name="student_id"
            onChange={handleChange}
            value={formData.student_id}
            required
          >
            <option value="">select student</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label htmlFor="text">Message: </label>
          <textarea
            className="message-area"
            name="text"
            id="text"
            placeholder="  message"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Send to Self</label>
          <select
            name="send_to_self"
            onChange={handleChange}
            value={formData.send_to_self}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default MessageForm;
