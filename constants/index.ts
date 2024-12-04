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

// REVIEWS SECTION
export const REVIEWS: ReviewProps[] = [
  {
    imageURL: "/photos/testimonials/loris.png",
    name: "Loris",
    body: `I have been under Coach Yimin's tutelage for a year, honing my tennis skills. the progress has been substantial, and my passion for the sport has deepened. Each training session is eagerly anticipated and brings immense joy. Coach Yimin's expertise is truly remarkable, and his teaching methods are highly effective. He holds the distinction of being the coach with whom I've spent the most time. With meticulous attention, he rectified numerous flaws in my technique, resulting in significant advancements. Now, my forehand grip and stroke exhibit a newfound finesse, earning commendations from peers for notable progress. Apart from our regular practice sessions, which span two to three days a week, Coach Yimin extends invitations to join club sessions, offering invaluable opportunities to interact with seasoned players and learn from their experiences. Additionally, he orchestrates various student-centric activities, ranging from enjoyable Babecues to spirited competitions. During these events, Coach Yimin thoughtfully provides tokens of recognition. I proudly claimed a wristband and a tennis polo shirt as my rewards. 
As my year-and-a-half-long student sojourn in Singapore draws to a close this winter, I am profoundly grateful for Coach Yimin's steadfast support and motivation throughout this transformative year.`,
  },
  {
    imageURL: "/photos/testimonials/josna.png",
    name: "Josna",
    body: `Mr. Yi is passionate as well as a professional tennis coach. He is consistent, punctual, technical, high focused, patient and most importantly empathetic. Our 9 year old son Roger started as a novic in tennis and has been training with Mr. Yi for about a year now. We have seen his skills improve tremendously, his confidence has just got better and most importnatly he looks forward to his tennis lessons each time which is a proof that he enjoys his game now. His serves are way better, forehand aims anre more accurate, backhand is stronger and is confident as he rallies. We chanced upon Mr yi without any recommendation and we have not regretted our decision anytime. We would highly recommned Mr. Yi to anyone looking for a passionate and qualified tennis coach. 
`,
  },
  {
    imageURL: "/photos/testimonials/lynn.png",
    name: "Lynn, ShuoMing's mother",
    body: `首先，很幸运遇到了伯乐周老师，孩子刚开始学网球的时候，只是出于同学的邀请，连我这个妈妈都觉得他也许就几天的热度。可周老师有神奇的方法、丰富的经验、认真的教导、亲切的关怀…孩子从我催着他上网球课，到每周上两次课 四个小时都不解渴, 一有空就磨着老师加课；网球已经成为他热爱的、不可缺少的东西！然后，在收获健康的体魄、愉悦的心情的同时，你会发现，他完全变了一个人：阳光 自信，开朗乐观，在学校交到许多好朋友，在家里体谅帮助我…
`,
  },
  {
    imageURL: "/photos/testimonials/candc.png",
    name: "Chris and Caisha",
    body: `Coach Patrick's patience and professionalism in Tennis coaching helped us develop the basic skills in Tennis. Love the sport!`,
  },
  {
    imageURL: "/photos/testimonials/ju.png",
    name: "Ju, Data Scientist",
    body: `Patient and polite; creative and customised on teaching. Class is designed with different components to suit student's rhythm. Balance the technique and overall hitting enjoyment. A great player himself both on tactics and skills. A great teacher (possibly the best in Singapore!!!). oh, did I mention he film the class session regularly to feed back to student for effective improvement.`,
  },
  {
    imageURL: "/photos/testimonials/ll.png",
    name: "乐乐  妈妈",
    body: `一直以为，一位优秀且专业的网球教练，应该是既做得专业示范，又讲得了易懂的技术。很幸运遇到周教练，能做到上述两点。训练期间，周教练严格规范孩子的技术动作，同时让孩子简单快速的领悟动作要领。例如我的孩子在击球时胳膊伸展不到位，周教练就会想办法针对性的训练纠正她的错误动作。我的孩子是初学者，周教练就会针对初学者扣细节，耐心教授分解动作，讲授动作的要领和技巧，受力原理，循序渐进，孩子经过一段时间的训练，有很大的进步`,
  },
  {
    imageURL: "/photos/testimonials/zgl.png",
    name: "ZGL, Product Manager",
    body: `A well-rounded and experienced tennis coach with solid skills. He is both professional and passionate. He helped me develop solid fundamentals while making the learning journey fun and enjoyable. Whether you are a recreational player who play tennis for fun or you are an intermediate player who wish to boot his/her tennis skills, I would strongly recommend CanDo Tennis.`,
  },
  {
    imageURL: "/photos/testimonials/zizi.png",
    name: "ZiZi Chen, Child Care Teacher",
    body: `老师非常亲切， 对孩子们很有耐心。他特别注意基本功的训练， 如握拍的姿势，身体的角度，手臂的摆动等， 都必须严谨到位。课堂安排紧凑又不失趣味, 课后还会发给家长课后总结及小视频。希望有一天新加坡的网球冠军出自CanDo Tennis 康多网球的门下`,
  },
  {
    imageURL: "/photos/testimonials/lx.png",
    name: "Sally",
    body: `​教学严谨， 认真负责， 认真对待每个学员。 态度温和,平易近人,技术精湛,强烈推荐康多网球 (CanDo Tennis)`,
  },
  {
    imageURL: "/photos/testimonials/summer.png",
    name: "Summer 妈妈",
    body: `Summer跟益明教练学习打网球有二、三个月了, 每次上课前益明教练都非常注重课前的热身运动, 在上课时教练的耐心指导以及不厌其烦的做各种示范动作, 教孩子怎么能更快更好的掌握网球的基本动作要领，跟孩子分析动作错在哪里，怎么做才能更好的把动作做好, 利用好身体的自身运动, 集中力量快、准、狠把网球打出去, 同时保护好自己不受伤, 这点非常重要, Summer通过这段时间学习网球, 身体的体质及协调性也增加了, Summer接下来进入中四学习也更紧张了, 希望Summer学习运动两不误, 继续努力把网球学好, 加油加油加油`,
  },
  {
    imageURL: "/photos/testimonials/an.png",
    name: "An",
    body: `俩个小孩跟着教练已经学习了一年多了，孩子们很喜欢网球也喜欢上益民教练的课。老师寓教于乐，课堂生动有趣，小孩的进步也是显而易见的。多谢教练的悉心指导，希望孩子们继续进步。`,
  },
  {
    imageURL: "/photos/testimonials/lynnhl.png",
    name: "Lynn",
    body: `首先，很幸运遇到了伯乐周老师，孩子刚开始学网球的时候，只是出于同学的邀请，连我这个妈妈都觉得他也许就几天的热度。可周老师有神奇的方法、丰富的经验、认真的教导、亲切的关怀…孩子从我催着他上网球课，到每周上两次课 四个小时都不解渴，一有空就磨着老师加课；网球已经成为他热爱的、不可缺少的东西！然后，在收获健康的体魄、愉悦的心情的同时，你会发现，他完全变了一个人：阳光 自信，开朗乐观，在学校交到许多好朋友，在家里体谅帮助我…
还有许多惊喜，快加入周老师的团队吧，每次课都有收获！`,
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
    imageURL: "/photos/IMG_2118_edited.jpg",
  },
  {
    title: "Semi-Private Beginner Class (2-3 persons)",
    price: "$110",
    description: "",
    imageURL: "/photos/3 ladies_edited.jpg",
  },
  {
    title: "Private Intermediate Lesson",
    price: "$110",
    description:
      "This class is developed for intermediate players who want to improve on certain skills to make him/herself all around to be more confident during the match play. As the saying goes, practice makes perfect. So start training with someone that'll keep you motivated to practice for the long haul. Book a class today!",
    imageURL: "/photos/forehand sm_edited.jpg",
  },
  {
    title: "Semi-Private Intermediate Class (2-3 persons)",
    price: "$120",
    description: "",
    imageURL: "/photos/IMG_2077_edited.jpg",
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
    imageURL: "/photos/Serve with Tom_edited.jpg",
  },
  {
    title: "Family Class",
    price: "$120",
    description:
      "nothing beats the JOY of Family tennis fun/competition. Learn as a family, support each other not only in the house, but on the court...",
    imageURL: "/photos/kids play.jpg",
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
      icon: "/xhs.svg",
      link: "https://www.xiaohongshu.com/user/profile/62a60edb000000002102a569?xhsshare=CopyLink&appuid=62a60edb000000002102a569&apptime=1686908975"
    },
    {
      icon: "/facebook.svg",
      link: "https://www.facebook.com/cando.tennis",
    },
    {
      icon: "/instagram.svg",
      link: "https://www.instagram.com/candotennis",
    },
    {
      icon: "/youtube.svg",
      link: "https://www.youtube.com/@candotennis",
    },
  ],
};
