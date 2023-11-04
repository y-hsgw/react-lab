import { forwardRef, useImperativeHandle, useRef } from "react";

interface FullNameInputRef {
  lastNameInputRef: HTMLInputElement | null;
  firstNameInputRef: HTMLInputElement | null;
}

const FullNameInput = forwardRef<FullNameInputRef>((_, ref) => {
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const firstNameInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      lastNameInputRef: lastNameInputRef.current,
      firstNameInputRef: firstNameInputRef.current,
    }),
    []
  );
  return (
    <form>
      <label>
        姓
        <input ref={lastNameInputRef} />
      </label>
      <label>
        名
        <input ref={firstNameInputRef} />
      </label>
    </form>
  );
});

const MultipleRefs: React.FC = () => {
  const ref = useRef<FullNameInputRef>(null);

  const handleLastNameFocusButtonClick = () => {
    ref.current?.lastNameInputRef?.focus();
  };

  const handleFirstNameFocusButtonClick = () => {
    ref.current?.firstNameInputRef?.focus();
  };

  return (
    <>
      <FullNameInput ref={ref} />
      <button onClick={handleLastNameFocusButtonClick}>性にフォーカス</button>
      <button onClick={handleFirstNameFocusButtonClick}>名にフォーカス</button>
    </>
  );
};

export default MultipleRefs;
