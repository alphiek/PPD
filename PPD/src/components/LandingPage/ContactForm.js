import React from "react";
import styled from "styled-components";
import { colors } from "../Utils/colors";
import elevation from "../Utils/elevation";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

const SignUp = ({
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched
}) => (
  <FormWrapper onSubmit={handleSubmit}>
    <label htmlFor="name">
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Name"
        onBlur={handleBlur}
        value={values.name || ""}
        name="name"
      />
      {errors.name && touched.name && <p id="feedback">{errors.name}</p>}
    </label>
    <label htmlFor="number">
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Number"
        onBlur={handleBlur}
        value={values.number || ""}
        name="number"
      />
      {errors.number && touched.number && <p id="feedback">{errors.number}</p>}
    </label>
    <label htmlFor="email">
      <Input
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
        value={values.email || ""}
        name="email"
        noValidate
      />
      {errors.email && touched.email && <p id="feedback">{errors.email}</p>}
    </label>
    <Button type="Submit">Get in touch!</Button>
  </FormWrapper>
);

const ContactForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    number: "",
    email: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    number: Yup.string().min(8, "Please leave a number for a callback"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed")
  }),

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    const service_id = `${process.env.GATSBY_SERVICE_ID}`;
    const template_id = `${process.env.GATSBY_TEMPLATE_ID}`;
    const user_id = `${process.env.GATSBY_USER_ID}`;
    const template_params = {
      userName: values.name,
      userNumber: values.number,
      userEmail: values.email
    };

    emailjs.send(service_id, template_id, template_params, user_id).then(
      function(response) {
        alert("Thanks for your request we'll be in touch shortly");
        console.log(`Message Sent`);
        resetForm();
      },
      function(error) {
        alert("There was an error sending your message please try again");
      }
    );
  },

  displayName: "Contact Form"
})(SignUp);

export default ContactForm;

const FormWrapper = styled.form`
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -40%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  background: ${colors.medDarkGrey};
  border-radius: 0.5rem;
  ${elevation[3]};
`;

const Button = styled.button`
  background: ${colors.orange};
  color: white;
  height: 3rem;
  width: 15%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bolder;
  ${elevation[3]};
  transition: 3ms all ease-in-out;
  &:hover {
    background: white;
    color: ${colors.orange};
    ${elevation[5]};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 0.17rem solid rgba(255, 255, 255, 0.6);
  width: 100%;
  background: transparent;
  color: white;
  padding-bottom : 0.2rem;
`;
