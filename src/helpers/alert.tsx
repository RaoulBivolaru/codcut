import React from 'react';
import Button from 'components/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);

export const showSuccessAlert = (title: string, text: string) => {
  Alert.fire({
    confirmButtonColor: '#f9004d',
    title,
    text,
  });
};
