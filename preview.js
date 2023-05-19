import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

// Update the path to your Link Resolver
import { linkResolver } from "./linkResolver";

const PreviewPage = ({ data }) => {
  // Your Page component
  if (isPreview === false) return "Not a preview!";

  return <p>Loading</p>;
};

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: "gatsby-website-with-prismic",
    linkResolver,
  },
]);
