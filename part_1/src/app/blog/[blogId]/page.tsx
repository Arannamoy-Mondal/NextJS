import React from "react";

const DynamicRoute = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  return (
    <div>
      <h1>{blogId}</h1>
    </div>
  );
};

export default DynamicRoute;
