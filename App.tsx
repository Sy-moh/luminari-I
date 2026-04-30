/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import React, { useState, useEffect, useRef, ReactNode } from 'react';

// --- CONFIG ---
const FUNDRAISING_URL =
  "https://fundraising.fracturedatlas.org/the-luminaria-imagineerium/general_support";

// --- Animation Wrapper ---
const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.8,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- TOP BANNER ---
const TopBanner = () => (
  <div className="bg-black py-3 text-center text-white text-sm">
    🔥 May 4–8: Help us win $1,000 →
    <a
      href={FUNDRAISING_URL}
      target="_blank"
      className="ml-2 underline text-orange-400"
    >
      Support Us
    </a>
  </div>
);

// --- NAVBAR ---
const Navbar = () => {
  return (
    <nav className="py-5 px-6 flex justify-between items-center bg-black/80 backdrop-blur">
      <div className="flex items-center gap-2">
        <Sparkles className="text-white" />
        <span className="text-white font-bold">Luminaria</span>
      </div>

      <div className="hidden md:flex gap-6 text-white/70">
        <a href="#hero">Home</a>
        <a href="#problem">Vision</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

// --- HERO ---
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          You carry a vision of a better world.
        </h1>

        <p className="text-white/80 mb-8">
          Luminaria Imagineerium turns imagination into action.
        </p>

        <a
          href={FUNDRAISING_URL}
          className="bg-orange-500 px-6 py-3 rounded-xl font-bold"
        >
          Become a Supporter
        </a>
      </div>
    </section>
  );
};

// --- PROBLEM SECTION ---
const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <FadeIn>
          <img
            src="/images/vision_puzzle.png"
            className="rounded-xl w-full"
            alt="Vision Puzzle"
          />
        </FadeIn>

        <FadeIn direction="right">
          <h2 className="text-4xl font-bold mb-6">
            We can't build what we can't imagine.
          </h2>

          <p className="text-white/70 leading-relaxed">
            Many visions of a better world never become real because they have nowhere to grow.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};

// --- SUPPORT SECTION ---
const SupportSection = () => {
  const items = [
    {
      title: "Gallery of Futures",
      description: "A space for visions of a better world.",
      image: "/images/gallery.png"
    },
    {
      title: "Vision Hub",
      description: "Connect and collaborate globally.",
      image: "/images/hub.png"
    },
    {
      title: "Bridge to Reality",
      description: "Turn ideas into action.",
      image: "/images/bridge.png"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          What your support builds
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i}>
              <img
                src={item.image}
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-white/60">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => (
  <footer id="contact" className="py-20 text-center text-white/60 bg-black">
    <p>© Luminaria Imagineerium</p>
  </footer>
);

// --- APP ---
export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <TopBanner />
      <Navbar />
      <Hero />
      <ProblemSection />
      <SupportSection />
      <Footer />
    </div>
  );
}
