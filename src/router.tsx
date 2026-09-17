import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
// routeTree.gen is auto-generated on first `npm run dev` — safe to ignore until then
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error generated file
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent });
}
