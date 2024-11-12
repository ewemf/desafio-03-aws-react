module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.tsx?$": [
        "ts-jest",
        {
          tsconfig: "./tsconfig.app.json",
        },
      ],
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "\\.(svg|jpg|jpeg|png|gif)$": "<rootDir>/__mocks__/fileMock.js",
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };