import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);

export const showSuccessAlert = (title: string, text: string) => {
  void Alert.fire({
    confirmButtonColor: '#f9004d',
    title,
    text,
  });
};
