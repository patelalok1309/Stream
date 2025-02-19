import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Homepage = async () => {
  void trpc.hello.prefetch({ text: "Antonio" });

  return (
    <HydrateClient>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback={<p>Error</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};

export default Homepage;
