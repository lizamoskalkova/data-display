import { InputHTMLAttributes, ReactNode } from "react";
import style from "./Input.module.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
};

export type RefElement = HTMLInputElement | null;

export const Input = (props: InputProps) => {
  const { type = "text", value, children, ...restInputProps } = props;

  return (
    <div>
      <input
        type={type}
        value={value}
        className={style.input}
        {...restInputProps}
      />

      {children}
    </div>
  );
};
