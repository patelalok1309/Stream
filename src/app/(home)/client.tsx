"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Antonio",
  });

  return <div>Page client says : {data.greeting}</div>;
};
