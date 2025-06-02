import { SetupWorker, setupWorker } from "msw/browser";
import { beforeAll, afterEach, afterAll } from "vitest";
import { HttpHandler } from "msw";

let workerInstance: SetupWorker | undefined;

export function setupMSW(handlers: HttpHandler[]): SetupWorker | undefined {
  if (!workerInstance) {
    workerInstance = setupWorker(...handlers);

    beforeAll(async () => {
      await workerInstance!.start();
    });

    afterEach(() => workerInstance!.resetHandlers());
    afterAll(() => workerInstance!.stop());
  }
  return workerInstance;
}
