"use client";
import React from "react";
import { GALLERY_IMAGES, SLIDESHOW_IMAGES } from "@/constants";
import ImageGallery from "react-image-gallery";

const Gallery = () => {
  return (
    <section className="max-container padding-container my-6 flex flex-col">
      <div className="max-container py-12 grid-cols-1 md:grid-cols-3 gap-5 w-full
      hidden lg:grid">
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
      <ImageGallery items={SLIDESHOW_IMAGES} />
    </section>
  );
};

export default Gallery;
