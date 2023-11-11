import { useState } from "react";

const PERSONS = ["太郎", "一郎", "二郎"] as const;

type Person = (typeof PERSONS)[number];

interface Props {
  person: Person;
}

const Counter: React.FC<Props> = ({ person }) => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <div>
      <h1>
        {person}のスコア:{score}
      </h1>
      <button onClick={handleClick}>1つ追加</button>
    </div>
  );
};

const DifferentPositionRenderingReset: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person>("太郎");

  const handleClick = (person: Person) => {
    setSelectedPerson(person);
  };

  return (
    <div>
      {PERSONS.map((person) => (
        <button key={person} onClick={() => handleClick(person)}>
          {person}
        </button>
      ))}
      {selectedPerson === "太郎" && <Counter person={selectedPerson} />}
      {selectedPerson === "一郎" && <Counter person={selectedPerson} />}
      {selectedPerson === "二郎" && <Counter person={selectedPerson} />}
    </div>
  );
};

export default DifferentPositionRenderingReset;
