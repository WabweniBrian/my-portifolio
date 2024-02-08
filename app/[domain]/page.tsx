import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Overview = ({ params }: { params: { domain: string } }) => {
  const domains = ["smack.", "naggzie.", "seeta."];
  if (!domains.includes(params.domain)) return notFound();
  return (
    <div>
      <h1>Overview</h1>
      <Image
        src="/images/about-banner.png"
        alt="Image"
        width={200}
        height={200}
      />
      <Link href={process.env.NEXT_PUBLIC_URL!}>Website</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Overview;
