import { useRegistrationForm } from '@/features/registretion/model/useRegistrationForm';
import { RegistrationInput } from '@/shared/ui/input-validate';
import { Button } from '@/shared/ui/button';

export function RegistrationForm() {
  const {
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
  } = useRegistrationForm();

  return (
    <form
      onSubmit={submitForm}
      noValidate
      className="absolute top-20 right-[50%] translate-x-[50%] z-10 flex flex-col gap-5 min-w-110 min-h-80 p-10 box-border rounded-xl bg-[#141414]"
    >
      <RegistrationInput
        id="name"
        label="Имя"
        placeholder="Введите имя"
        autoComplete="name"
        value={userName}
        onChange={addName}
        errorMessage={errorName}
        required
      />
      <RegistrationInput
        type="email"
        id="email"
        label="Почта"
        placeholder="Введите почту"
        autoComplete="email"
        value={userEmail}
        onChange={addEmail}
        errorMessage={errorEmail}
        required
      />
      <RegistrationInput
        type="password"
        id="password"
        label="Пароль"
        placeholder="Введите пароль"
        autoComplete="current-password"
        value={userPassword}
        onChange={addPassword}
        errorMessage={errorPassword}
        minLength={8}
        required
      />
      <Button
        disabled={hasErrors}
        className={hasErrors ? 'bg-black cursor-not-allowed' : 'cursor-pointer'}
        type="submit"
      >
        Войти
      </Button>
    </form>
  );
}
