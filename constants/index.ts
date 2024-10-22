import { TennisClassInfo } from "@/components/Classes";
import { ReviewProps } from "@/components/Testimonials";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/#about", key: "about", label: "About" },
  { href: "/#services", key: "services", label: "Services" },
  { href: "/#contact", key: "contact_us", label: "Contact Us" },
];

// REVIEWS SECTION
export const REVIEWS: ReviewProps[] = [
  {
    imageURL: "/person-1.png",
    name: "John Doe",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt"
  },
  {
    imageURL: "/person-2.png",
    name: "Jane Doe",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt"
  },
  {
    imageURL: "/person-3.png",
    name: "John Smith",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt"
  },
  {
    imageURL: "/person-4.png",
    name: "Jane Smith",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nullam auctor, magna vel tincidunt tincidunt"
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
  }
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
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const GALLERY_IMAGES = [
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 1" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 2" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 3" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 4" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 5" },
  { src: "/tennis-racquet-on-court.jpg", alt: "Gallery 6" },

]