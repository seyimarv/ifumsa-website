import React, { useState } from "react";
import { Input } from "../Input/Input";
import Typograpghy from "../Typography/Typograpghy";
import { colors } from "../../styles/colors";
import { Button } from "../Button";
import { Shine } from "../Button/shine";
import { emailValidation } from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const EmailSubscribe = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!message) return;

    if (status === "success") {
      setEmail("");
      toast.success("Thank you for subscribing!");
    } else toast.error(message.toString());
  }, [message, status]);

  const submit = () => {
    if (!email && !emailValidation(email)) {
      toast.error("Please enter a valid email!");
    } else {
      onValidated({
        EMAIL: email,
      });
    }
  };

  return (
    <>
      <Typograpghy
        color={colors.secondary}
        align="center"
        size="3.6rem"
        mt="13rem"
        mb="5.8rem"
        lineHeight="4.3rem"
      >
        Sign up for IFUMSA newsletter
      </Typograpghy>
      <Input
        placeholder="Your Email Here..."
        color={colors.primary}
        background={colors.gray2}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Button isPrimary onClick={submit}>
        Sign up <Shine />
      </Button>
    </>
  );
};

export default EmailSubscribe;
