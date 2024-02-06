<script lang="ts">
import { computed, inject, provide } from "vue";
import type { InjectionKey, Ref } from "vue";

export type AcceptableValue = string | number | boolean | object;
type ContextType<T> = {
  selectedValue: Ref<T>;
  onSelectedValueChange: (val: T) => void;
  onSelected: (val: T) => void;
};
const SuggestionCommandKey = Symbol() as InjectionKey<
  ContextType<AcceptableValue>
>;
export const [
  providerSuggestionCommandRootContext,
  injectSuggestionCommandRootContext,
] = [
  (value: ContextType<AcceptableValue>) => {
    return provide(SuggestionCommandKey, value);
  },
  () => {
    return inject(SuggestionCommandKey);
  },
];
</script>
<script setup lang="ts">
const props = defineProps<{
  items: Array<any>;
}>();

const emits = defineEmits<{
  suggestionSelected: [value: AcceptableValue];
}>();

// const  = ref<number>(0);
const selectedValue = defineModel<AcceptableValue>("selectedValue", {
  required: true,
});
const activeIndex = computed(() =>
  props.items.findIndex((i) => i.value == selectedValue.value),
);
const onInputNavigation = (key: string) => {
  const index = activeIndex.value;
  if (key == "ArrowUp") {
    if (index == 0) return;
    selectedValue.value = props.items[index - 1].value;
  }
  if (key == "ArrowDown") {
    if (index == props.items.length - 1) return;
    selectedValue.value = props.items[index + 1].value;
  }
};

providerSuggestionCommandRootContext({
  selectedValue: selectedValue,
  onSelectedValueChange: (val: AcceptableValue) => (selectedValue.value = val),
  onSelected: (val: AcceptableValue) => emits("suggestionSelected", val),
});

defineExpose({
  onInputNavigation,
});
</script>
<template>
  <div class="suggestion-command-root">
    <slot />
  </div>
</template>
