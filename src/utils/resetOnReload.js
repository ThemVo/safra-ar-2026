export function resetOnReload(environment, browser = window) {
  if (!["uat", "prod"].includes(environment)) return;

  // Clear the saved section before the artboard reads its initial route.
  browser.history.replaceState(
    browser.history.state,
    "",
    browser.location.pathname + browser.location.search,
  );
  browser.history.scrollRestoration = "manual";
  browser.scrollTo(0, 0);
}
