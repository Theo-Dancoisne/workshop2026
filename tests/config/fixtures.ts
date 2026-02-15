import { test as testBase, expect, Page } from "@playwright/test";
import { addCoverageReport } from "monocart-reporter"
// import MCR from "monocart-coverage-reports";
// import coverageOptions from "./mcr.config";

const test = testBase.extend<{
  autoTestFixture: string
}>({
  autoTestFixture: [async ({ context, page }, use) => {
    const isChromium = test.info().project.name === "chromium";

    const handlePageEvent = async (page: Page) => {
      await Promise.all([
        page.coverage.startJSCoverage({
          resetOnNavigation: false,
        }),
        page.coverage.startCSSCoverage({
          resetOnNavigation: false,
        }),
      ]);
    };

    if (isChromium) {
      context.on("page", handlePageEvent);
    }

    await use("autoTestFixture");

    if (isChromium) {
      context.off("page", handlePageEvent);
      const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage()
      ]);
      const coverageList = [... jsCoverage, ... cssCoverage];
      await addCoverageReport(coverageList, test.info());
      // const mcr = MCR(coverageOptions);
      // await mcr.add(coverageList.flat());
    }
  }, {
    scope: "test",
    auto: true
  }]
});

export { test, expect };
