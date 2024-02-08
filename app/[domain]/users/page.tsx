import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Users = ({ params }: { params: { domain: string } }) => {
  const domains = ["smack.", "naggzie.", "seeta."];
  if (!domains.includes(params.domain)) return notFound();
  return (
    <div>
      <h1>Users</h1>
      <Image
        src="/images/about-banner.png"
        alt="Image"
        width={200}
        height={200}
      />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Users;
