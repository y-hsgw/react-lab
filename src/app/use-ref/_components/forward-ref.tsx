import { forwardRef, useRef } from "react";

const CustomInput = forwardRef<HTMLInputElement>((_, ref) => {
  return <input ref={ref} />;
});

const ForwardRef: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <CustomInput ref={ref} />
      <button onClick={handleClick}>フォーカス</button>
    </>
  );
};

export default ForwardRef;
