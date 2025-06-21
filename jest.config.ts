import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage/"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/**/global.ts",
    "!<rootDir>/src/**/http-status-helper.ts",
    "!<rootDir>/src/**/_*.tsx",
    "!<rootDir>/src/**/types/*.ts",
    "!**/*.d.ts",
  ],
};

module.exports = config;
