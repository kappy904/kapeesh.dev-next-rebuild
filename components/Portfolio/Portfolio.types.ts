export interface Portfolio {
  title: string;
  description: string;
  mediaCollection: string[];
  items: string[];
  learnings: string;
  awards: string;
  video: string;
  videoCover: string[];
  portfolios: Portfolio;
  map(element: (portfolios) => JSX.Element): string;
}
//
// const query = `
// {
//  portfolioCollection {
//    items {
//      sys {
//        id
//      }
//      title
//      description
//      learnings
//      awards
//      mediaCollection {
//        items {
//          url
//        }
//      }
//      video {
//        fileName
//      }
//      videoCover {
//        fileName
//      }
//    }
//  }
// }
//
// `;
