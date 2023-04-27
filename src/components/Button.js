import React, { useMemo } from "react";
import { collapse } from "@growthops/ext-ts";

const baseClasses =
  "rounded-[6px] text-[14px] font-meduim font-noto text-center leading-5 flex justify-center items-center";

const variantClasses = {
  outline:
    "border-[2px] border-primary-blue text-primary-blue py-2 px-5 hover:bg-primary-crayola hover:bg-opacity-10 focus:bg-primary-crayola focus:bg-opacity-10",
  text: "text-primary-blue py-2 px-5 hover:bg-primary-crayola hover:bg-opacity-10 focus:bg-primary-crayola focus:bg-opacity-10",
};

const useClasses = (variant) =>
  useMemo(
    () => ({
      root: collapse([baseClasses, variantClasses[variant]]),
    }),
    [variant]
  );

const Button = ({ children, variant, type = "button" }) => {
  const classes = useClasses(variant);
  return (
    <button className={classes.root} type={type}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
