import Head from "next/head";
import React from "react";

type MetaProps = {
  title: string;
  description: string;
};

const Meta = ({ title, description }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "HRnet",
  description: "WealtHealth employee management interface",
};

export default Meta;
