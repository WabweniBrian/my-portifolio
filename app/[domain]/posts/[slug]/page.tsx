import Image from "next/image";
import React from "react";

const PostDetails = () => {
  return (
    <div>
      <h1>PostDetails</h1>
      <Image
        src="/images/about-banner.png"
        alt="Image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default PostDetails;
