import { lazy } from "react";

const PageA = lazy(() =>
  import(/* webpackChunkName:"page-a" */ "./views/PageA.jsx")
);
const PageB = lazy(() =>
  import(/* webpackChunkName:"page-b" */ "./views/PageB.jsx")
);

export const routerMap = [
  {
    path: "/page-a",
    component: PageA,
  },
  {
    path: "/page-B",
    component: PageB,
  },
];
