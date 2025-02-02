import { useEffect, useState } from "react";

export default <T>(name: string) => {
  const [value, setValue] = useState<T>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (globalThis.localStorage) {
      const stored = window.localStorage.getItem(name);
      if (stored) {
        setValue(JSON.parse(stored));
      }
    }
  }, []);

  useEffect(() => {
    if (window.localStorage && value) {
      window.localStorage.setItem(name, JSON.stringify(value));
    }
  }, [value, name]);

  return { value, setValue };
};
