import React from "react";
import ContentLoader from "react-content-loader";

const RelatedUserSkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={150}
    viewBox="0 0 150 150"
    backgroundColor="#c7c4c4"
    foregroundColor="#c7c4c4"
  >
    <circle cx="75" cy="40" r="30" />
    <rect x="25" y="80" rx="4" ry="4" width="100" height="13" />
    <rect x="25" y="100" rx="4" ry="4" width="80" height="10" />
  </ContentLoader>
);

export default RelatedUserSkeletonLoader;
