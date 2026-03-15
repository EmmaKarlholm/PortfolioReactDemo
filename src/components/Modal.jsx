export default function Modal({ modal, closeModal }) {
  if (!modal) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="modal-close-button"
          onClick={closeModal}
        >
          ×
        </span>
        
        <p>{modal.text}</p>
        
        {modal.link && (
          <a href={modal.link} target="_blank">
            Link
          </a>
        )}
      </div>
    </div>
  );
}