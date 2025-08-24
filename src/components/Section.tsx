import type { ReactElement } from "react";

interface SectionProps {
  id: string;
  title: string;
  descriptions: string[];
  items: { label: string; value: string }[];
}

export const Section = ({
  id,
  title,
  descriptions,
  items,
}: SectionProps): ReactElement => {
  return (
    <>
      <section id={id} className={id}>
        <h1>{title}</h1>
        {descriptions.length > 0 &&
          descriptions.map((text, index) => <p key={index}>{text}</p>)}
        {items.length > 0 && (
          <div className="list-container">
            {items.map((item) => (
              <div key={item.label} className="list-item">
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
