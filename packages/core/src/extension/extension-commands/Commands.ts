import { Extension } from "@tiptap/core";
import { PluginKey } from "@tiptap/pm/state";
import Suggestion from "@tiptap/suggestion";

export const PapyrusCommandsKey = new PluginKey("papyrusCommands");

export const PapyrusCommands = Extension.create({
  name: "PapyrusCommands",

  addOptions() {
    return {
      suggestion: {
        char: "/",
        pluginKey: PapyrusCommandsKey,
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});
