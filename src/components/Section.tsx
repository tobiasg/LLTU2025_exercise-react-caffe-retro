import type { ReactElement } from "react";

interface SectionProps {
  id: string;
  title: string;
  description: string[];
  items: { label: string; value: string }[];
}

export const Section = ({
  id,
  title,
  description,
  items,
}: SectionProps): ReactElement => {
  return (
    <>
      <section id={id} className={id}>
        <h1>{title}</h1>
        {description.length > 0 && description.map((text) => <p>{text}</p>)}
        {items.length > 0 && (
          <div className="list-container">
            {items.map((item) => (
              <div className="list-item">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};
