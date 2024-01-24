import TextAlign from "@tiptap/extension-text-align";

export const PapyrusTextAlign = TextAlign.extend({
  name: "PapyrusTextAlign",

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (element) =>
              element.style.textAlign || this.options.defaultAlignment,
            renderHTML: (attributes) => {
              if (attributes.textAlign === this.options.defaultAlignment) {
                return {};
              }
              if (attributes.textAlign === "justify") {
                // justify hack
                return {
                  style: `text-align: justify; text-align-last: justify`,
                };
              }
              return { style: `text-align: ${attributes.textAlign}` };
            },
          },
        },
      },
    ];
  },
});
