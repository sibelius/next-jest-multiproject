import { createRouter } from "next/router";

export const createMockRouter = (route = "/", query = {}) => {
  // @ts-ignore
  window.__NEXT_DATA__ = {};
  // @ts-ignore
  const router = createRouter(route, query, "", {
    // @ts-ignore
    initialProps: {},
    // @ts-ignore
    pageLoader: jest.fn(),
    // @ts-ignore
    App: jest.fn(),
    // @ts-ignore
    Component: jest.fn(),
  });

  // @ts-ignore
  router.push = jest.fn((href) => {
    // @ts-ignore
    window.location.href = href;
    return Promise.resolve();
  });
  // @ts-ignore
  router.replace = jest.fn(() => Promise.resolve());
  router.prefetch = () => Promise.resolve();

  return router;
};
