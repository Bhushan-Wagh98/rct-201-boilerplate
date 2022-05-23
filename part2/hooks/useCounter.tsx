import { useState } from "react";

export const useCounter = (init: number) => {
  const [value, setValue] = useState(init);
  const inc = (n?: number) => {
    if (n) {
      setValue(value + n);
    } else {
      setValue(value + 1);
    }
  };
  const dec = (n?: number) => {
    if (n) {
      setValue(value - n);
    } else {
      setValue(value - 1);
    }
  };
  const set = (n: number) => {
    setValue(n);
  };

  return { value, inc, dec, set };
};
