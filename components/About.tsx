import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flexCenter flex-col bg-green-900" id="about">
      <div className="padding-container max-container w-full mt-8 lg:mt-16 mb-12 lg:mb-24">
        <Image
          src="/tennis_ball.svg"
          alt="tennis ball"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Knowledge. Commitment. Excellence.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">About Us</h2>
          <p className="regular-16 text-green-50 xl:max-w-[520px]">
            As an ITF (International Tennis Federation) Certified Coach, I have
            been training junior and adult tennis players to greatness since
            2019. Whether you're completely new to tennis or want to develop
            certain parts of your game, we'll work together to provide a fun and
            rewarding experience that'll keep you engaged, motivated, and in
            tip-top shape all-year-round. Having developed my own unique
            training methods, my mission is to offer an unparalleled tennis play
            experience aimed at seamlessly syncing the body and mind. Don&apos;t
            believe me? Schedule a consultation or book one of my classes today!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container h-[500px] relative w-full">
        <Image
          src="/tennis-court-green.jpg"
          alt="boat"
          width={1440}
          height={1800}
          className="w-full h-full object-cover object-center 2xl:rounded-5xl"
        />

        {/* <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
