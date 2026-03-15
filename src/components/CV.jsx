import cvData from "../content/CV.json";

export default function CV({language}) {
  const data = cvData[language];
  const headers = {
    en: {
      title: "CV",
      work: "Work Experience",
      education: "Education",
      other: "Other achievements",
      languages: "Languages"
    },
    sv: {
      title: "CV",
      work: "Arbetslivserfarenhet",
      education: "Utbildning",
      other: "Övriga meriter",
      languages: "Språk"
    }
  };

  return (
    <main>
      <article>
        <h1 id="top-title">
          {headers[language].title}
        </h1>
        <div id="content">
          <h2>
            {headers[language].work}
          </h2>
          {data.work.map((work, indexKey) => (
            <div key={indexKey}>
              <h3>
                {work.title} - {work.company},
                &#32; {/* NOTE to self: Normal, breakable space!*/}
                {work.startTime} - {work.endTime}
              </h3>
              {work.description.map((a, j) => (
                <p key={j}>{a}</p>
              ))}
            </div>
          ))}

          <h2>
            {headers[language].education}
          </h2>
          {data.education.map((school, indexKey) => (
            <div key={indexKey}>
              <h3>
                {school.title} - {school.school},
                &#32;
                {school.startTime} - {school.endTime}
              </h3>
              <p>
                {school.description}
              </p>
            </div>
          ))}

          <h2>
            {headers[language].other}
          </h2>
          {data.other.map((other, indexKey) => (
            <div key={indexKey}>
              <h3>
                {other.title},
                &#32;
                {other.startTime} - {other.endTime}
              </h3>
              <p>
                {other.description}
              </p>
            </div>
          ))}

          <h2>
            {headers[language].languages}
          </h2>
          {data.languages.map((language, indexKey) => (
            <p key={indexKey}>{language}</p>
          ))}
        </div>
      </article>
    </main>

  );
}