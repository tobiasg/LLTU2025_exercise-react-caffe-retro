export interface Item {
  label: string;
  value: string;
}

export interface Section {
  id: string;
  title: string;
  descriptions: string[];
  items: Item[];
}
