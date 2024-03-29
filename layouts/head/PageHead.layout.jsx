import React from "react";

const PageHead = ({
  children,
  title = "Faverity",
  description = "Faverity social app",
  keywords = "Faverity, social, app, fun",
  image = "/icon-192x192.png",
}) => {
  const titlePrefix = "Faverity | ";

  return (
    <>
      <title>{titlePrefix + title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={titlePrefix + title} />
      <meta name="og:image" content={image} />
      {children}
    </>
  );
};

export default PageHead;
