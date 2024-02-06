/**
 * Utilitarian functions
 */

export function rgbToHex(rgb: number[]) {
  return "#" + rgb.map((x) => x.toString(16).padStart(2, "0")).join("");
}
