import { useEffect, useState } from "react";

const UseEffectEventListening: React.FC = () => {
  const [pressedKey, setPressedKey] = useState("");

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      setPressedKey(e.key);
    };
    window.addEventListener("keypress", handleKeypress);
    return () => window.removeEventListener("keypress", handleKeypress);
  }, []);

  return (
    <div>
      {pressedKey ? (
        <p>{pressedKey}が押下されました。</p>
      ) : (
        <p>何かしらキーを押下してください。</p>
      )}
    </div>
  );
};

export default UseEffectEventListening;
