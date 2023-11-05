interface Props {
  label: string;
}

const TextField: React.FC<Props> = ({ label }) => {
  return (
    <>
      <label htmlFor="textField">{label}</label>
      <input id="textField" />
    </>
  );
};

const NoUseId: React.FC = () => {
  return (
    <form>
      <TextField label="姓" />
      <TextField label="名" />
    </form>
  );
};

export default NoUseId;
