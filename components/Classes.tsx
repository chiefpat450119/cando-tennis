import { TENNIS_CLASSES } from "@/constants";
import Image from "next/image";
import React from "react";

const Classes = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24" id="services">
      <div className="max-container padding-container relative w-full flex items-center justify-end gap-36">
        <div className="flex flex-1 w-full h-[500px] relative">
          <Image
            src="/tennis-racquet-on-court.jpg"
            alt="racquet"
            width={2094}
            height={2541}
            className="feature-phone object-scale-down w-full h-full"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/tennis_ball.svg"
              alt="ball"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Classes</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {TENNIS_CLASSES.map((feature) => (
              <TennisClass
                title={feature.title}
                price={feature.price}
                description={feature.description}
                imageURL={feature.imageURL}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Represents a a tennis lesson option
export interface TennisClassInfo {
  title: string;
  price: string;
  description: string;
  imageURL: string;
}

const TennisClass = ({ title, price, description, imageURL }: TennisClassInfo) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="flex items-center rounded-xl p-4 lg:p-7">
        <Image src={imageURL} alt={title} width={50} height={50} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="bold-16 mt-5 text-green-50">{price}</p>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-30px lg:mt-[30px] lg:bg-none">
      {description}
      </p>
    </li>
  );
};

export default Classes;
