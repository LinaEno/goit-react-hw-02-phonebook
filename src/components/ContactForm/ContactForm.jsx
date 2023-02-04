import { Formik, Field, ErrorMessage, Form } from "formik";
import React from 'react';
import * as yup from 'yup';

const initialValues = {
    name: '',
}

const schema = yup.object().shape({
    name: yup.string().required(),
})

export const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit = {handleSubmit} validationSchema={schema}>
            <Form autoComplete="off">
                <label htmlFor="name">Name
                    <Field type="text" name="name" />
                </label>
                <ErrorMessage name='name'/>
                <button type="submit">Add contact</button>
                </Form>
        </Formik>
    )
}