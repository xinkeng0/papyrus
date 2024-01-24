import { Extension } from "@tiptap/core";
import { Blockquote, BlockquoteOptions } from "@tiptap/extension-blockquote";
import { Bold, BoldOptions } from "@tiptap/extension-bold";
import { BulletList, BulletListOptions } from "@tiptap/extension-bullet-list";
import { Code, CodeOptions } from "@tiptap/extension-code";
import { CodeBlock, CodeBlockOptions } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import { Dropcursor, DropcursorOptions } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak, HardBreakOptions } from "@tiptap/extension-hard-break";
import { Heading, HeadingOptions } from "@tiptap/extension-heading";
import { History, HistoryOptions } from "@tiptap/extension-history";
import {
  HorizontalRule,
  HorizontalRuleOptions,
} from "@tiptap/extension-horizontal-rule";
import { Italic, ItalicOptions } from "@tiptap/extension-italic";
import { ListItem, ListItemOptions } from "@tiptap/extension-list-item";
import {
  OrderedList,
  OrderedListOptions,
} from "@tiptap/extension-ordered-list";
import { Paragraph, ParagraphOptions } from "@tiptap/extension-paragraph";
import { Strike, StrikeOptions } from "@tiptap/extension-strike";
import { Text } from "@tiptap/extension-text";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";

import LinkExtension from "@tiptap/extension-link";
import TextAlignExtension from "../extension-text-align/";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

export interface PapyrusStarterKitOptions {
  blockquote: Partial<BlockquoteOptions> | false;
  bold: Partial<BoldOptions> | false;
  bulletList: Partial<BulletListOptions> | false;
  code: Partial<CodeOptions> | false;
  codeBlock: Partial<CodeBlockOptions> | false;
  document: false;
  dropcursor: Partial<DropcursorOptions> | false;
  gapcursor: false;
  hardBreak: Partial<HardBreakOptions> | false;
  heading: Partial<HeadingOptions> | false;
  history: Partial<HistoryOptions> | false;
  horizontalRule: Partial<HorizontalRuleOptions> | false;
  italic: Partial<ItalicOptions> | false;
  listItem: Partial<ListItemOptions> | false;
  orderedList: Partial<OrderedListOptions> | false;
  paragraph: Partial<ParagraphOptions> | false;
  strike: Partial<StrikeOptions> | false;
  text: false;
}

export const PapyrusStarterKit = Extension.create<PapyrusStarterKitOptions>({
  name: "papyrusStarterKit",
  addOptions() {
    return {
      ...this.parent?.(),
    };
  },
  addExtensions() {
    const extensions = [];

    if (this.options.blockquote !== false) {
      extensions.push(
        Blockquote.extend({ draggable: true }).configure(
          this.options?.blockquote,
        ),
      );
    }

    if (this.options.bold !== false) {
      extensions.push(Bold.configure(this.options?.bold));
    }

    if (this.options.bulletList !== false) {
      extensions.push(BulletList.configure(this.options?.bulletList));
    }

    if (this.options.code !== false) {
      extensions.push(Code.configure(this.options?.code));
    }

    if (this.options.codeBlock !== false) {
      extensions.push(
        CodeBlock.extend({ draggable: true }).configure(
          this.options?.codeBlock,
        ),
      );
    }

    if (this.options.document !== false) {
      extensions.push(Document.configure(this.options?.document));
    }

    if (this.options.dropcursor !== false) {
      extensions.push(Dropcursor.configure(this.options?.dropcursor));
    }

    if (this.options.gapcursor !== false) {
      extensions.push(Gapcursor.configure(this.options?.gapcursor));
    }

    if (this.options.hardBreak !== false) {
      extensions.push(HardBreak.configure(this.options?.hardBreak));
    }

    if (this.options.heading !== false) {
      extensions.push(
        Heading.extend({ draggable: true }).configure(this.options?.heading),
      );
    }

    if (this.options.history !== false) {
      extensions.push(History.configure(this.options?.history));
    }

    if (this.options.horizontalRule !== false) {
      extensions.push(HorizontalRule.configure(this.options?.horizontalRule));
    }

    if (this.options.italic !== false) {
      extensions.push(Italic.configure(this.options?.italic));
    }

    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options?.listItem));
    }

    if (this.options.orderedList !== false) {
      extensions.push(OrderedList.configure(this.options?.orderedList));
    }

    if (this.options.paragraph !== false) {
      extensions.push(
        Paragraph.extend({ draggable: true }).configure(
          this.options?.paragraph,
        ),
      );
    }

    if (this.options.strike !== false) {
      extensions.push(Strike.configure(this.options?.strike));
    }

    if (this.options.text !== false) {
      extensions.push(Text.configure(this.options?.text));
    }

    extensions.push(
      Placeholder.configure({}),
      TaskList.configure({}),
      TaskItem.configure({}),
      LinkExtension,
      TextAlignExtension.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Underline.configure({}),
      TextStyle,
      Color.configure({}),
    );
    return extensions;
  },
});
