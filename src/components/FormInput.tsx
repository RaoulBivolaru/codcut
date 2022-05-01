import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  label: string;
  as: 'text' | 'email' | 'textarea';
}

const classes =
  'w-full outline-none bg-brand border-2 border-content rounded-xl px-4 py-3 text-content tracking-wider';

export default function ({ name, label, as }: InputProps) {
  const [field, meta, helpers] = useField({ name });

  return (
    <div className="mb-7 relative">
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
          <span className="text-xs italic text-accent font-light tracking-wide">
            {meta.error}
          </span>
        </label>
      )}
    </div>
  );
}
