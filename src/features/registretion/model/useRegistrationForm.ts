import { useState } from 'react';

export function useRegistrationForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const hasErrors =
    userName.trim() === '' ||
    userEmail.trim() === '' ||
    userPassword.trim() === '' ||
    errorName !== '' ||
    errorEmail !== '' ||
    errorPassword !== '';

  function addName(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    setUserName(name);

    if (name.trim() !== '') {
      setErrorName('');
    } else {
      setErrorName('Поле имени не может быть пустым');
    }
  }

  function addEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;

    setUserEmail(email);
    if (email.trim() !== '' && email.includes('@') && email.includes('.')) {
      setErrorEmail('');
    } else {
      setErrorEmail('Не забывайте про @ и "."');
    }
  }

  function addPassword(e: React.ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    setUserPassword(password);

    if (password.length >= 8) {
      setErrorPassword('');
    } else {
      setErrorPassword('Пароль должен быть больше или равен 8');
    }
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      console.log('asd');
    } catch (e) {
      console.log(e);
    }
  }

  return {
    userName,
    userEmail,
    userPassword,
    errorName,
    errorEmail,
    errorPassword,
    hasErrors,
    addName,
    addEmail,
    addPassword,
    submitForm,
  };
}
