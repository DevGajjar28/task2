import React from "react";
import ContentLoader from "react-content-loader";

const UserDetailsSkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={350}
    viewBox="0 0 400 350"
    backgroundColor="#c7c4c4"
    foregroundColor="#c7c4c4"
  >
    <circle cx="200" cy="70" r="50" />
    <rect x="125" y="140" rx="4" ry="4" width="150" height="13" />
    <rect x="100" y="160" rx="4" ry="4" width="200" height="10" />
    <rect x="50" y="200" rx="4" ry="4" width="300" height="10" />
    <rect x="50" y="220" rx="4" ry="4" width="300" height="10" />
    <rect x="50" y="240" rx="4" ry="4" width="300" height="10" />
  </ContentLoader>
);

export default UserDetailsSkeletonLoader;
