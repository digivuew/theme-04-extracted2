import { slugify } from "@/utlis/slugify";

export const blogData = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-classic-card-img-1.jpg",
    altText: "Blog Thumbnail",

    title: "Essential Guide to Child Vaccination and Immunization",
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
    tags: ["Child Health", "Vaccination", "Preventive Care", "Development"],
    categories: ["Child Health", "Preventive Medicine"],
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-classic-card-img-2.jpg",
    altText: "Blog Thumbnail",

    title: "Managing Respiratory Disorders in Children",
    tags: ["Respiratory Care", "Asthma", "Child Health"],
    categories: ["Respiratory Care", "Pediatric Care Tips"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-classic-card-img-3.jpg",
    altText: "Blog Thumbnail",

    tags: ["Nutrition", "Child Health", "Development"],
    categories: ["Preventive Medicine", "Pediatric Care Tips"],
    title: "Nutrition and Growth Tips for Healthy Children",
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData2 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Understanding Common Childhood Infections and Prevention",
    tags: [
      "Child Health",
      "Infectious Diseases",
      "Vaccination",
      "Prevention",
      "Pediatric Care",
    ],
    categories: ["Pediatric Care Tips"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Asthma Management and Care in Pediatric Patients",
    tags: ["Asthma", "Respiratory Care", "Child Health"],
    categories: ["Respiratory Care"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Growth and Development Milestones in Children",
    tags: ["Child Health", "Development", "Pediatric Care"],
    categories: ["Child Health"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData3 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Allergy Testing and Treatment Options for Children",
    tags: [
      "Allergies",
      "Child Health",
      "Treatment",
      "Diagnosis",
      "Pediatric Care",
    ],
    categories: ["Child Health", "Pediatric Care Tips"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Critical Care Management for Pediatric Emergencies",
    tags: [
      "Critical Care",
      "Emergency",
      "Pediatric Care",
      "Child Health",
      "Intensive Care",
    ],
    categories: ["Child Health", "Respiratory Care"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Pediatric Nutrition Guidelines for Optimal Health",
    tags: [
      "Nutrition",
      "Child Health",
      "Growth",
      "Development",
      "Pediatric Care",
    ],
    categories: ["Preventive Medicine", "Pediatric Care Tips"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData4 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Seasonal Illnesses and How to Protect Your Child",
    tags: [
      "Child Health",
      "Prevention",
      "Infectious Diseases",
      "Seasonal Care",
      "Pediatric Care",
    ],
    categories: ["Child Health"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Understanding and Managing Childhood Fever",
    tags: [
      "Child Health",
      "Fever",
      "Treatment",
      "Symptoms",
      "Pediatric Care",
    ],
    categories: ["Preventive Medicine"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Importance of Regular Pediatric Check-ups",
    tags: [
      "Child Health",
      "Preventive Care",
      "Development",
      "Check-ups",
      "Pediatric Care",
    ],
    categories: ["Preventive Medicine", "Pediatric Care Tips"],
    description:
      "Expert insights on child health, development, and pediatric care from Dr. Vishrut Singh. Learn about managing common childhood conditions and maintaining your child's optimal health.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Common Respiratory Issues in Children and Treatment",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "13 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Newborn Care: Essential Tips for New Parents",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "14 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Pediatric Sleep Disorders and Solutions",
    width: 411,
    height: 291,
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    date: "15 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Managing Chronic Conditions in Children",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData6 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Child Health Tips",
    date: "12 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Essential Vaccination Schedule for Your Child's Health",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Respiratory Health",
    date: "15 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (08)",
    title: "Managing Asthma and Respiratory Disorders in Children",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Nutrition Guide",
    date: "18 Feb",
    author: "Dr. Vishrut Singh",
    comments: "Comments (12)",
    title: "Nutrition Tips for Healthy Growth and Development",
    width: 411,
    height: 291,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData7 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Child Mental Health and Emotional Development",
    width: 410,
    height: 294,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Pediatric Dermatology: Common Skin Conditions in Children",
    width: 410,
    height: 294,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Dr. Vishrut Singh",
    date: "April 10",
    title: "Digestive Health Issues in Children and Management",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/blog/single-post-card-img-1.png",
    category: "Category",
    title: "Antibiotic Resistance: What Parents Should Know",
  },
  {
    id: 2,
    imageSrc: "/assets/images/blog/single-post-card-img-2.png",
    category: "Category",
    title: "Understanding Pediatric Diabetes and Care",
  },
  {
    id: 3,
    imageSrc: "/assets/images/blog/single-post-card-img-3.png",
    category: "Category",
    title: "Sports Medicine for Young Athletes: Injury Prevention",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const allBlogs = [
  ...blogData,
  ...blogData2,
  ...blogData3,
  ...blogData4,
  ...blogData5,
  ...blogData6,
  ...blogData7,
  ...posts,
];
export const categories = [
  { title: "Child Health", count: "01" },
  { title: "Respiratory Care", count: "08" },
  { title: "Preventive Medicine", count: "05" },
  { title: "Pediatric Care Tips", count: "05" },
];
export const tags = [
  "Child Health",
  "Vaccination",
  "Respiratory Care",
  "Asthma",
  "Allergies",
  "Nutrition",
  "Development",
  "Infectious Diseases",
  "Critical Care",
  "Pediatric Tips",
];
