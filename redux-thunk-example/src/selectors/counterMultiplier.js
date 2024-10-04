import { selector } from "recoil";
import { counterStateAtom } from "../atom/counterAtom";

export const counterMultiplier = selector({
  key: "MAIN/CounterMultiplier",
  get: ({ get }) => {
    const result = get(counterStateAtom);
    return result * 5;
  },
});
