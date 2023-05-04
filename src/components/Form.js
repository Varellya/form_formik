import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/\d{12}/i.test(values.phone)) {
    errors.phone = 'Must be 12 digits';
  }

  return errors;
};

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="phone">Phone number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};