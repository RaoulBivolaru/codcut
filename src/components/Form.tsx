import React, { ReactNode } from 'react';
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
  children: ReactNode | ReactNode[];
  initialValues: P;
  validation?: InferType<any>;
  onSubmit: (values: P) => Promise<any>;
}

export default function <P>({
  initialValues,
  children,
  onSubmit,
  validation,
  loading,
}: FormProps<P>) {
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
            label="Submit"
            onClick={handleSubmit}
            loading={loading}
            isSubmit
          />
        </FormDefault>
      )}
    </Formik>
  );
}
