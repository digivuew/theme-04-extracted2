export const pricingPlans = [
  {
    title: "Initial Consultation",
    price: "AED 250",
    per: "Per Visit",
    features: [
      "Comprehensive Physical Examination",
      "Detailed Medical & Family History",
      "Growth & Development Assessment",
      "Personalized Treatment Plan",
      "Parent Consultation & Guidance",
    ],
    buttonStyle: "btn-border",
    animationOrder: 1,
  },
  {
    title: "Follow-up Visit",
    price: "AED 200",
    per: "Per Visit",
    features: [
      "Treatment Progress Review",
      "Medication Adjustment & Monitoring",
      "Ongoing Care Management",
      "Health Status Evaluation",
      "Family Support & Education",
    ],
    buttonStyle: "", // no border for 'active' one
    active: true,
    animationOrder: 2,
  },
  {
    title: "Vaccination Package",
    price: "AED 150+",
    per: "Per Session",
    features: [
      "DHA Schedule Immunizations",
      "Vaccine Administration & Safety",
      "Post-Vaccination Monitoring",
      "Health Record Documentation",
      "Next Visit Planning",
    ],
    buttonStyle: "btn-border",
    animationOrder: 3,
  },
];

export const pricingPlans2 = [
  {
    title: "Starter",
    icon: "/assets/images/pricing/pricing-logo-1.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "Free Platform Access",
      "24/7 Customer Support",
    ],
    price: "$ 5.00",
    active: false,
    borderedButton: true,
  },
  {
    title: "Premium",
    icon: "/assets/images/pricing/pricing-logo-2.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
      "24/7 Customer Support",
    ],
    price: "$ 230.00",
    active: true,
    borderedButton: false,
  },
  {
    title: "Basic",
    icon: "/assets/images/pricing/pricing-logo-3.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "Digital Marketing",
      "24/7 Customer Support",
    ],
    price: "$ 45.00",
    active: false,
    borderedButton: true,
  },
];
