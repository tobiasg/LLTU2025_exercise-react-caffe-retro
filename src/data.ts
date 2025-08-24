import type { Section } from "./types";

export const sections: Section[] = [
  {
    id: "hot",
    title: "hot",
    descriptions: [
      "Hot freshly ground black coffee or a cup of exquisite tea?",
      "We give you that perfect cup every time.",
    ],
    items: [
      { label: "Mocha Latte", value: "€ 7.50" },
      { label: "Caffe Formaggio", value: "€ 5.00" },
      { label: "Espresso", value: "€ 3.50" },
      { label: "Chai Verde Latte", value: "€ 5.50" },
    ],
  },
  {
    id: "juicy",
    title: "juicy",
    descriptions: [
      "Ripe fruit - freshly squeezed.",
      "It's as simple as that. Chunky or smooth - it's your choice.",
    ],
    items: [
      { label: "Branched Apricots", value: "€ 4.20" },
      { label: "Deep Rasberries", value: "€ 3.50" },
      { label: "Smooth Oranges", value: "€ 6.50" },
    ],
  },
  {
    id: "cozy",
    title: "cozy",
    descriptions: [
      "Hang around. Enjoy the settings.",
      "Use our fast WiFi. Borrow a newspaper or a novel.",
    ],
    items: [
      { label: "Mon-Sun", value: "8am - 11pm" },
      { label: "Caffe Retro", value: "Canto VI" },
      { label: "0123-45 67 89", value: "caffe@lorem.pge" },
    ],
  },
];
