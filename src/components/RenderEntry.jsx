 export function renderEntry(entry, indexKey, setModal, modalPopupText, modalLink) {
    switch (entry.type) {
      case "paragraph":
        return <p key={indexKey}>{entry.text}</p>

      case "image":
        return  <img
                  key={indexKey}
                  src={entry.src}
                  alt={entry.alt} 
                />

      case "subheader":
        return <h2 key={indexKey}>{entry.text}</h2>

      case "listheader":
        return <h3 key={indexKey}>{entry.text}</h3>

      case "modal":
        return (
          <span
            key={indexKey}
            className="modal-link"
            onClick={() =>
              setModal({
                text: entry.modalPopupText,
                link: entry.modalLink
              })
            }
          >
            {entry.label}
          </span>
        )

      default:
        return null
    }
  }
