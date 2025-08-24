import { Header } from "./Header";
import { Section } from "./Section";
import "../App.css";
import { sections } from "../data";

function App() {
  return (
    <>
      <Header />
      <main>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            descriptions={section.descriptions}
            items={section.items}
          />
        ))}
      </main>
    </>
  );
}

export default App;
