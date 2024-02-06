import type { App } from "vue";
import "./style.css";
import Editor from "./core/Editor.vue";
import {
  LocaleSymbol,
  createLocale,
  type LocaleOptions,
} from "./composables/locale";

export interface PapyrusOptions {
  locale?: LocaleOptions;
}

export function createPapyrus(options: PapyrusOptions) {
  const locale = createLocale(options.locale);
  const install = (app: App) => {
    app.provide(LocaleSymbol, locale);
    app.component("PapyrusEditor", Editor);
  };
  return {
    install,
  };
}

export * from "./core";
export * from "./extension";
export * from "./composables";
