"use client";

import { motion } from "framer-motion";

export default function WassieHero(): JSX.Element {
  return (
    <section id="hero" className="text-center py-20">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-[150px]"
        aria-hidden
      >
        🐸
      </motion.div>

      <h1 className="text-6xl font-black">WASSIE WORLD</h1>

      <p className="text-xl text-gray-400 mt-5">Your trades. Your pet. Your world.</p>

      <p className="mt-3 text-wassie">Built on Robinhood Chain</p>

      <button
        type="button"
        className="mt-10 bg-wassie text-black px-10 py-4 rounded-2xl font-bold text-xl"
      >
        ADOPT WASSIE
      </button>
    </section>
  );
}
