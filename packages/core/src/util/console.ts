// Utilities
import { warn } from "vue";

export function consoleWarn(message: string): void {
  warn(`Papyrus: ${message}`);
}

export function consoleError(message: string): void {
  warn(`Papyrus error: ${message}`);
}
