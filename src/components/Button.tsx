import classnames from "classnames";
import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: ButtonColor;
  transparent?: boolean;
  noPad?: boolean;
}

export enum ButtonColor {
  default = "default",
  green = "green",
  red = "red",
}

const COLORS = {
  [ButtonColor.default]: {
    color: `text-slate-900`,
    colorDark: `dark:text-slate-200`,
    border:
      "border border-slate-300 hover:border-slate-400 active:border-slate-500",
    borderDark:
      "dark:border-slate-600 dark:hover:border-slate-700 dark:active:border-slate-800",
    background: "bg-slate-300 hover:bg-slate-400 active:bg-slate-500",
    backgroundDark:
      "dark:bg-slate-600 dark:hover:bg-slate-700 dark:active:bg-slate-800",
  },
  [ButtonColor.green]: {
    color: `text-green-900`,
    colorDark: `dark:text-green-200`,
    border:
      "border border-green-300 hover:border-green-400 active:border-green-500",
    borderDark:
      "dark:border-green-600 dark:hover:border-green-700 dark:active:border-green-800",
    background: "bg-green-300 hover:bg-green-400 active:bg-green-500",
    backgroundDark:
      "dark:bg-green-600 dark:hover:bg-green-700 dark:active:bg-green-800",
  },
  [ButtonColor.red]: {
    color: `text-red-900`,
    colorDark: `dark:text-red-200`,
    border: "border border-red-300 hover:border-gred-400 active:border-red-500",
    borderDark:
      "dark:border-red-600 dark:hover:border-red-700 dark:active:border-red-800",
    background: "bg-red-300 hover:bg-red-400 active:bg-red-500",
    backgroundDark:
      "dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800",
  },
};

const Button = (props: ButtonProps) => {
  const {
    noPad,
    color: _color,
    transparent,
    className,
    children,
    ...buttonProps
  } = props;

  const { color, colorDark, border, borderDark, background, backgroundDark } =
    COLORS[_color];

  return (
    <button
      {...buttonProps}
      className={classnames(
        "flex items-center justify-center cursor-pointer rounded-lg transition-all",
        "hover:scale-105 active:scale-95",
        color,
        colorDark,
        border,
        borderDark,
        {
          "py-1 px-4": !noPad,
          [background]: !transparent,
          [backgroundDark]: !transparent,
          "bg-transparent": transparent,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  color: ButtonColor.default,
  transparent: false,
  noPad: false,
};

export default Button;
