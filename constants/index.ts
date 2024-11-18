import { TennisClassInfo } from "@/components/Classes";
import { ReviewProps } from "@/components/Testimonials";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/#about", key: "about", label: "About" },
  { href: "/#services", key: "services", label: "Services" },
  { href: "/#contact", key: "contact_us", label: "Contact Us" },
];

// TODO: npm install list-files and use that to get everything in /photos/ directory
// placeholder images
export const SLIDESHOW_IMAGES = [
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

// TODO: Replace these placeholders with actual images
export const GALLERY_IMAGES = [
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 1" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 2" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 3" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 4" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 5" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 6" },
];

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
    description: "nothing beats the JOY of Family tennis fun/competition. Learn as a family, support each other not only in the house, but on the court...",
    imageURL: "/tennis_ball.svg",
  }
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
