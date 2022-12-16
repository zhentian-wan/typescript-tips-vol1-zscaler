const COLORS = {
  RED: "red",
  BLUE: "blue",
  GREEN: "green",
} as const;

type x = typeof COLORS;
type y = keyof typeof COLORS;
type TCOLORS = typeof COLORS[keyof typeof COLORS];

function useColor(color: TCOLORS) {
  console.log(color);
}

useColor(COLORS.BLUE); //works
useColor("blue"); //works

export const MIME_TYPES = {
  jpg: "image/jpg",
  png: "image/png",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
} as const;

export const ALLOWED_IMAGE_MMIME_TYPES = [
  MIME_TYPES.jpg,
  MIME_TYPES.png,
] as const;

export type AllowedImageMimeTypes =
  typeof ALLOWED_IMAGE_MMIME_TYPES[number];

export type ObjectValues<T> = T[keyof T];
