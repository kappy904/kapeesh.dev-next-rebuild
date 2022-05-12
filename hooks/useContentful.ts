import { useEffect, useState } from "react";

export default function useContentful(query) {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response: Response) => response.json())
      .then(({ data, errors }) => {
        if (errors) setErrors(errors);
        if (data) setData(data);
      });
  }, [query]);

  return { data, errors };
}
