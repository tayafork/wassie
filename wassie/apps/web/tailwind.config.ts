import type {Config} from "tailwindcss";


const config:Config={

content:[

"./app/**/*.{ts,tsx}",

"./components/**/*.{ts,tsx}"

],

theme:{


extend:{


colors:{


wassie:

"#39ff88"


}


}


}


}

export default config;
