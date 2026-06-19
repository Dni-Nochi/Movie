interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errorMessage?: string;
  className?: string;
}

export function RegistrationInput(props: LoginInputProps) {
  const { type = 'text', label, id, errorMessage, className, ...rest } = props;
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`${className} mt-1.5 p-2.5 rounded-[10px] border`}
        {...rest}
      />
      {errorMessage && <p className="pt-1 text-[#e60000]">{errorMessage}</p>}
    </div>
  );
}
