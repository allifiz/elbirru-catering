export default function Heading({
  title,
  accent,
  description,
}: {
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="ed-heading">
      <h2>
        <span>
          {title} {accent && <em>{accent}</em>}
        </span>
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
