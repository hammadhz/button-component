import React, { useMemo } from "react";
import { collapse } from "@growthops/ext-ts";

const baseClasses =
  "rounded-[6px] text-[14px] font-meduim font-noto text-center leading-5 flex justify-center items-center";

const variantClasses = {
  outline:
    "border-[2px] border-primary-blue text-primary-blue py-2 px-5 hover:bg-primary-crayola hover:bg-opacity-10 focus:bg-primary-crayola focus:bg-opacity-10",
  text: "text-primary-blue py-2 px-5 hover:bg-primary-crayola hover:bg-opacity-10 focus:bg-primary-crayola focus:bg-opacity-10",
  default:
    "bg-primary-chineseWhite text-secondary-olive py-2 px-4 hover:bg-secondary-silver focus:bg-secondary-silver",
};

const sizeClasses = {
  lg: "py-[11px] px-[22px]",
  md: "py-2 px-4",
  sm: "py-[6px] px-[12px]",
};

const colorClasses = {
  default:
    "py-2 px-4 bg-primary-chineseWhite shadow-default hover:bg-secondary-silver focus:bg-secondary-silver",
  primary:
    "py-2 px-4 bg-primary-crayola text-white shadow-primary hover:bg-secondary-crayolaZero focus:bg-secondary-crayolaZero",
  secondary:
    "py-2 px-4 bg-secondary-sparkle text-white shadow-secondary hover:bg-secondary-yankeesBlue focus:bg-secondary-yankeesBlue",
  danger:
    "py-2 px-4 bg-secondary-persianRed text-white shadow-danger hover:bg-secondary-crimsonRed focus:bg-secondary-crimsonRed",
};

const useClasses = (variant, size, color) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant ?? "default"],
        sizeClasses[size],
        colorClasses[color],
      ]),
    }),
    [variant, size, color]
  );

const Button = ({ children, variant, type = "button", size, color }) => {
  const classes = useClasses(variant, size, color);
  return (
    <button className={classes.root} type={type}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
