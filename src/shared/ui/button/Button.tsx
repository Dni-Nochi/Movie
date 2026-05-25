interface Button {
  className: string;
  children: string;
}
export function Button(props: Button) {
  const { className, children } = props;
  console.log(children);
  return (
    <button
      className={`${className} py-4.5 px-6 rounded-lg cursor-pointer bg-[#e50000]`}
    >
      {children}
    </button>
  );
}
