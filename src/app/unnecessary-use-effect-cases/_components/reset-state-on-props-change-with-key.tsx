import { ChangeEvent, memo, useState } from "react";

interface Props {
  name: string;
}

const Comment: React.FC<Props> = memo(({ name }) => {
  const [comment, setComment] = useState("");

  return (
    <form>
      <label>{name} </label>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
    </form>
  );
});

type Character = "mickey" | "minnie";

const ResetStateOnPropsChangeWithKey: React.FC = () => {
  const [character, setCharacter] = useState<Character>("mickey");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "mickey" || e.target.value === "minnie") {
      setCharacter(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="radio"
        value="mickey"
        checked={character === "mickey"}
        onChange={handleChange}
      />
      <label>ミッキー</label>
      <input
        type="radio"
        value="minnie"
        checked={character === "minnie"}
        onChange={handleChange}
      />
      <label>ミニー</label>
      <Comment
        name={character}
        // keyに渡している値（ex: character）が変更される度にCommentコンポーネントが再作成される
        key={character}
      />
    </div>
  );
};

export default ResetStateOnPropsChangeWithKey;
