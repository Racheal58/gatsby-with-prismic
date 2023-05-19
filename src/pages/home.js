import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PrismicText } from "@prismicio/react";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";

export default function Home({ data }) {
  // const document = data.home;
  console.log("here", data);
  return (
    <div>
      <p>here</p>
      {/* <p>{document.title.text}</p> */}
    </div>
  );
}

export const query = graphql`
  query Home {
    prismicHomepage {
      uid
      type
      data {
        title {
          text
        }
      }
    }
  }
`;
