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

// TENNIS CLASSES SECTION
export const TENNIS_CLASSES: TennisClassInfo[] = [
  {
    title: "Beginner",
    price: "$50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Intermediate",
    price: "$75",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
    imageURL: "/tennis_ball.svg",
  },
  {
    title: "Advanced",
    price: "$100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt",
    imageURL: "/tennis_ball.svg",
  },
];

// FOOTER SECTION
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

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "WhatsApp", value: "+65 87966546" },
    { label: "Email", value: "candotennissg@gmail.com" },
  ],
};

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

export const GALLERY_IMAGES = [
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 1" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 2" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 3" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 4" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 5" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 6" },
];
