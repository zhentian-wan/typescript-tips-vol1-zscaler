// enum COLORS {
//   RED, // 0
//   BLUE, // 1
//   GREEN, // 2
// }

// enum COLORS {
//   RED = 10, // 10
//   BLUE, // 11
//   GREEN, // 12
// }

// enum COLORS {
//   RED = "RED",
//   BLUE = "BLUE",
//   GREEN = "GREEN",
// }

// // Doesn't work
// enum COLORS {
//   RED,
//   BLUE = "BLUE",
//   GREEN,
// }

// Works
enum COLORA {
  RED, // 0
  GREEN, // 1
  BLUE = "BLUE",
}

function useColora(color: COLORA) {
  console.log(color);
}

useColora(COLORA.BLUE); // works
// @ts-expect-error
useColora("BLUE"); // doesn't work

/*
export const SharedHealth = {
  CONNECTED: 'connected',
  ERROR: 'error',
  DISCONNECT: 'disconnect',
} as const

export type SharedHealthStatus = ObjectValues<typeof SharedHealth>

export const controlsHealthAtom = atom<SharedHealthStatus>({
  key: 'controlsHealthAtom',
  default: SharedHealth.DISCONNECT,
})*/
