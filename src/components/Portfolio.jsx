import { useState, useEffect } from "react";

export default function Portfolio({ pageData, renderEntry }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/EmmaKarlholm/repos?sort=updated")
      .then(response => response.json())
      .then(data => { // NOTE to future self: Remove school tutorials etc
        setRepos(data);
        setLoading(false);
      })
      .catch(errorMessage => {
        console.error("Error fetching repos:", errorMessage);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <article>
        <h1
            id="top-title">
            {pageData.title}
        </h1>
        
        <div
            id="content"
            className="portfolio-layout">
            {pageData?.content.map((entry, indexKey) =>
                renderEntry(entry, indexKey))}
        </div>

        <h2 id="github-title">GitHub Projects</h2>
        <div id="content" className="portfolio-layout">
          {loading ? (
            <p>Loading GitHub repositories...</p>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-meta">
                  <span>{repo.language}</span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </article>
    </main>
  );
}