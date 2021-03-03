import React from "react";
import { Provider as AProvider } from "./PageA";
import { Provider as BProvider } from "./PageB";
export { useAStore } from "./PageA";
export { useBStore } from "./PageB";

const providers = [BProvider, AProvider];
console.log(BProvider);

export const Provider = (props) =>
  providers.reduceRight(
    (children, Parent) => <Parent>{children}</Parent>,
    props.children
  );
