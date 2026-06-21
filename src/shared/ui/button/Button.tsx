interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}
export function Button(props: ButtonProps) {
  const { type = 'button', className, children, ...rest } = props;
  return (
    <button
      type={type}
      className={`${className} transition duration-300 flex items-center py-2 px-6 rounded-lg bg-[#c0392b] hover:opacity-60`}
      {...rest}
    >
      {children}
    </button>
  );
}
