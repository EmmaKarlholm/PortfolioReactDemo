import { useState, useEffect } from "react";

export default function useRainKeystrokes(onTrigger) {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKey = (pressed) => {
      setUserInput((prev) => {
        const userInput = (prev + pressed.key.toLowerCase()).slice(-6);

        if (userInput === "rabbit") {
          onTrigger();
          return "";
        }

        return userInput;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onTrigger]);
}