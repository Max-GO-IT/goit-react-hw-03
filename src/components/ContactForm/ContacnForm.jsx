import { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Создание схемы валидации с yup
const validationSchema = yup.object({
  name: yup.string().required('Name is required').min(3).max(50),
  number: yup.string().required('Number is required').min(3).max(50),
});

const ContactForm = ({ funAdd }) => {
  // Функция для обработки отправки формы
  const handleSubmit = (values, { resetForm }) => {
    funAdd(values.name, values.number);
    resetForm(); // Сброс формы после успешной отправки
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
