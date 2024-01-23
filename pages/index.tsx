import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Testimonials from "@/Components/Testimonials";
import Blogs from "@/Components/Blogs";

function HomePage() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          {/* About */}
          <About />
          {/* Service */}
          <Services />
          {/* Skill */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Testimonials / */}
          <Testimonials />
          {/* Blogs */}
          <Blogs />
          {/* Footer */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
