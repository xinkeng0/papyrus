<script setup lang="ts">
import type { ComboboxGroupProps } from "radix-vue";
import { cn } from "@/lib/shadcnUtils";

const props = defineProps<
  ComboboxGroupProps & {
    heading?: string;
  }
>();
</script>

<template>
  <div
    v-bind="props"
    :class="cn('overflow-hidden p-1 text-foreground', $attrs.class ?? '')"
  >
    <div
      v-if="heading"
      class="px-2 py-1.5 text-xs font-medium text-muted-foreground"
    >
      {{ heading }}
    </div>
    <slot />
  </div>
</template>
@/lib/shadcn-utils@/lib/shadcnUtils