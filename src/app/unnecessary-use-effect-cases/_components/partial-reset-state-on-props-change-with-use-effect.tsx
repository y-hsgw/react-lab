import { ChangeEvent, memo, useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
};

interface Props {
  items: Item[];
}

const List: React.FC<Props> = memo(({ items }) => {
  const [name, setName] = useState("");
  const [selectionItem, setSelectionItem] = useState<Item>();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const foundItem = items.find((item) => item.id === Number(e.target.value));
    setSelectionItem(foundItem);
  };

  useEffect(() => {
    setSelectionItem(undefined);
  }, [items]);

  return (
    <div>
      <form>
        <label>
          あなたの名前
          <input value={name} onChange={handleNameChange} />
        </label>
      </form>
      {selectionItem ? (
        <p>選択中：{selectionItem.name}</p>
      ) : (
        <p>お気に入りを選択してください</p>
      )}
      <form style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item) => (
          <label key={item.id}>
            {item.name}
            <input
              type="radio"
              value={item.id}
              checked={item.id === selectionItem?.id}
              onChange={handleRadioChange}
            />
          </label>
        ))}
      </form>
    </div>
  );
});

const PartialResetStateOnPropsChangeWithUseEffect: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAnimalClick = () => {
    setItems([
      { id: 1, name: "ネコ" },
      { id: 2, name: "イヌ" },
      { id: 3, name: "ウサギ" },
    ]);
  };

  const handleFoodClick = () => {
    setItems([
      { id: 10, name: "寿司" },
      { id: 20, name: "焼き肉" },
      { id: 30, name: "ラーメン" },
    ]);
  };

  return (
    <div>
      <p>カテゴリを選択してください。</p>
      <button onClick={handleAnimalClick}>動物</button>
      <button onClick={handleFoodClick}>食べ物</button>
      <List items={items} />
    </div>
  );
};

export default PartialResetStateOnPropsChangeWithUseEffect;
