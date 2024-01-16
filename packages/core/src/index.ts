import type { App } from "vue";
import "./style.css";
import Editor from "./core/Editor.vue";

export default {
  install(app: App) {
    app.component("PapyrusEditor", Editor);
  },
};

export * from "./core";
