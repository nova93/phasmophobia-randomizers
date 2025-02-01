import type { SetStateAction } from "react";

export default async (
  setValue: (value: SetStateAction<number>) => void,
): Promise<void> => {
  for (let index = 1; index <= 10; index++) {
    setValue(index * 10);
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};
