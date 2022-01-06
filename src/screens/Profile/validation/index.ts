import Yup from '~/utils/yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Usuário'),
  email: Yup.string().email().required().label('E-mail'),
  birthDate: Yup.string().required('Coloque uma data valida ex:20/10/2021'),
});
