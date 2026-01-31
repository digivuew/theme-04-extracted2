export const menuItems = [
  { label: "Home", href: "/", isLink: true },
  { label: "About", href: "/about-white", isLink: true },
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Service", href: "/service-white" },
      {
        label: "Service Details",
        href: "/service-details-white/success-architects",
      },
    ],
  },
  {
    label: "Blog",
    href: "#",
    hasDropdown: true,
    submenu: [
      { label: "Blog Classic", href: "/blog-white" },
      {
        label: "Blog Details",
        href: "/blog-details-white/lets-bring-your-ideas-to-life-contact-me-and-lets",
      },
    ],
  },
  { label: "Contact", href: "/contact-white", isLink: true },
];

// Same as menuItems since we only have white/light theme
export const menuItemsLight = menuItems;

// Demo data removed - unused demo pages
export const demoData = [];

export const whiteDemoData = [];
