import { defineComponent } from "vue";
import type { Item } from "../extension-commands";
import { useLocale } from "@/composables";

export const createItems = (): Item[] => [
  {
    component: <span>"H1"</span>,
    group: "",
    value: "H1",
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 1 })
        .run();
    },
  },
  {
    component: <span>"H2"</span>,
    group: "",
    value: "H2",
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 2 })
        .run();
    },
  },
  {
    component: <span>"bold"</span>,
    group: "",
    value: "bold",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setMark("bold").run();
    },
  },
  {
    component: <span>"italic"</span>,
    group: "",
    value: "italic",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setMark("italic").run();
    },
  },
  {
    component: <span>"italic"</span>,
    group: "block",
    value: "italic2",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setMark("italic").run();
    },
  },
  {
    component: <div style="width:200px;">"italic"</div>,
    group: "block",
    value: "italic3",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setMark("italic").run();
    },
  },
  {
    component: <div style="width:200px;">"italic"</div>,
    group: "block",
    value: "italic4",
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setMark("italic").run();
    },
  },
  {
    component: {
      setup: () => {
        const { t } = useLocale();
        return () => <div style="width:200px;">{t("$papyrus.table")}</div>;
      },
    },
    group: "basic",
    value: "table",
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    },
  },
];
