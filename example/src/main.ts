import { createApp } from "vue";
import { createPapyrus } from "@xinkeng0/papyrus";
import { zhHans, en } from "@xinkeng0/papyrus/locale";
import App from "./App.vue";

const papyrus = createPapyrus({
  locale: {
    locale: "en",
    fallback: "en",
    messages: { zhHans, en },
  },
});
const app = createApp(App);
app.use(papyrus).mount("#app");
