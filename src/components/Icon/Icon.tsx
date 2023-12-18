import { SVGProps } from "react";
import { Icons } from "./Icons";

const icons = Icons;

interface IIconComponentProps {
  iconName: keyof typeof icons;
  props?: SVGProps<SVGSVGElement>;
}

export const Icon = ({ iconName, props }: IIconComponentProps) => {
  const ChosenIcon = icons[iconName];

  return <ChosenIcon {...props} />;
};
