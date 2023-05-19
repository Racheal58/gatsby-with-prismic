import * as React from "react";
import { Link } from "gatsby";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

// import { repositoryConfigs } from './src/utils/prismicPreviews'
import { linkResolver } from "./linkResolver";

function App({ children }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <PrismicPreviewProvider>{children}</PrismicPreviewProvider>
    </PrismicProvider>
  );
}

export default App;
