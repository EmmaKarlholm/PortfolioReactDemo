export default function Content({ pageData, page, renderEntry }) {
  let cssClass = ""
  if (page === "portfolio") {
    cssClass = "portfolio-layout"
  } else {
    cssClass = ""
  }

  return (
    <main>
      <article>
        <h1
          id="top-title"
        >
          {pageData.title}
        </h1>

        <div
          id="content"
          className={cssClass}
        >
          {pageData?.content.map((entry, indexKey) => renderEntry(entry, indexKey))}
          {/* NOTE to future self, allowing this to be
            * null saves a ton of headache during
            * testing. Refer back to this code when
            * doing this again */}
        </div>
      </article>
    </main>
  );
}