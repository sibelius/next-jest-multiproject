import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "./createMockRouter";
import { ComponentType } from "react";

type WithProviders = {
  Component: ComponentType<any>;
  route?: string;
  query?: Record<string, string>;
};
export const withProviders =
  ({ Component, route = "/", query = {} }: WithProviders) =>
  (props: any) => {
    return (
      <RouterContext.Provider value={createMockRouter(route, query)}>
        <Component {...props} />
      </RouterContext.Provider>
    );
  };
