import { slugify } from "@/utlis/slugify";

export const services = [
  {
    id: 1,
    icon: "fa-light fa-stethoscope",
    title: "Pediatric Consultations",
    projects: "General child health & wellness",
    animationOrder: "1",
  },
  {
    id: 2,
    icon: "fa-light fa-lungs",
    title: "Respiratory Care",
    projects: "Asthma & breathing disorders",
    animationOrder: "2",
  },
  {
    id: 3,
    icon: "fa-light fa-syringe",
    title: "Allergy Management",
    projects: "Testing & treatment plans",
    animationOrder: "3",
  },
  {
    id: 4,
    icon: "fa-light fa-virus",
    title: "Infectious Diseases",
    projects: "Diagnosis & treatment",
    animationOrder: "4",
  },
  {
    id: 6,
    icon: "fa-light fa-baby",
    title: "Neonatology",
    projects: "Newborn care & support",
    animationOrder: "6",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services2 = [
  {
    id: 1,
    num: "01.",
    title: "Pediatric Respiratory Disorders",
    description:
      "Expert diagnosis and treatment of asthma, bronchitis, pneumonia, and other respiratory conditions in children from birth to 18 years",
    animationOrder: "1",
    isLink: true,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    title: "Infectious Disease Management",
    description:
      "Comprehensive care for bacterial and viral infections, including fever management, vaccination guidance, and preventive care strategies",
    animationOrder: "2",
    isLink: true,
    column: 1,
  },
  {
    id: 3,
    num: "03.",
    title: "Allergy & Asthma Treatment",
    description:
      "Specialized diagnosis and management of pediatric allergies, asthma, and related conditions with personalized treatment plans",
    animationOrder: "3",
    isLink: true,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    title: "Growth & Development",
    description:
      "Monitoring and addressing growth concerns, developmental milestones, and nutritional guidance for optimal child development",
    animationOrder: "4",
    isLink: false,
    column: 2,
  },
  {
    id: 6,
    num: "06.",
    title: "Neonatology Services",
    description:
      "Expert care for newborns, including premature babies, with focus on ensuring healthy start to life and parental education",
    animationOrder: "6",
    isLink: false,
    column: 2,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services3 = [
  {
    id: 1,
    icon: "feather-cast",
    title: "UI/UX",
    description:
      "Passages there are many variations variations of of Lorem available.",
  },
  {
    id: 2,
    icon: "feather-map",
    title: "App",
    description:
      "Variations There are many variations of passages of Lorem available.",
  },
  {
    id: 3,
    icon: "feather-phone-call",
    title: "Support",
    description:
      "There are many variations of passages of Lorem available pro ability.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services4 = [
  {
    id: 1,
    num: "01.",
    title: "Core Pediatric Services",
    icon: "fa-solid fa-stethoscope",
    image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=850&h=476&fit=crop",
    description:
      "Complete child health consultations covering newborn care, growth monitoring, developmental milestones, routine check-ups, nutrition guidance, and behavioral support for children of all ages.",
    animationOrder: 1,
    column: 1,
    detailContent: {
      overview: "Our core pediatric services form the foundation of comprehensive child healthcare. We provide expert medical consultations for children from birth through adolescence, focusing on preventive care, health promotion, and early detection of potential health concerns.",
      sections: [
        {
          title: "Well-Child Consultations",
          content: "Regular check-ups are essential for monitoring your child's growth and development. Our consultations include comprehensive physical examinations, developmental milestone assessments, and discussions about your child's overall wellbeing. We track growth parameters, identify any concerns early, and provide guidance on age-appropriate developmental expectations."
        },
        {
          title: "Growth & Development Monitoring",
          content: "We carefully monitor physical growth using standardized growth charts and assess developmental milestones at each visit. Early identification of growth concerns or developmental delays allows for timely intervention and support. Our developmental assessments cover motor skills, language acquisition, social interactions, and cognitive development."
        },
        {
          title: "Nutrition & Feeding Guidance",
          content: "Proper nutrition is crucial for healthy growth and development. We provide personalized feeding counseling for infants, including breastfeeding support and formula guidance. For older children, we offer advice on balanced diets, managing picky eating, addressing nutritional deficiencies, and promoting healthy eating habits that last a lifetime."
        },
        {
          title: "Sleep & Behavioral Support",
          content: "Sleep issues can affect the entire family. We provide evidence-based guidance on establishing healthy sleep routines, addressing sleep problems in infants and toddlers, and managing common behavioral challenges. Our approach includes practical strategies tailored to your family's needs and your child's unique temperament."
        }
      ]
    }
  },
  {
    id: 2,
    num: "02.",
    title: "Vaccination & Preventive Care",
    icon: "fa-solid fa-syringe",
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=850&h=476&fit=crop",
    description:
      "Full childhood immunization following DHA schedule, travel vaccines, personalized catch-up programs, pre-school health checks, and comprehensive vaccine counseling for parents.",
    animationOrder: 2,
    column: 2,
    detailContent: {
      overview: "Vaccination is one of the most effective ways to protect children from serious diseases. We follow the DHA (Dubai Health Authority) immunization schedule and provide comprehensive vaccine counseling to help parents make informed decisions about their child's preventive healthcare.",
      sections: [
        {
          title: "Routine Childhood Immunizations",
          content: "We administer all routine vaccines according to the DHA schedule, protecting children against diseases such as measles, mumps, rubella, polio, hepatitis, whooping cough, and many others. Our team ensures vaccines are stored and administered properly, and we maintain detailed immunization records for your child."
        },
        {
          title: "Vaccine Education & Counseling",
          content: "We believe in empowering parents with accurate information about vaccines. Our consultations include detailed discussions about vaccine benefits, potential side effects, and addressing any concerns you may have. We provide evidence-based answers to common questions and help you understand the importance of maintaining vaccination schedules."
        },
        {
          title: "Catch-Up Immunization Programs",
          content: "If your child has missed vaccines or is new to the DHA schedule, we create personalized catch-up vaccination plans. We assess your child's immunization history and develop a safe, effective schedule to ensure complete protection while minimizing the number of visits required."
        },
        {
          title: "Travel Vaccinations & Health Advice",
          content: "Planning international travel? We provide travel health consultations and administer necessary travel vaccines based on your destination. This includes vaccines for typhoid, yellow fever, Japanese encephalitis, and others, along with advice on travel health precautions and disease prevention during your trip."
        }
      ]
    }
  },
  {
    id: 3,
    num: "03.",
    title: "Acute Illness Management",
    icon: "fa-solid fa-thermometer",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=850&h=476&fit=crop",
    description:
      "Expert diagnosis and treatment for fever, viral and bacterial infections, cough, cold, flu, diarrhea, vomiting, ear infections, sore throat, and skin rashes in children.",
    animationOrder: 3,
    column: 1,
    detailContent: {
      overview: "When your child falls ill, prompt and effective treatment is essential. We provide comprehensive care for acute illnesses, from common colds to more complex infections, ensuring your child receives appropriate treatment and recovers quickly and safely.",
      sections: [
        {
          title: "Fever & Infection Management",
          content: "Fever in children can be concerning for parents. We provide thorough evaluations to identify the underlying cause, whether viral or bacterial, and recommend appropriate treatment. Our approach includes guidance on fever management at home, when to seek medical attention, and proper use of fever-reducing medications."
        },
        {
          title: "Respiratory Illness Care",
          content: "Common respiratory problems like coughs, colds, and flu are frequent in childhood. We diagnose and treat conditions including bronchiolitis, croup, pneumonia, and upper respiratory infections. Treatment plans may include medications, breathing treatments, and detailed home care instructions to ensure optimal recovery."
        },
        {
          title: "Gastrointestinal Issues",
          content: "Diarrhea, vomiting, and dehydration require careful assessment and management. We evaluate fluid status, provide oral or intravenous rehydration as needed, and identify the cause of symptoms. Our care includes dietary guidance during recovery and prevention strategies to avoid recurrence."
        },
        {
          title: "ENT Infections & Skin Conditions",
          content: "Ear infections, sore throats, and sinus problems are common in children. We provide accurate diagnosis and appropriate treatment, including decisions about antibiotic use. For skin rashes and allergic reactions, we identify triggers, provide immediate treatment, and develop plans to prevent future episodes."
        }
      ]
    }
  },
  {
    id: 4,
    num: "04.",
    title: "Growth, Development & Special Care",
    icon: "fa-solid fa-chart-line",
    image: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=850&h=476&fit=crop",
    description:
      "Specialized developmental delay screening, speech and language assessment, ADHD and learning difficulty evaluation, puberty guidance, and comprehensive adolescent health care.",
    animationOrder: 4,
    column: 2,
    detailContent: {
      overview: "Every child develops at their own pace, but early identification of developmental concerns allows for timely intervention. We provide comprehensive developmental assessments and specialized care for children with unique needs, ensuring they receive the support necessary to reach their full potential.",
      sections: [
        {
          title: "Developmental Screening & Assessment",
          content: "Regular developmental surveillance helps identify children who may benefit from additional evaluation or early intervention. We use standardized screening tools to assess motor skills, language, social-emotional development, and cognitive abilities. Early detection of delays enables prompt referral to appropriate specialists and therapies."
        },
        {
          title: "Speech & Language Evaluation",
          content: "Language development is crucial for academic success and social interaction. We assess speech and language milestones, identify potential delays or disorders, and provide referrals to speech-language pathologists when needed. Our evaluations consider bilingual development and cultural factors that may influence language acquisition."
        },
        {
          title: "ADHD & Learning Difficulties",
          content: "Attention deficit hyperactivity disorder (ADHD) and learning difficulties can significantly impact a child's academic performance and self-esteem. We conduct comprehensive evaluations, coordinate with schools and psychologists, and develop management plans that may include behavioral strategies, educational accommodations, and medication when appropriate."
        },
        {
          title: "Adolescent Health Care",
          content: "The teenage years bring unique health challenges. We provide confidential, age-appropriate care addressing puberty concerns, menstrual issues, acne, mental health, risky behaviors, and reproductive health education. Our approach respects adolescent autonomy while maintaining appropriate parental involvement."
        }
      ]
    }
  },
  {
    id: 5,
    num: "05.",
    title: "Allergy & Chronic Disease Care",
    icon: "fa-solid fa-lungs",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=850&h=476&fit=crop",
    description:
      "Expert management of childhood asthma, food and environmental allergies, eczema, chronic skin conditions, wheezing disorders, and evaluation of recurrent infections.",
    animationOrder: 5,
    column: 1,
    detailContent: {
      overview: "Chronic conditions require ongoing management and support. We provide comprehensive care for children with allergies, asthma, and other chronic diseases, helping families manage these conditions effectively while maintaining quality of life.",
      sections: [
        {
          title: "Asthma Management",
          content: "Asthma is one of the most common chronic conditions in childhood. We provide accurate diagnosis using lung function tests, develop personalized asthma action plans, and prescribe appropriate controller and rescue medications. Regular follow-up ensures optimal control, reduces exacerbations, and allows children to participate fully in activities."
        },
        {
          title: "Allergy Diagnosis & Treatment",
          content: "Food allergies, environmental allergies, and allergic reactions can significantly impact daily life. We perform allergy testing when appropriate, identify triggers, and develop avoidance strategies. Management includes emergency action plans for severe allergies, guidance on epinephrine auto-injector use, and consideration of immunotherapy when beneficial."
        },
        {
          title: "Eczema & Skin Conditions",
          content: "Chronic skin conditions like eczema (atopic dermatitis) require consistent care. We develop treatment plans including appropriate skincare routines, topical medications, and identification of triggers. Our approach emphasizes maintaining skin health, preventing flares, and managing discomfort while minimizing side effects."
        },
        {
          title: "Recurrent Infection Evaluation",
          content: "Frequent infections may indicate underlying immune system issues or other medical conditions. We evaluate children with recurrent ear infections, sinusitis, pneumonia, or other infections to identify potential causes. This may include laboratory testing, immune system evaluation, and referral to specialists when necessary."
        }
      ]
    }
  },
  {
    id: 6,
    num: "06.",
    title: "Screening & Preventive Programs",
    icon: "fa-solid fa-clipboard-check",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=850&h=476&fit=crop",
    description:
      "Early detection through vision and hearing tests, anemia screening, obesity assessment, vitamin D and nutritional deficiency checks for proactive child health management.",
    animationOrder: 6,
    column: 2,
    detailContent: {
      overview: "Prevention and early detection are key to optimal child health. Our screening programs identify potential health issues before they become serious problems, allowing for early intervention and better outcomes.",
      sections: [
        {
          title: "Vision & Hearing Screening",
          content: "Vision and hearing are essential for learning and development. We conduct age-appropriate screening at regular intervals to detect problems early. Vision screening identifies refractive errors, amblyopia, and other eye conditions. Hearing screening ensures early identification of hearing loss, allowing for timely intervention that is crucial for language development."
        },
        {
          title: "Anemia & Nutritional Screening",
          content: "Iron deficiency anemia is common in children and can affect growth, development, and school performance. We screen for anemia at recommended ages and in high-risk populations. Testing includes hemoglobin levels and, when needed, additional iron studies. Treatment plans address dietary improvements and iron supplementation when necessary."
        },
        {
          title: "Growth & Obesity Assessment",
          content: "Childhood obesity has reached epidemic proportions and can lead to serious health consequences. We monitor growth patterns, calculate body mass index (BMI), and identify children at risk for obesity or underweight. Our comprehensive approach includes dietary counseling, physical activity promotion, and addressing underlying medical or psychosocial factors."
        },
        {
          title: "Vitamin Deficiency Screening",
          content: "Vitamin deficiencies can impact overall health and development. We screen for common deficiencies including vitamin D, vitamin B12, and others based on risk factors. Vitamin D deficiency is particularly common in our region and can affect bone health. We provide appropriate supplementation recommendations and dietary guidance."
        }
      ]
    }
  },
  {
    id: 7,
    num: "07.",
    title: "Newborn Care Services",
    icon: "fa-solid fa-baby",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=850&h=476&fit=crop",
    description:
      "Comprehensive newborn examinations, jaundice monitoring, breastfeeding support, umbilical cord care, newborn screening guidance, and essential parenting education for new families.",
    animationOrder: 7,
    column: 1,
    detailContent: {
      overview: "The first weeks of life are critical for establishing healthy patterns and detecting potential health concerns. We provide comprehensive newborn care, supporting new parents through this important transition with expert medical guidance and compassionate support.",
      sections: [
        {
          title: "Newborn Examination & Follow-Up",
          content: "Complete physical examination of your newborn checks for any congenital abnormalities, assesses feeding and elimination patterns, and ensures proper weight gain. Follow-up visits in the first weeks monitor jaundice, umbilical cord healing, and overall adaptation to life outside the womb. We address parental concerns and provide reassurance during this adjustment period."
        },
        {
          title: "Jaundice Assessment & Management",
          content: "Newborn jaundice is common but requires careful monitoring. We assess jaundice severity through visual inspection and bilirubin testing when needed. Management recommendations range from increased feeding to phototherapy for significant hyperbilirubinemia. We ensure appropriate follow-up to prevent complications while minimizing unnecessary interventions."
        },
        {
          title: "Breastfeeding Support & Counseling",
          content: "Successful breastfeeding is important for infant health but can be challenging for new mothers. We provide evidence-based lactation support, assess latch and positioning, troubleshoot common problems like engorgement or low milk supply, and offer guidance on establishing and maintaining breastfeeding. We also support mothers who choose formula feeding with appropriate recommendations."
        },
        {
          title: "Newborn Screening & Parent Education",
          content: "Newborn screening tests identify rare but serious genetic, metabolic, and endocrine disorders. We explain screening processes, interpret results, and coordinate follow-up when needed. Parent education covers infant care basics including bathing, safe sleep practices, recognizing illness signs, and when to seek medical attention. We support parents in developing confidence in caring for their newborn."
        }
      ]
    }
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const serviceCards = [
  {
    title: "A Portfolio of Creativity",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
  },
  {
    title: "My Portfolio of Innovation",
    description:
      "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
  },
  {
    title: "A Showcase of My Projects",
    description:
      "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
  },
];

export const services5 = [
  {
    title: "A Portfolio of Creativity",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
  },
  {
    title: "My Portfolio of Innovation",
    description:
      "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
  },
  {
    title: "A Showcase of My Projects",
    description:
      "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
  },
];
export const serviceCards2 = [
  {
    number: "01.",
    title: "A Portfolio of Creativity",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
  },
  {
    number: "02.",
    title: "My Portfolio of Innovation",
    description:
      "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
  },
  {
    number: "03.",
    title: "A Showcase of My Projects",
    description:
      "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
  },
];

export const serviceCards3 = [
  {
    iconClass: "fa-regular fa-code",
    title: "Ui/Ux Design",
    description:
      "Each one showcases my approach and dedication to detail, creativity Each one showcases my approach and dedication to detail, creativity",
    animationOrder: 4,
  },
  {
    iconClass: "fa-light fa-palette",
    title: "Web Development",
    description:
      "Business consulting consul us to a provide expert advice businesses Each one showcases my approach and dedication to detail, creativity",
    animationOrder: 5,
  },
  {
    iconClass: "fa-light fa-print",
    title: "Business Solutions",
    description:
      "Each one showcases my approach and dedication to detail, creativity Each one showcases my approach and dedication to detail, creativity",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-handshake",
    title: "Profit Partners",
    description:
      "Business consulting consul us to a provide expert advice businesses Each one showcases my approach and dedication to detail, creativity",
    animationOrder: 5,
  },
];
export const allServices = [
  ...services,
  ...services2,
  ...services3,
  ...services4,
];
