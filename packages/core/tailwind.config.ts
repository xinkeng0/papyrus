import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";
// import fs from "fs";
// import postcss from "postcss";
// import path from "path";

// const preflightSelector = ".papyrus-root";
import animate from "tailwindcss-animate";

export default {
  darkMode: "class",
  safelist: ["dark"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: ".papyrus-root",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      // override default borderColor to fix my preflight.css
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.border"),
      }),
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    animate,
    // https://github.com/tailwindlabs/tailwindcss/discussions/10332#discussioncomment-4698289
    // plugin(function ({ addBase, addComponents, addUtilities }) {
    //   const preflightStyles = postcss.parse(
    //     fs.readFileSync(
    //       path.resolve("./node_modules/tailwindcss/lib/css/preflight.css"),
    //       "utf8",
    //     ),
    //   );
    //   // Scope the selectors to specific components
    //   preflightStyles.walkRules((rule) => {
    //     rule.selectors = rule.selectors.map((s) => `papyrus-root ${s}`);
    //     // rule.selector = rule.selectors.join(",\n");
    //   });
    //   // not working,because auto delete
    //   addBase(preflightStyles.nodes);
    // }),
  ],
};
