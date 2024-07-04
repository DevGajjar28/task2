// UserSkeletonLoader.js
import React from "react";
import ContentLoader from "react-content-loader";

const UserSkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#c7c4c4"
    foregroundColor="#c7c4c4"
  >
    <circle cx="40" cy="40" r="40" />
    <rect x="90" y="10" rx="4" ry="4" width="300" height="13" />
    <rect x="90" y="30" rx="4" ry="4" width="250" height="10" />
    <rect x="90" y="50" rx="4" ry="4" width="200" height="10" />
  </ContentLoader>
);

export default UserSkeletonLoader;
