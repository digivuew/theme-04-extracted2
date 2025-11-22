import React from "react";
import Demomodal from "../modals/Demomodal";
import Chat from "./Chat";
import ScrollTop from "./ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";

export default function CommonComponents() {
  return (
    <>
      <Demomodal />
      <Chat />
      <ScrollTop />
      <Sidebar />
      <MobileMenu />
    </>
  );
}
