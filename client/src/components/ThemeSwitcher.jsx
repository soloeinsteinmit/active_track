import React from "react";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { PiSunDimFill, PiMoonFill } from "react-icons/pi";
import { useTheme } from "next-themes";

const ThemeSwitch = (props) => {
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    ...props,
    onChange: () => setTheme(isSelected ? "light" : "dark"),
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          color="primary"
          className={slots.wrapper({
            class: [
              "w-10 h-10",
              "flex items-center justify-center",
              "rounded-lg bg-primary-50 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? (
            <PiSunDimFill className="text-large" />
          ) : (
            <PiMoonFill className="text-large text-primary" />
          )}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
