import { useId } from "react";

interface Props {
  label: string;
}

const TextField: React.FC<Props> = ({ label }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </>
  );
};

const BasicUseId: React.FC = () => {
  return (
    <form>
      <TextField label="姓" />
      <TextField label="名" />
    </form>
  );
};

export default BasicUseId;
