import React from "react";
import { Helmet } from "react-helmet";
import { IPageContainer } from "src/interface";

const PageContainer: React.FC<IPageContainer> = ({
  title,
  description,
  children,
}) => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Helmet>
        <title>{title} | GMS ACR </title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  );
};

export default PageContainer;
