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

export const query = `
query 
  {
  youtube(id: "1JUUaaj9pvoL1ECguycNsX") {
    title
    description
    videoUrl
  }
  hobbiesCollection(skip: 1) {
    items {
      title
      lInk {
        json
      }
      imagesCollection {
        items {
          url
        }
      }
      blurb {
        json
      }
    }
  }
  hobbies(id: "17cGvF2k8a6AG7VN9Q1vTG") {
    title
    lInk {
      json
    }
    imagesCollection {
      items {
        url
      }
    }
    blurb {
      json
    }
  }
}

`;
