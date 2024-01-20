import { type StarterKitOptions, StarterKit } from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
export interface PapyrusStarterKitOptions extends StarterKitOptions {}

export const PapyrusStarterKit = StarterKit.extend<StarterKitOptions>({
  name: "papyrusStarterKit",
  addOptions() {
    return {
      ...this.parent?.(),
    };
  },
  addExtensions() {
    const extensions = this.parent?.() || [];
    extensions.push(LinkExtension);
    return extensions;
  },
});
