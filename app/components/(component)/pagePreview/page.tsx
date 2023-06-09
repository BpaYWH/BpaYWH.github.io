"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CustomLinkProps = {
    href: string,
    children: React.ReactNode
}

function CustomLink({ href, children }: CustomLinkProps) {
  let [imagePreview, setImagePreview] = useState<string>("")
  let [isHovering, setIsHovering] = useState<boolean>(false)
  
  let inImagePreview = false;
  let inLink = false;

  let handleMouseEnterImage = () => {
    inImagePreview = true;
    setIsHovering(true);
  };

  let handleMouseLeaveImage = () => {
    inImagePreview = false;
    setIsHovering(inLink);

    if (!inLink) {
      setImagePreview("");
    }
  };

  let handleMouseEnterLink = () => {
    inLink = true;
    setIsHovering(true);

    if (!isHovering)
      handleFetchImage(href);
  };

  let handleMouseLeaveLink = () => {
    inLink = false;
    setIsHovering(inImagePreview);

    if (!inImagePreview) {
      setImagePreview("");
    }
  };

  let handleFetchImage = async (url: string) => {
    const response = 
      await fetch(`http://localhost:3000/api/preview?url=${url}}`, {
        method: "GET",
      });
    const data = await response.json();
    setImagePreview(data.image);
  };

  return (
    <div>
      <Link
        href={href}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}>
        {children}
      </Link>
      {isHovering && (
        <Link href={href}>
          <span
            onMouseLeave={handleMouseLeaveImage}
            onMouseEnter={handleMouseEnterImage}>
            {
              imagePreview ? 
              (<Image 
                src={`data:image/jpeg;base64, ${imagePreview}`} 
                alt=""
                width={500}
                height={500} />) 
              : 
              (<span>Loading</span>)
            }
          </span>
        </Link>
      )}
    </div>
  )
}


export default function pagePreview() {

  return (
    <div>
      <h1>Page Preview</h1>
      <CustomLink href="http://localhost:3000/components/file-explorer">
        File Explorer
      </CustomLink>
    </div>
  );

}