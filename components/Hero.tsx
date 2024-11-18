import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="padding-container flex flex-col gap-20 py-20 md:gap-28 mt-20 xl:flex-row hero-map">

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 backdrop-brightness-200 backdrop-blur-sm p-5 rounded-2xl">
        <Image
          src="tennis_ball.svg"
          alt="tennis ball"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-64">Tennis Coaching for Everyone</h1>
        <p className="regular-16 mt-6 text-slate-700 xl:max-w-[520px]">
          Ever wanted to learn tennis, but found yourself struggling to hit the
          ball? Have you been frustrated trying to play only to spend most of
          the time picking up balls? With CanDo Tennis, you can begin with the
          very basics and develop your game step-by-step, following our
          specially curated lessons to elevate your play to the next level.
          Schedule your lessons now to get started!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                  key={index}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            10+
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Contact Us" variant="btn_green" 
          link="/#contact"
          />
          <Button
            type="button"
            title="See us in action"
            icon="/play.svg"
            variant="btn_white_text"
            link="https://www.youtube.com/channel/UCECwLTbiZuRe7H0nyf4Peuw"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex flex-col gap-8 rounded-3xl bg-green-90 w-[268px] px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location?</p>
              <Image
                src="/location.svg"
                alt="location"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Anywhere in Singapore</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Skill Level?</p>
              <p className="bold-20 text-white">Any!</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Improvement?</p>
              <p className="bold-20 text-white">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
