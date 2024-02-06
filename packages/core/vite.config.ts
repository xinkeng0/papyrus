import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // https://github.com/vitejs/vite/issues/1579
      // https://github.com/vitejs/vite/discussions/1736
      //
      entry: {
        index: "src/index.ts",
        "locale/index": "src/locale/index.ts",
        "@tiptap/vue3": "src/@tiptap-vue3.ts",
        "@tiptap/pm/model": "src/@tiptap-pm-model.ts",
        "@tiptap/pm/state": "src/@tiptap-pm-state.ts",
      },
      name: "Papyrus",
      formats: ["es", "cjs"],
      // the proper extensions will be added
      fileName: (format, name) => {
        switch (format) {
          case "es":
            return `${name}.js`;
          case "cjs":
            return `${name}.cjs`;
        }
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        exports: "named",
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
