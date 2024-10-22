import { REVIEWS } from "@/constants";
import Image from "next/image";


export interface ReviewProps {
  imageURL: string;
  name: string;
  body: string;
}

// Testimonial slide with photo, name and 
const Review = ({
  imageURL,
  name,
  body,
}: ReviewProps) => {
  return (
    <div
      className={`h-full w-full min-w-[500px] lg:min-w-[1000px] bg-cover bg-no-repeat bg-black bg-opacity-50 lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex flex-row items-center justify-between h-full w-full">
        <div className="flex flex-col items-center justify-center gap-5 p-5">
          <Image
            src={imageURL}
            alt="person"
            width={400}
            height={800}
            className="rounded-2xl"
          />
          <h3 className="text-white text-lg lg:text-2xl text-center">{name}</h3>
        </div>
        <p className="text-base lg:text-lg text-white p-5">{body}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="relative flex flex-col py-10 lg:mb-8 lg:py-15 xl:mb-15">
      <div className="hide-scrollbar flex h-[340px] p-8 lg:p-10 w-full items-start justify-start gap-8 lg:gap-12 overflow-x-auto lg:h=[400px] xl:h-[640px] bg-blue-500">
        {REVIEWS.map((review) => (
          <Review
            key={review.name}
            imageURL={review.imageURL}
            name={review.name}
            body={review.body}
          />
        ))}
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-40 lg:mr-6">
        <div className="bg-green-50 p-7 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-10 xl:py-14 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-40 capitalize text-white">
            Why Should You Choose CanDo Tennis?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Hear from our current and past clients about their experience with us!
          </p>
          <Image
            src="quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
