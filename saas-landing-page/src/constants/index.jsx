import { ShoppingCart } from "lucide-react";
import { Receipt } from "lucide-react";
import { BriefcaseMedical } from "lucide-react";
import { BookText } from "lucide-react";
import { House } from "lucide-react";
import { PlaneTakeoff } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  // { label: "Contact us", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <ShoppingCart />,
    text: "E-commerce Development",
    description:
      "We build e-commerce platforms with custom websites and apps, empowering businesses to sell online and grow their presence.",
  },
  {
    icon: <Receipt />,
    text: "Fintech Application",
    description:
      "We create fintech applications with custom websites and apps, enhancing financial services and streamlining digital transactions.",
  },
  {
    icon: <BriefcaseMedical />,
    text: "Healthcare Tech Solutions",
    description:
      "We build healthcare tech solutions with custom websites and apps, streamlining operations and improving patient care.",
  },
  {
    icon: <BookText />,
    text: "EdTech Platforms",
    description:
      "We create edtech platforms with custom websites and apps, enabling innovative online learning experiences for educators and students.",
  },
  {
    icon: <House />,
    text: "Real Estate Tech",
    description:
      "We build real estate tech solutions with custom websites and apps, simplifying property listings, management, and transactions.",
  },
  {
    icon: <PlaneTakeoff />,
    text: "Travel and Hospitality Tech",
    description:
      "We create travel and hospitality tech solutions with custom websites and apps, enhancing guest experiences and streamlining bookings.",
  },
];

export const checklistItems = [
  {
    title: "Create Modern Websites",
    description:
      "We build modern, responsive websites using cutting-edge technology to enhance your online presence.",
  },
  {
    title: "Build Native Mobile Apps",
    description:
      "We build native mobile apps for Android and iOS, focusing on pure functionality and outstanding user experience.",
  },
  {
    title: "Hanlding of Incomplete Projects",
    description:
      "We specialize in handling incomplete projects, revitalizing and delivering solutions that meet your business goals.",
  },
  {
    title: "Proper Deployment Guaranteed",
    description:
      "We ensure proper deployment of products, providing seamless integration and support for successful project launches.",
  },
];

export const pricingOptions = [
  {
    title: "Individual",
    price: "INR 400",
    features: ["Design", "Responsive", "Basic", "Support"],
  },
  {
    title: "Pro",
    price: "INR 600",
    features: [
      "Advanced",
      "Payment Integrations",
      "Multi-platform",
      "Optimized",
    ],
  },
  {
    title: "Enterprise",
    price: "INR 1000",
    features: [
      "Scalable",
      "Integration",
      "Automation",
      "3rd Party Integrations",
    ],
  },
];

export const resourcesLinks = [
  { href: "/demo-wall", text: "Mobile App Demos" },
  { href: "#", text: "Who we are" },
  { href: "#", text: "Schedule Call" },
];

export const platformLinks = [
  { href: "#", text: "Desktop Websites" },
  { href: "#", text: "Android Apps" },
  { href: "#", text: "IOS Apps" },
  { href: "#", text: "Project Deployment" },
];

export const communityLinks = [
  { href: "#", text: "Whatsapp" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Instagram" },
  { href: "#", text: "Twitter" },
  { href: "#", text: "Linked In" },
];
