import { useEffect, useState } from "react";

const words = ["Solutions", "Innovation", "Impact", "Creativity"];

const RotatingWords: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
return (
  <div>
      {words[index]}
  </div>
  )
}

export default RotatingWords