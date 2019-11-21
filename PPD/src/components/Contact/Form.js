import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";
import {
  InputWrapper,
  LeftWrapper,
  RightWrapper,
  FormWrapper,
  Label,
  Message,
  ErrorMessage,
  CheckBox,
  CustomCheckbox,
  ConsentText,
  Icon,
  Submit
} from "./FormStyles";
import Terms from "./Terms";
import { SocialMediaLinks } from "./SocialMediaLinks";

const SignUp = ({
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched
}) => (
  <FormWrapper onSubmit={handleSubmit}>
    <LeftWrapper style={{ gridArea: "left" }}>
      <Label htmlFor="name">
        {errors.name && touched.name && (
          <ErrorMessage id="feedback">{errors.name}</ErrorMessage>
        )}
        <InputWrapper
          type="text"
          onChange={handleChange}
          placeholder="Name:"
          onBlur={handleBlur}
          value={values.name || ""}
          name="name"
        />
      </Label>
      <Label htmlFor="number">
        {errors.number && touched.number && (
          <ErrorMessage id="feedback">{errors.number}</ErrorMessage>
        )}
        <InputWrapper
          type="text"
          onChange={handleChange}
          placeholder="Number:"
          onBlur={handleBlur}
          value={values.number || ""}
          name="number"
        />
      </Label>
      <Label htmlFor="email">
        {errors.email && touched.email && (
          <ErrorMessage id="feedback">{errors.email}</ErrorMessage>
        )}
        <InputWrapper
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email:"
          value={values.email || ""}
          name="email"
          noValidate
        />
      </Label>
      <label htmlFor="consent">
        <CustomCheckbox>
          {values.consent ? (
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          ) : null}
          <CheckBox
            type="checkbox"
            name="consent"
            checked={values.consent}
            value="false"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </CustomCheckbox>
        <ConsentText>
          I agree with the
          <Terms />
          <a
            href="https://www.iubenda.com/privacy-policy/48448337"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Privacy Policy
          </a>{" "}
          and for Paphos Painter Decorators to contact me to discuss my request
        </ConsentText>
        {errors.consent && touched.consent && (
          <ErrorMessage id="feedback">{errors.consent}</ErrorMessage>
        )}
      </label>
    </LeftWrapper>
    <RightWrapper>
      <Label htmlFor="message">
        {errors.message && touched.message && (
          <ErrorMessage id="feedback">{errors.message}</ErrorMessage>
        )}
        <Message
          id="message"
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          placeholder="Please try to include as much detail about your project"
          rows="12"
          value={values.message || ""}
        ></Message>
      </Label>
      <Submit type="Submit">Request a callback</Submit>
      <SocialMediaLinks color='white' />
    </RightWrapper>
  </FormWrapper>
);

const Form = withFormik({
  mapPropsToValues: () => ({
    name: "",
    number: "",
    email: "",
    message: "",
    consent: false
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    number: Yup.string().min(8, "Please leave a number for a callback"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed"),
    consent: Yup.bool()
      .oneOf([true], "Please give us consent to contact you")
      .required("Please give us consent to contact you"),
    message: Yup.string()
      .min(2, "Please leave a message")
      .required("Please leave a message")
  }),

  handleSubmit: (values, { setSubmitting, resetForm }) => {
    const service_id = `${process.env.GATSBY_SERVICE_ID}`;
    const template_id = `${process.env.GATSBY_TEMPLATE_ID}`;
    const user_id = `${process.env.GATSBY_USER_ID}`;
    const template_params = {
      userName: values.name,
      userNumber: values.number,
      userEmail: values.email,
      userMessage: values.message,
      userConsent: values.consent
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

export default Form;
