import React from "react";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button";
import { colors } from "../../styles/colors";
import styled from "styled-components";
import { Shine } from "../../components/Button/shine";

const MessageBox = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 2rem;
  padding: 1rem;
  border: 1px solid ${colors.primary};
  ::placeholder {
    color: ${colors.primary};
    font-weight: 500;
  }
`;

const ContactForm = ({ onValidated, status, message }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    content: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submit = () => {
    onValidated({
      EMAIL: data.email,
      MESSAGE: data.content,
      NAME: data.name,
      SUBJECT: data.subject,
    });

    alert(message);
  };
  return (
    <>
      <div className="form-section">
        <div className="form-left">
          <Input
            placeholder="Name"
            color={colors.primary}
            coloredBorder
            name="name"
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            color={colors.primary}
            coloredBorder
            name="email"
            onChange={handleChange}
          />
          <Input
            placeholder="Subject"
            color={colors.primary}
            coloredBorder
            name="subject"
            onChange={handleChange}
          />
        </div>
        <div className="form-right">
          <MessageBox
            placeholder="Message"
            name="content"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="button">
        <Button isPrimary onClick={submit}>
          Send Message <Shine />
        </Button>
      </div>
    </>
  );
};


export default ContactForm;