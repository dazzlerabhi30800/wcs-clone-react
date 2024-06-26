import { GrContactInfo } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { GiArrowCursor } from "react-icons/gi";
import { FaLock, FaShoppingCart } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

export const featureData = [
  {
    title: "Contact information",
    info: "Make it simple for visitors to get in touch with your team. Provide clear contact information or a contact form that's easy to find.",
    icon: <GrContactInfo />,
  },
  {
    title: "Testimonials and Review",
    info: "Display real customer testimonials and case studies that highlight successful experiences with your product or service. This builds credibility and trust.",
    icon: <VscPreview />,
  },
  {
    title: "Calls To Action",
    info: "Include prominent and persuasive CTAs throughout your web app. Whether it's signing up for a trial, requesting a demo, or making a purchase, CTAs should stand out and guide visitors towards taking action.",
    icon: <GiArrowCursor />,
  },
  {
    title: "Security Features",
    info: "Display security badges, privacy policies, and SSL certificates to assure visitors that their data is safe and that your business is trustworthy.",
    icon: <FaLock />,
  },
  {
    title: "Shopping Cart",
    info: "Enable users to save items in a wishlist and easily add products to their shopping carts. This encourages them to revisit and complete their purchases.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Related Items",
    info: "Implement an intelligent recommendation system that suggests related or complementary products based on customers' browsing and purchasing history.",
    icon: <FiLink />,
  },
  {
    title: "Blog Page",
    info: "Maintain a blog or resources section with valuable content that positions your business as an industry thought leader. This can attract and retain visitors who are seeking information.",
    icon: <BsPencilFill />,
  },
  {
    title: "Email Subscription Box",
    info: "The loading speed of the website is the first impression of the brand, so make sure it’s a positive one with our best optimized and in flash loading website.",
    icon: <MdEmail />,
  },
  {
    title: "Photos Of You And Your Team",
    info: "Showcase user-generated content, such as customer photos using your products, to build credibility and social proof.",
    icon: <IoMdPhotos />,
  },
];

export const RoadmapData = [
  {
    title: "Fill the contact form",
    info: "Fill the contact form & within 24Hrs WCS member will contact you.",
    img: "./services-img/StepIcon01.png",
  },
  {
    title: "Consultation",
    info: "WCS member will note your business requirements, objectives and schedule meeting.",
    img: "./services-img/StepIcon02.png",
  },
  {
    title: "Requirements gathering",
    info: "WCS member will gather all the detailed requirements for your web app, this involves identifying the target audience, defining user personas, outlining features and functionalities, and determining the technical specifications and integrations required.",
    img: "./services-img/StepIcon03.png",
  },
  {
    title: "Wireframing and prototyping",
    info: "WCS will create wireframes and prototypes to visualize the user interface and functionality of your web app.",
    img: "./services-img/StepIcon04.png",
  },
  {
    title: "Development and testing",
    info: "Once the design is approved,WCS will start the development process. Testing should be conducted at various stages to ensure the web app functions correctly and is free of bugs.",
    img: "./services-img/StepIcon05.png",
  },
  {
    title: "Deployment and hosting",
    info: "When development is complete, WCS will deploy the web app to a hosting environment that suits your needs. They will configure servers, set up databases, and ensure the app is accessible to users securely.",
    img: "./services-img/StepIcon06.png",
  },
  {
    title: "User acceptance testing (UAT) & Launching",
    info: "Before launching the web app to the public, we will conduct UAT to validate its performance, usability, and overall user experience. After successfully completing UAT, we can launch your web app to the public.",
    img: "./services-img/StepIcon07.png",
  },
];
