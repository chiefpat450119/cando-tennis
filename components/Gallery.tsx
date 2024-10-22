"use client";
import React from "react";
import { GALLERY_IMAGES } from "@/constants";
import ImageGallery from "react-image-gallery";

// TODO: npm install list-files and use that to get everything in /photos/ directory
// placeholder images
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <section className="max-container padding-container my-6 flex flex-col">
      <div className="max-container py-12 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {GALLERY_IMAGES.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <ImageGallery items={images} />
    </section>
  );
};

export default Gallery;
