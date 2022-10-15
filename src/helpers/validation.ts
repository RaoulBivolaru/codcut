import * as Yup from 'yup';

function setMinMaxValidation(min: number, max: number) {
  return Yup.string().min(min).max(max);
}

function setPattern(pattern: RegExp) {
  return Yup.string().matches(pattern);
}

function setRequired(schema: Yup.AnySchema) {
  return schema.required();
}

const VALIDATION_FIELDS = {
  EMAIL: setPattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
  NAME: setMinMaxValidation(2, 25).matches(/^[a-zA-Z'\- ]+$/),
  SUBJECT: setMinMaxValidation(2, 50),
  MESSAGE: setMinMaxValidation(10, 800),
};

export const VALIDATION_SCHEMAS = {
  CONTACT: Yup.object().shape({
    email: setRequired(VALIDATION_FIELDS.EMAIL),
    name: setRequired(VALIDATION_FIELDS.NAME),
    subject: setRequired(VALIDATION_FIELDS.SUBJECT),
    message: setRequired(VALIDATION_FIELDS.MESSAGE),
  }),
};
