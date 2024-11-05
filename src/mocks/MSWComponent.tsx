"use client";

import { PropsWithChildren, useEffect } from "react";

export const MSWComponent = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      (async () => {
        const { server } = await import("@/mocks/server");
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import("@/mocks/browser");
        worker.start();
      })();
    }
  });

  return <>{children}</>;
};
