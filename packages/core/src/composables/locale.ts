//copy from https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/locale.ts

// Utilities
import { inject, provide } from "vue";
import { createPapyrusAdapter } from "@/locale/adapters/papyrus";

// Types
import type { InjectionKey, Ref } from "vue";

export interface LocaleMessages {
  [key: string]: LocaleMessages | string;
}

export interface LocaleOptions {
  messages?: LocaleMessages;
  locale?: string;
  fallback?: string;
  adapter?: LocaleInstance;
}

export interface LocaleInstance {
  name: string;
  messages: Ref<LocaleMessages>;
  current: Ref<string>;
  fallback: Ref<string>;
  t: (key: string, ...params: unknown[]) => string;
  n: (value: number) => string;
  provide: (props: LocaleOptions) => LocaleInstance;
}

export const LocaleSymbol: InjectionKey<LocaleInstance> =
  Symbol.for("papyrus:locale");

function isLocaleInstance(obj: LocaleInstance): obj is LocaleInstance {
  return obj.name != null;
}

export function createLocale(options?: LocaleOptions) {
  const i18n =
    options?.adapter && isLocaleInstance(options?.adapter)
      ? options?.adapter
      : createPapyrusAdapter(options);

  return { ...i18n };
}

export function useLocale() {
  const locale = inject(LocaleSymbol);

  if (!locale)
    throw new Error("[Papyrus] Could not find injected locale instance");

  return locale;
}

export function provideLocale(props: LocaleOptions) {
  const locale = inject(LocaleSymbol);

  if (!locale)
    throw new Error("[Papyrus] Could not find injected locale instance");

  const i18n = locale.provide(props);

  const data = { ...i18n };

  provide(LocaleSymbol, data);

  return data;
}
