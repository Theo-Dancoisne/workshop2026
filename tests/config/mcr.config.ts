// import { CoverageReportOptions } from "monocart-coverage-reports";
import { CoverageReportOptions } from "monocart-reporter";

const coverageOptions: CoverageReportOptions = {
  name: "Playwright Coverage Report [JS, CSS]",
  reports: [
    "console-details",
    "v8",
    "lcovonly"
  ],

  // entryFilter: {
  //   "**/node_modules/**": false,
  //   "**/*.js": true,
  //   "**/old/**": false
  // },
  // sourceFilter: {
  //   "**/node_modules/**": false,
  //   "**/*.{ts,tsx,js,jsx}": true,
  //   // "**/*.js": true,
  //   "**/old/**": false
  // },

  // sourcePath: {
  //   '.next/static/chunks': 'src',
  // },

  entryFilter: (entry) => {
    return entry.url.includes('next/static/chunks') || entry.url.includes('next/server/app');
  },

  sourceFilter: (sourcePath) => {
    return sourcePath.includes('src/app');
  },

  sourcePath: (fileSource) => {
    const list = ['_N_E/', 'workshop2026/'];
    for (const pre of list) {
      if (fileSource.startsWith(pre)) {
        return fileSource.slice(pre.length);
      }
    }
    return fileSource;
  },

  outputDir: "./coverage"
};

export default coverageOptions;
