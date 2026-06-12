interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
export function Button(props: ButtonProps) {
  const { className, children } = props;
  return (
    <button
      className={`${className} flex items-center py-2 px-6 rounded-lg cursor-pointer bg-[#e50000]`}
    >
      {children}
    </button>
  );
}
