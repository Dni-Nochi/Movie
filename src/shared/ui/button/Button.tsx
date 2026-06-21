interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
export function Button(props: ButtonProps) {
  const { type = 'button', className, children, ...rest } = props;
  return (
    <button
      type={type}
      className={`${className} flex items-center py-2 px-6 rounded-lg bg-[#c0392b] transition duration-200 hover:opacity-80 active:scale-90`}
      {...rest}
    >
      {children}
    </button>
  );
}
