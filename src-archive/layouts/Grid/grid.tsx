import "./gird.css";

export default function Grid({
  title,
  description,
  imageUrl,
  link,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}) {
  return (
    <div className="grid-item" onClick={() => (window.location.href = link || "./")}>
      <div className="grid-content">
        {imageUrl && <img src={imageUrl} alt={title} className="grid-image" />}
        <div className="grid-text">
          <h2 className="grid-title">{title}</h2>
          <p className="grid-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
