<script lang="ts" setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import EditorToolbar from "./EditorToolbar.vue";
// import EditorBubbleMenu from "./EditorBubbleMenu.vue";

const props = defineProps<{
  editor: Editor;
}>();
</script>
<template>
  <div v-if="props.editor" class="papyrus-root">
    <div class="papyrus-editor">
      <editor-toolbar :editor="editor" />
      <!-- <editor-bubble-menu :editor="editor" /> -->
      <editor-content :editor="editor" class="papyrus-editor-content" />
    </div>
  </div>
</template>
@/composables/locale
