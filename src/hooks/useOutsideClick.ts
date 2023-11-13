import { SetStateAction, useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  callback: (value?: SetStateAction<boolean>) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (target instanceof HTMLElement && !ref.current?.contains(target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [callback]);

  return ref;
};
