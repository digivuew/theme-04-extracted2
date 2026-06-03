import "../public/assets/scss/main.scss";
// import "odometer/themes/odometer-theme-default.css"; // Disabled - incompatible with Next.js 16
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import FloatingAppointmentButton from "@/components/common/FloatingAppointmentButton";
import Script from 'next/script';
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title:
    "Theme04 Light - Modern Portfolio | Professional Web Solutions",
  description:
    "Theme04 Light is a modern portfolio template featuring clean design, professional layouts, and comprehensive sections for showcasing your work and skills.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
          <Script
          src="/assets/js/smooth.js"
          strategy="beforeInteractive"
        />
        <LayoutWrapper>
          <ToastContainer
            position="top-right"
            // autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
          <FloatingAppointmentButton />
        </LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
