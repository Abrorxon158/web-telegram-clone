declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.json' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module 'file-saver';
declare module 'xlsx';
declare module '*.webp';
declare module '*.jpeg';

