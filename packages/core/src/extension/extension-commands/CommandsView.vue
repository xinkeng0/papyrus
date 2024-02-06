<script setup lang="ts">
import { ref } from "vue";
import { Separator } from "radix-vue";
import { SuggestionCommand } from "@/components/ui/suggestion-command";
import { watch } from "vue";
import { computed } from "vue";
import { Item } from "./Suggestion";

const props = defineProps<{
  query: string;
  items: Item[];
  command: Function;
}>();

const suggestionCommandRef = ref<InstanceType<typeof SuggestionCommand>>();
const selectedValue = ref("");

// debug
watch(selectedValue, () => console.log(selectedValue.value));

const groupedItem = computed(() => {
  return props.items.reduce(
    (acc: { [key: string]: Array<Item> }, item) => ({
      ...acc,
      [item.group || ""]: [...(acc[item.group || ""] ?? []), item],
    }),
    {},
  );
});

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    suggestionCommandRef.value?.onInputNavigation(event.key);
    return true;
  }

  if (event.key === "Enter") {
    handleEnter();
    return true;
  }
  return false;
};

const handleEnter = () => {
  const item = props.items.find((t) => t.value == selectedValue.value);

  if (item) {
    props.command(item);
  }
  return true;
};

defineExpose({
  onKeyDown,
});
</script>
<template>
  <div>
    <SuggestionCommand
      ref="suggestionCommandRef"
      v-model:selectedValue="selectedValue"
      class="rounded-lg border shadow-md max-w-lg min-w-72"
      :items="$props.items"
      @suggestion-selected="handleEnter"
    >
      <div v-if="items.length > 0" class="command-list">
        <SuggestionCommandGroup
          v-for="(value, key, index) in groupedItem"
          :key="index"
          class="command-group"
          :heading="key as string"
        >
          <div class="suggestion-command-group-content">
            <SuggestionCommandItem
              v-for="(item, _index) in value"
              :key="_index"
              class="command-item"
              :value="item.value"
            >
              <component :is="item.component" />
            </SuggestionCommandItem>
          </div>
        </SuggestionCommandGroup>
        <Separator />
      </div>
      <div v-else>No results found.</div>
    </SuggestionCommand>
  </div>
</template>
