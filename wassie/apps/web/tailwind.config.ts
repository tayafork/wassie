import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}",
    "./app/data/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        wassie: "#39ff88",
      },
    },
  },
};

export default config;
