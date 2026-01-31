export const pricingPlans = [
  {
    title: "Initial Consultation",
    price: "AED 250",
    per: "Per Visit",
    features: [
      "Complete Health Assessment",
      "Detailed Medical History",
      "Treatment Plan Discussion",
    ],
    buttonStyle: "btn-border",
    animationOrder: 1,
  },
  {
    title: "Follow-up Visit",
    price: "AED 200",
    per: "Per Visit",
    features: [
      "Progress Review",
      "Medication Adjustment",
      "Ongoing Care Management",
      "Treatment Monitoring",
      "Health Guidance",
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
      "Immunization Schedule",
      "Vaccine Administration",
      "Health Record Update",
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
