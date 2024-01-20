import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";
// import fs from "fs";
// import postcss from "postcss";
// import path from "path";

// const preflightSelector = ".papyrus-root";

export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
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
} satisfies Config;
