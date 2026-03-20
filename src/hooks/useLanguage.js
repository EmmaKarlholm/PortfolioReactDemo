import { useState, useEffect } from "react";
import { languages, defaultLanguage } from "../config/Languages.js";

export default function useLanguage() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_language") || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem("portfolio_language", language);
  }, [language]);

  const websiteName = languages[language].websiteName;

//   const toggleLanguage = () => {
//     setLanguage(current => {
//       const keys = Object.keys(languages);
//       const index = keys.indexOf(current);
//       return keys[(index + 1) % keys.length];
//     });
//   };
  const toggleLanguage = () => {
    setLanguage(current => {
      switch (current) {
        case "en":
          return "sv";
        case "sv":
          return "en";
        default:
          return current;
      }
    });
  };
  
  return {
    language,
    websiteName,
    toggleLanguage
  };
}