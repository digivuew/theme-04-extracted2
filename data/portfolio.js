import { slugify } from "@/utlis/slugify";

export const portfolioItems = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    width: 1920,
    height: 1572,
    title: "SAAS website design",
    tags: ["Figma", "Figma"],
    categories: ["Design", "Content writing", "Marketing"],
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    width: 1939,
    height: 1572,
    title: "Workout App design",
    tags: ["Adobe", "Webflow", "Ai"],
    categories: ["Branding", "Content writing", "Marketing"],
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    width: 1939,
    height: 1572,
    title: "Workout App design",
    tags: ["Figma", "Framer", "Wordpress"],
    categories: ["Branding", "Design", "Marketing"],
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    width: 1939,
    height: 1572,
    title: "Dashboard design",
    tags: ["Adobe", "Webflow"],
    categories: ["Branding", "Design", "Content writing"],
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems2 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    width: 1920,
    height: 1572,
    title: "Digital Transformation Advisors",
    description: "Development Coaches",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    width: 1939,
    height: 1572,
    title: "My work is driven by the belief that thoughtful",
    description: "Development App",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    width: 1939,
    height: 1572,
    title: "In this portfolio, you'll find a curated selection",
    description: "Web Design",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    width: 1939,
    height: 1572,
    title: "I've had the privilege of working with various",
    description: "App Development",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems3 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "My Portfolio of Innovation",
    description: "Development",
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "A Showcase of My Projects",
    description: "Development",
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "Professional Showcase",
    description: "Development",
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "My Journey as a Creator",
    description: "Development",
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "A Journey Through My Work",
    description: "Development",
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "A Portfolio of Art & Dedication",
    description: "Development",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems4 = [
  {
    id: 1,
    imageSrc: "/assets/images/portfolio/portfolio-01.jpg",
    title: "The services provide design",
    category: "Development",
    likes: 600,
    animationDelay: null,
  },
  {
    id: 2,
    imageSrc: "/assets/images/portfolio/portfolio-02.jpg",
    title: "The services provide design",
    category: "Development",
    likes: 600,
    animationDelay: 200,
  },
  {
    id: 3,
    imageSrc: "/assets/images/portfolio/portfolio-03.jpg",
    title: "The services provide design",
    category: "Development",
    likes: 600,
    animationDelay: null,
  },
  {
    id: 4,
    imageSrc: "/assets/images/portfolio/portfolio-04.jpg",
    title: "The services provide design",
    category: "Development",
    likes: 600,
    animationDelay: 200,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems5 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/portfolio/01.webp",
    title: "Wedding Hair Style",
    tags: ["Wedding", "Style"],
    buttonText: "View Details",
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/portfolio/02.webp",
    title: "Brand Promoting",
    tags: ["Brand", "Promot", "Model"],
    buttonText: "View Details",
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/portfolio/03.webp",
    title: "Product Marketing",
    tags: ["Shirt", "Brand", "Sell"],
    buttonText: "View Details",
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/portfolio/04.webp",
    title: "Dashboard design 2",
    tags: ["Adobe", "Webflow"],
    buttonText: "View Design",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems6 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/portfolio/05.webp",
    title: "Wedding Hair Styles",
    tags: ["Wedding", "Style"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/portfolio/06.webp",
    title: "Brand Promotingj",
    tags: ["Brand", "Promot", "Model"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/portfolio/07.webp",
    title: "Product Marketings",
    tags: ["Shirt", "Brand", "Sell"],
    buttonText: "View Details",
    width: 1134,
    height: 1176,
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/portfolio/08.webp",
    title: "Dashboard design 3",
    tags: ["Adobe", "Webflow"],
    buttonText: "View Design",
    width: 1134,
    height: 1176,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems7 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
    title: "My Journey as a Creator",
    description: "Development Coaches",
    width: 1920,
    height: 1572,
    marginClass: "",
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-2.jpg",
    title: "My Professional Portfolio",
    description: "Development Coaches",
    width: 1939,
    height: 1572,
    marginClass: "mt--100 mt_sm--0 mt_md--50",
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-3.jpg",
    title: "My Portfolio of Innovation",
    description: "App Development",
    width: 1939,
    height: 1572,
    marginClass: "",
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-4.jpg",
    title: "A Portfolio of Creativity and Passion",
    description: "Business Development",
    width: 1939,
    height: 1572,
    marginClass: "mt--100 mt_sm--0 mt_md--50",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems8 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "MBBS Gold Medal Achievement",
    description: "Academic Excellence",
    width: 410,
    height: 457,
    categories: ["Certifications", "Awards", "Training"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "MD Pediatrics Specialization",
    description: "Postgraduate Training",
    width: 410,
    height: 457,
    categories: ["Certifications", "Training", "Publications"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "IDPCCM Critical Care Certification",
    description: "Advanced Fellowship",
    width: 410,
    height: 457,
    categories: ["Certifications", "Training", "Awards"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "Khaleej Times Health Feature",
    description: "Media Recognition",
    width: 410,
    height: 457,
    categories: ["Publications", "Awards", "Training"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "Chess Championship Gold Medal",
    description: "Aster Sports Achievement",
    width: 410,
    height: 457,
    categories: ["Awards", "Publications", "Training", "Certifications"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "BLS Training Conductor",
    description: "Medical Education",
    width: 410,
    height: 457,
    categories: ["Training", "Certifications", "Publications", "Awards"],
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems9 = [
  {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/Premature Twin NICU Success.png",
    altText: "Premature newborn baby receiving specialized neonatal care",
    title: "Premature Twin NICU Success",
    tags: ["Neonatology", "NICU Care"],
    buttonText: "View Details",
    width: 410,
    height: 457,
    detailContent: {
      overview: "Caring for premature twins requires specialized neonatal expertise, advanced monitoring, and comprehensive family support. This case demonstrates successful management of extremely premature neonates with respiratory distress.",
      story: "Twin babies born at 28 weeks gestation were admitted to the Neonatal Intensive Care Unit under Dr. Vishrut Singh's care. Both infants presented with respiratory distress syndrome requiring immediate surfactant therapy and mechanical ventilation. The smaller twin weighed only 950 grams and faced additional challenges including feeding difficulties and temperature instability. Dr. Singh implemented comprehensive neonatal care protocols including gentle ventilation strategies, careful fluid and nutrition management, infection prevention, and developmental care practices. The twins received continuous monitoring, graduated respiratory support from ventilator to CPAP to room air, and specialized feeding protocols to establish adequate nutrition while their digestive systems matured.",
      keyPoints: [
        "Expert management of extreme prematurity at 28 weeks gestation",
        "Successful surfactant therapy and respiratory support",
        "Comprehensive nutrition and growth monitoring",
        "Prevention of common prematurity complications",
        "Family-centered developmental care approach"
      ],
      outcome: "After 8 weeks in the NICU, both twins achieved healthy weight gain, independent breathing, and successful feeding. They were discharged home with their family, continuing regular developmental follow-up. Both children are now thriving with age-appropriate growth and development."
    }
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/Neonatal Chikungunya Case.png",
    altText: "Newborn baby receiving specialized neonatal care",
    title: "Neonatal Chikungunya Case",
    tags: ["Neonatology", "Rare Disease"],
    buttonText: "View Details",
    width: 410,
    height: 457,
    detailContent: {
      overview: "Early recognition of rare neonatal infections requires high clinical suspicion and prompt intervention. This case represents successful diagnosis and management of neonatal Chikungunya, an uncommon presentation in newborns.",
      story: "A 10-day-old neonate presented with fever, lethargy, and poor feeding. Given the maternal history of febrile illness during late pregnancy and the clinical presentation, Dr. Vishrut Singh suspected neonatal Chikungunya infection - a rare but serious condition. Confirmatory testing was arranged, and the infant received supportive care including IV fluids, temperature management, and close monitoring for complications. The diagnosis was confirmed, and with appropriate neonatal intensive care management, the infant recovered without developing the typical complications associated with neonatal Chikungunya.",
      keyPoints: [
        "Early recognition of rare neonatal infection",
        "Detailed maternal and birth history assessment",
        "Appropriate diagnostic testing and confirmation",
        "Supportive care in neonatal intensive care setting",
        "Prevention of common complications through vigilant monitoring"
      ],
      outcome: "Full recovery without neurological or developmental sequelae. This case was significant as neonatal Chikungunya is rarely reported, and early recognition prevented potential complications."
    }
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/Septic Shock Recovery.png",
    altText: "Child recovering from critical illness",
    title: "Septic Shock Recovery",
    tags: ["Critical Care", "ICU Management"],
    buttonText: "View Details",
    width: 410,
    height: 457,
    detailContent: {
      overview: "Septic shock is a life-threatening condition requiring immediate recognition and aggressive management. This case demonstrates the importance of early intervention and expert critical care in pediatric sepsis.",
      story: "A 3-year-old child arrived in the emergency department with high fever, decreased consciousness, poor perfusion, and signs of shock secondary to severe bacterial infection. Dr. Vishrut Singh immediately initiated septic shock protocols including fluid resuscitation, broad-spectrum antibiotics, and vasoactive medication support. The child was admitted to PICU for intensive monitoring and management. Through careful fluid management, hemodynamic support, source control, and vigilant monitoring for organ dysfunction, the child stabilized over 72 hours. Antibiotic therapy was adjusted based on culture results, and supportive care continued until full recovery.",
      keyPoints: [
        "Rapid recognition of septic shock requiring immediate intervention",
        "Aggressive fluid resuscitation and hemodynamic support",
        "Appropriate antibiotic selection and adjustment",
        "Prevention and management of multi-organ dysfunction",
        "Comprehensive PICU monitoring and family support"
      ],
      outcome: "Complete recovery with restoration of normal organ function. The child was discharged after 7 days with appropriate antibiotic completion plan and close pediatric follow-up for growth and development monitoring."
    }
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/Blood Donation Campaign.png",
    altText: "Healthy happy children - community health success",
    title: "Blood Donation Campaign",
    tags: ["Community Health", "Leadership"],
    buttonText: "View Details",
    width: 410,
    height: 457,
    detailContent: {
      overview: "Beyond clinical care, pediatricians have a responsibility to contribute to community health initiatives. This blood donation campaign demonstrates leadership in promoting health awareness and social responsibility.",
      story: "Dr. Vishrut Singh organized and led a hospital-wide blood donation campaign, recognizing the critical shortage of blood products for pediatric emergencies and surgical procedures. The campaign educated staff and community members about the importance of regular blood donation, addressed common misconceptions, and facilitated the donation process. The initiative successfully collected over 150 units of blood, directly benefiting pediatric patients requiring transfusions for surgeries, trauma, hematological conditions, and critical illnesses.",
      keyPoints: [
        "Community leadership in healthcare initiatives",
        "Education about importance of blood donation",
        "Successful coordination of large-scale health campaign",
        "Direct impact on pediatric patient care",
        "Building partnerships between healthcare and community"
      ],
      outcome: "The campaign collected 150+ units of blood, ensuring adequate blood bank supplies for pediatric patients. This initiative highlighted the importance of pediatricians engaging in broader health promotion beyond individual patient care."
    }
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems10 = [
  {
    id: 1, // Unique ID for the key prop
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-5.jpg",
    imageAlt: "Blog Thumbnail", // Use descriptive alt text
    title: "SAAS website designn",
    tags: ["Figma", "Framer"],
    animationOrder: 1,
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-6.jpg",
    imageAlt: "Blog Thumbnail",
    title: "Workout App designn",
    tags: ["Adobe", "Webflow", "Ai"],
    animationOrder: 2,
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-7.jpg",
    imageAlt: "Blog Thumbnail",
    title: "e-Commerce designn",
    tags: ["Figma", "Framer", "Wordpress"],
    animationOrder: 3,
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/portfoli-img-8.jpg",
    imageAlt: "Blog Thumbnail",
    title: "Dashboard design lol",
    tags: ["Adobe", "Webflow"],
    animationOrder: 4,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const portfolioItems11 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/tab-image-1.png",
    title: "My Portfolio of Innovation", // Used for title link text and alt
    description: "Development", // Used for the <p> tag
    width: 410, // Static, but included in data - could remove if always same
    height: 457, // Static, but included in data - could remove if always same
    categories: ["Design", "Content writing", "Marketing"],
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-2.png",
    title: "A Showcase of My Projects",
    description: "Development",
    width: 410,
    height: 457,
    categories: ["Branding", "Content writing", "Marketing"],
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-3.png",
    title: "Professional Showcase",
    description: "Development",
    width: 410,
    height: 457,
    categories: ["Branding", "Design", "Marketing"],
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png",
    title: "My Journey as a Creator",
    description: "Development",
    width: 410,
    height: 457,
    categories: ["Branding", "Design", "Content writing"],
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png",
    title: "A Journey Through My Work",
    description: "Development",
    width: 410,
    height: 457,
    categories: ["Branding", "Design", "Content writing", "Marketing"],
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png",
    title: "A Portfolio of Art & Dedication",
    description: "Development",
    width: 410,
    height: 457,
    categories: ["Branding", "Design", "Content writing", "Marketing"],
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const portfolioItems12 = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/tab-image-4.png", // Correcting src based on the new JSX example
    title: "My Portfolio of Innovation", // Using this for H3 link text and alt
    description: "Development", // Using this for P tag text
    width: 410,
    height: 457,
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/tab-image-5.png", // Correcting src
    title: "A Showcase of My Projects",
    description: "Development",
    width: 410,
    height: 457,
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/tab-image-6.png", // Correcting src
    title: "Professional Showcase",
    description: "Development",
    width: 410,
    height: 457,
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/tab-image-7.png", // Correcting src based on the new JSX example
    title: "My Journey as a Creator",
    description: "Development",
    width: 410,
    height: 457,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const allPortfolioItems = [
  ...portfolioItems,
  ...portfolioItems2,
  ...portfolioItems3,
  ...portfolioItems4,
  ...portfolioItems5,
  ...portfolioItems6,
  ...portfolioItems7,
  ...portfolioItems8,
  ...portfolioItems9,
  ...portfolioItems10,
  ...portfolioItems11,
  ...portfolioItems12,
];
