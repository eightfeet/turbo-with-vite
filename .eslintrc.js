module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-byhealth`
  extends: ["byhealth"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
