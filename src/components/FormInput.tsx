import clsx from 'clsx';
import { useField } from 'formik';
import React, { FC } from 'react';

interface InputProps {
  name: string;
  label: string;
  as: 'text' | 'email' | 'textarea';
}

const classes =
  'w-full outline-none bg-brand border-2 border-content rounded-xl px-4 py-3 text-content tracking-wider';

const FormInput: FC<InputProps> = (props) => {
  const { name, label, as } = props;
  const [field, meta] = useField({ name });

  return (
    <div className='mb-7 relative'>
      {as !== 'textarea' && (
        <input type={as} {...field} placeholder={label} className={classes} />
      )}
      {as === 'textarea' && (
        <textarea
          {...field}
          style={{ minHeight: 100, maxHeight: 500 }}
          rows={5}
          placeholder={label}
          className={classes}
        />
      )}
      {meta.error && meta.touched && (
        <label
          className={clsx('label absolute left-0', {
            '-bottom-5': as !== 'textarea',
            '-bottom-4': as === 'textarea',
          })}>
          <p className='text-sm italic text-accent tracking-wide first-letter:uppercase'>
            {meta.error}
          </p>
        </label>
      )}
    </div>
  );
};

export default FormInput;