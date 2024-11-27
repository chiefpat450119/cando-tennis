import { TennisClassInfo } from "@/components/Classes";
import { ReviewProps } from "@/components/Testimonials";


// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/#about", key: "about", label: "About" },
  { href: "/#services", key: "services", label: "Services" },
  { href: "/#contact", key: "contact_us", label: "Contact Us" },
];

interface SlideshowImage {
  original: string;
  thumbnail: string;
}

// List of photo file names
const photos: string[] = [
  "/photos/IMG_8190_edited_edited.jpg",
  "/photos/IMG_8522.png",
  "/photos/IMG_8849_edited.jpg",
  "/photos/IMG_8849_edited_edited.jpg",
  "/photos/IMG_9651_edited.jpg",
  "/photos/IMG_9656.png",
  "/photos/kallang.PNG",
  "/photos/kids ladder_edited.jpg",
  "/photos/kids play.jpg",
  "/photos/Lei xuan_edited.jpg",
  "/photos/lpj.JPG",
  "/photos/Serve with Tom.jpg",
  "/photos/Serve with Tom_edited.jpg",
  "/photos/xiaoxiao.jpg",
  "/photos/YZ forehand.jpg",
  "/photos/yz serve.JPG",
  "/photos/zgl (2).JPG",
  "/photos/3 boys_edited.jpg",
  "/photos/3 ladies_edited.jpg",
  "/photos/b1b25f3a-3e44-4431-8bec-40a36cbc8f9b.jpg",
  "/photos/b1b25f3a-3e44-4431-8bec-40a36cbc8f9b_edited.jpg",
  "/photos/bags_edited.jpg",
  "/photos/birdseye view.JPG",
  "/photos/ccdec89a952d5932682108a42ee302a3.jpg",
  "/photos/e0afd759-9b98-4d65-95f1-ab2d691640d9.jpg",
  "/photos/f27fd7e61eef5bb00ff782175e03d1f7.jpg",
  "/photos/forehand sm_edited.jpg",
  "/photos/IMG_0226.jpg",
  "/photos/IMG_2077_edited.jpg",
  "/photos/IMG_2116_edited.jpg",
  "/photos/IMG_2118_edited.jpg",
  "/photos/IMG_6528.jpg",
  "/photos/IMG_6608_edited.jpg",
  "/photos/IMG_8190_edited.jpg",
];

export const SLIDESHOW_IMAGES: SlideshowImage[] = photos.map((photo) => ({
  original: photo,
  thumbnail: photo,
}));

interface GalleryImage {
  src: string;
  alt: string;
}
// Only 6 random images from the photos folder are shown in the gallery
export const GALLERY_IMAGES: GalleryImage[] = photos
  .sort(() => Math.random() - 0.5)
  .slice(0, 6)
  .map((photo) => ({
    src: photo,
    alt: "Tennis",
  }));

// TODO: Copy in the reviews from the old site
// REVIEWS SECTION
export const REVIEWS: ReviewProps[] = [
  {
    imageURL: "/person-1.png",
    name: "John Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
  },
  {
    imageURL: "/person-2.png",
    name: "Jane Doe",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
  },
  {
    imageURL: "/person-3.png",
    name: "John Smith",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
  },
  {
    imageURL: "/person-4.png",
    name: "Jane Smith",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
  },
];

// TODO: Replace images.
// TENNIS CLASSES SECTION
export const TENNIS_CLASSES: TennisClassInfo[] = [
  {
    title: "Private Beginner Lesson",
    price: "$100",
    description:
      "The goal of this class is to introduce tennis to players who have never touched a tennis racket before. After a few classes, students should be able to rally with each other and have fun on the court. Do you have what it takes? Sign up now to find out!",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Semi-Private Beginner Class (2-3 persons)",
    price: "$110",
    description: "",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Private Intermediate Lesson",
    price: "$110",
    description:
      "This class is developed for intermediate players who want to improve on certain skills to make him/herself all around to be more confident during the match play. As the saying goes, practice makes perfect. So start training with someone that'll keep you motivated to practice for the long haul. Book a class today!",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Semi-Private Intermediate Class (2-3 persons)",
    price: "$120",
    description: "",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Serving Class",
    price: "$60",
    description: `Has it ever happen to you that you had continuous double faults and felt so embarrassed when playing doubles? or, you felt so frustrated that you cannot add power, spin to the ball, or lack of consistency? Come to this class and you will find your solution to these problems.

1. Grip
2. Stance
3. Toss
4. Racket drop
5. Kinetic chain
6. Contact
7. Follow through
8. Flat/Slice/Kick Serve demo and practice

4 per group, 60$/pax

`,
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Family Class",
    price: "$120",
    description:
      "nothing beats the JOY of Family tennis fun/competition. Learn as a family, support each other not only in the house, but on the court...",
    imageURL: "/tennis_ball.svg",
  },
];

// Footer links (Unused)
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

// Contact information in the footer
export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "WhatsApp", value: "+65 87966546" },
    { label: "Email", value: "candotennissg@gmail.com" },
  ],
};

// TODO: Replace the placeholders with actual social media links
// Social media links in the footer
export const SOCIALS = {
  title: "Social",
  socials: [
    {
      icon: "/facebook.svg",
      link: "https://www.facebook.com",
    },
    {
      icon: "/instagram.svg",
      link: "https://www.instagram.com",
    },
    {
      icon: "/twitter.svg",
      link: "https://www.twitter.com",
    },
    {
      icon: "/youtube.svg",
      link: "https://www.youtube.com",
    },
    {
      icon: "/wordpress.svg",
      link: "https://www.wordpress.com",
    },
  ],
};
