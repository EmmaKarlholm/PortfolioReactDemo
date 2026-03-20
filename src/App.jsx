import { useState } from "react";
import { useEffect } from "react";
import { pages } from "./content/Pages.js";
import { renderEntry } from "./components/RenderEntry.jsx";
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content.jsx";
import CV from "./components/CV.jsx";
import cv from "./content/CV.json";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Rain from "./components/Rain.jsx";
import TitleBar from "./components/TitleBar.jsx";

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio_language")
      || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_language", language);
  }, [language]);

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/EmmaKarlholm/repos")
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
  }, [])

  const GetWebsiteName = (language) => {
    switch (language) {
      case "en":
        return "Emma's Hideout";
        
      case "sv":
        return "Emmas gömställe";
    }
  }

  const websiteName = GetWebsiteName(language);
  const [modal, setModal] = useState(null);
  const [rainActive, setRainActive] = useState(false);
  const [userInput, setUserInput] = useState("");


  useEffect(() => {
    const handleKey = (e) => {
      setUserInput(prev => {
        const userInput = (prev + e.key.toLowerCase()).slice(-6);

        if (userInput === "rabbit") {
          setRainActive(true);
          return "";
        }

        return userInput;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);


  const languageToggle = () => {
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
  }

  return (
    <>
      <div
        className={rainActive ? "app rain-mode" : "app"}
      >
        <Navbar
          language={language}
          toggleLanguage={languageToggle}
        />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <TitleBar
                  websiteName={websiteName}
                  subpageTitle={pages[language].home.title}
                />
                <Content
                  pageData={pages[language].home}
                  renderEntry={(entry, indexKey) =>
                    renderEntry(entry, indexKey, setModal)
                  }
                />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <TitleBar
                  websiteName={websiteName}
                  subpageTitle={pages[language].about.title}
                />

                <Content
                  pageData={pages[language].about}
                  renderEntry={(entry, indexKey) =>
                    renderEntry(entry, indexKey, setModal)
                  }
                />
              </>
            }
          />

          <Route
            path="/portfolio"
            element={
              <>
                <TitleBar
                  websiteName={websiteName}
                  subpageTitle={pages[language].portfolio.title}
                />

                <Portfolio
                  pageData={pages[language].portfolio}
                  renderEntry={(entry, indexKey) =>
                    renderEntry(entry, indexKey, setModal)
                  }
                />
              </>
            }
          />

          <Route
            path="/cv"
            element={
              <>
                <TitleBar
                  websiteName={websiteName}
                  subpageTitle="CV"
                />

                <CV language={language} />
              </>
            }
          />
        </Routes>

        <Modal
          modal={modal}
          closeModal={() => setModal(null)}
        />

        <Rain
          active={rainActive}
          stopRain={() => setRainActive(false)}
        />

        <footer>
          <button id="follow-button">Follow the white...?</button>

          <p>Copyright © 2026 Emma Karlholm</p>

          {rainActive && (
            <button
              id="stop-rain"
              style={{ display: rainActive ? "inline-block" : "none" }}
              onClick={() => setRainActive(false)}
            >
              Blue pill
            </button>)}
        </footer>
      </div>
    </>
  );
}