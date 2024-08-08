import { ReactNode } from "react";
import { Button, ButtonProps } from "./ui/button";
import { ExternalLink } from "react-feather";

export const ExternalLinkButton = (
  props: {
    children: ReactNode;
    href: string;
    icon?: boolean;
  } & ButtonProps
) => {
  const { icon, children, href, variant = "link", ...buttonProps } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button {...buttonProps} variant={variant}>
        {children}
        {!!icon && <ExternalLink className="w-4 h-4 ml-1" />}
      </Button>
    </a>
  );
};
