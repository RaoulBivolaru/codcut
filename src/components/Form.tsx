import React, { PropsWithChildren } from 'react';
import {
  Formik,
  FormikHelpers,
  Form as FormDefault,
  FormikValues,
} from 'formik';
import { InferType } from 'yup';
import Button from './Button';

interface FormProps<P extends FormikValues> {
  loading: boolean;
  initialValues: P;
  validation?: InferType<any>;
  onSubmit: (values: P) => Promise<any>;
}

const Form = <P, >(props: PropsWithChildren<FormProps<P>>) => {
  const { initialValues, children, onSubmit, validation, loading } = props;

  const handleSubmit = async (values: P, helpers: FormikHelpers<P>) => {
    try {
      await onSubmit(values);
      helpers.resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik<P>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}>
      {({ handleSubmit }) => (
        <FormDefault noValidate>
          {children}
          <Button
            label='Submit'
            onClick={handleSubmit}
            loading={loading}
            isSubmit
          />
        </FormDefault>
      )}
    </Formik>
  );
};

export default Form;