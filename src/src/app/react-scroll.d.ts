declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    activeClass?: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}

  export const animateScroll: {
    scrollToTop(options?: any): void;
    scrollToBottom(options?: any): void;
    scrollTo(position: number, options?: any): void;
  };
}
