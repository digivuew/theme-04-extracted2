import { slugify } from "@/utlis/slugify";

export const blogData = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Essential Guide to Child Vaccination and Immunization.png",
    altText: "Child vaccination and immunization protection",
    date: "January 15, 2025",
    title: "Essential Guide to Child Vaccination and Immunization",
    description:
      "Complete vaccination guide for parents covering essential immunizations, schedules, and their importance in protecting children from preventable diseases.",
    tags: ["Child Health", "Vaccination", "Preventive Care", "Development"],
    categories: ["Child Health", "Preventive Medicine"],
    content: {
      intro: "Vaccination is one of the most important steps parents can take to protect their children from serious diseases. As a pediatrician, I've seen firsthand how vaccines save lives and prevent complications from illnesses that were once common and often fatal.",
      sections: [
        {
          title: "Why Vaccines Matter",
          text: "Vaccines work by training your child's immune system to recognize and fight specific diseases. They contain weakened or inactive parts of a particular organism that triggers an immune response. This helps the body build immunity without causing the disease itself."
        },
        {
          title: "Recommended Vaccination Schedule",
          text: "The vaccination schedule recommended by pediatric associations is based on decades of research. It's designed to provide protection when children are most vulnerable. Following this schedule ensures your child develops immunity at the right time."
        },
        {
          title: "Common Concerns Addressed",
          text: "Many parents have questions about vaccine safety. Modern vaccines are thoroughly tested and monitored. Side effects are typically mild and temporary, while the protection they provide is crucial for your child's health and the community's well-being."
        }
      ]
    }
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Managing Respiratory Disorders in Children.png",
    altText: "Child with respiratory health monitoring",
    date: "January 10, 2025",
    title: "Managing Respiratory Disorders in Children",
    tags: ["Respiratory Care", "Asthma", "Child Health"],
    categories: ["Respiratory Care", "Pediatric Care Tips"],
    description:
      "Expert advice on identifying, managing, and treating common respiratory conditions in children, including asthma, bronchitis, and seasonal allergies.",
    content: {
      intro: "Respiratory disorders are among the most common health issues affecting children. Understanding symptoms, triggers, and proper management techniques can help parents provide better care and improve their child's quality of life.",
      sections: [
        {
          title: "Common Respiratory Conditions",
          text: "Children are particularly susceptible to respiratory conditions like asthma, bronchitis, and respiratory infections. Their airways are smaller and more reactive than adults', making them more vulnerable to inflammation and obstruction."
        },
        {
          title: "Recognizing Warning Signs",
          text: "Parents should watch for signs like persistent coughing, wheezing, difficulty breathing, or rapid breathing. Early recognition and proper medical attention can prevent complications and ensure better outcomes for your child."
        },
        {
          title: "Treatment and Prevention",
          text: "Management typically involves a combination of medications, environmental controls, and lifestyle modifications. Identifying and avoiding triggers, maintaining good air quality at home, and following prescribed treatment plans are essential for effective management."
        }
      ]
    }
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/Nutrition and Growth Tips for Healthy Children.png",
    altText: "Healthy fruits and vegetables for children",
    date: "January 5, 2025",
    tags: ["Nutrition", "Child Health", "Development"],
    categories: ["Preventive Medicine", "Pediatric Care Tips"],
    title: "Nutrition and Growth Tips for Healthy Children",
    description:
      "Comprehensive nutrition guidelines for parents to support healthy growth and development in children, with practical meal planning tips and dietary recommendations.",
    content: {
      intro: "Proper nutrition during childhood lays the foundation for lifelong health. Children have unique nutritional needs that change as they grow, and meeting these needs is crucial for their physical and cognitive development.",
      sections: [
        {
          title: "Essential Nutrients for Growing Children",
          text: "Children need a balanced diet rich in proteins, carbohydrates, healthy fats, vitamins, and minerals. Each nutrient plays a specific role in growth, brain development, and immune function. Ensuring variety in your child's diet helps meet all these nutritional needs."
        },
        {
          title: "Building Healthy Eating Habits",
          text: "Establishing good eating habits early sets the stage for a lifetime of healthy choices. Offer a variety of foods, make mealtimes positive experiences, and model healthy eating behaviors. Avoid using food as a reward or punishment."
        },
        {
          title: "Addressing Picky Eating",
          text: "Picky eating is common in young children and usually temporary. Continue offering a variety of foods without pressure, involve children in meal preparation, and be patient. Repeated exposure to new foods can eventually lead to acceptance."
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

export const blogData2 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Understanding Common Childhood Infections and Prevention.png",
    altText: "Child health monitoring and infection prevention",
    author: "Dr. Vishrut Singh",
    date: "December 28, 2024",
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
      "Learn how to recognize, prevent, and manage common childhood infections. Essential information for parents about contagious diseases and protective measures.",
    content: {
      intro: "Childhood infections are a normal part of growing up, but understanding them helps parents respond appropriately. Most infections are mild and help build immunity, while others require prompt medical attention. Knowledge of prevention strategies can significantly reduce your child's risk of serious illness.",
      sections: [
        {
          title: "Common Childhood Infections",
          text: "Children are susceptible to various infections including upper respiratory infections, ear infections, strep throat, and stomach bugs. Their immune systems are still developing, making them more vulnerable than adults. Most children experience 6-8 colds per year, especially during their early years in daycare or school."
        },
        {
          title: "Prevention Strategies",
          text: "Hand washing remains the single most effective prevention method. Teach children to wash hands before meals, after using the bathroom, and after playing outside. Keep vaccinations up to date, ensure adequate sleep, provide nutritious meals, and limit exposure to sick individuals when possible."
        },
        {
          title: "When to Seek Medical Care",
          text: "Contact your pediatrician if your child has a high fever lasting more than 3 days, difficulty breathing, signs of dehydration, persistent vomiting or diarrhea, unusual lethargy, or a rash accompanied by fever. Early intervention can prevent complications and ensure proper treatment."
        }
      ]
    }
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Growth and Development Milestones in Children.png",
    altText: "Happy child demonstrating healthy growth and development",
    author: "Dr. Vishrut Singh",
    date: "December 20, 2024",
    title: "Growth and Development Milestones in Children",
    tags: ["Child Health", "Development", "Pediatric Care"],
    categories: ["Child Health"],
    description:
      "Track your child's development with this comprehensive guide to physical, cognitive, and social milestones from infancy through adolescence.",
    content: {
      intro: "Every child develops at their own pace, but developmental milestones provide important guideposts. Understanding typical development helps parents celebrate achievements and identify when additional support might be needed. Regular monitoring ensures children receive timely intervention if delays occur.",
      sections: [
        {
          title: "Physical Development Milestones",
          text: "Physical milestones include motor skills like rolling over (3-4 months), sitting independently (6-8 months), walking (12-15 months), and running (18-24 months). Fine motor skills develop from grasping objects to using utensils and eventually writing. Growth in height and weight follows predictable patterns tracked on growth charts."
        },
        {
          title: "Cognitive and Language Development",
          text: "Cognitive development involves learning, problem-solving, and language acquisition. Babies recognize familiar faces, toddlers learn cause and effect, preschoolers engage in pretend play, and school-age children develop logical thinking. Language progresses from cooing to first words (12 months) to complex sentences (3-4 years)."
        },
        {
          title: "Social and Emotional Milestones",
          text: "Social-emotional development includes bonding with caregivers, showing emotions, developing empathy, and forming friendships. Separation anxiety around 8-12 months is normal, as is the assertive 'no' phase in toddlers. Regular well-child visits allow your pediatrician to assess all developmental areas and address concerns early."
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

export const blogData3 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Allergy Testing and Treatment Options for Children.png",
    altText: "Pediatric allergy testing and treatment",
    date: "December 15, 2024",
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
      "Comprehensive overview of allergy testing methods, common allergens, and effective treatment approaches for children with allergies.",
    content: {
      intro: "Allergies affect millions of children and can significantly impact quality of life. From food allergies to environmental triggers, accurate diagnosis and appropriate management are crucial. Modern testing methods and treatment options offer effective relief for most pediatric allergy patients.",
      sections: [
        {
          title: "Types of Allergy Testing",
          text: "Skin prick tests are the most common method, providing results within 15-20 minutes for environmental and food allergens. Blood tests (IgE testing) measure antibody levels and are useful when skin testing isn't possible. Oral food challenges, conducted under medical supervision, confirm food allergies when other tests are inconclusive. Your pediatrician will recommend the most appropriate testing based on symptoms and history."
        },
        {
          title: "Common Pediatric Allergens",
          text: "Food allergens include milk, eggs, peanuts, tree nuts, soy, wheat, fish, and shellfish. Environmental allergens encompass pollen, dust mites, mold, and pet dander. Insect sting allergies and medication allergies also occur in children. Identifying specific allergens allows for targeted avoidance strategies and appropriate treatment plans."
        },
        {
          title: "Treatment and Management",
          text: "Treatment options range from allergen avoidance to medications like antihistamines and nasal sprays. Severe allergies may require epinephrine auto-injectors. Immunotherapy (allergy shots or sublingual tablets) can desensitize the immune system over time. Working with a pediatric allergist ensures comprehensive management tailored to your child's specific needs."
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

export const blogData4 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Understanding and Managing Childhood Fever.png",
    altText: "Managing childhood fever and temperature",
    author: "Dr. Vishrut Singh",
    date: "December 1, 2024",
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
      "Learn when fever is concerning, how to manage it at home, and when to seek medical attention for your child.",
    content: {
      intro: "Fever is one of the most common reasons parents contact pediatricians, yet it's often misunderstood. Fever itself isn't harmful—it's the body's natural defense mechanism against infection. Understanding when fever requires medical attention and how to keep your child comfortable helps reduce anxiety and ensures appropriate care.",
      sections: [
        {
          title: "What Constitutes a Fever",
          text: "Fever is defined as a rectal temperature of 100.4°F (38°C) or higher. Normal temperature varies by measurement method: rectal (most accurate for infants), oral, axillary (armpit), or temporal artery. Fever in infants under 3 months always requires immediate medical evaluation. The height of fever doesn't necessarily indicate illness severity—a child's behavior and other symptoms are more important indicators."
        },
        {
          title: "Managing Fever at Home",
          text: "Keep your child hydrated with frequent fluids. Dress them in light clothing and maintain a comfortable room temperature. Acetaminophen or ibuprofen can reduce fever and discomfort—follow dosing instructions carefully based on weight. Never give aspirin to children due to Reye's syndrome risk. Sponging with lukewarm water can help, but avoid cold baths which cause shivering and may increase temperature."
        },
        {
          title: "When to Call Your Pediatrician",
          text: "Seek immediate care for fever in infants under 3 months, temperatures above 104°F in any child, fever lasting more than 3 days, signs of dehydration, difficulty breathing, severe headache, stiff neck, unexplained rash, or if your child appears seriously ill regardless of temperature. Trust your parental instincts—if you're concerned, contact your pediatrician for guidance."
        }
      ]
    }
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Importance of Regular Pediatric Check-ups.png",
    altText: "Regular pediatric checkups and wellness visits",
    author: "Dr. Vishrut Singh",
    date: "November 28, 2024",
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
      "Discover why regular well-child visits are crucial for monitoring growth, development, and early detection of health issues.",
    content: {
      intro: "Well-child visits are preventive healthcare appointments that monitor your child's growth, development, and overall health. These regular check-ups provide opportunities for vaccinations, screenings, and parental guidance. Establishing a relationship with your pediatrician ensures continuity of care and early identification of potential concerns.",
      sections: [
        {
          title: "Recommended Visit Schedule",
          text: "Newborns need frequent visits: at birth, 3-5 days, 1, 2, 4, 6, and 9 months, then at 12, 15, 18, and 24 months. After age 2, annual check-ups are recommended through adolescence. Additional visits may be needed for illnesses, developmental concerns, or chronic conditions. Consistent follow-up allows your pediatrician to track patterns and identify issues early."
        },
        {
          title: "What Happens During Check-ups",
          text: "Each visit includes measurements of height, weight, and head circumference (for infants), plotted on growth charts to ensure proper development. Physical examination assesses all body systems. Developmental screening evaluates age-appropriate milestones. Vision and hearing tests identify sensory issues. Vaccinations protect against serious diseases. Your pediatrician addresses your questions and provides anticipatory guidance for upcoming developmental stages."
        },
        {
          title: "Building a Healthcare Partnership",
          text: "Well-child visits establish trust and communication between your family and healthcare provider. Bring questions about sleep, behavior, nutrition, or development. Discuss family health history and environmental factors affecting your child. Your pediatrician can provide resources, referrals, and support. These visits are investments in your child's long-term health and well-being, allowing for prevention rather than just treatment of illness."
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
export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Newborn Care Essential Tips for New Parents.png",
    altText: "Newborn baby care for first-time parents",
    date: "November 20, 2024",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Newborn Care: Essential Tips for New Parents",
    tags: ["Newborn", "Infant Care", "New Parents", "Baby Care", "Pediatric Tips"],
    categories: ["Pediatric Care Tips"],
    description: "First-time parent? Learn essential newborn care basics including feeding, sleeping, bathing, and recognizing warning signs.",
    width: 410,
    height: 291,
    content: {
      intro: "Bringing home a newborn is exciting and overwhelming. Understanding basic care needs—feeding, sleeping, bathing, and health monitoring—helps new parents feel confident. Remember that parenting is a learning process, and your pediatrician is your partner in ensuring your baby's health and your peace of mind.",
      sections: [
        {
          title: "Feeding Your Newborn",
          text: "Newborns need to eat 8-12 times per day, roughly every 2-3 hours. Breast milk or formula provides complete nutrition for the first 6 months. Watch for hunger cues like rooting, sucking motions, and fussiness. Wet diapers (6+ per day) and steady weight gain indicate adequate intake. Burp after feeding to reduce gas and spit-up. Never prop bottles—always hold your baby during feeds for safety and bonding."
        },
        {
          title: "Sleep Safety and Patterns",
          text: "Newborns sleep 14-17 hours daily in short periods. Always place babies on their backs on firm, flat surfaces free of blankets, pillows, and toys to prevent SIDS. Room-sharing without bed-sharing is safest for the first 6 months. Create a calm sleep environment with dim lights and minimal stimulation. Expect frequent night wakings for feeding—this is normal and necessary for development."
        },
        {
          title: "Recognizing Warning Signs",
          text: "Contact your pediatrician immediately for fever over 100.4°F in infants under 3 months, persistent vomiting or diarrhea, poor feeding, extreme fussiness or lethargy, yellow skin or eyes worsening after the first week, fewer than 6 wet diapers daily, or anything that concerns you. Trust your instincts—new parents often sense when something isn't right. Your pediatrician prefers unnecessary calls over missed serious conditions."
        }
      ]
    }
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Pediatric Sleep Disorders and Solutions.png",
    altText: "Child sleeping peacefully - pediatric sleep health",
    date: "November 15, 2024",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Pediatric Sleep Disorders and Solutions",
    tags: ["Sleep", "Insomnia", "Child Health", "Behavioral Health", "Sleep Hygiene"],
    categories: ["Child Health"],
    description: "Address sleep challenges in children with proven strategies for better sleep hygiene and healthy sleep patterns.",
    width: 411,
    height: 291,
    content: {
      intro: "Adequate sleep is crucial for children's physical growth, cognitive development, and emotional regulation. Many children experience sleep difficulties at some point. Understanding common sleep disorders and implementing healthy sleep habits can significantly improve your child's sleep quality and overall wellbeing.",
      sections: [
        {
          title: "Common Pediatric Sleep Problems",
          text: "Behavioral insomnia involves difficulty falling or staying asleep due to poor sleep associations or inadequate limits. Night terrors cause sudden screaming and fear without full awakening, typically in preschoolers. Sleepwalking affects 15% of children, usually resolving by adolescence. Sleep apnea causes breathing pauses during sleep, leading to poor sleep quality, snoring, and daytime fatigue. Restless leg syndrome creates uncomfortable leg sensations, interfering with sleep onset."
        },
        {
          title: "Establishing Healthy Sleep Hygiene",
          text: "Maintain consistent bedtime and wake times, even on weekends. Create a calming bedtime routine lasting 20-30 minutes with activities like bathing, reading, and cuddling. Ensure the sleep environment is cool, dark, and quiet. Avoid screens at least one hour before bed—blue light disrupts melatonin production. Provide age-appropriate sleep duration: infants need 12-16 hours, toddlers 11-14 hours, preschoolers 10-13 hours, and school-age children 9-12 hours."
        },
        {
          title: "When to Consult a Sleep Specialist",
          text: "Seek professional evaluation for persistent difficulty falling asleep despite good sleep hygiene, excessive daytime sleepiness, loud snoring with breathing pauses, unusual nighttime behaviors, or sleep problems significantly impacting daytime function or family quality of life. A pediatric sleep specialist can conduct evaluations including sleep studies to diagnose and treat underlying disorders, ensuring your child gets the restorative sleep necessary for healthy development."
        }
      ]
    }
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/Managing Chronic Conditions in Children.png",
    altText: "Managing chronic pediatric conditions with care",
    date: "November 10, 2024",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    title: "Managing Chronic Conditions in Children",
    tags: ["Chronic Illness", "Disease Management", "Child Health", "Long-term Care", "Family Support"],
    categories: ["Child Health", "Pediatric Care Tips"],
    description: "Comprehensive guide to managing chronic pediatric conditions with medical care, lifestyle adjustments, and family support.",
    width: 410,
    height: 294,
    content: {
      intro: "Chronic conditions require ongoing management and coordination of care. From diabetes to asthma to autoimmune disorders, these conditions impact not just the child but the entire family. Effective management involves medical treatment, lifestyle modifications, emotional support, and building a strong healthcare team.",
      sections: [
        {
          title: "Building Your Healthcare Team",
          text: "Chronic condition management requires coordination among multiple providers. Your pediatrician serves as the medical home, coordinating care with specialists. Depending on the condition, your team may include endocrinologists, pulmonologists, nutritionists, physical therapists, or mental health professionals. Maintain open communication among team members, keep organized medical records, and designate one person to coordinate appointments and treatments. Regular team meetings ensure everyone works toward common goals."
        },
        {
          title: "Daily Management Strategies",
          text: "Develop consistent routines for medications, treatments, and monitoring. Use pill organizers, phone reminders, and treatment logs to maintain consistency. Involve children in age-appropriate self-care to build independence and confidence. Maintain balanced nutrition, adequate sleep, and appropriate physical activity. Create emergency action plans and ensure schools, caregivers, and family members understand your child's condition and emergency protocols."
        },
        {
          title: "Supporting Emotional and Social Needs",
          text: "Chronic illness affects emotional wellbeing and social development. Encourage age-appropriate understanding of their condition. Connect with support groups for both children and parents. Address school concerns proactively with 504 plans or IEPs when needed. Maintain normal childhood experiences as much as possible—focus on abilities rather than limitations. Consider counseling if your child shows signs of anxiety, depression, or difficulty coping. Family therapy can help everyone adapt to the challenges of chronic illness management."
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

export const blogData6 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/Essential Guide to Child Vaccination and Immunization.png",
    altText: "Child vaccination and immunization protection",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    date: "January 15, 2025",
    title: "Essential Guide to Child Vaccination and Immunization",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Managing Respiratory Disorders in Children.png",
    altText: "Child with respiratory health monitoring",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    date: "January 10, 2025",
    title: "Managing Respiratory Disorders in Children",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/Nutrition and Growth Tips for Healthy Children.png",
    altText: "Healthy nutrition for children",
    author: "Dr. Vishrut Singh",
    comments: "Comments (05)",
    date: "January 5, 2025",
    title: "Nutrition and Growth Tips for Healthy Children",
    width: 410,
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
    imageSrc: "/assets/images/Child Mental Health and Emotional Development.png",
    altText: "Child mental health and emotional wellness",
    author: "Dr. Vishrut Singh",
    date: "October 20, 2024",
    title: "Child Mental Health and Emotional Development",
    tags: ["Mental Health", "Emotional Development", "Behavioral Health", "Psychology", "Wellbeing"],
    categories: ["Child Health"],
    description: "Understanding children's emotional needs and supporting healthy mental development from early childhood through adolescence.",
    width: 410,
    height: 294,
    content: {
      intro: "Mental and emotional health is as important as physical health in childhood. Children experience a wide range of emotions as they grow, learn, and navigate relationships. Understanding normal emotional development and recognizing signs of mental health concerns allows parents to provide appropriate support and seek help when needed.",
      sections: [
        {
          title: "Understanding Emotional Development",
          text: "Infants express basic emotions and form attachments. Toddlers experience intense emotions but lack regulation skills—tantrums are developmentally normal. Preschoolers develop empathy and begin understanding others' feelings. School-age children form friendships and learn emotional regulation. Adolescents navigate identity formation, increased independence, and complex social dynamics. Each stage presents unique emotional challenges. Provide age-appropriate emotional vocabulary, validate feelings, model healthy emotional expression, and teach coping strategies like deep breathing, physical activity, and talking about feelings."
        },
        {
          title: "Recognizing Mental Health Concerns",
          text: "Warning signs include persistent sadness or withdrawal lasting more than two weeks, extreme mood swings, changes in eating or sleeping patterns, declining school performance, loss of interest in activities, excessive worry or fear, frequent tantrums beyond developmental norms, self-harm or talk of suicide, and aggressive or destructive behavior. Mental health conditions like anxiety, depression, ADHD, and autism spectrum disorder can emerge in childhood. Early identification and intervention significantly improve outcomes. Trust your instincts—if something seems wrong, consult your pediatrician or a child mental health professional."
        },
        {
          title: "Supporting Emotional Wellbeing",
          text: "Create a supportive home environment with consistent routines, clear expectations, and unconditional love. Spend quality one-on-one time with your child. Encourage healthy friendships and social connections. Promote physical activity, adequate sleep, and balanced nutrition—all support mental health. Limit screen time and monitor content. Talk openly about feelings and mental health to reduce stigma. Model healthy coping strategies. If professional help is needed, options include counseling, therapy, and sometimes medication. Work collaboratively with mental health providers to support your child's emotional development and overall wellbeing."
        }
      ]
    }
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/Common Skin Conditions in Children.png",
    altText: "Pediatric dermatology and skin health",
    author: "Dr. Vishrut Singh",
    date: "October 15, 2024",
    title: "Pediatric Dermatology: Common Skin Conditions in Children",
    tags: ["Dermatology", "Skin Conditions", "Eczema", "Rashes", "Skin Care"],
    categories: ["Child Health"],
    description: "Recognize and treat common childhood skin conditions including eczema, rashes, and infections with expert guidance.",
    width: 410,
    height: 294,
    content: {
      intro: "Skin conditions are among the most common pediatric health concerns. From diaper rash in infants to acne in teenagers, various dermatological issues affect children at different ages. Understanding common conditions, proper skin care, and when to seek medical attention helps parents effectively manage their child's skin health.",
      sections: [
        {
          title: "Eczema and Atopic Dermatitis",
          text: "Atopic dermatitis (eczema) causes dry, itchy, inflamed skin, often appearing on face, scalp, and extremities. It typically begins in infancy and may improve with age. Management includes gentle skin care with fragrance-free products, frequent moisturization (apply within 3 minutes after bathing), avoiding triggers like harsh soaps and certain fabrics, and using prescribed topical corticosteroids during flares. Severe cases may require additional treatments. Keep fingernails short to minimize damage from scratching. Infection can complicate eczema—watch for oozing, crusting, or worsening despite treatment."
        },
        {
          title: "Common Rashes and Infections",
          text: "Diaper rash responds to frequent diaper changes, gentle cleansing, barrier creams, and air exposure. Impetigo causes honey-colored crusty sores requiring antibiotic treatment. Ringworm (fungal infection) creates circular, scaly patches treated with antifungal cream. Molluscum contagiosum causes small, firm bumps that usually resolve spontaneously. Fifth disease (slapped cheek appearance) and roseola (fever followed by rash) are viral and self-limited. Hives result from allergic reactions—identify and avoid triggers, use antihistamines for relief, and seek emergency care if breathing difficulty develops."
        },
        {
          title: "Skin Care Best Practices",
          text: "Bathe children in lukewarm water with mild, fragrance-free cleansers. Moisturize daily, especially after bathing. Use broad-spectrum sunscreen (SPF 30+) on children over 6 months; protect infants with clothing and shade. Check for ticks after outdoor activities. Teach hand washing to prevent infections. For adolescent acne, use gentle cleansing, avoid picking, and consider benzoyl peroxide or salicylic acid products. Consult your pediatrician or dermatologist for persistent, worsening, or concerning skin conditions—early treatment prevents complications and scarring."
        }
      ]
    }
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/Digestive Health Issues in Children and Management.png",
    altText: "Child digestive health and nutrition",
    author: "Dr. Vishrut Singh",
    date: "October 10, 2024",
    title: "Digestive Health Issues in Children and Management",
    tags: ["Digestive Health", "Constipation", "Diarrhea", "Stomach Problems", "Gastroenterology"],
    categories: ["Child Health"],
    description: "Address common digestive problems in children including constipation, diarrhea, and food sensitivities.",
    width: 410,
    height: 294,
    content: {
      intro: "Digestive issues frequently occur in children, causing discomfort and concern for parents. From infant reflux to school-age constipation, understanding common gastrointestinal problems and their management helps parents provide appropriate care. Most digestive issues are benign and resolve with simple interventions, but some require medical evaluation.",
      sections: [
        {
          title: "Constipation Management",
          text: "Constipation involves infrequent, hard, or painful bowel movements. Causes include inadequate fiber or fluid intake, withholding due to pain or toilet training struggles, and certain medications. Treatment includes increasing fiber through fruits, vegetables, and whole grains; ensuring adequate fluid intake; encouraging regular toilet time after meals; increasing physical activity; and sometimes using stool softeners or laxatives as recommended by your pediatrician. Address toilet training fears gently. Most childhood constipation resolves with dietary and behavioral changes. Persistent or severe constipation requires medical evaluation."
        },
        {
          title: "Acute Gastroenteritis and Diarrhea",
          text: "Viral gastroenteritis ('stomach flu') causes vomiting, diarrhea, and cramping, typically lasting 1-3 days. Treatment focuses on preventing dehydration with oral rehydration solutions, offering small frequent sips. Continue breastfeeding infants; formula-fed babies can continue regular formula. Older children can eat bland foods when tolerated (bananas, rice, applesauce, toast). Avoid sugary drinks and juice which worsen diarrhea. Signs of dehydration include decreased urination, dry mouth, no tears, sunken eyes, or lethargy—seek medical care if these develop. Chronic diarrhea lasting more than 2 weeks requires evaluation for conditions like food intolerances, infections, or inflammatory bowel disease."
        },
        {
          title: "Food Sensitivities and Allergies",
          text: "Food intolerances (like lactose intolerance) cause digestive symptoms including bloating, gas, and diarrhea but aren't life-threatening. Food allergies trigger immune responses causing hives, swelling, vomiting, diarrhea, or in severe cases, anaphylaxis. Common food allergens include milk, eggs, peanuts, tree nuts, soy, wheat, fish, and shellfish. If you suspect food allergy or intolerance, keep a detailed food and symptom diary and consult your pediatrician. Allergy testing confirms suspected allergies. Management involves avoiding trigger foods and, for allergies, carrying epinephrine if prescribed. Work with a dietitian to ensure nutritional adequacy when eliminating major food groups."
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

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/Antibiotic Resistance.png",
    author: "Dr. Vishrut Singh",
    category: "Pediatric Care Tips",
    categories: ["Pediatric Care Tips"],
    tags: ["Antibiotics", "Medication Safety", "Infection Treatment", "Drug Resistance", "Proper Use"],
    date: "October 5, 2024",
    title: "Antibiotic Resistance: What Parents Should Know",
    description: "Learn about antibiotic resistance, proper antibiotic use, and when medications are truly necessary for your child.",
    content: {
      intro: "Antibiotic resistance is a growing global health threat that affects children and adults alike. Overuse and misuse of antibiotics contribute to bacteria evolving resistance, making infections harder to treat. Understanding when antibiotics are necessary, how to use them properly, and why completing courses matters helps protect your child and preserves these life-saving medications for future generations.",
      sections: [
        {
          title: "When Antibiotics Are Needed",
          text: "Antibiotics treat bacterial infections like strep throat, urinary tract infections, bacterial pneumonia, and certain ear infections. They are ineffective against viral infections including colds, flu, most sore throats, bronchitis, and many sinus and ear infections. Your pediatrician determines if antibiotics are necessary based on symptoms, examination, and sometimes tests. Never pressure your doctor for antibiotics—they prescribe them when medically indicated. Using antibiotics for viral infections provides no benefit, causes side effects, and contributes to resistance."
        },
        {
          title: "Proper Antibiotic Use",
          text: "Always complete the full prescribed course, even if your child feels better before finishing. Stopping early allows surviving bacteria to multiply and potentially become resistant. Give antibiotics at prescribed intervals to maintain effective drug levels. Never save leftover antibiotics or share them with others. Don't use antibiotics prescribed for previous illnesses or other family members—each infection requires specific treatment. If your child doesn't improve within 48-72 hours, contact your pediatrician. Report side effects like rash, diarrhea, or allergic reactions immediately."
        },
        {
          title: "Preventing Infections Naturally",
          text: "Reduce infection risk through preventive measures: ensure up-to-date vaccinations, practice good hand hygiene, avoid close contact with sick individuals, maintain adequate sleep and nutrition, and keep children with contagious illnesses home from school. These strategies reduce illness frequency, decreasing antibiotic needs. When infections do occur, supportive care including rest, fluids, and symptom management often suffices for viral illnesses. Work with your pediatrician as a partner in appropriate antibiotic use—protecting your child while combating antibiotic resistance benefits everyone."
        }
      ]
    }
  },
  {
    id: 2,
    imageSrc: "/assets/images/Understanding Pediatric Diabetes and Care.png",
    author: "Dr. Vishrut Singh",
    category: "Child Health",
    categories: ["Child Health"],
    tags: ["Diabetes", "Chronic Disease", "Blood Sugar", "Insulin", "Disease Management"],
    date: "September 30, 2024",
    title: "Understanding Pediatric Diabetes and Care",
    description: "Comprehensive guide to managing diabetes in children, including monitoring, treatment, and lifestyle adjustments.",
    content: {
      intro: "Diabetes diagnosis in a child can feel overwhelming, but with proper education and management, children with diabetes lead full, active lives. Understanding the condition, treatment options, monitoring techniques, and lifestyle modifications empowers families to effectively manage this chronic disease. Partnership with your healthcare team ensures optimal blood sugar control and prevents complications.",
      sections: [
        {
          title: "Types of Pediatric Diabetes",
          text: "Type 1 diabetes results from autoimmune destruction of insulin-producing cells, requiring lifelong insulin therapy. It typically develops in childhood or adolescence, though it can occur at any age. Type 2 diabetes, increasingly common in children, involves insulin resistance and is associated with obesity and sedentary lifestyle. Both types require blood sugar monitoring and management. Type 1 cannot be prevented, while Type 2 is often preventable through healthy lifestyle. Treatment differs significantly between types—your healthcare team tailors management to your child's specific diagnosis and needs."
        },
        {
          title: "Daily Management and Monitoring",
          text: "Blood sugar monitoring guides treatment decisions. Frequency varies but often includes testing before meals, at bedtime, and when symptoms occur. Continuous glucose monitors provide real-time data and alerts. Type 1 diabetes requires insulin through injections or insulin pumps, with dosing based on carbohydrate intake, blood sugar levels, and activity. Type 2 may be managed with diet and exercise initially, progressing to oral medications and possibly insulin. Learn to recognize and treat high blood sugar (hyperglycemia) and low blood sugar (hypoglycemia)—both can be dangerous if untreated."
        },
        {
          title: "Living Well with Diabetes",
          text: "Balanced nutrition focuses on consistent carbohydrate intake, choosing complex carbs, including protein and healthy fats, and timing meals appropriately. Regular physical activity improves insulin sensitivity and blood sugar control—adjust insulin and snacks as needed for exercise. Address emotional needs—diabetes management is demanding, and children may feel different from peers. Connect with diabetes support groups and camps. Work closely with your diabetes care team including endocrinologist, diabetes educator, dietitian, and mental health professional. With proper management, children with diabetes thrive academically, socially, and physically."
        }
      ]
    }
  },
  {
    id: 3,
    imageSrc: "/assets/images/Injury Prevention.png",
    author: "Dr. Vishrut Singh",
    category: "Preventive Medicine",
    categories: ["Preventive Medicine"],
    tags: ["Sports Medicine", "Injury Prevention", "Athletic Health", "Exercise Safety", "Youth Sports"],
    date: "September 25, 2024",
    title: "Sports Medicine for Young Athletes: Injury Prevention",
    description: "Prevent sports injuries in children with proper training, equipment, and recognition of warning signs.",
    content: {
      intro: "Youth sports participation offers numerous benefits including physical fitness, social development, and skill building. However, sports-related injuries are common in children and adolescents. Understanding proper training techniques, using appropriate equipment, recognizing warning signs, and allowing adequate recovery helps young athletes stay healthy while enjoying sports participation.",
      sections: [
        {
          title: "Common Youth Sports Injuries",
          text: "Acute injuries include sprains, strains, fractures, and concussions resulting from falls, collisions, or sudden movements. Overuse injuries develop gradually from repetitive stress without adequate recovery—examples include stress fractures, tendinitis, and growth plate injuries. Growth spurts increase injury risk due to temporary strength and flexibility imbalances. Sport-specific injuries occur: throwing athletes develop shoulder problems, runners experience shin splints, gymnasts risk wrist injuries. Concussions require special attention—any suspected head injury warrants immediate removal from play and medical evaluation before return."
        },
        {
          title: "Prevention Strategies",
          text: "Proper conditioning through sport-specific training, strength building, flexibility exercises, and cardiovascular fitness reduces injury risk. Adequate warm-up and cool-down are essential. Use properly fitted, sport-appropriate protective equipment including helmets, pads, mouthguards, and supportive footwear. Teach and enforce proper technique—coaches should prioritize safety over performance. Vary activities to avoid overuse—single-sport specialization increases injury risk, especially before adolescence. Ensure adequate rest including off-seasons and rest days. Maintain proper hydration and nutrition to support athletic demands."
        },
        {
          title: "Managing and Recovering from Injuries",
          text: "Minor injuries respond to RICE (Rest, Ice, Compression, Elevation). Pain is a warning sign—never encourage playing through pain. Seek medical evaluation for significant pain, swelling, inability to bear weight, suspected fractures, or concussion symptoms. Follow treatment plans and rehabilitation protocols completely before returning to sports. Gradual return-to-play progressions prevent re-injury. Sports medicine physicians, athletic trainers, and physical therapists specialize in youth athletes. Remember: developing lifelong healthy sports habits is more important than winning any single game. Proper injury prevention and management ensure children enjoy sports safely throughout their youth."
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
  "Newborn Care",
  "Immunization",
  "Growth Monitoring",
  "Fever Management",
  "Skin Conditions",
  "Digestive Health",
  "Sleep Disorders",
  "Behavioral Health",
  "Emergency Care",
  "Preventive Care",
];
