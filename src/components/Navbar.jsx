import { NavLink } from "react-router-dom";

export default function Navbar({ language, setPage, page, toggleLanguage }) {
  const navbarText = {
    en: { home: "Home", about: "About me", cv: "CV", portfolio: "Portfolio" },
    sv: { home: "Hem", about: "Om mig", cv: "CV", portfolio: "Portfölj" }
  };

  let buttonText = ""
  switch (language) {
    case "en":
      buttonText = "På svenska"
      break

    case "sv":
      buttonText = "In English"
      break
  }

  return (
    <header>
      <nav>
        <ul id="nav">
          <li>
            <NavLink to="/">
              {navbarText[language].home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {navbarText[language].about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv">
              {navbarText[language].cv}
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              {navbarText[language].portfolio}
            </NavLink>
          </li>
          <li>
            <button
              id="toggle-language"
              onClick={toggleLanguage}>
              {buttonText}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}