import { Fragment, Component, markRaw } from "vue";
import { type Editor } from "@tiptap/core";
import BoldIcon from "~icons/mdi/format-bold";
import ItalicIcon from "~icons/mdi/format-italic";
import StrikeIcon from "~icons/mdi/format-strikethrough-variant";
import UnderlineIcon from "~icons/mdi/format-underline";
import ColorTextIcon from "~icons/mdi/format-color-text";
import ColorHighlightIcon from "~icons/mdi/format-color-highlight";
import CodeIcon from "~icons/mdi/code-tags";
import ListBulletedIcon from "~icons/mdi/format-list-bulleted";
import ListNumberedIcon from "~icons/mdi/format-list-numbered";
import ListCheckIcon from "~icons/mdi/format-list-checks";
import LinkIcon from "~icons/mdi/link";
import BlockQuoteIcon from "~icons/mdi/format-quote-open";
import AlignLeftIcon from "~icons/mdi/format-align-left";
import AlignCenterIcon from "~icons/mdi/format-align-center";
import AlignRightIcon from "~icons/mdi/format-align-right";
import AlignJustifyIcon from "~icons/mdi/format-align-justify";
import HorizontalRuleIcon from "~icons/material-symbols/horizontal-rule";
export interface Toolbar {
  name: string;
  title?: string;
  compoent: Component;
  checked: () => boolean;
  onClick: () => void;
}
export const createToolbars = (editor: Editor): Toolbar[] => {
  return [
    {
      name: "Bold",
      compoent: BoldIcon,
      title: "Bold",
      checked: () => {
        return editor.isActive("bold");
      },
      onClick: () => {
        editor.chain().focus().toggleBold().run();
      },
    },
    {
      name: "Italic",
      title: "Italic",
      compoent: ItalicIcon,
      checked: () => {
        return editor.isActive("italic");
      },
      onClick: () => {
        editor.chain().focus().toggleItalic().run();
      },
    },
    {
      name: "Strike",
      title: "Strike",
      compoent: StrikeIcon,
      checked: () => {
        return editor.isActive("strike");
      },
      onClick: () => {
        editor.chain().focus().toggleStrike().run();
      },
    },
    {
      name: "Underline",
      title: "Underline",
      compoent: UnderlineIcon,
      checked: () => {
        return editor.isActive("underline");
      },
      onClick: () => {
        editor.chain().focus().toggleUnderline().run();
      },
    },
    {
      name: "Code",
      compoent: CodeIcon,
      checked: () => {
        return editor.isActive("code");
      },
      onClick: () => {
        editor.chain().focus().toggleCode().run();
      },
    },
    {
      name: "Color",
      compoent: (props) => {
        return (
          <Fragment>
            <input
              class="w-6 h-6"
              type="color"
              onInput={(event) =>
                editor.chain().focus().setColor(event.target?.value).run()
              }
              value={editor.getAttributes("textStyle").color}
            />
            <ColorTextIcon
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .setColor(editor.getAttributes("textStyle").color)
                  .run()
              }
            />
          </Fragment>
        );
      },

      checked: () => {
        return editor.isActive({ textStyle: "color" });
      },
      onClick: () => {
        // do no
      },
    },
    {
      name: "Highlight",
      compoent: ColorHighlightIcon,
      checked: () => {
        return editor.isActive("highlight");
      },
      onClick: () => {
        editor.chain().focus().toggleHighlight().run();
      },
    },
    {
      name: "AlignLeft",
      compoent: AlignLeftIcon,
      checked: () => {
        return editor.isActive({ textAlign: "left" });
      },
      onClick: () => {
        editor.chain().focus().setTextAlign("left").run();
      },
    },
    {
      name: "AlignCenter",
      compoent: AlignCenterIcon,
      checked: () => {
        return editor.isActive({ textAlign: "center" });
      },
      onClick: () => {
        editor.chain().focus().setTextAlign("center").run();
      },
    },
    {
      name: "AlignRight",
      compoent: AlignRightIcon,
      checked: () => {
        return editor.isActive({ textAlign: "right" });
      },
      onClick: () => {
        editor.chain().focus().setTextAlign("right").run();
      },
    },
    {
      name: "AlignJustifyIcon",
      compoent: AlignJustifyIcon,
      checked: () => {
        return editor.isActive({ textAlign: "justify" });
      },
      onClick: () => {
        editor.chain().focus().setTextAlign("justify").run();
      },
    },
    {
      name: "ListBulletList",
      compoent: ListBulletedIcon,
      checked: () => {
        return editor.isActive("bulletList");
      },
      onClick: () => {
        editor.chain().focus().toggleBulletList().run();
      },
    },
    {
      name: "OrderList",
      compoent: ListNumberedIcon,
      checked: () => {
        return editor.isActive("orderedList");
      },
      onClick: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
    },
    {
      name: "TaskList",
      compoent: ListCheckIcon,
      checked: () => {
        return editor.isActive("taskList");
      },
      onClick: () => {
        editor.chain().focus().toggleTaskList().run();
      },
    },
    {
      name: "Link",
      compoent: LinkIcon,
      checked: () => {
        return editor.isActive("link");
      },
      onClick: () => {
        editor.commands.toggleLink({
          href: "https://example.com",
          target: "_blank",
        });
      },
    },
    {
      name: "BlockQuote",
      compoent: BlockQuoteIcon,
      checked: () => {
        return editor.isActive("blockquote");
      },
      onClick: () => {
        editor.chain().focus().toggleBlockquote().run();
      },
    },
    {
      name: "HorizontalRule",
      compoent: HorizontalRuleIcon,
      checked: () => {
        return false;
      },
      onClick: () => {
        editor.chain().focus().setHorizontalRule().run();
      },
    },
  ];
};
