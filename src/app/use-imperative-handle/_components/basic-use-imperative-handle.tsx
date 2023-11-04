import { forwardRef, useImperativeHandle, useRef } from "react";

interface CustomInputRef {
  focus: () => void;
}

const CustomInput = forwardRef<CustomInputRef>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current?.focus(),
    }),
    []
  );
  return <input ref={inputRef} />;
});

const BasicUseImperativeHandle: React.FC = () => {
  const ref = useRef<CustomInputRef>(null);

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

export default BasicUseImperativeHandle;
