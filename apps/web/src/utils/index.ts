export function getRootPath() {
  console.log("[ getRootPath currentRootPath] >");
  if (__DEV__) {
    console.log("开发环境特有逻辑", __APP_BUILD_TIME__);
  }

  return "currentRootPath"; // Placeholder for the actual root path
}
