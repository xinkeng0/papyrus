import { VueRenderer } from "@tiptap/vue-3";
import CommandsView from "./CommandsView.vue";
import tippy, { Instance, Props } from "tippy.js";
import { SuggestionOptions } from "@tiptap/suggestion";
import { Component } from "vue";

export type Item = {
  /**
   * Command render
   */
  component: Component;

  /**
   * Command group
   */
  group: string;

  /**
   * Command unique id
   */
  value: string;

  /**
   * Command to run
   */
  command: SuggestionOptions["command"];
};

// export const suggestion = [];
export const suggestion = (items: Item[]) => {
  return {
    items: ({ query }: { query: string }) => {
      return items
        .filter((item) =>
          item.value.toLowerCase().startsWith(query.toLowerCase()),
        )
        .slice(0, 10);
    },

    render: () => {
      let component: VueRenderer;
      let popup: Instance<Props>[];

      return {
        onStart: (props: Record<string, any>) => {
          component = new VueRenderer(CommandsView, {
            props,
            editor: props.editor,
          });

          if (!props.clientRect) {
            return;
          }
          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => props.editor.options.element,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          });
        },

        onUpdate(props) {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          });
        },

        onKeyDown(props) {
          if (props.event.key === "Escape") {
            popup[0].hide();

            return true;
          }

          return component.ref?.onKeyDown(props.event);
        },

        onExit() {
          popup[0].destroy();
          component.destroy();
        },
      };
    },
  };
};
