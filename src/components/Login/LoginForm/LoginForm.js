import React, { useState } from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { requestLogin } from 'utils/requestLogin';

function LoginForm() {
  const { setUser } = useUserContext();
  const history = useHistory();
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
  });
  const { id, password } = formValues;

  const handleFormValues = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await requestLogin({ id, password }); // 로그인 요청
      setUser(user);
      history.replace('/'); // 홈으로
    } catch (error) {
      setError(error.message);
    }
  };

  const isSubmittable = id && password;

  return (
    <S.LoginForm onSubmit={handleSubmit}>
      <S.LoginInput
        id='id'
        type='text'
        value={id}
        placeholder='아이디'
        onChange={handleFormValues}
      />
      <S.LoginInput
        id='password'
        type='password'
        value={password}
        placeholder='비밀번호'
        onChange={handleFormValues}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.LoginButton disabled={!isSubmittable}>로그인</S.LoginButton>
    </S.LoginForm>
  );
}

export default LoginForm;
