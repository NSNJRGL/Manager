import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  phone: Yup.string()
    .min(7, 'Хэт богино байна!')
    .max(8, 'Хэт урт байна!')
    .required('Хоосон байна!'),
  password: Yup.string()
    .min(4, 'Хэт богино байна!')
    .max(50, 'Хэт урт байна!')
    .required('Хоосон байна!'),
});

export const postSurveySchema = Yup.object().shape({
  fullname: Yup.string()
    .min(7, 'Хэт богино байна!')
    .max(8, 'Хэт урт байна!')
    .required('Хоосон байна!'),
  password: Yup.string()
    .min(4, 'Хэт богино байна!')
    .max(50, 'Хэт урт байна!')
    .required('Хоосон байна!'),
});
