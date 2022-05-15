export const query = `
query 
  {
  youtube(id: "1JUUaaj9pvoL1ECguycNsX") {
    title
    description
    videoUrl
  }
  hobbies: hobbiesCollection(skip: 1) {
    items {
      ...hobbyFields
    }
  }
  hobby: hobbies(id: "17cGvF2k8a6AG7VN9Q1vTG") {
    ...hobbyFields
  }
}

fragment hobbyFields on Hobbies {
  title
  link: lInk {
    json
  }
  imagesCollection {
    items {
      fileName
      url
      sys {
        id
      }
    }
  }
  blurb {
    json
  }
}

`;

export default query;
