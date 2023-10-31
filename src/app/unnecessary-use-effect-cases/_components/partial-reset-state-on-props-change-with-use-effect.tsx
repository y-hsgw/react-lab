import { ChangeEvent, memo, useEffect, useState } from "react";

type Item = {
  id: number;
  name: string;
};

interface Props {
  items: Item[];
}

const List: React.FC<Props> = memo(({ items }) => {
  const [groupName, setGroupName] = useState("");
  const [selectionItem, setSelectionItem] = useState<Item>();

  const handleGroupNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
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
      {selectionItem ? (
        <p>選択中：{selectionItem.name}</p>
      ) : (
        <p>メンバーを選択してください</p>
      )}
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>
          グループ名
          <input value={groupName} onChange={handleGroupNameChange} />
        </label>
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
  const [name, setName] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (!name) return;
    setItems((prev) => [...prev, { id: prev.length, name }]);
  };

  return (
    <div>
      <label>
        名前
        <input value={name} onChange={handleChange} />
      </label>
      <button onClick={handleAddButtonClick}>追加</button>
      <List items={items} />
    </div>
  );
};

export default PartialResetStateOnPropsChangeWithUseEffect;
