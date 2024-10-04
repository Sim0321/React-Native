import { atom } from "recoil";

export const counterStateAtom = atom({
  key: "MAIN/COUNTER",
  default: 0,
});
