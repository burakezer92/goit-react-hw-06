import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../../redux/actions";

import * as Yup from "yup";

function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: `id-${Date.now()}`,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className="form">
        <label className="label" htmlFor={nameFieldId}>
          name
        </label>
        <Field className="input" type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label className="label" htmlFor={numberFieldId}>
          number
        </label>
        <Field
          className="input"
          type="number"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
