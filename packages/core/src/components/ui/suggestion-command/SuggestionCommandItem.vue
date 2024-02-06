<script setup lang="ts">
import { cn } from "@/lib/shadcnUtils";
import { injectSuggestionCommandRootContext } from "./SuggestionCommand.vue";
import { computed } from "vue";
import { AcceptableValue } from "./SuggestionCommand.vue";

const props = defineProps<{
  value: AcceptableValue;
}>();
const emits = defineEmits({});

const rootContext = injectSuggestionCommandRootContext();

const isSelected = computed(
  () => rootContext?.selectedValue.value === props.value,
);

const handlePointerMove = (event: PointerEvent) => {
  if (event.defaultPrevented) return;

  rootContext?.onSelectedValueChange(props.value);
};
</script>

<template>
  <div
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        $attrs.class ?? '',
      )
    "
    :data-highlighted="isSelected ? '' : undefined"
    :aria-selected="isSelected"
    :data-state="isSelected ? 'checked' : 'unchecked'"
    @pointermove="handlePointerMove"
    @click="rootContext?.onSelected"
    @select.prevent
  >
    <slot />
  </div>
</template>
@/lib/shadcn-utils@/lib/shadcnUtils