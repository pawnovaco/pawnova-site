export default function FindCard({ title, text, tag }) {
  return (
    <article className="find-card">
      <div className="find-image-placeholder">
        <span>{tag}</span>
      </div>
      <div className="find-card-body">
        <span className="pill">{tag}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="button button-secondary" disabled>
          Amazon link coming soon
        </button>
      </div>
    </article>
  );
}
