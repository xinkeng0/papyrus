<script setup lang="ts">
const props = defineProps<{
  editor: Editor;
}>();
import { Editor } from "@tiptap/core";
import { createToolbars } from "./EditorToolbarConfig";
const toolbars = createToolbars(props.editor);
</script>

<template>
  <div class="papyrus-editor-toolbar">
    <div v-for="toolbar in toolbars" :key="toolbar.name">
      <button
        class="papyrus-editor-toolbar-btn"
        :class="[{ checked: toolbar.checked() }]"
        :title="toolbar.title"
      >
        <component
          :is="toolbar.compoent"
          v-bind="{ editor }"
          @click="toolbar.onClick"
        />
      </button>
    </div>
  </div>
</template>
