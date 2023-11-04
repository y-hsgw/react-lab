import { useRef } from "react";

const ControlDOM: React.FC = () => {
  const earthImageRef = useRef<HTMLImageElement>(null);
  const sunImageRef = useRef<HTMLImageElement>(null);

  const handleEarthButtonClick = () => {
    earthImageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const handleSunButtonClick = () => {
    sunImageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <div style={{ position: "sticky", top: 0 }}>
        <button onClick={handleEarthButtonClick}>地球</button>
        <button onClick={handleSunButtonClick}>太陽</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ref={earthImageRef}
            alt="earth"
            width={300}
            height={300}
          />
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ref={sunImageRef}
            alt="sun"
            width={300}
            height={300}
          />
        </li>
      </ul>
    </>
  );
};

export default ControlDOM;
