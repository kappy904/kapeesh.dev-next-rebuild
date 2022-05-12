export interface Hobby {
  imagesCollection: any[];
  items: any[];
  images?: string[] | undefined;
  name: string;
  title: string;
  blurb: string;
  lInk: string;
  json: string[];
  hobbies: string[];
  map(element: (hobbiesCollection) => JSX.Element): string;
}

export interface Props {
  hobbies?: Hobby;
}

export interface PropsSingle {
  hobbies: any;
}
