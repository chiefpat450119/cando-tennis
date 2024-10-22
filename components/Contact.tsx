import React from "react";
import Button from "./Button";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]" id="contact">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 backdrop-brightness-50 rounded-2xl p-6 lg:p-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Contact us now!
          </h2>
          <p className="regular-16 text-gray-10">
            We'll get back to you as soon as possible!
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Send us an email"
              icon="/email.svg"
              variant="btn_white"
              link="mailto:candotennissg@gmail.com"
              newTab
              full
            />
            <Button
              type="button"
              title="Message Us on WhatsApp"
              icon="/whatsapp.svg"
              variant="btn_dark_green_outline"
              link="https://wa.me/6588851795"
              newTab
              full
            />
          </div>
        </div>

        {/* <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
